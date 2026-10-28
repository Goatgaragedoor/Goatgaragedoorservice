import { areas } from './areas';
import { services } from './services';
import { addressLine, site, weekdayNames } from './site';

export function localBusiness() {
	return {
		'@type': 'LocalBusiness',
		'@id': `${site.domain}/#business`,
		name: site.name,
		url: site.domain,
		image: `${site.domain}/og.jpg`,
		logo: `${site.domain}/logo.jpg`,
		telephone: site.phoneTel,
		email: site.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: site.address.street,
			addressLocality: site.address.city,
			addressRegion: site.address.region,
			postalCode: site.address.postalCode,
			addressCountry: site.address.country,
		},
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: [...weekdayNames],
			opens: '00:00',
			closes: '23:59',
		},
		areaServed: areas.map((area) => ({
			'@type': 'City',
			name: area.name,
			containedInPlace: {
				'@type': 'State',
				name: 'Indiana',
			},
		})),
		sameAs: [site.facebook, site.mapsUrl],
		hasMap: site.mapsUrl,
		description: `24/7 garage door repair and installation based at ${addressLine}.`,
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Garage door services',
			itemListElement: services.map((service) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: service.title,
					url: `${site.domain}/services/${service.slug}`,
				},
			})),
		},
	};
}

export function pageSchema(extra: Record<string, unknown>[] = []) {
	return {
		'@context': 'https://schema.org',
		'@graph': [localBusiness(), ...extra],
	};
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: new URL(item.path, site.domain).href,
		})),
	};
}

export function faqNode(faqs: { q: string; a: string }[]) {
	return {
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.a,
			},
		})),
	};
}

export function serviceNode(service: { title: string; description: string; slug: string }) {
	return {
		'@type': 'Service',
		name: service.title,
		serviceType: service.title,
		description: service.description,
		url: `${site.domain}/services/${service.slug}`,
		provider: { '@id': `${site.domain}/#business` },
		areaServed: areas.map((area) => area.name),
	};
}
