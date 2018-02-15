import test from 'ava';
import isKde from '.';

test('is-kde', async t => {
	t.is(await isKde(), false);
});
