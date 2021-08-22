# string-hash

> Get the hash of a string

Uses the non-cryptographic hash function [FNV-1a](https://github.com/sindresorhus/fnv1a).

Similar to Java's [`String#hashCode()`](https://en.m.wikipedia.org/wiki/Java_hashCode()).

## Install

```
$ npm install @sindresorhus/string-hash
```

## Usage

```js
import stringHash from '@sindresorhus/string-hash';

stringHash('🦄🌈');
//=> 2868248295

stringHash('👌😎');
//=> 2903279002
```

It returns the hash as a positive integer.
