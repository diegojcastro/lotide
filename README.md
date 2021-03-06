# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @diegojcastro/lotide`

**Require it:**

`const _ = require('@diegojcastro/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the element at index 0 of array.
* `tail(array)`: returns a copy of array with every element except that at index 0. Does not modify original array.
* `middle(array)`: returns the middle value on array (if odd length) or the middle two values (if even length).
* `assertEqual(a, b)`: logs a message to console verifying if a and b are equal or not.
* `eqArrays(a, b)`: returns true if arrays a and b are equal (including subarrays), false if not.
* `assertArraysEqual(a, b)`: calls eqArrays, then logs to console verifying if a and b are equal or not.
* `flatten(array)`: returns an un-nested array from a multi-level nested array.
* `countOnly(source, items)`: returns an object containing keys and counts for each element in items found in source array
* `letterPositions(source, char)`: returns an array containing the indexes where char is found in source array.
* `findKeyByValue(source, val)`: returns a string containing the name of the key in source object where val was found.
* `eqObjects(a, b)`: returns true if objects a and b have identical key,value pairs.