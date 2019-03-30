'use strict';
const fnv1a = require('@sindresorhus/fnv1a');

const stringHash = string => fnv1a(string);

module.exports = stringHash;
// TODO: remove this in the next major version
module.exports.default = stringHash;
