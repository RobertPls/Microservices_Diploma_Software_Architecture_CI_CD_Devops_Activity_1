import js from '@eslint/js';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
	js.configs.recommended,
	sonarjs.configs.recommended,
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				process: 'readonly',
				console: 'readonly',
			},
		},
		rules: {
			indent: ['error', 'tab'],
			'no-tabs': 'off',
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
		},
	},
	{
		files: ['tests/**/*.js'],
		languageOptions: {
			globals: {
				test: 'readonly',
				describe: 'readonly',
				it: 'readonly',
			},
		},
	},
];
