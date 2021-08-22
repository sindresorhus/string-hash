/* eslint-disable unicorn/numeric-separators-style */
import test from 'ava';
import stringHash from './index.js';

test('main', t => {
	t.is(stringHash(''), 2166136261);
	t.is(stringHash('🦄🌈'), 2868248295);
	t.is(stringHash('👌😎'), 2903279002);

	t.is(stringHash('h'), 3977000791);
	t.is(stringHash('he'), 1547363254);
	t.is(stringHash('hel'), 179613742);
	t.is(stringHash('hell'), 477198310);
	t.is(stringHash('hello'), 1335831723);
	t.is(stringHash('hello '), 3801292497);
	t.is(stringHash('hello w'), 1402552146);
	t.is(stringHash('hello wo'), 3611200775);
	t.is(stringHash('hello wor'), 1282977583);
	t.is(stringHash('hello worl'), 2767971961);
	t.is(stringHash('hello world'), 3582672807);

	t.is(stringHash('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'), 2964896417);
});
