const FEATURE_ID = '0xa4de2dc397083d3b:0x4c2371cfdff1a31c';

function plainText(value) {
	return String(value || '')
		.replace(/<br\s*\/?>/gi, ' ')
		.replace(/<[^>]+>/g, '')
		.replace(/\s+/g, ' ')
		.trim();
}

/** Five-star written reviews from the Goat Garage Door Service Google Maps listing. */
export async function loadFiveStarReviews() {
	const inner = Array(12).fill(null);
	inner[1] = 3;
	inner[9] = 60;
	inner[11] = [FEATURE_ID];
	const payload = [null, [...Array(9).fill(null), inner]];
	const url =
		'https://www.google.com/httpservice/web/PrivateLocalSearchUiDataService/GetLocalBoqProxy?msc=gwsrpc&hl=en&reqpld=' +
		encodeURIComponent(JSON.stringify(payload));
	const response = await fetch(url, {
		headers: {
			Accept: '*/*',
			'User-Agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
		},
	});
	if (!response.ok) throw new Error(`Google reviews ${response.status}`);
	const raw = await response.text();
	const data = JSON.parse(raw.slice(raw.indexOf('[')));
	const reviews = data?.[1]?.[10]?.[2];
	if (!Array.isArray(reviews)) return [];
	return reviews
		.filter((review) => review?.[1] === 5)
		.map((review) => ({
			name: plainText(review?.[3]?.[0]) || 'Google review',
			quote: plainText(review?.[27]),
		}))
		.filter((review) => review.quote.length > 0);
}
