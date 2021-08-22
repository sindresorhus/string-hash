/**
Get the hash of a string.

@returns The hash as a positive integer.

@example
```
import stringHash from '@sindresorhus/string-hash';

stringHash('🦄🌈');
//=> 2868248295

stringHash('👌😎');
//=> 2903279002
```
*/
export default function stringHash(string: string): number;
