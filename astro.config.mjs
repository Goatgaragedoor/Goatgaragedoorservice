// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadFiveStarReviews } from './src/lib/googleReviews.mjs';

// Astro builds this site with Vite.
export default defineConfig({
	site: 'https://goatgaragedoorindy.com',
	trailingSlash: 'never',
	build: {
		format: 'file',
	},
	prefetch: {
		prefetchAll: false,
		defaultStrategy: 'hover',
	},
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/thank-you'),
		}),
	],
	vite: {
		plugins: [
			{
				name: 'google-reviews-dev',
				configureServer(server) {
					server.middlewares.use('/api/google-reviews', async (req, res, next) => {
						if (req.method !== 'GET') return next();
						try {
							const reviews = await loadFiveStarReviews();
							res.setHeader('content-type', 'application/json; charset=utf-8');
							res.end(JSON.stringify({ reviews }));
						} catch {
							res.statusCode = 502;
							res.setHeader('content-type', 'application/json; charset=utf-8');
							res.end(JSON.stringify({ reviews: [] }));
						}
					});
				},
			},
		],
	},
});
