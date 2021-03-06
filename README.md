# italian-words-to-numbers

Javascript library to translate Italian written numbers to its numeric value.

Works with correctly spelled integers from a value of -999.999.999 up to 999.999.999
 ((meno) novecentonovantanove milioni e novecentonovantanovemilanovecentonovantanove).

## Installation

Install using

```bash
npm install --save italian-words-to-numbers
```

## Usage

```javascript
const iWtoN = require('italian-words-to-numbers');
// or
import * as iWtoN from 'italian-words-to-numbers';
```

```javascript
const number = iWtoN.convert('settecentosettantotto'); // => 778
```

## Credits

Inspired by [howlowck/words-to-num](https://github.com/howlowck/words-to-num) library for English numbers.
