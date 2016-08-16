import test from 'ava';
import isKde from './';

test('is-kde', t => {
	return isKde().then(data => {
		t.false(data);
	});
});
