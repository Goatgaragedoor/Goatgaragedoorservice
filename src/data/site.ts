export const site = {
	name: 'Goat Garage Door Service',
	domain: 'https://goatgaragedoorindy.com',
	email: 'Goatgaragedoorservice@gmail.com',
	phoneDisplay: '317-854-6917',
	phoneTel: '+13178546917',
	tagline: 'Fast. Reliable. Professional.',
	hours: '24/7',
	mapsUrl: 'https://maps.app.goo.gl/3UffUGKuj9Q1rLwE7',
	mapEmbed:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.2!2d-85.9816887!3d39.9372814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4de2dc397083d3b:0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service!5e0!3m2!1sen!2sus!4v1730123456789!5m2!1sen!2sus',
	facebook: 'https://www.facebook.com/people/Goat-Garage-Door-Service/61592922576954/',
	address: {
		street: '10378 Glenn Abbey Ln',
		city: 'Fishers',
		region: 'IN',
		postalCode: '46037',
		country: 'US',
	},
} as const;

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

/** Route path without the `.html` suffix Astro adds during file-format builds. */
export function routePath(pathname: string) {
	let path = pathname;
	if (path.endsWith('/index.html')) path = path.slice(0, -'/index.html'.length);
	else if (path.endsWith('.html')) path = path.slice(0, -'.html'.length);
	if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
	if (!path.startsWith('/')) path = `/${path}`;
	return path || '/';
}

export const weekdayNames = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
] as const;
