import type { ImageMetadata } from 'astro';
import springIndyAfter from '../assets/images/spring-indy-after.jpg';
import hingeFishers from '../assets/images/hinge-fishers.jpg';
import hingeFishersSide from '../assets/images/hinge-fishers-side.jpg';
import springGrayDoor from '../assets/images/spring-gray-door.jpg';
import installWhiteWood from '../assets/images/install-white-wood.jpg';
import springDetail from '../assets/images/spring-detail.jpg';
import springGap from '../assets/images/spring-gap.jpg';
import openerTruck from '../assets/images/opener-truck.jpg';
import installBeforeWood from '../assets/images/install-before-wood.jpg';
import openerChamberlain from '../assets/images/opener-chamberlain.jpg';
import installDriveway from '../assets/images/install-driveway.jpg';
import installBlackDoor from '../assets/images/install-black-door.jpg';
import techSpring from '../assets/images/tech-spring.jpg';
import jobWindows from '../assets/images/job-windows.jpg';
import jobMaterials from '../assets/images/job-materials.jpg';
import springsPair from '../assets/images/springs-pair.jpg';
import springSplit from '../assets/images/spring-split.jpg';
import springNew from '../assets/images/spring-new.jpg';
import techRepair from '../assets/images/tech-repair.jpg';
import doorRemoval from '../assets/images/door-removal.jpg';
import oldGrayDoor from '../assets/images/old-gray-door.jpg';

export type WorkCategory = 'springs' | 'installation' | 'openers' | 'repairs';

export interface WorkItem {
	id: string;
	src: ImageMetadata;
	alt: string;
	title: string;
	place?: string;
	category: WorkCategory;
}

export const workCategories: { id: WorkCategory; label: string }[] = [
	{ id: 'springs', label: 'Springs' },
	{ id: 'installation', label: 'Installation' },
	{ id: 'openers', label: 'Openers' },
	{ id: 'repairs', label: 'Repairs' },
];

export const work: WorkItem[] = [
	{
		id: 'install-black-door',
		src: installBlackDoor,
		alt: 'New black carriage-house style garage door on a brick home',
		title: 'Carriage-house door installation',
		category: 'installation',
	},
	{
		id: 'opener-truck',
		src: openerTruck,
		alt: 'Red Goat Garage Door Service truck outside an open garage in Fishers, with the opener overhead',
		title: 'Opener service with the truck on site',
		place: 'Fishers',
		category: 'openers',
	},
	{
		id: 'tech-spring',
		src: techSpring,
		alt: 'Technician on a ladder servicing the torsion spring above a white garage door',
		title: 'Torsion spring service',
		category: 'springs',
	},
	{
		id: 'install-white-wood',
		src: installWhiteWood,
		alt: 'Newly installed white sectional garage door in a garage with wood-paneled walls',
		title: 'New white sectional door',
		category: 'installation',
	},
	{
		id: 'spring-new',
		src: springNew,
		alt: 'New black torsion spring installed on the shaft above a gray garage door',
		title: 'New torsion spring',
		category: 'springs',
	},
	{
		id: 'install-driveway',
		src: installDriveway,
		alt: 'Red service truck in the driveway of a gray-sided Indianapolis home with a white garage door',
		title: 'Door installation',
		place: 'Indianapolis',
		category: 'installation',
	},
	{
		id: 'spring-indy-after',
		src: springIndyAfter,
		alt: 'White raised-panel garage door with windows after spring work in Indianapolis',
		title: 'Spring job finished',
		place: 'Indianapolis',
		category: 'springs',
	},
	{
		id: 'spring-gray-door',
		src: springGrayDoor,
		alt: 'Black torsion spring mounted above a gray raised-panel garage door',
		title: 'Spring above a gray door',
		category: 'springs',
	},
	{
		id: 'spring-detail',
		src: springDetail,
		alt: 'Close-up of a black torsion spring on the shaft above a garage door',
		title: 'Torsion spring close-up',
		category: 'springs',
	},
	{
		id: 'spring-gap',
		src: springGap,
		alt: 'Torsion spring with a separated coil above a gray garage door',
		title: 'Separated torsion spring',
		category: 'springs',
	},
	{
		id: 'springs-pair',
		src: springsPair,
		alt: 'Pair of torsion springs on the shaft above a white garage door',
		title: 'Paired torsion springs',
		category: 'springs',
	},
	{
		id: 'spring-split',
		src: springSplit,
		alt: 'Side-by-side view of an older torsion spring and a new replacement spring in Fishers',
		title: 'Spring replacement',
		place: 'Fishers',
		category: 'springs',
	},
	{
		id: 'hinge-fishers',
		src: hingeFishers,
		alt: 'New silver roller hinge on the stile of a white garage door in Fishers',
		title: 'New roller hinge',
		place: 'Fishers',
		category: 'repairs',
	},
	{
		id: 'hinge-fishers-side',
		src: hingeFishersSide,
		alt: 'Roller hinge and vertical track after a hinge repair in Fishers',
		title: 'Hinge and track repair',
		place: 'Fishers',
		category: 'repairs',
	},
	{
		id: 'tech-repair',
		src: techRepair,
		alt: 'Technician on a ladder working at the header of a white garage door in Fishers',
		title: 'Header repair',
		place: 'Fishers',
		category: 'repairs',
	},
	{
		id: 'old-gray-door',
		src: oldGrayDoor,
		alt: 'Worn gray garage door with frosted windows before replacement',
		title: 'Door ready for replacement',
		category: 'repairs',
	},
	{
		id: 'opener-chamberlain',
		src: openerChamberlain,
		alt: 'Chamberlain garage door opener mounted to a garage ceiling in Fishers',
		title: 'Chamberlain opener',
		place: 'Fishers',
		category: 'openers',
	},
	{
		id: 'install-before-wood',
		src: installBeforeWood,
		alt: 'White garage door in a wood-paneled garage before installation work',
		title: 'Door before the new install',
		category: 'installation',
	},
	{
		id: 'job-windows',
		src: jobWindows,
		alt: 'White garage door with a row of windows during installation, with a ladder and tools in the garage',
		title: 'Window-top door install',
		category: 'installation',
	},
	{
		id: 'job-materials',
		src: jobMaterials,
		alt: 'New garage door sections and tracks staged next to the red Goat service truck',
		title: 'Sections and track on site',
		category: 'installation',
	},
	{
		id: 'door-removal',
		src: doorRemoval,
		alt: 'Old garage door removed from the opening, with the service truck parked in the driveway',
		title: 'Old door coming out',
		category: 'installation',
	},
];

const featuredIds = [
	'install-driveway',
	'install-black-door',
	'install-white-wood',
	'opener-truck',
	'tech-spring',
	'spring-new',
];

export const featuredWork = featuredIds.map((id) => {
	const item = work.find((entry) => entry.id === id);
	if (!item) throw new Error(`Missing featured photo: ${id}`);
	return item;
});

export function workById(id: string) {
	const item = work.find((entry) => entry.id === id);
	if (!item) throw new Error(`Missing work photo: ${id}`);
	return item;
}

const showcase: { id: string; title: string; focus: string }[] = [
	{ id: 'install-black-door', title: 'Door Replacement', focus: 'center 42%' },
	{ id: 'opener-truck', title: 'Opener Installation', focus: 'center 37%' },
	{ id: 'spring-new', title: 'Spring Replacement', focus: 'center 11%' },
	{ id: 'install-white-wood', title: 'New sectional door', focus: 'center center' },
	{ id: 'tech-repair', title: 'Header repair', focus: 'center 30%' },
	{ id: 'hinge-fishers', title: 'Roller hinge repair', focus: 'center 45%' },
	{ id: 'install-driveway', title: 'Door installation', focus: 'center 30%' },
	{ id: 'opener-chamberlain', title: 'Opener install', focus: '68% 30%' },
	{ id: 'job-windows', title: 'Window-top door', focus: 'center 40%' },
	{ id: 'tech-spring', title: 'Torsion spring service', focus: '18% center' },
	{ id: 'spring-split', title: 'Spring replacement', focus: 'center center' },
	{ id: 'spring-indy-after', title: 'Spring job finished', focus: 'center 35%' },
];

export const projectShowcase = showcase.map((item) => {
	const photo = work.find((entry) => entry.id === item.id);
	if (!photo) throw new Error(`Missing showcase photo: ${item.id}`);
	return { ...photo, title: item.title, focus: item.focus };
});
