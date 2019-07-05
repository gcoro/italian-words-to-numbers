const UNIT = {
	zero: 0,
	uno: 1,
	un: 1,
	due: 2,
	tre: 3,
	tré: 3,
	quattro: 4,
	cinque: 5,
	sei: 6,
	sette: 7,
	otto: 8,
	nove: 9,
	dieci: 10,
	undici: 11,
	dodici: 12,
	tredici: 13,
	quattordici: 14,
	quindici: 15,
	sedici: 16,
	diciassette: 17,
	diciotto: 18,
	diciannove: 19
};

const TEN = {
	venti: 20,
	trenta: 30,
	quaranta: 40,
	cinquanta: 50,
	sessanta: 60,
	settanta: 70,
	ottanta: 80,
	novanta: 90,
	ventuno: 21,
	ventotto: 28,
	trentuno: 31,
	trentotto: 38,
	quarantuno: 41,
	quarantotto: 48,
	cinquantuno: 51,
	cinquantotto: 58,
	sessantuno: 61,
	sessantotto: 68,
	settantuno: 71,
	settantotto: 78,
	ottantuno: 81,
	ottantotto: 88,
	novantuno: 91,
	novantotto: 98
};

const MAGNITUDE = {
	mille: 1000,
	cento: 100
};

const UNIT_KEYS = Object.keys(UNIT);
const TEN_KEYS = Object.keys(TEN);
const MAGNITUDE_KEYS = Object.keys(MAGNITUDE);

const JOINERS = ['e'];
const DECIMALS = ['virgola'];

const TOKEN_TYPE = {
	UNIT: 0,
	TEN: 1,
	MAGNITUDE: 3,
	DECIMAL: 4,
	HUNDRED: 5,
};

module.exports = { UNIT, UNIT_KEYS, TEN, TEN_KEYS, MAGNITUDE, MAGNITUDE_KEYS, JOINERS, DECIMALS, TOKEN_TYPE };
