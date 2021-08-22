import fnv1a from '@sindresorhus/fnv1a';

export default function stringHash(string) {
	return Number(fnv1a(string));
}
