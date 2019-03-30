import {expectType} from 'tsd';
import stringHash = require('.');

expectType<number>(stringHash('🦄🌈'));
