import {expectType} from 'tsd';
import stringHash from './index.js';

expectType<number>(stringHash('🦄🌈'));
