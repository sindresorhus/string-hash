'use strict';
const fnv1a = require('@sindresorhus/fnv1a');

const stringHash = string => fnv1a(string);

module.exports = stringHash;
module.exports.default = stringHash;
