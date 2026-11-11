import { test } from 'node:test';
import assert from 'node:assert/strict';
import { healthHandler } from '../src/routes/health.js';

test('healthHandler responde status ok', () => {
	const res = {
		statusCode: 200,
		body: null,
		status(code) {
			this.statusCode = code;
			return this;
		},
		json(payload) {
			this.body = payload;
			return this;
		},
	};
	healthHandler({}, res);
	assert.equal(res.statusCode, 200);
	assert.deepEqual(res.body, { status: 'ok' });
});
