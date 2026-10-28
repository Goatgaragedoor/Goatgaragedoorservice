export interface ServiceArea {
	slug: string;
	name: string;
	county: string;
	label: string;
	description: string;
	lead: string;
	paragraphs: string[];
	places: string[];
}

export const areas: ServiceArea[] = [
	{
		slug: 'fishers',
		name: 'Fishers',
		county: 'Hamilton County',
		label: 'Home base',
		description:
			'Garage door repair and installation in Fishers, IN. Goat Garage Door Service is based on Glenn Abbey Lane and answers 24/7. Call 317-854-6917.',
		lead: 'Our home base. Springs, openers, cables, and new doors anywhere in Fishers.',
		paragraphs: [
			'Goat Garage Door Service is based at 10378 Glenn Abbey Ln in Fishers. When a door on the north side of town or down by Geist will not move, this is the crew that rolls from here.',
			'Fishers houses run from 1990s sections to new builds along 116th, Allisonville, and the Olio Road side. We see tired torsion springs on older doors and fresh installs that need a sensor, a hinge, or a bottom seal dialed in. Both get the same visit: look at the whole system, tell you what failed, and fix it.',
			'Emergency calls are answered day and night, including holidays. If the door is stuck open, call 317-854-6917 before you leave the house unsecured.',
		],
		places: ['Downtown Fishers', 'Geist', 'Saxony', 'Hamilton Southeastern', '116th Street', 'Allisonville Road'],
	},
	{
		slug: 'indianapolis',
		name: 'Indianapolis',
		county: 'Marion County',
		label: 'Metro',
		description:
			'Garage door repair and installation in Indianapolis. 24/7 emergency service for springs, cables, openers, and new doors. Call 317-854-6917.',
		lead: 'From the north side south through the city, we repair and replace residential garage doors.',
		paragraphs: [
			'Indianapolis calls come in when a car is trapped, a door is hanging crooked, or an opener clicks and nothing moves. We run those jobs from Fishers, with the north side — Nora, Castleton, Broad Ripple, Keystone, and Lawrence — closest to us.',
			'A lot of Indianapolis doors are older raised-panel steel with a single torsion spring and a trolley opener. When the spring lets go, the opener cannot lift the door, and forcing it strips the drive. We replace the spring to match the door and check the cables, drums, and opener before we leave.',
			'New door installs are scheduled the same way: measure the opening, pick the style, and set the tracks, springs, and opener so the door travels clean.',
		],
		places: ['Nora', 'Castleton', 'Broad Ripple', 'Keystone', 'Lawrence', 'Binford'],
	},
	{
		slug: 'carmel',
		name: 'Carmel',
		county: 'Hamilton County',
		label: 'West of Fishers',
		description:
			'Garage door repair and installation in Carmel, IN. Springs, openers, panels, and new doors from a Fishers crew. Call 317-854-6917.',
		lead: 'A short drive west for emergency repairs and new doors that match the house.',
		paragraphs: [
			'Carmel sits just west of Fishers, so spring and opener calls along 146th, Range Line, and the Arts & Design District are straightforward runs.',
			'Newer Carmel garages often have insulated doors and belt-drive openers. We install replacement doors when a section is dented past repair, and we service the hardware that keeps a heavy insulated door balanced. A door that looks fine from the driveway can still be riding on a tired spring.',
			'If you want the carriage-house look or a clean flush door, we measure and install it, then set the opener force so it reverses the way it should.',
		],
		places: ['Arts & Design District', 'West Clay', 'Home Place', '146th Street', 'Range Line Road'],
	},
	{
		slug: 'noblesville',
		name: 'Noblesville',
		county: 'Hamilton County',
		label: 'North of Fishers',
		description:
			'Garage door repair and installation in Noblesville, IN. 24/7 spring, cable, opener, and door service. Call 317-854-6917.',
		lead: 'Downtown garages and newer sections toward Morse Reservoir, covered from Fishers.',
		paragraphs: [
			'Noblesville is the next town north. We work on older single-car doors near the square and on wider insulated doors in the subdivisions stretching toward Morse Reservoir and State Road 37.',
			'Wider doors use heavier springs. When one side lets go, the door racks in the opening. We replace torsion springs, rewind the cables on the drums, and make sure the door stays put when it is halfway open — that is the balance check.',
			'Call any time the door will not close for the night or will not open for work in the morning.',
		],
		places: ['Downtown Noblesville', 'Morse Reservoir', 'State Road 37', '146th Street'],
	},
	{
		slug: 'westfield',
		name: 'Westfield',
		county: 'Hamilton County',
		label: 'Northwest',
		description:
			'Garage door repair and installation in Westfield, IN. Springs, openers, and new residential doors. Call Goat at 317-854-6917.',
		lead: 'Spring replacements and new door installs for Westfield’s growing neighborhoods.',
		paragraphs: [
			'Westfield keeps adding houses, and new garages still need springs sized to the door, sensors aimed, and tracks lagged into solid framing. We handle those installs and the repair calls that show up a few years later.',
			'US 31 and the Grand Park side of town are regular territory. If a cable has jumped the drum or a bottom bracket is bent, leave the opener off and call. Those parts are tied to the spring, and the spring is under real tension.',
			'We are based in Fishers and schedule Westfield the same day whenever the board allows. Overnight emergencies go to the phone first: 317-854-6917.',
		],
		places: ['US 31', 'Grand Park', 'Downtown Westfield', 'Oak Ridge'],
	},
	{
		slug: 'lawrence',
		name: 'Lawrence',
		county: 'Marion County',
		label: 'South of Fishers',
		description:
			'Garage door repair and installation in Lawrence, IN, including Oaklandon and Fort Benjamin. Call 317-854-6917, day or night.',
		lead: 'Just south of Fishers for spring, panel, opener, and full door work.',
		paragraphs: [
			'Lawrence shares a border with Fishers, so calls from Oaklandon, Pendleton Pike, and the Fort Benjamin Harrison area are a short drive.',
			'Many of these garages have original steel doors with worn hinges and a bottom seal that no longer meets the floor. We replace the failed parts when the door is still sound, and we say so when the sections are too far gone and a new door is the better job.',
			'Opener work is part of the same visit. A Chamberlain head sitting on the ceiling gets checked for travel, force, and the sensors at the floor.',
		],
		places: ['Oaklandon', 'Fort Benjamin Harrison', 'Pendleton Pike', 'Geist'],
	},
	{
		slug: 'mccordsville',
		name: 'McCordsville',
		county: 'Hancock County',
		label: 'East of Fishers',
		description:
			'Garage door repair and installation in McCordsville, IN. Springs, cables, openers, and new doors from Fishers. Call 317-854-6917.',
		lead: 'East of Fishers for emergency repairs and planned installations.',
		paragraphs: [
			'McCordsville is a short drive east of Glenn Abbey Lane. We cover the town for the same work we do in Fishers: broken springs, cables off the drum, opener failures, panel damage, and full door replacements.',
			'Garage doors on the Mt. Comfort Road corridor see a lot of wind and a lot of cycles. A yearly look at rollers, hinges, and balance keeps a heavy door from eating the opener. When something has already snapped, we come out and replace it.',
			'Send a request with a photo of the spring or the opener, or call if the door is down and the cars are inside.',
		],
		places: ['Mt. Comfort Road', 'Broadway', 'Olio Road'],
	},
	{
		slug: 'zionsville',
		name: 'Zionsville',
		county: 'Boone County',
		label: 'West metro',
		description:
			'Garage door repair and installation in Zionsville, IN. Fishers-based crew for springs, openers, and new doors. Call 317-854-6917.',
		lead: 'Scheduled installs and emergency repairs out to the Zionsville village and newer sections.',
		paragraphs: [
			'Zionsville is farther west than Carmel, and we still take it. Village garages and the newer neighborhoods along the Michigan Road side both call for the same hardware: torsion springs, lift cables, and openers that have to reverse if something is in the way.',
			'Carriage-house and wood-look doors are common here. We install them level, set the spring to the door weight, and leave the opener tuned to that weight. A pretty door with the wrong spring will fail early.',
			'For a door that is stuck tonight, call. For a replacement you have been planning, send the rough opening size and a photo of the current door.',
		],
		places: ['Zionsville Village', 'Michigan Road', 'Oak Street', 'Sycamore Street'],
	},
	{
		slug: 'greenwood',
		name: 'Greenwood',
		county: 'Johnson County',
		label: 'South metro',
		description:
			'Garage door repair and installation in Greenwood, IN. Springs, openers, cables, and new doors from a Fishers crew. Call 317-854-6917.',
		lead: 'South of Indianapolis for spring, opener, and full door work along US 31 and County Line Road.',
		paragraphs: [
			'Greenwood is the big city south of Indianapolis, about 23 miles from Glenn Abbey Lane in Fishers. Calls come from older garages near Main Street and from newer sections toward Smith Valley and Worthsville Road.',
			'A lot of these doors are insulated steel with a trolley opener. When a spring breaks, the door gets heavy and the opener should stay off until the spring is replaced. We size the new spring to the door, set the cables back on the drums, and check that the door stays put halfway open.',
			'If the cars are trapped or the door is stuck open for the night, call 317-854-6917. For a planned replacement, send the rough opening and a photo of the current door.',
		],
		places: ['Downtown Greenwood', 'County Line Road', 'Smith Valley', 'Worthsville Road', 'US 31', 'Center Grove'],
	},
	{
		slug: 'anderson',
		name: 'Anderson',
		county: 'Madison County',
		label: 'Northeast',
		description:
			'Garage door repair and installation in Anderson, IN. 24/7 springs, cables, openers, and new doors. Call 317-854-6917.',
		lead: 'Madison County’s main city, about 20 miles northeast of Fishers.',
		paragraphs: [
			'Anderson sits up I-69 from Fishers, still inside a 25-mile run. We cover downtown, the Scatterfield Road corridor, and the neighborhoods on the west side of town.',
			'Many Anderson garages are older raised-panel doors with a single torsion spring. When that spring lets go, the door racks and the opener cannot lift it. We replace the spring, rewind the cables, and look at the rollers and hinges before the opener goes back to work.',
			'New installs follow the same plan as a Fishers job: measure the opening, hang the door, and set the spring and opener to the weight of that door.',
		],
		places: ['Downtown Anderson', 'Scatterfield Road', 'Madison Park', 'West side', 'I-69', 'Nichol Avenue'],
	},
	{
		slug: 'brownsburg',
		name: 'Brownsburg',
		county: 'Hendricks County',
		label: 'West side',
		description:
			'Garage door repair and installation in Brownsburg, IN. Springs, openers, and new residential doors. Call 317-854-6917.',
		lead: 'West of Indianapolis for newer garages and emergency spring calls.',
		paragraphs: [
			'Brownsburg is a straight shot west, past Speedway, about 23 miles from Glenn Abbey Lane. Most of the work is on newer insulated doors along Northfield Drive, US 136, and the subdivisions north of Main Street.',
			'New houses show up with doors that were never quite balanced, sensors that quit, and springs that were light for an insulated door. We correct that hardware, and we replace a door when a section is dented past a panel swap.',
			'Same-day scheduling depends on what is already on the board. Overnight emergencies go to the phone: 317-854-6917.',
		],
		places: ['Downtown Brownsburg', 'Northfield Drive', 'US 136', 'Main Street', 'Hornaday Road'],
	},
	{
		slug: 'greenfield',
		name: 'Greenfield',
		county: 'Hancock County',
		label: 'Southeast',
		description:
			'Garage door repair and installation in Greenfield, IN. Springs, cables, openers, and new doors from Fishers. Call 317-854-6917.',
		lead: 'The Hancock County seat, east of McCordsville on US 40.',
		paragraphs: [
			'Greenfield is farther east than McCordsville and still a regular drive from Fishers, about 15 miles out US 40 or toward I-70. We work on older doors near the courthouse square and on wider doors in the sections north of town along New Road.',
			'The job is the same one we do in Fishers. A broken spring gets replaced and sized to the door. Cables go back on the drums even. The opener gets checked only after the door moves by hand the way it should.',
			'Call if the door will not close for the night. For a replacement, send a photo of the opening and the current door.',
		],
		places: ['Downtown Greenfield', 'US 40', 'New Road', 'Riley Park', 'I-70', 'Broadway'],
	},
];

export function getArea(slug: string) {
	return areas.find((area) => area.slug === slug);
}
