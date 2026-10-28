import { loadFiveStarReviews } from '../../src/lib/googleReviews.mjs';

export default async () => {
	try {
		const reviews = await loadFiveStarReviews();
		return new Response(JSON.stringify({ reviews }), {
			headers: {
				'content-type': 'application/json; charset=utf-8',
				'cache-control': 'public, max-age=1800',
			},
		});
	} catch {
		return new Response(JSON.stringify({ reviews: [] }), {
			status: 502,
			headers: { 'content-type': 'application/json; charset=utf-8' },
		});
	}
};

export const config = {
	path: '/api/google-reviews',
};
