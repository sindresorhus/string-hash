import {expectType} from 'tsd-check';
import stringHash from '.';

expectType<number>(stringHash('🦄🌈'));
