# median-average [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/median-average/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/median-average)

Get the median of an array of numbers.

[![NPM Badge](https://nodei.co/npm/median-average.png)](https://npmjs.com/package/median-average)

## Install

```sh
npm install median-average
```

## Usage

```js
const medianAverage = require("median-average");

medianAverage([1, 2, 6]);
//=> 2

medianAverage([1, 2, 6, 8]);
//=> 4
```

## API

### medianAverage(array)

#### array

Type: `array<number>`

The array to get the median of.
