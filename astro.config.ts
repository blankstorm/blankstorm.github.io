import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'static',
	site: 'https://docs.blankstorm.net',
	markdown: {
		shikiConfig: {
			theme: 'monokai',
		},
	},
});
