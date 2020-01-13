const { UNIT, TEN, JOINER, NEGATIVE, TEN_KEYS, MAGNITUDE } = require('./constants');

const iWtoN = {
	convert: function (words) {
		if (!words) {
			throw new Error('Initial string must not be empty or undefined');
		}

		return words.indexOf(NEGATIVE) === 0
			? -this.compute(this.tokenize(words.substring(NEGATIVE.length, words.length)))
			: this.compute(this.tokenize(words));
	},
	tokenize: function (words) {
		const array = words.split(' ');
		const result = [];

		array.forEach(string => {
			if (!isNaN(+string)) {
				// casts to number if it's a number
				result.push(+string);
			} else if (string !== JOINER) {
				result.push(string);
			}
		});

		return result.length > 0 ? result : [array];
	},
	compute: function (tokens) {
		let obj = {
			sum: 0
		};

		let leftover = '';

		tokens.forEach(token => {
			obj.str = token;

			if (typeof token === 'number') {
				obj.sum += token;
			} else {
				// works up to 999.999.999
				obj = this.getMillion(obj.str, obj.sum);
				leftover += obj.str;
			}
		});

		if (leftover !== '') {
			throw new Error('Failed to completely convert string to number');
		}

		return obj.sum;
	},
	getMillion: function (str, sum) {
		// magnitude 10^6
		if (str.indexOf('milione') !== -1) {
			sum *= MAGNITUDE['milione'];
			str = str.replace('milione', '');
		} else if (str.indexOf('milioni') !== -1) {
			sum *= MAGNITUDE['milione'];
			str = str.replace('milioni', '');
		}

		if (str !== '') {
			return this.getThousands(str, sum);
		} else {
			return { str, sum };
		}
	},
	getThousands: function (str, sum) {
		// magnitude 10^3
		if (str.indexOf('mille') !== -1) {
			sum += MAGNITUDE['mille'];
			str = str.replace('mille', '');
		} else if (str.indexOf('mila') !== -1) {
			sum += this.getHundreds(str.substring(0, str.indexOf('mila')), 0).sum * MAGNITUDE['mille'];
			str = str.substring(str.indexOf('mila') + 4, str.length);
		}

		if (str !== '') {
			return this.getHundreds(str, sum);
		} else {
			return { str, sum };
		}
	},
	getHundreds: function (str, sum) {
		// magnitude 10^2
		if (str.indexOf('cento') !== -1) {
			sum += (str.indexOf('cento') === 0 ? 1 : this.getUnit(str.substring(0, str.indexOf('cento')), 0).sum) * MAGNITUDE['cento'];
			str = str.substring(str.indexOf('cento') + 5, str.length);
		}

		if (str !== '') {
			return this.getTens(str, sum);
		} else {
			return { str, sum };
		}
	},
	getTens: function (str, sum) {
		// magnitude 10^1
		let found = false;
		for (let i = 0; i < TEN_KEYS.length && !found; i++) {
			if (str.indexOf(TEN_KEYS[i]) !== -1) {
				sum += TEN[TEN_KEYS[i]];
				str = str.replace(TEN_KEYS[i], '');
				found = true;
			}
		}

		if (str !== '') {
			return this.getUnit(str, sum);
		} else {
			return { str, sum };
		}
	},
	getUnit: function (str, sum) {
		if (UNIT[str]) {
			sum += UNIT[str];
			str = str.replace(str, '');
		} else {
			sum += 0;
		}

		return { str, sum };
	}
}

module.exports = iWtoN;
