import type { SeoSection } from './services';

export interface ServiceArea {
	slug: string;
	name: string;
	county: string;
	label: string;
	description: string;
	lead: string;
	paragraphs: string[];
	places: string[];
	metaTitle?: string;
	metaDescription?: string;
	h1?: string;
	whyChoose?: { title: string; text: string }[];
	process?: { title: string; text: string }[];
	showTestimonials?: boolean;
	hideNearbyMap?: boolean;
	seoSections?: SeoSection[];
	poi?: { intro: string; items: { title?: string; text: string }[]; mapSrc: string; mapTitle: string };
	faqs?: { q: string; a: string }[];
}

export const areas: ServiceArea[] = [
	{
		slug: 'indianapolis',
		name: 'Indianapolis',
		county: 'Marion County',
		label: 'Metro',
		description:
			'Garage door repair and installation in Indianapolis. 24/7 emergency service for springs, cables, openers, and new doors. Call 317-854-6917.',
		lead: 'Goat Garage Door Service provides reliable Garage Door Repair in Indianapolis, delivering professional solutions to keep your garage door safe, secure, and dependable.',
		paragraphs: [
			'Indianapolis calls come in when a car is trapped, a door is hanging crooked, or an opener clicks and nothing moves. We run those jobs from Fishers, with the north side — Nora, Castleton, Broad Ripple, Keystone, and Lawrence — closest to us.',
			'A lot of Indianapolis doors are older raised-panel steel with a single torsion spring and a trolley opener. When the spring lets go, the opener cannot lift the door, and forcing it strips the drive. We replace the spring to match the door and check the cables, drums, and opener before we leave.',
			'New door installs are scheduled the same way: measure the opening, pick the style, and set the tracks, springs, and opener so the door travels clean.',
		],
		places: ['Nora', 'Castleton', 'Broad Ripple', 'Keystone', 'Lawrence', 'Binford'],
		metaTitle: 'Garage Door Repair in Indianapolis – Goat Garage Door',
		metaDescription:
			'Need Garage Door Repair in Indianapolis? Goat Garage Door Service handles jammed garage doors, sudden malfunctions, and slow or uneven operation. Call today!',
		h1: 'Garage Door Repair in Indianapolis, IN',
		showTestimonials: true,
		hideNearbyMap: true,
		whyChoose: [
			{ title: 'A short run from Fishers', text: 'We are based in Fishers, just northeast of the city, so the north side of Indianapolis is one of our closest runs.' },
			{ title: 'The price comes first', text: 'You hear the number before any repair starts. If a full door is the better fix than one part, we say so first.' },
			{ title: 'The whole door checked', text: 'We disconnect the opener and check the spring, cables, and balance by hand before we point to a single part.' },
			{ title: 'On call day and night', text: 'A door that traps the car or will not close does not wait. The phone is answered 24/7, including holidays.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the Indianapolis door did — a bang, a crooked door, or an opener that runs while nothing moves.' },
			{ title: 'We come from Fishers', text: 'The same crew rolls from Glenn Abbey Lane, with the north side of the city the shortest drive.' },
			{ title: 'You hear the price', text: 'We find what failed, tell you the number before the work, and you decide what happens next.' },
			{ title: 'We fix and test', text: 'We repair the spring, cable, roller, or opener, then test the balance and auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'problems',
				h2: 'Garage Door Problems Indianapolis Homeowners Call About Most',
				layout: 'split',
				imageId: 'install-driveway',
				paragraphs: [
					'Garage Door Repair in Indianapolis usually starts with one of a few failures: a torsion spring that snapped with a bang, a frayed or off-track cable, worn rollers that grind, or an opener that runs while the door stays put. Older raised-panel steel doors on a single spring are common across the city, and that is the setup that strands a car most often.',
				],
			},
			{
				id: 'weather',
				h2: 'Garage Door Repair Solutions for Indianapolis Homeowners',
				layout: 'causes',
				intro: 'Whatever the door is doing, there is a fix for it. These are the Garage Door Repair in Indianapolis solutions homeowners call us for most.',
				items: [
					{ title: 'Broken spring replacement', text: 'A snapped torsion or extension spring is the most common failure. We size and swap the spring to match your door so it lifts evenly again.' },
					{ title: 'Cable and roller repair', text: 'Frayed cables and worn rollers make a door bind or hang crooked. We reset the cables on the drums and replace rollers so the door tracks clean.' },
					{ title: 'Opener service', text: 'When an opener runs but the door stays put, or the remote quits, we check the gear, travel, force, and sensors before replacing the unit.' },
					{ title: 'Tune-ups and safety checks', text: 'A yearly balance and auto-reverse check catches tired hardware before it strands a car and keeps the whole system running longer.' },
				],
			},
			{
				id: 'repair-replace',
				h2: 'Repairing a Garage Door Versus Replacing It in Indianapolis',
				layout: 'compare',
				intro: 'Choosing between a fix and a full replacement is part of every Garage Door Repair in Indianapolis we take on. We weigh the age, damage, and cost, then give you both numbers so the decision stays yours.',
				columns: [
					{ heading: 'A repair makes sense', points: ['The door is sound but one part failed', 'A spring, cable, roller, or opener fix', 'The sections and track are straight', 'Usually the faster, lower-cost route'] },
					{ heading: 'A replacement makes sense', points: ['Sections are rusted, dented, or delaminated', 'The door is loud, drafty, and always breaking', 'An impact bent several sections or the track', 'A new system comes with fresh hardware'] },
				],
				note: 'We give you the repair number and, when it is close, the price of a new door too, so the choice is yours.',
			},
			{
				id: 'expect',
				h2: 'Emergency Garage Door Repairs for Unexpected Mechanical Problems',
				layout: 'steps',
				intro: 'When a spring snaps or an opener quits without warning, our emergency Garage Door Repair in Indianapolis gets a crew out fast — day or night — to handle the unexpected mechanical problems that leave your door stuck or unsafe.',
				items: [
					{ text: 'Garage Door Repair in Indianapolis starts with a call or the form — tell us the door, the trouble, and your part of the city.' },
					{ text: 'The same Fishers crew heads out, with the north side of the city the shortest drive from our base.' },
					{ text: 'On site we check the door by hand, find the failed part, and give you the price before any work.' },
					{ text: 'We make the repair, test the balance and auto-reverse, and leave the door running the way it should.' },
				],
			},
		],
		poi: {
			intro: 'Goat Garage Door Service works out of 10378 Glenn Abbey Ln in Fishers, just northeast of Indianapolis up I-69, so the north side of the city is a short run and the rest is a straightforward drive. The map below shows the route between Indianapolis and our Fishers base.',
			items: [
				{ title: 'Downtown and Monument Circle', text: 'The city grid radiates from Monument Circle and the Soldiers and Sailors Monument at the center.' },
				{ title: 'Mass Ave', text: 'The Massachusetts Avenue arts and dining district sits just northeast of downtown.' },
				{ title: 'Broad Ripple Village', text: 'A walkable north-side neighborhood along Broad Ripple and College Avenues.' },
				{ title: 'Keystone and Nora', text: 'North-side shopping and neighborhoods near Keystone Avenue and the Nora area.' },
				{ title: 'Castleton', text: 'A northeast hub around Castleton Square near I-465 and I-69, closest to our Fishers base.' },
			],
			mapSrc:
				'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d98010.74776369022!2d-86.15113846187614!3d39.8555111282548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20Indiana%2C%20USA!3m2!1d39.76909!2d-86.158018!4m5!1s0xa4de2dc397083d3b%3A0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service%2C%2010378%20Glenn%20Abbey%20Ln%2C%20Fishers%2C%20IN%2046037%2C%20United%20States!3m2!1d39.9372773!2d-85.9791138!5e0!3m2!1sen!2s!4v1793818385641!5m2!1sen!2s',
			mapTitle: 'Driving directions from Indianapolis to Goat Garage Door Service in Fishers',
		},
		faqs: [
			{
				q: 'Does Goat Garage Door Service cover Indianapolis from its Fishers base?',
				a: 'Yes. We are based at 10378 Glenn Abbey Ln in Fishers, just northeast of the city, and we run Indianapolis calls from there. The north side is the shortest drive, and we cover the rest of the city as well.',
			},
			{
				q: 'Which parts of Indianapolis are closest to your crew?',
				a: 'The north and northeast side — Nora, Castleton, Broad Ripple, Keystone, and the Binford corridor — are closest to Fishers, so those are our quickest runs. We still cover downtown and the south side on scheduled calls.',
			},
			{
				q: 'Can you come out if my garage door will not open or close?',
				a: 'Yes, that is the common emergency call. Keep people and cars clear, leave the opener off if the door is crooked or heavy, and phone 317-854-6917. Hours are 24/7, including weekends and holidays.',
			},
			{
				q: 'What should I tell you when I call about a door in Indianapolis?',
				a: 'Tell us what the door did — a bang from the ceiling, a gap in the spring, a cable hanging loose, or an opener that runs while the door stays put — and your part of the city. A photo helps us bring the right parts.',
			},
			{
				q: 'Do you handle both repairs and new door installs in Indianapolis?',
				a: 'Both. We repair springs, cables, rollers, tracks, panels, and openers, and we install new insulated and carriage-house doors when a replacement is the better fix. You hear the price either way before the work.',
			},
			{
				q: 'How do I know if my garage door needs a professional?',
				a: 'If the door is heavy by hand, hanging crooked, off the track, or you can see a gap in the spring, leave it alone and call. Springs and cables are under tension and are not a safe do-it-yourself fix.',
			},
		],
	},
	{
		slug: 'carmel',
		name: 'Carmel',
		county: 'Hamilton County',
		label: 'West of Fishers',
		description:
			'Garage door repair and installation in Carmel, IN. Springs, openers, panels, and new doors from a Fishers crew. Call 317-854-6917.',
		lead: 'Goat Garage Door Service delivers trusted Garage Door Repair in Carmel, fixing broken springs, worn cables, and tired openers so your door opens smoothly and closes tight every time.',
		paragraphs: [
			'Carmel sits just west of Fishers, so spring and opener calls along 146th, Range Line, and the Arts & Design District are straightforward runs.',
			'Newer Carmel garages often have insulated doors and belt-drive openers. We install replacement doors when a section is dented past repair, and we service the hardware that keeps a heavy insulated door balanced. A door that looks fine from the driveway can still be riding on a tired spring.',
			'If you want the carriage-house look or a clean flush door, we measure and install it, then set the opener force so it reverses the way it should.',
		],
		places: ['Arts & Design District', 'West Clay', 'Home Place', '146th Street', 'Range Line Road'],
		metaTitle: 'Garage Door Repair in Carmel – Goat Garage Door',
		metaDescription: 'Need Garage Door Repair in Carmel? Goat Garage Door Service handles jammed garage doors, sudden malfunctions, and slow or uneven operation. Call today!',
		h1: 'Garage Door Repair in Carmel, IN',
		showTestimonials: true,
		hideNearbyMap: true,
		whyChoose: [
			{ title: 'A short run from Fishers', text: 'Our base sits just east in Fishers, so a quick trip west along 146th Street puts the crew at your Carmel door fast.' },
			{ title: 'The price comes first', text: 'You hear the number before any repair starts, and if a full door makes more sense than one part, we say so.' },
			{ title: 'The whole door checked', text: 'We disconnect the opener and check the spring, cables, and balance by hand before we name a single part.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, holidays included, when a door traps a car or will not close.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the Carmel door did — a loud bang, a door hanging crooked, or an opener that runs while nothing moves.' },
			{ title: 'We come from Fishers', text: 'The same crew rolls from Glenn Abbey Lane and heads west to your Carmel address.' },
			{ title: 'You hear the price', text: 'We find what failed, give you the number before the work, and you decide.' },
			{ title: 'We fix and test', text: 'We repair the spring, cable, roller, or opener, then test the balance and auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'problems',
				h2: 'Garage Door Problems Carmel Homeowners Call About Most',
				layout: 'split',
				imageId: 'install-driveway',
				paragraphs: [
					'Garage Door Repair in Carmel usually starts with a snapped torsion spring, a cable that frayed or jumped off track, or worn rollers that bind. Many are newer homes with insulated carriage-house and flush doors on belt-drive openers, so we also get calls where the opener runs but the door stays put.',
				],
			},
			{
				id: 'weather',
				h2: 'Garage Door Repair Solutions for Carmel Homeowners',
				layout: 'causes',
				intro: 'Most Garage Door Repair in Carmel comes down to a few fixes. We find the failed part by hand, then give you the number before we start.',
				items: [
					{ title: 'Broken spring replacement', text: 'A snapped torsion spring leaves the door too heavy to lift. We swap it with the right size and reset the balance.' },
					{ title: 'Cable and roller repair', text: 'Frayed cables and worn rollers pull a door off track. We replace them and realign so the door runs straight.' },
					{ title: 'Opener service', text: 'When the opener runs but the door stays put, we check the gear, logic board, and travel settings on your belt-drive unit.' },
					{ title: 'Tune-ups and safety checks', text: 'We tighten hardware, lubricate moving parts, and test the auto-reverse so small problems do not become breakdowns.' },
				],
			},
			{
				id: 'repair-replace',
				h2: 'Repairing a Garage Door Versus Replacing It in Carmel',
				layout: 'compare',
				intro: 'With Garage Door Repair in Carmel, we weigh the age of the door, how much is damaged, and the cost. Then we give you both numbers, the repair and a new door, so you can choose.',
				columns: [
					{ heading: 'A repair makes sense', points: ['One spring or cable has failed', 'The door is newer and insulated', 'Panels are straight and solid', 'The opener works with a small part'] },
					{ heading: 'A replacement makes sense', points: ['Several panels are bent or cracked', 'The door is old and uninsulated', 'Repairs keep stacking up', 'The cost nears a new door'] },
				],
				note: 'We give you the repair number and, when the two are close, the price of a new door too.',
			},
			{
				id: 'expect',
				h2: 'Emergency Garage Door Repairs for Unexpected Mechanical Problems',
				layout: 'steps',
				intro: 'Springs and openers fail without warning, so Garage Door Repair in Carmel runs day and night. When a door drops or will not move, the same Fishers crew heads out and gets you working again.',
				items: [
					{ text: 'Garage Door Repair in Carmel starts with a call to 317-854-6917 or the form, where you tell us what the door did.' },
					{ text: 'The same Fishers crew heads out, rolling west from the Glenn Abbey Lane base.' },
					{ text: 'On site we check the door by hand, find the failed part, and give you the price before any work.' },
					{ text: 'We make the repair, test the balance and auto-reverse, and leave the door running right.' },
				],
			},
		],
		poi: {
			intro: 'Goat Garage Door Service works out of 10378 Glenn Abbey Ln in Fishers, a short drive east of Carmel. The crew runs west along 146th Street and Range Line Road to reach homes near the Arts & Design District, West Clay, and Home Place. The map below shows the route between Carmel and the Fishers base.',
			items: [
				{ title: 'Arts & Design District', text: 'A walkable district in downtown Carmel known for galleries, shops, and restored storefronts.' },
				{ title: 'West Clay', text: 'A planned community on the west side of Carmel with newer homes and attached garages.' },
				{ title: 'Home Place', text: 'An older neighborhood near College Avenue on the south edge of Carmel.' },
				{ title: '146th Street', text: 'A main east-west route that links Carmel to Fishers and our base.' },
				{ title: 'Range Line Road', text: 'A central north-south road running through the heart of Carmel.' },
			],
			mapSrc:
				'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48314.47304602266!2d-86.08837060584486!3d39.93573649964101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8814ad973033fa1d%3A0x43b9095f5f7b38fc!2sCarmel%2C%20Indiana%2C%20USA!3m2!1d39.978370999999996!2d-86.1180435!4m5!1s0xa4de2dc397083d3b%3A0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service%2C%2010378%20Glenn%20Abbey%20Ln%2C%20Fishers%2C%20IN%2046037%2C%20United%20States!3m2!1d39.9372773!2d-85.9791138!5e0!3m2!1sen!2s!4v1793860350854!5m2!1sen!2s',
			mapTitle: 'Driving directions from Carmel to Goat Garage Door Service in Fishers',
		},
		faqs: [
			{ q: 'Does Goat Garage Door Service cover Carmel from its Fishers base?', a: 'Yes. We work out of 10378 Glenn Abbey Ln, Fishers, which is a short drive west to Carmel. The same crew runs every job, so a Carmel call reaches us quickly.' },
			{ q: 'What are the most common garage door repairs in Carmel?', a: 'Most calls are snapped torsion springs, frayed or off-track cables, and worn rollers. We also fix openers that run while the door stays put. These cover the bulk of what Carmel homes need.' },
			{ q: 'Can you come out if my garage door will not open or close?', a: 'Yes, day or night. Keep people and cars clear of the door and leave the opener off until we arrive. Call 317-854-6917 and we will head out 24/7.' },
			{ q: 'What should I tell you when I call about a door in Carmel?', a: 'Describe the sound or symptom, such as a bang, a crooked door, or an opener that runs with no movement. Tell us your part of town. A photo of the spring or track helps us bring the right parts.' },
			{ q: 'Do you handle both repairs and new door installs in Carmel?', a: 'Yes, we do both. If a repair will hold, we repair it, and if a new door makes more sense, we install one. Either way, you hear the price before the work starts.' },
			{ q: 'How do I know if my garage door needs a professional?', a: 'If the door feels heavy by hand, hangs crooked, has slipped off track, or you see a gap in the spring, call us. Do not try to work on springs or cables under tension yourself, as they can cause serious injury.' },
		],
	},
	{
		slug: 'noblesville',
		name: 'Noblesville',
		county: 'Hamilton County',
		label: 'North of Fishers',
		description:
			'Garage door repair and installation in Noblesville, IN. 24/7 spring, cable, opener, and door service. Call 317-854-6917.',
		lead: 'From the downtown square to the subdivisions near Morse Reservoir, Goat Garage Door Service handles Garage Door Repair in Noblesville with honest pricing and fixes that hold.',
		paragraphs: [
			'Noblesville is the next town north. We work on older single-car doors near the square and on wider insulated doors in the subdivisions stretching toward Morse Reservoir and State Road 37.',
			'Wider doors use heavier springs. When one side lets go, the door racks in the opening. We replace torsion springs, rewind the cables on the drums, and make sure the door stays put when it is halfway open — that is the balance check.',
			'Call any time the door will not close for the night or will not open for work in the morning.',
		],
		places: ['Downtown Noblesville', 'Morse Reservoir', 'State Road 37', '146th Street'],
		metaTitle: 'Garage Door Repair in Noblesville – Goat Garage Door',
		metaDescription: 'Need Garage Door Repair in Noblesville? Goat Garage Door Service handles jammed garage doors, sudden malfunctions, and slow or uneven operation. Call today!',
		h1: 'Garage Door Repair in Noblesville, IN',
		showTestimonials: true,
		hideNearbyMap: true,
		whyChoose: [
			{ title: 'A short run from Fishers', text: 'Noblesville is the next town north of us, so the crew reaches your door fast from our Fishers base.' },
			{ title: 'The price comes first', text: 'You hear the number before any repair starts, and if a full door makes more sense than one part, we say so.' },
			{ title: 'The whole door checked', text: 'We disconnect the opener and check the spring, cables, and balance by hand before we name a part.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, holidays included, when a door traps a car or will not close.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the Noblesville door did — a loud bang, a crooked door, or an opener that runs while nothing moves.' },
			{ title: 'We come from Fishers', text: 'The same crew rolls out from Glenn Abbey Lane and heads north to Noblesville.' },
			{ title: 'You hear the price', text: 'We find what failed, give you the number before the work, and you decide.' },
			{ title: 'We fix and test', text: 'We repair the spring, cable, roller, or opener, then test the balance and auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'problems',
				h2: 'Garage Door Problems Noblesville Homeowners Call About Most',
				layout: 'split',
				imageId: 'install-driveway',
				paragraphs: [
					'Garage Door Repair in Noblesville usually starts with a snapped torsion spring, a frayed or off-track cable, worn rollers, or an opener that runs but leaves the door put. Older single-car doors near the downtown square and the wider insulated doors out toward Morse Reservoir all land on the same short list.',
				],
			},
			{
				id: 'weather',
				h2: 'Garage Door Repair Solutions for Noblesville Homeowners',
				layout: 'causes',
				intro: 'Most Garage Door Repair in Noblesville comes down to four fixes we handle every day, from broken springs to tired openers on both older and newer doors.',
				items: [
					{ title: 'Broken spring replacement', text: 'Wider doors toward State Road 37 use heavier springs that rack the door when one side fails. We replace springs in pairs and set the balance.' },
					{ title: 'Cable and roller repair', text: 'A frayed cable or worn roller pulls the door off track and out of line. We reset the track, swap the bad parts, and check the fit.' },
					{ title: 'Opener service', text: 'When the motor runs but the door stays put, we check the gear, logic board, and travel limits before naming a part.' },
					{ title: 'Tune-ups and safety checks', text: 'We tighten hardware, lubricate moving parts, and test the auto-reverse so small problems do not turn into a stuck door.' },
				],
			},
			{
				id: 'repair-replace',
				h2: 'Repairing a Garage Door Versus Replacing It in Noblesville',
				layout: 'compare',
				intro: 'Garage Door Repair in Noblesville is often the right call, but not always. We weigh the age of the door, the damage, and the cost, then give you both numbers so you can decide.',
				columns: [
					{ heading: 'A repair makes sense', points: ['The door is sound and fairly new', 'One part failed, like a spring or cable', 'Panels are straight and undented', 'The fix costs far less than a new door'] },
					{ heading: 'A replacement makes sense', points: ['The door is old and worn out', 'Several parts fail close together', 'Panels are cracked or bent', 'Repair cost nears the price of new'] },
				],
				note: 'We give you the repair number and, when the two are close, the price of a new door too.',
			},
			{
				id: 'expect',
				h2: 'Emergency Garage Door Repairs for Unexpected Mechanical Problems',
				layout: 'steps',
				intro: 'Garage Door Repair in Noblesville does not wait for business hours. A spring or opener can fail at any time, so we answer the phone and head out day or night.',
				items: [
					{ text: 'It starts with a call or the form for Garage Door Repair in Noblesville — tell us what happened and where.' },
					{ text: 'The same Fishers crew heads out from Glenn Abbey Lane toward your part of town.' },
					{ text: 'On site we check the door by hand, find the failed part, and give you the price before any work.' },
					{ text: 'We make the repair, test the balance and auto-reverse, and leave the door running right.' },
				],
			},
		],
		poi: {
			intro: 'Goat Garage Door Service works out of 10378 Glenn Abbey Ln in Fishers. Noblesville is the next town north, a short drive up past 146th Street, so the same crew reaches homes near the downtown square and out toward Morse Reservoir without a long wait. The map below shows the route between Noblesville and our Fishers base.',
			items: [
				{ title: 'Downtown Noblesville', text: 'The courthouse square anchors the older part of town, where many homes still have single-car garages and original doors.' },
				{ title: 'Morse Reservoir', text: 'Subdivisions near the reservoir tend to have newer, wider insulated doors that use heavier springs.' },
				{ title: 'State Road 37', text: 'The growth along State Road 37 brought wider two-car doors that rack hard when one spring lets go.' },
				{ title: '146th Street', text: '146th Street is the main east-west route we take north out of Fishers into Noblesville.' },
				{ title: 'Hamilton Town Center', text: 'The shopping district near the Fishers and Noblesville line sits along our drive north.' },
			],
			mapSrc:
				'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d97816.90058942766!2d-86.08181135485998!3d39.99106300344473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8814b0c00eea9e27%3A0xb848e4d34edb8f91!2sNoblesville%2C%20Indiana%2C%20USA!3m2!1d40.0456243!2d-86.012241!4m5!1s0xa4de2dc397083d3b%3A0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service%2C%2010378%20Glenn%20Abbey%20Ln%2C%20Fishers%2C%20IN%2046037%2C%20United%20States!3m2!1d39.9372773!2d-85.9791138!5e0!3m2!1sen!2s!4v1793860387578!5m2!1sen!2s',
			mapTitle: 'Driving directions from Noblesville to Goat Garage Door Service in Fishers',
		},
		faqs: [
			{ q: 'Does Goat Garage Door Service cover Noblesville from its Fishers base?', a: 'Yes. We work out of 10378 Glenn Abbey Ln in Fishers, and Noblesville is the next town north. It is a short drive up for us, so the same crew handles your door without a long wait.' },
			{ q: 'What are the most common garage door repairs in Noblesville?', a: 'Most calls are broken springs, frayed or off-track cables, worn rollers, and openers that run but will not move the door. Older downtown doors and newer wider doors near Morse Reservoir both land on that list.' },
			{ q: 'Can you come out if my garage door will not open or close?', a: 'Yes, any time. Keep people and cars clear of the door, leave the opener off so no one hits the button, and call us at 317-854-6917. We answer 24/7.' },
			{ q: 'What should I tell you when I call about a door in Noblesville?', a: 'Describe the sound or symptom — a loud bang, a crooked door, an opener that runs with nothing moving — and which part of town you are in. A quick photo of the spring or track helps us bring the right parts.' },
			{ q: 'Do you handle both repairs and new door installs in Noblesville?', a: 'We do both. If a repair will hold, we fix it. If a new door makes more sense, we install one. Either way, you hear the price before the work starts.' },
			{ q: 'How do I know if my garage door needs a professional?', a: 'If the door feels heavy by hand, hangs crooked, has come off its track, or shows a gap in the spring, call us. Do not try to work on springs or cables under tension yourself — they can injure you fast.' },
		],
	},
	{
		slug: 'westfield',
		name: 'Westfield',
		county: 'Hamilton County',
		label: 'Northwest',
		description:
			'Garage door repair and installation in Westfield, IN. Springs, openers, and new residential doors. Call Goat at 317-854-6917.',
		lead: 'Goat Garage Door Service brings dependable Garage Door Repair in Westfield to the city\'s growing neighborhoods, sizing springs, aligning tracks, and tuning openers the right way.',
		paragraphs: [
			'Westfield keeps adding houses, and new garages still need springs sized to the door, sensors aimed, and tracks lagged into solid framing. We handle those installs and the repair calls that show up a few years later.',
			'US 31 and the Grand Park side of town are regular territory. If a cable has jumped the drum or a bottom bracket is bent, leave the opener off and call. Those parts are tied to the spring, and the spring is under real tension.',
			'We are based in Fishers and schedule Westfield the same day whenever the board allows. Overnight emergencies go to the phone first: 317-854-6917.',
		],
		places: ['US 31', 'Grand Park', 'Downtown Westfield', 'Oak Ridge'],
		metaTitle: 'Garage Door Repair in Westfield – Goat Garage Door',
		metaDescription: 'Need Garage Door Repair in Westfield? Goat Garage Door Service handles jammed garage doors, sudden malfunctions, and slow or uneven operation. Call today!',
		h1: 'Garage Door Repair in Westfield, IN',
		showTestimonials: true,
		hideNearbyMap: true,
		whyChoose: [
			{ title: 'A short run from Fishers', text: 'Westfield sits just northwest of our Fishers base, so the crew reaches most jobs in a short drive up US 31.' },
			{ title: 'The price comes first', text: 'You hear the number before any repair starts, and if a full door makes more sense than one part, we say so.' },
			{ title: 'The whole door checked', text: 'We disconnect the opener and check the spring, cables, and balance by hand before naming a single part.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, holidays included, when a door traps a car or will not close.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the Westfield door did — a loud bang, a crooked panel, or an opener that runs while nothing moves.' },
			{ title: 'We come from Fishers', text: 'The same crew rolls from Glenn Abbey Lane up to Westfield, no subcontractors.' },
			{ title: 'You hear the price', text: 'We find what failed, give you the number before the work, and you decide.' },
			{ title: 'We fix and test', text: 'We repair the spring, cable, roller, or opener, then test balance and auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'problems',
				h2: 'Garage Door Problems Westfield Homeowners Call About Most',
				layout: 'split',
				imageId: 'install-driveway',
				paragraphs: [
					'Garage Door Repair in Westfield usually starts with a snapped torsion spring, a cable that has frayed or jumped off the drum, worn rollers, or an opener that runs while the door stays put. Many Westfield homes are newer builds near Grand Park, so springs must be sized to the door and tracks lagged into solid framing.',
				],
			},
			{
				id: 'weather',
				h2: 'Garage Door Repair Solutions for Westfield Homeowners',
				layout: 'causes',
				intro: 'Garage Door Repair in Westfield covers the parts that wear and break under daily use, from springs and cables to rollers and openers, each checked and fixed by hand.',
				items: [
					{ title: 'Broken spring replacement', text: 'We replace snapped torsion springs with ones sized to your door, then rebalance it so the opener is not forced to carry the weight.' },
					{ title: 'Cable and roller repair', text: 'We reset or replace frayed cables and worn rollers, and set the door back on its tracks so it runs straight and quiet.' },
					{ title: 'Opener service', text: 'We aim the safety sensors, adjust travel and force, and replace gears or logic boards when an opener runs but the door will not move.' },
					{ title: 'Tune-ups and safety checks', text: 'We test balance, tighten hardware, and confirm auto-reverse so small problems get caught before they strand a car.' },
				],
			},
			{
				id: 'repair-replace',
				h2: 'Repairing a Garage Door Versus Replacing It in Westfield',
				layout: 'compare',
				intro: 'Garage Door Repair in Westfield is the right call for most doors, but we weigh the age, the damage, and the cost before you decide, and we give you both numbers so the choice is yours.',
				columns: [
					{ heading: 'A repair makes sense', points: ['The door is sound with one failed part', 'A spring, cable, or roller is the issue', 'The panels are straight and undamaged', 'The opener needs service, not replacing'] },
					{ heading: 'A replacement makes sense', points: ['Panels are bent, cracked, or rusted', 'The door is old and failing in several spots', 'Repair costs are climbing toward a new door', 'You want a quieter, better-insulated door'] },
				],
				note: 'We give you the repair number and, when it lands close, the price of a new door too.',
			},
			{
				id: 'expect',
				h2: 'Emergency Garage Door Repairs for Unexpected Mechanical Problems',
				layout: 'steps',
				intro: 'Garage Door Repair in Westfield does not wait for business hours. When a spring snaps or an opener dies and a car is stuck, we answer the phone day or night and head out from Fishers.',
				items: [
					{ text: 'Garage Door Repair in Westfield starts with a call to 317-854-6917 or the form, telling us what happened.' },
					{ text: 'The same Fishers crew heads out, up US 31 toward your side of town.' },
					{ text: 'On site we check the door by hand, find the failed part, and give you the price before any work.' },
					{ text: 'We make the repair, test balance and auto-reverse, and leave the door running right.' },
				],
			},
		],
		poi: {
			intro: 'Goat Garage Door Service works out of 10378 Glenn Abbey Ln in Fishers, and Westfield sits just northwest of that base. The drive runs up US 31 toward Grand Park and Downtown Westfield, a short trip the crew makes often as the area keeps growing. The map below shows the route between Westfield and the Fishers base.',
			items: [
				{ title: 'Grand Park', text: 'A large sports complex on the west side of Westfield that draws teams and families from across the region.' },
				{ title: 'Downtown Westfield', text: 'The older core of town along the main streets, with shops, homes, and the civic center.' },
				{ title: 'US 31', text: 'The main north-south corridor that carries most of our Westfield traffic and ties the city to Fishers.' },
				{ title: 'Oak Ridge', text: 'A residential area on the Westfield side where newer homes and garages are common.' },
				{ title: 'Monon Trail', text: 'The paved rail-trail that runs through Westfield and links it to neighboring Hamilton County towns.' },
			],
			mapSrc:
				'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d97825.7337335825!2d-86.14039315517962!3d39.984894554559524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8814a58112169a67%3A0x6cbc14df7cdece6d!2sWestfield%2C%20Indiana%2C%20USA!3m2!1d40.042737599999995!2d-86.1277491!4m5!1s0xa4de2dc397083d3b%3A0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service%2C%2010378%20Glenn%20Abbey%20Ln%2C%20Fishers%2C%20IN%2046037%2C%20United%20States!3m2!1d39.9372773!2d-85.9791138!5e0!3m2!1sen!2s!4v1793860404824!5m2!1sen!2s',
			mapTitle: 'Driving directions from Westfield to Goat Garage Door Service in Fishers',
		},
		faqs: [
			{ q: 'Does Goat Garage Door Service cover Westfield from its Fishers base?', a: 'Yes. We work out of 10378 Glenn Abbey Ln in Fishers and run every job from there. Westfield is a short drive northwest up US 31, so it is regular territory for our crew.' },
			{ q: 'What are the most common garage door repairs in Westfield?', a: 'Snapped torsion springs are the most common, followed by frayed or off-track cables and worn rollers. We also fix openers that run while the door stays put, and we check the whole door before naming a part.' },
			{ q: 'Can you come out if my garage door will not open or close?', a: 'Yes, 24/7. Keep people and cars clear of the door and leave the opener off so nothing moves on its own. Call 317-854-6917 and the crew will head out from Fishers.' },
			{ q: 'What should I tell you when I call about a door in Westfield?', a: 'Describe the sound or symptom — a loud bang, a crooked panel, or an opener that hums but does not move the door. Tell us your part of town, near Grand Park, Oak Ridge, or downtown. A photo helps us arrive ready.' },
			{ q: 'Do you handle both repairs and new door installs in Westfield?', a: 'We do both. We repair springs, cables, rollers, and openers, and we install new doors when that is the better value. Either way, you hear the price before the work begins.' },
			{ q: 'How do I know if my garage door needs a professional?', a: 'If the door feels heavy by hand, hangs crooked, has jumped its track, or you see a gap in the spring, call us. Do not try to work on springs or cables under tension yourself, because they can cause serious injury.' },
		],
	},
	{
		slug: 'lawrence',
		name: 'Lawrence',
		county: 'Marion County',
		label: 'South of Fishers',
		description:
			'Garage door repair and installation in Lawrence, IN, including Oaklandon and Fort Benjamin. Call 317-854-6917, day or night.',
		lead: 'Goat Garage Door Service provides Garage Door Repair in Lawrence that keeps older steel doors and modern openers running safely, with the price set before any work begins.',
		paragraphs: [
			'Lawrence shares a border with Fishers, so calls from Oaklandon, Pendleton Pike, and the Fort Benjamin Harrison area are a short drive.',
			'Many of these garages have original steel doors with worn hinges and a bottom seal that no longer meets the floor. We replace the failed parts when the door is still sound, and we say so when the sections are too far gone and a new door is the better job.',
			'Opener work is part of the same visit. A Chamberlain head sitting on the ceiling gets checked for travel, force, and the sensors at the floor.',
		],
		places: ['Oaklandon', 'Fort Benjamin Harrison', 'Pendleton Pike', 'Geist'],
		metaTitle: 'Garage Door Repair in Lawrence – Goat Garage Door',
		metaDescription: 'Need Garage Door Repair in Lawrence? Goat Garage Door Service handles jammed garage doors, sudden malfunctions, and slow or uneven operation. Call today!',
		h1: 'Garage Door Repair in Lawrence, IN',
		showTestimonials: true,
		hideNearbyMap: true,
		whyChoose: [
			{ title: 'A short run from Fishers', text: 'Lawrence shares a border with Fishers, so our crew is a short drive from Oaklandon, Pendleton Pike, and the Fort Benjamin Harrison area.' },
			{ title: 'The price comes first', text: 'You hear the number before any repair starts, and if a full door makes more sense than one part, we say so.' },
			{ title: 'The whole door checked', text: 'We disconnect the opener and check the spring, cables, and balance by hand before we name a part.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, including holidays, when a door traps a car or will not close.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the Lawrence door did — a bang, a crooked door, or an opener that runs while nothing moves.' },
			{ title: 'We come from Fishers', text: 'The same crew rolls from Glenn Abbey Lane to your home in Lawrence.' },
			{ title: 'You hear the price', text: 'We find what failed, give you the number before the work, and you decide.' },
			{ title: 'We fix and test', text: 'We repair the spring, cable, roller, or opener, then test the balance and auto-reverse before leaving.' },
		],
		seoSections: [
			{
				id: 'problems',
				h2: 'Garage Door Problems Lawrence Homeowners Call About Most',
				layout: 'split',
				imageId: 'install-driveway',
				paragraphs: [
					'Garage Door Repair in Lawrence usually starts with a snapped torsion spring, a frayed cable off its drum, or worn rollers that make the door drag. Many homes still run original steel doors with tired hinges and bottom seals that no longer meet the floor. We also see Chamberlain openers that run while the door stays put.',
				],
			},
			{
				id: 'weather',
				h2: 'Garage Door Repair Solutions for Lawrence Homeowners',
				layout: 'causes',
				intro: 'Garage Door Repair in Lawrence covers the parts that wear out first. Here are the fixes we handle most on the older steel doors around town.',
				items: [
					{ title: 'Broken spring replacement', text: 'A snapped torsion spring leaves the door too heavy to lift. We match the right spring and replace it so the door balances again.' },
					{ title: 'Cable and roller repair', text: 'Frayed cables and worn rollers pull a door off track and make it drag. We reset the cables and swap the rollers so it runs straight and quiet.' },
					{ title: 'Opener service', text: 'Chamberlain openers are common here, and many run while the door stays put. We check the gear, logic board, and travel limits before naming a part.' },
					{ title: 'Tune-ups and safety checks', text: 'We tighten hinges, replace worn bottom seals that no longer meet the floor, and check the balance and auto-reverse so the door stays safe.' },
				],
			},
			{
				id: 'repair-replace',
				h2: 'Repairing a Garage Door Versus Replacing It in Lawrence',
				layout: 'compare',
				intro: 'Garage Door Repair in Lawrence is the right call most of the time, but not always. We weigh the age of the door, the damage, and the cost, then give you both numbers so you can decide.',
				columns: [
					{ heading: 'A repair makes sense', points: ['One spring or cable failed', 'The door is sound but off track', 'Rollers or hinges are worn', 'The opener needs one part'] },
					{ heading: 'A replacement makes sense', points: ['The panels are cracked or bent', 'The steel is rusted through', 'Repairs keep stacking up', 'You want a better-sealed door'] },
				],
				note: 'We give you the repair number and, when the two are close, the price of a new door too.',
			},
			{
				id: 'expect',
				h2: 'Emergency Garage Door Repairs for Unexpected Mechanical Problems',
				layout: 'steps',
				intro: 'Garage Door Repair in Lawrence does not wait for business hours. When a spring snaps or an opener quits, we answer the phone day or night and head your way fast.',
				items: [
					{ text: 'Garage Door Repair in Lawrence starts with a call or the form, telling us what the door did.' },
					{ text: 'The same Fishers crew heads out from Glenn Abbey Lane toward your home.' },
					{ text: 'On site we check the door by hand, find the failed part, and give you the price before any work.' },
					{ text: 'We make the repair, test the balance and auto-reverse, and leave the door running right.' },
				],
			},
		],
		poi: {
			intro: 'Goat Garage Door Service works out of 10378 Glenn Abbey Ln in Fishers. Lawrence shares a border with us, so it is a short drive south to Oaklandon, Pendleton Pike, and the Fort Benjamin Harrison area. The map below shows the route between Lawrence and our Fishers base.',
			items: [
				{ title: 'Fort Benjamin Harrison', text: 'The former Army post, now home to Fort Harrison State Park on the north side of Lawrence.' },
				{ title: 'Oaklandon', text: 'An older neighborhood on the east side of Lawrence, a short drive from our Fishers base.' },
				{ title: 'Pendleton Pike', text: 'The main commercial corridor running through Lawrence, lined with shops and service businesses.' },
				{ title: 'Geist', text: 'The reservoir area along the Fishers and Lawrence line, close to our Glenn Abbey Lane base.' },
				{ title: 'Lawrence Village at the Fort', text: 'The walkable district built around the old Fort Benjamin Harrison grounds.' },
			],
			mapSrc:
				'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d97964.30521490473!2d-86.0984012592696!3d39.8880220364487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x886b4b9e09e776c5%3A0x70cfba96bf83e70!2sLawrence%2C%20Indiana%2C%20USA!3m2!1d39.8386516!2d-86.0252612!4m5!1s0xa4de2dc397083d3b%3A0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service%2C%2010378%20Glenn%20Abbey%20Ln%2C%20Fishers%2C%20IN%2046037%2C%20United%20States!3m2!1d39.9372773!2d-85.9791138!5e0!3m2!1sen!2s!4v1793860422093!5m2!1sen!2s',
			mapTitle: 'Driving directions from Lawrence to Goat Garage Door Service in Fishers',
		},
		faqs: [
			{ q: 'Does Goat Garage Door Service cover Lawrence from its Fishers base?', a: 'Yes. We run every job out of 10378 Glenn Abbey Ln in Fishers, and Lawrence shares a border with us. That makes it a short drive south to reach your home.' },
			{ q: 'What are the most common garage door repairs in Lawrence?', a: 'Snapped torsion springs, frayed cables, and worn rollers top the list. We also service Chamberlain and other openers that run while the door stays put. Many of these show up on the older steel doors around town.' },
			{ q: 'Can you come out if my garage door will not open or close?', a: 'Yes, day or night. Keep people and cars clear of the door and leave the opener off until we arrive. Call 317-854-6917 and we answer 24/7.' },
			{ q: 'What should I tell you when I call about a door in Lawrence?', a: 'Describe the sound or symptom — a bang, a grind, a door hanging crooked — and the part of town you are in, like Oaklandon or near Pendleton Pike. A photo of the spring or track helps us bring the right parts.' },
			{ q: 'Do you handle both repairs and new door installs in Lawrence?', a: 'Yes, we do both. When a repair will hold, we fix it; when a new door makes more sense, we install one. Either way, you hear the price before the work starts.' },
			{ q: 'How do I know if my garage door needs a professional?', a: 'If the door feels heavy by hand, hangs crooked, has jumped the track, or shows a gap in the spring, it needs a pro. Do not try to work on springs or cables under tension yourself — they can cause serious injury.' },
		],
	},
	{
		slug: 'mccordsville',
		name: 'McCordsville',
		county: 'Hancock County',
		label: 'East of Fishers',
		description:
			'Garage door repair and installation in McCordsville, IN. Springs, cables, openers, and new doors from Fishers. Call 317-854-6917.',
		lead: 'Built for doors that take wind and heavy use, Goat Garage Door Service offers Garage Door Repair in McCordsville on springs, cables, rollers, and openers, day or night.',
		paragraphs: [
			'McCordsville is a short drive east of Glenn Abbey Lane. We cover the town for the same work we do in Fishers: broken springs, cables off the drum, opener failures, panel damage, and full door replacements.',
			'Garage doors on the Mt. Comfort Road corridor see a lot of wind and a lot of cycles. A yearly look at rollers, hinges, and balance keeps a heavy door from eating the opener. When something has already snapped, we come out and replace it.',
			'Send a request with a photo of the spring or the opener, or call if the door is down and the cars are inside.',
		],
		places: ['Mt. Comfort Road', 'Broadway', 'Olio Road'],
		metaTitle: 'Garage Door Repair in McCordsville – Goat Garage Door',
		metaDescription: 'Need Garage Door Repair in McCordsville? Goat Garage Door Service handles jammed garage doors, sudden malfunctions, and slow or uneven operation. Call today!',
		h1: 'Garage Door Repair in McCordsville, IN',
		showTestimonials: true,
		hideNearbyMap: true,
		whyChoose: [
			{ title: 'A short run from Fishers', text: 'McCordsville is a short drive east of our Glenn Abbey Lane base, so the crew gets to your door fast.' },
			{ title: 'The price comes first', text: 'You hear the number before any repair starts, and if a full door beats fixing one part, we tell you so.' },
			{ title: 'The whole door checked', text: 'We disconnect the opener and check the spring, cables, and balance by hand before we name a single part.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, holidays included, when a door traps a car or will not close.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the McCordsville door did — a loud bang, a door hanging crooked, or an opener that runs while nothing moves.' },
			{ title: 'We come from Fishers', text: 'The same crew rolls out from Glenn Abbey Lane and heads the short drive east to McCordsville.' },
			{ title: 'You hear the price', text: 'We find what failed, give you the number before the work begins, and you decide.' },
			{ title: 'We fix and test', text: 'We repair the spring, cable, roller, or opener, then test the balance and auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'problems',
				h2: 'Garage Door Problems McCordsville Homeowners Call About Most',
				layout: 'split',
				imageId: 'install-driveway',
				paragraphs: [
					'Garage Door Repair in McCordsville usually starts with a snapped torsion spring, a frayed or off-track cable, or worn rollers on a heavy door. Doors along the Mt. Comfort Road corridor see a lot of wind and a lot of cycles, so another common call is an opener that runs while the door stays put.',
				],
			},
			{
				id: 'weather',
				h2: 'Garage Door Repair Solutions for McCordsville Homeowners',
				layout: 'causes',
				intro: 'Garage Door Repair in McCordsville covers the parts that wear out and fail on a hard-working door. Here are the fixes we handle most for homes around town.',
				items: [
					{ title: 'Broken spring replacement', text: 'A snapped torsion spring takes the lift out of the door. We match the right spring and set the balance by hand.' },
					{ title: 'Cable and roller repair', text: 'Frayed cables and worn rollers pull a door off track. We replace them so the door runs straight and quiet.' },
					{ title: 'Opener service', text: 'When the opener runs but nothing moves, we check the gear, the logic board, and the safety sensors.' },
					{ title: 'Tune-ups and safety checks', text: 'A yearly look at rollers, hinges, and balance keeps a heavy door from eating the opener.' },
				],
			},
			{
				id: 'repair-replace',
				h2: 'Repairing a Garage Door Versus Replacing It in McCordsville',
				layout: 'compare',
				intro: 'Garage Door Repair in McCordsville is often the right call, but not always. We weigh the age of the door, the damage, and the cost, then give you both numbers so you can choose.',
				columns: [
					{ heading: 'A repair makes sense', points: ['One spring or cable has failed', 'The door is sound and fairly new', 'Rollers or hinges are worn', 'The opener needs a single part'] },
					{ heading: 'A replacement makes sense', points: ['Several panels are cracked or bent', 'The door is old and heavy', 'Repairs keep stacking up', 'You want a quieter, insulated door'] },
				],
				note: 'We give you the repair number and, when the two are close, the price of a new door too.',
			},
			{
				id: 'expect',
				h2: 'Emergency Garage Door Repairs for Unexpected Mechanical Problems',
				layout: 'steps',
				intro: 'Garage Door Repair in McCordsville does not wait for business hours. A spring or opener can fail at any time, so we answer the phone and head out day or night.',
				items: [
					{ text: 'Garage Door Repair in McCordsville starts with a call to 317-854-6917 or the form on this page.' },
					{ text: 'The same Fishers crew heads out on the short drive east to your door.' },
					{ text: 'On site we check the door by hand, find the failed part, and give you the price before any work.' },
					{ text: 'We make the repair, test the balance and auto-reverse, and leave the door running right.' },
				],
			},
		],
		poi: {
			intro: 'Goat Garage Door Service works out of 10378 Glenn Abbey Ln in Fishers. McCordsville sits a short drive east, so the crew can be at a door on the Mt. Comfort Road corridor in little time. The map below shows the route between McCordsville and the Fishers base.',
			items: [
				{ title: 'Mt. Comfort Road', text: 'A busy north-south corridor on the east side of McCordsville where many doors see heavy wind and cycle counts.' },
				{ title: 'Broadway', text: 'A main street running through McCordsville that ties neighborhoods to the town center.' },
				{ title: 'Olio Road', text: 'A key route linking McCordsville to Fishers and Geist, carrying much of the daily traffic between them.' },
				{ title: 'Geist Reservoir', text: 'A large reservoir just south and west of McCordsville, ringed by homes with attached garages.' },
				{ title: 'Downtown McCordsville', text: 'The town center near Broadway and Mt. Comfort Road, close to many of the homes we serve.' },
			],
			mapSrc:
				'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24481.63668641557!2d-85.97736529566241!3d39.914437619951755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x886b35546c2d90a9%3A0x8ce49aa6e265c635!2sMcCordsville%2C%20Indiana%2C%20USA!3m2!1d39.8942911!2d-85.91978379999999!4m5!1s0xa4de2dc397083d3b%3A0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service%2C%2010378%20Glenn%20Abbey%20Ln%2C%20Fishers%2C%20IN%2046037%2C%20United%20States!3m2!1d39.9372773!2d-85.9791138!5e0!3m2!1sen!2s!4v1793860437529!5m2!1sen!2s',
			mapTitle: 'Driving directions from McCordsville to Goat Garage Door Service in Fishers',
		},
		faqs: [
			{ q: 'Does Goat Garage Door Service cover McCordsville from its Fishers base?', a: 'Yes. We run every job out of 10378 Glenn Abbey Ln in Fishers, and McCordsville is a short drive east. The crew reaches doors around town quickly.' },
			{ q: 'What are the most common garage door repairs in McCordsville?', a: 'Most calls come down to a snapped torsion spring, a frayed or off-track cable, or worn rollers. We also fix openers that run while the door stays put.' },
			{ q: 'Can you come out if my garage door will not open or close?', a: 'Yes, any time. Keep people and cars clear of the door and leave the opener off. Call 317-854-6917 and we will head out 24/7.' },
			{ q: 'What should I tell you when I call about a door in McCordsville?', a: 'Describe the sound or symptom — a bang, a crooked door, an opener that runs with no movement — and the part of town you are in. A photo helps us bring the right parts.' },
			{ q: 'Do you handle both repairs and new door installs in McCordsville?', a: 'We do both. Whether you need one part fixed or a full new door, we find what makes sense and you hear the price before any work starts.' },
			{ q: 'How do I know if my garage door needs a professional?', a: 'If the door feels heavy by hand, hangs crooked, sits off track, or a spring shows a gap, call us. Do not try to work on springs or cables yourself, since they are under high tension.' },
		],
	},
	{
		slug: 'zionsville',
		name: 'Zionsville',
		county: 'Boone County',
		label: 'West metro',
		description:
			'Garage door repair and installation in Zionsville, IN. Fishers-based crew for springs, openers, and new doors. Call 317-854-6917.',
		lead: 'Goat Garage Door Service pairs careful Garage Door Repair in Zionsville with respect for your home, matching springs to heavy carriage-house and wood-look doors so they last.',
		paragraphs: [
			'Zionsville is farther west than Carmel, and we still take it. Village garages and the newer neighborhoods along the Michigan Road side both call for the same hardware: torsion springs, lift cables, and openers that have to reverse if something is in the way.',
			'Carriage-house and wood-look doors are common here. We install them level, set the spring to the door weight, and leave the opener tuned to that weight. A pretty door with the wrong spring will fail early.',
			'For a door that is stuck tonight, call. For a replacement you have been planning, send the rough opening size and a photo of the current door.',
		],
		places: ['Zionsville Village', 'Michigan Road', 'Oak Street', 'Sycamore Street'],
		metaTitle: 'Garage Door Repair in Zionsville – Goat Garage Door',
		metaDescription: 'Need Garage Door Repair in Zionsville? Goat Garage Door Service handles jammed garage doors, sudden malfunctions, and slow or uneven operation. Call today!',
		h1: 'Garage Door Repair in Zionsville, IN',
		showTestimonials: true,
		hideNearbyMap: true,
		whyChoose: [
			{ title: 'A short run from Fishers', text: 'Our base at 10378 Glenn Abbey Ln in Fishers is a straight run west to Zionsville, so the crew gets there without a long wait.' },
			{ title: 'The price comes first', text: 'You hear the number before any repair starts, and if a full door makes more sense than one worn part, we say so.' },
			{ title: 'The whole door checked', text: 'We disconnect the opener and check the spring, cables, and balance by hand before we name a single part.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, holidays included, when a door traps a car or will not close.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the door did in Zionsville, a loud bang, a door hanging crooked, or an opener that runs while nothing moves.' },
			{ title: 'We come from Fishers', text: 'The same crew rolls from Glenn Abbey Lane in Fishers west to your street in Zionsville.' },
			{ title: 'You hear the price', text: 'We find what failed, give you the number before the work, and you decide.' },
			{ title: 'We fix and test', text: 'We replace the spring, cable, roller, or opener, then test balance and auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'problems',
				h2: 'Garage Door Problems Zionsville Homeowners Call About Most',
				layout: 'split',
				imageId: 'install-driveway',
				paragraphs: [
					'Garage Door Repair in Zionsville usually starts with a snapped torsion spring, a frayed or off-track cable, worn rollers, or an opener that runs while the door stays put. Many Village garages and newer Michigan Road homes use carriage-house and wood-look doors, which are heavy, so the spring must match the door weight or the door fails early.',
				],
			},
			{
				id: 'weather',
				h2: 'Garage Door Repair Solutions for Zionsville Homeowners',
				layout: 'causes',
				intro: 'Garage Door Repair in Zionsville covers the parts that wear and break, and here are the fixes we run most for homes across the Village and the Michigan Road side.',
				items: [
					{ title: 'Broken spring replacement', text: 'A snapped torsion spring is the most common failure, and we match the new spring to the weight of your carriage-house or wood-look door so it lasts.' },
					{ title: 'Cable and roller repair', text: 'Frayed cables and worn rollers pull a door off track and make it bind. We replace them and reset the door so it runs square.' },
					{ title: 'Opener service', text: 'When the opener runs but the door stays put, the problem is often the gear, the trolley, or the logic board. We find it and fix or replace the unit.' },
					{ title: 'Tune-ups and safety checks', text: 'We tighten hardware, lube the moving parts, check the balance by hand, and test the auto-reverse so the door stays safe.' },
				],
			},
			{
				id: 'repair-replace',
				h2: 'Repairing a Garage Door Versus Replacing It in Zionsville',
				layout: 'compare',
				intro: 'With Garage Door Repair in Zionsville we weigh the age of the door, the damage, and the cost before we advise. You hear the repair number, and when a new door is close in price, you hear that too.',
				columns: [
					{ heading: 'A repair makes sense', points: ['The door is under ten years old', 'One part failed, like a spring or cable', 'The panels are straight and solid', 'The frame and track are in good shape'] },
					{ heading: 'A replacement makes sense', points: ['The door is old and worn through', 'A car hit it and bent the panels', 'Several parts fail at once', 'Repair cost climbs near the price of new'] },
				],
				note: 'We give you the repair number first, and when it runs close, we price a new door too.',
			},
			{
				id: 'expect',
				h2: 'Emergency Garage Door Repairs for Unexpected Mechanical Problems',
				layout: 'steps',
				intro: 'Garage Door Repair in Zionsville does not wait for business hours. A spring can snap or an opener can quit at any time, so we answer the phone day or night and head out fast.',
				items: [
					{ text: 'Start your Garage Door Repair in Zionsville with a call to 317-854-6917 or the form, and tell us what went wrong.' },
					{ text: 'The same Fishers crew heads out from Glenn Abbey Lane toward your street.' },
					{ text: 'On site we check the door by hand, find the failed part, and give you the price before any work.' },
					{ text: 'We make the repair, test balance and auto-reverse, and leave the door running right.' },
				],
			},
		],
		poi: {
			intro: 'Goat Garage Door Service works out of 10378 Glenn Abbey Ln in Fishers. Zionsville sits a straight run west, farther out than Carmel, so the crew drives past Carmel to reach the Village and the newer neighborhoods along the Michigan Road side. The map below shows the route between Zionsville and the Fishers base.',
			items: [
				{ title: 'Zionsville Village', text: 'The old center of town, known for its brick Main Street and small shops.' },
				{ title: 'Michigan Road', text: 'The busy west-side corridor lined with newer neighborhoods and homes.' },
				{ title: 'Oak Street', text: 'A residential street near the heart of the Village.' },
				{ title: 'Sycamore Street', text: 'Another Village street of older homes and garages.' },
				{ title: 'Zionsville Rail Trail', text: 'A paved trail that runs through town on a former rail line.' },
			],
			mapSrc:
				'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d97911.57937881077!2d-86.21157705828671!3d39.92490466547179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8813557095a85b13%3A0x70cfba84ddeac50!2sZionsville%2C%20Indiana%2C%20USA!3m2!1d39.9500433!2d-86.27889479999999!4m5!1s0xa4de2dc397083d3b%3A0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service%2C%2010378%20Glenn%20Abbey%20Ln%2C%20Fishers%2C%20IN%2046037%2C%20United%20States!3m2!1d39.9372773!2d-85.9791138!5e0!3m2!1sen!2s!4v1793860452368!5m2!1sen!2s',
			mapTitle: 'Driving directions from Zionsville to Goat Garage Door Service in Fishers',
		},
		faqs: [
			{ q: 'Does Goat Garage Door Service cover Zionsville from its Fishers base?', a: 'Yes. We run every job out of 10378 Glenn Abbey Ln in Fishers, and Zionsville is a straight drive west, farther out than Carmel. The same crew makes the trip, so you get the people who know the work.' },
			{ q: 'What are the most common garage door repairs in Zionsville?', a: 'Most calls are broken torsion springs, frayed or off-track cables, and worn rollers. Opener trouble is close behind, where the motor runs but the door does not move. On heavy carriage-house and wood-look doors, the spring has to match the weight.' },
			{ q: 'Can you come out if my garage door will not open or close?', a: 'Yes, any hour. Keep people and cars clear of the door, leave the opener off, and do not force it. Call 317-854-6917 and we will head out, 24/7.' },
			{ q: 'What should I tell you when I call about a door in Zionsville?', a: 'Describe the sound and what the door did, a bang, a grind, or an opener that runs with no movement. Tell us the part of town, the Village or the Michigan Road side. A photo of the spring or cable helps us arrive ready.' },
			{ q: 'Do you handle both repairs and new door installs in Zionsville?', a: 'We do both. We repair springs, cables, rollers, and openers, and we install new doors when a repair no longer makes sense. Either way, you hear the price before the work starts.' },
			{ q: 'How do I know if my garage door needs a professional?', a: 'If the door feels heavy by hand, hangs crooked, has jumped the track, or shows a gap in the spring, call a pro. Springs and cables are under high tension, so do not try to fix those yourself.' },
		],
	},
	{
		slug: 'greenwood',
		name: 'Greenwood',
		county: 'Johnson County',
		label: 'South metro',
		description:
			'Garage door repair and installation in Greenwood, IN. Springs, openers, cables, and new doors from a Fishers crew. Call 317-854-6917.',
		lead: 'Goat Garage Door Service covers the south metro with Garage Door Repair in Greenwood, replacing broken springs, resetting cables, and reviving openers on insulated steel doors.',
		paragraphs: [
			'Greenwood is the big city south of Indianapolis, about 23 miles from Glenn Abbey Lane in Fishers. Calls come from older garages near Main Street and from newer sections toward Smith Valley and Worthsville Road.',
			'A lot of these doors are insulated steel with a trolley opener. When a spring breaks, the door gets heavy and the opener should stay off until the spring is replaced. We size the new spring to the door, set the cables back on the drums, and check that the door stays put halfway open.',
			'If the cars are trapped or the door is stuck open for the night, call 317-854-6917. For a planned replacement, send the rough opening and a photo of the current door.',
		],
		places: ['Downtown Greenwood', 'County Line Road', 'Smith Valley', 'Worthsville Road', 'US 31', 'Center Grove'],
		metaTitle: 'Garage Door Repair in Greenwood – Goat Garage Door',
		metaDescription: 'Need Garage Door Repair in Greenwood? Goat Garage Door Service handles jammed garage doors, sudden malfunctions, and slow or uneven operation. Call today!',
		h1: 'Garage Door Repair in Greenwood, IN',
		showTestimonials: true,
		hideNearbyMap: true,
		whyChoose: [
			{ title: 'Greenwood covered from Fishers', text: 'We run every job out of our Fishers base on Glenn Abbey Lane and drive the roughly 23 miles south to Greenwood.' },
			{ title: 'The price comes first', text: 'You hear the number before any repair starts, and if a full door makes more sense than one part, we say so.' },
			{ title: 'The whole door checked', text: 'We disconnect the opener and check the spring, cables, and balance by hand before we name a single part.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, holidays included, when a door traps a car or will not close.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the Greenwood door did — a bang, a crooked door, or an opener that runs while nothing moves.' },
			{ title: 'We come from Fishers', text: 'The same crew rolls from Glenn Abbey Lane in Fishers down to your door in Greenwood.' },
			{ title: 'You hear the price', text: 'We find what failed, give you the number before the work, and you decide.' },
			{ title: 'We fix and test', text: 'We repair the spring, cable, roller, or opener, then test the balance and auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'problems',
				h2: 'Garage Door Problems Greenwood Homeowners Call About Most',
				layout: 'split',
				imageId: 'install-driveway',
				paragraphs: [
					'Garage Door Repair in Greenwood usually starts with a snapped torsion spring, a frayed or off-track cable, worn rollers, or an opener that runs while the door stays put. Many homes here use insulated steel doors on trolley openers, so a tired spring or bad cable shows up fast and leaves a heavy door that will not lift.',
				],
			},
			{
				id: 'weather',
				h2: 'Garage Door Repair Solutions for Greenwood Homeowners',
				layout: 'causes',
				intro: 'Most Garage Door Repair in Greenwood comes down to a few fixes. Here is what we handle most on the insulated steel doors and trolley openers common around town.',
				items: [
					{ title: 'Broken spring replacement', text: 'A snapped torsion spring leaves the door too heavy to lift. We replace it with the right-rated spring and reset the balance.' },
					{ title: 'Cable and roller repair', text: 'Frayed cables and worn rollers pull a door off track and make it bind. We replace them and get the door riding straight again.' },
					{ title: 'Opener service', text: 'When the opener runs but the door stays put, the trouble is often a stripped gear, bad logic board, or disconnected trolley. We find it and fix it.' },
					{ title: 'Tune-ups and safety checks', text: 'We tighten hardware, check the balance by hand, and test the auto-reverse so a working door keeps working.' },
				],
			},
			{
				id: 'repair-replace',
				h2: 'Repairing a Garage Door Versus Replacing It in Greenwood',
				layout: 'compare',
				intro: 'Not every door is worth saving. For Garage Door Repair in Greenwood we weigh the age of the door, how much is damaged, and the cost, then give you both numbers so you can decide with facts.',
				columns: [
					{ heading: 'A repair makes sense', points: ['One part failed, like a spring or cable', 'The door and panels are sound', 'The opener still has good years left', 'The fix costs far less than a new door'] },
					{ heading: 'A replacement makes sense', points: ['The door is old and worn through', 'Several panels are bent or cracked', 'Repairs keep stacking up', 'A new insulated door costs about the same as the repair'] },
				],
				note: 'We give you the repair number and, when the two are close, the price of a new door too.',
			},
			{
				id: 'expect',
				h2: 'Emergency Garage Door Repairs for Unexpected Mechanical Problems',
				layout: 'steps',
				intro: 'Springs and openers fail without warning. Garage Door Repair in Greenwood is on call day or night, so a sudden break that traps a car or jams a door gets a fast response.',
				items: [
					{ text: 'Garage Door Repair in Greenwood starts with a call or the form — tell us what happened and where you are.' },
					{ text: 'The same Fishers crew heads out from Glenn Abbey Lane toward your door.' },
					{ text: 'On site we check the door by hand, find the failed part, and give you the price before any work.' },
					{ text: 'We make the repair, test the balance and auto-reverse, and leave the door running right.' },
				],
			},
		],
		poi: {
			intro: 'Goat Garage Door Service works out of 10378 Glenn Abbey Ln in Fishers. Greenwood is the big city south of Indianapolis, about 23 miles from our base, and the crew runs the drive down US 31 and the interstate to reach it. The map below shows the route between Greenwood and the Fishers base.',
			items: [
				{ title: 'Downtown Greenwood', text: 'Old Town around Main Street, where many of the older garages sit.' },
				{ title: 'County Line Road', text: 'The busy east-west line along the north edge of Greenwood.' },
				{ title: 'Smith Valley', text: 'A newer section with homes built out in recent years.' },
				{ title: 'Worthsville Road', text: 'Another growing corridor of newer construction on the south side.' },
				{ title: 'Center Grove', text: 'The area west of US 31 known for its schools and subdivisions.' },
			],
			mapSrc:
				'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d196254.85795581638!2d-86.22928629485767!3d39.77373376427708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x886b42e1c9ae07a9%3A0x1f1f701ecefcc1e3!2sGreenwood%2C%20Indiana%2C%20USA!3m2!1d39.6136589!2d-86.1097254!4m5!1s0xa4de2dc397083d3b%3A0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service%2C%2010378%20Glenn%20Abbey%20Ln%2C%20Fishers%2C%20IN%2046037%2C%20United%20States!3m2!1d39.9372773!2d-85.9791138!5e0!3m2!1sen!2s!4v1793860469179!5m2!1sen!2s',
			mapTitle: 'Driving directions from Greenwood to Goat Garage Door Service in Fishers',
		},
		faqs: [
			{ q: 'Does Goat Garage Door Service cover Greenwood from its Fishers base?', a: 'Yes. We work out of 10378 Glenn Abbey Ln in Fishers and cover Greenwood on every job. The drive south is about 23 miles, and the same crew makes it.' },
			{ q: 'What are the most common garage door repairs in Greenwood?', a: 'Broken torsion springs are the most common, followed by frayed or off-track cables and worn rollers. Openers that run while the door stays put round out the list. We handle all of them.' },
			{ q: 'Can you come out if my garage door will not open or close?', a: 'Yes, any time. Keep people and cars clear of the door and leave the opener off so nothing moves on its own. Call 317-854-6917, 24/7, and we will head out.' },
			{ q: 'What should I tell you when I call about a door in Greenwood?', a: 'Describe the sound or symptom — a bang, a grind, a crooked door, or an opener that runs with no movement. Tell us what part of town you are in, like Smith Valley or near Main Street. A photo helps us bring the right parts.' },
			{ q: 'Do you handle both repairs and new door installs in Greenwood?', a: 'We do both. If a repair will hold, we repair it. If a new door makes more sense, we install one. Either way you hear the price before any work starts.' },
			{ q: 'How do I know if my garage door needs a professional?', a: 'If the door feels heavy by hand, hangs crooked, has come off its track, or you see a gap in the spring, call us. Do not try to work on springs or cables yourself — they are under high tension and can injure you.' },
		],
	},
	{
		slug: 'anderson',
		name: 'Anderson',
		county: 'Madison County',
		label: 'Northeast',
		description:
			'Garage door repair and installation in Anderson, IN. 24/7 springs, cables, openers, and new doors. Call 317-854-6917.',
		lead: 'A short run up I-69, Goat Garage Door Service delivers Garage Door Repair in Anderson, replacing single-spring setups and worn hardware so older doors lift straight again.',
		paragraphs: [
			'Anderson sits up I-69 from Fishers, still inside a 25-mile run. We cover downtown, the Scatterfield Road corridor, and the neighborhoods on the west side of town.',
			'Many Anderson garages are older raised-panel doors with a single torsion spring. When that spring lets go, the door racks and the opener cannot lift it. We replace the spring, rewind the cables, and look at the rollers and hinges before the opener goes back to work.',
			'New installs follow the same plan as a Fishers job: measure the opening, hang the door, and set the spring and opener to the weight of that door.',
		],
		places: ['Downtown Anderson', 'Scatterfield Road', 'Madison Park', 'West side', 'I-69', 'Nichol Avenue'],
		metaTitle: 'Garage Door Repair in Anderson – Goat Garage Door',
		metaDescription: 'Need Garage Door Repair in Anderson? Goat Garage Door Service handles jammed garage doors, sudden malfunctions, and slow or uneven operation. Call today!',
		h1: 'Garage Door Repair in Anderson, IN',
		showTestimonials: true,
		hideNearbyMap: true,
		whyChoose: [
			{ title: 'Anderson covered from Fishers', text: 'We run Anderson from our Fishers base, about 20 miles up I-69, well inside our 25-mile range.' },
			{ title: 'The price comes first', text: 'You hear the number before any repair starts, and if a full door makes more sense than one part, we say so.' },
			{ title: 'The whole door checked', text: 'We disconnect the opener and check the spring, cables, and balance by hand before we name a part.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, holidays included, when a door traps a car or will not close.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the Anderson door did, whether it was a loud bang, a door hanging crooked, or an opener that runs while nothing moves.' },
			{ title: 'We come from Fishers', text: 'The same crew rolls from Glenn Abbey Lane up I-69 to your door in Anderson.' },
			{ title: 'You hear the price', text: 'We find what failed, give you the number before the work, and you decide.' },
			{ title: 'We fix and test', text: 'We repair the spring, cable, roller, or opener, then test balance and auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'problems',
				h2: 'Garage Door Problems Anderson Homeowners Call About Most',
				layout: 'split',
				imageId: 'install-driveway',
				paragraphs: [
					'Garage Door Repair in Anderson usually starts with a snapped torsion spring. Many older raised-panel doors here run on a single torsion spring, so when it lets go the door racks and will not lift. We also see frayed or off-track cables, worn rollers, and openers that run while the door stays put.',
				],
			},
			{
				id: 'weather',
				h2: 'Garage Door Repair Solutions for Anderson Homeowners',
				layout: 'causes',
				intro: 'Most Garage Door Repair in Anderson comes down to four fixes. Here is what we handle most and how each one gets your door moving again.',
				items: [
					{ title: 'Broken spring replacement', text: 'We replace snapped torsion springs on older raised-panel doors and set the right size for the door weight. On a single-spring setup we talk through adding a second spring for longer life.' },
					{ title: 'Cable and roller repair', text: 'We reseat or replace frayed and off-track cables and swap worn rollers so the door tracks straight and quiet.' },
					{ title: 'Opener service', text: 'When the opener runs but the door stays put, we check the gear, trolley, and logic board, then repair or replace what failed.' },
					{ title: 'Tune-ups and safety checks', text: 'We balance the door by hand, tighten hardware, and test the auto-reverse so small problems do not turn into a stuck door.' },
				],
			},
			{
				id: 'repair-replace',
				h2: 'Repairing a Garage Door Versus Replacing It in Anderson',
				layout: 'compare',
				intro: 'Not every door is worth a new one, so our Garage Door Repair in Anderson weighs the age, the damage, and the cost. We give you the repair number and, when a new door is close in price, that number too, and you decide.',
				columns: [
					{ heading: 'A repair makes sense', points: ['The door is sound but a spring or cable failed', 'Panels are straight and the frame is solid', 'Rollers or the opener are the only weak points', 'The fix costs far less than a new door'] },
					{ heading: 'A replacement makes sense', points: ['Panels are bent, cracked, or rusted through', 'The door is old and failing in several places', 'Repair costs are creeping toward a new door', 'You want a quieter, better-insulated door'] },
				],
				note: 'We give you the repair number first and, when the two are close, the price of a new door so you can compare.',
			},
			{
				id: 'expect',
				h2: 'Emergency Garage Door Repairs for Unexpected Mechanical Problems',
				layout: 'steps',
				intro: 'Springs and openers fail without warning, so our Garage Door Repair in Anderson runs day or night. When a door drops or jams and traps a car, we move fast to get you back in and out.',
				items: [
					{ text: 'Garage Door Repair in Anderson starts with a call to 317-854-6917 or the form, telling us what the door did.' },
					{ text: 'The same Fishers crew heads out up I-69, about 20 miles, straight to your door.' },
					{ text: 'On site we check the door by hand, find the failed part, and give you the price before any work begins.' },
					{ text: 'We make the repair, test the balance and auto-reverse, and leave the door running right.' },
				],
			},
		],
		poi: {
			intro: 'Goat Garage Door Service works out of 10378 Glenn Abbey Ln in Fishers, and every Anderson job runs from there. The drive is straight up I-69, about 20 miles, well inside our 25-mile range, so we reach downtown, the Scatterfield Road corridor, and the west side without a long wait. The map below shows the route between Anderson and the Fishers base.',
			items: [
				{ title: 'Downtown Anderson', text: 'The historic core of the city, with older homes and raised-panel garage doors we service often.' },
				{ title: 'Scatterfield Road', text: 'The main commercial corridor on the east side, running north and south through Anderson.' },
				{ title: 'Madison Park', text: 'A residential neighborhood in Anderson within easy reach of our Fishers crew.' },
				{ title: 'Nichol Avenue', text: 'A key west-side route we cover on calls across that part of the city.' },
				{ title: 'Mounds State Park', text: 'A state park on the White River at the east edge of Anderson, a well-known local landmark.' },
			],
			mapSrc:
				'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d118341.01979291512!2d-85.98365811152469!3d39.96914054448373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8814d985845cc003%3A0x90170315640b4343!2sAnderson%2C%20Indiana%2C%20USA!3m2!1d40.1051253!2d-85.6781677!4m5!1s0xa4de2dc397083d3b%3A0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service%2C%2010378%20Glenn%20Abbey%20Ln%2C%20Fishers%2C%20IN%2046037%2C%20United%20States!3m2!1d39.9372773!2d-85.9791138!5e0!3m2!1sen!2s!4v1793860486013!5m2!1sen!2s',
			mapTitle: 'Driving directions from Anderson to Goat Garage Door Service in Fishers',
		},
		faqs: [
			{ q: 'Does Goat Garage Door Service cover Anderson from its Fishers base?', a: 'Yes. We work out of 10378 Glenn Abbey Ln in Fishers and run every Anderson job from there. The drive is straight up I-69, about 20 miles, so we reach you quickly.' },
			{ q: 'What are the most common garage door repairs in Anderson?', a: 'Snapped torsion springs top the list, especially on older raised-panel doors with a single spring. We also handle frayed or off-track cables, worn rollers, and openers that run while the door stays put.' },
			{ q: 'Can you come out if my garage door will not open or close?', a: 'Yes, and we answer the phone 24/7. Keep people and cars clear of the door, leave the opener off so no one hits the button, and call 317-854-6917.' },
			{ q: 'What should I tell you when I call about a door in Anderson?', a: 'Describe the sound or symptom, such as a loud bang, a crooked door, or an opener that runs with no movement. Tell us your part of town, whether that is downtown, Scatterfield Road, or the west side. A photo helps us arrive ready.' },
			{ q: 'Do you handle both repairs and new door installs in Anderson?', a: 'Yes, we do both. If a repair will hold, we fix it, and if a new door makes more sense, we install one. Either way you hear the price before the work.' },
			{ q: 'How do I know if my garage door needs a professional?', a: 'If the door feels heavy by hand, hangs crooked, has jumped off the track, or you see a gap in the spring, call us. Do not try to work on springs or cables under tension yourself, as they can cause serious injury.' },
		],
	},
	{
		slug: 'brownsburg',
		name: 'Brownsburg',
		county: 'Hendricks County',
		label: 'West side',
		description:
			'Garage door repair and installation in Brownsburg, IN. Springs, openers, and new residential doors. Call 317-854-6917.',
		lead: 'Goat Garage Door Service provides Garage Door Repair in Brownsburg for newer insulated doors, correcting light springs, failed sensors, and balance problems with the price quoted first.',
		paragraphs: [
			'Brownsburg is a straight shot west, past Speedway, about 23 miles from Glenn Abbey Lane. Most of the work is on newer insulated doors along Northfield Drive, US 136, and the subdivisions north of Main Street.',
			'New houses show up with doors that were never quite balanced, sensors that quit, and springs that were light for an insulated door. We correct that hardware, and we replace a door when a section is dented past a panel swap.',
			'Same-day scheduling depends on what is already on the board. Overnight emergencies go to the phone: 317-854-6917.',
		],
		places: ['Downtown Brownsburg', 'Northfield Drive', 'US 136', 'Main Street', 'Hornaday Road'],
		metaTitle: 'Garage Door Repair in Brownsburg – Goat Garage Door',
		metaDescription: 'Need Garage Door Repair in Brownsburg? Goat Garage Door Service handles jammed garage doors, sudden malfunctions, and slow or uneven operation. Call today!',
		h1: 'Garage Door Repair in Brownsburg, IN',
		showTestimonials: true,
		hideNearbyMap: true,
		whyChoose: [
			{ title: 'Brownsburg from Fishers', text: 'We cover Brownsburg from our Fishers base, a straight shot west past Speedway, about 23 miles from Glenn Abbey Lane.' },
			{ title: 'The price comes first', text: 'You hear the number before any repair starts, and if a full door makes more sense than one part, we tell you.' },
			{ title: 'The whole door checked', text: 'We disconnect the opener and check the spring, cables, and balance by hand before we name a part.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, holidays included, when a door traps a car or will not close.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the Brownsburg door did, a bang, a crooked door, or an opener that runs while nothing moves.' },
			{ title: 'We come from Fishers', text: 'The same crew rolls out of Glenn Abbey Lane and heads west to Brownsburg.' },
			{ title: 'You hear the price', text: 'We find what failed, give you the number before the work, and you decide.' },
			{ title: 'We fix and test', text: 'We repair the spring, cable, roller, or opener, then test balance and auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'problems',
				h2: 'Garage Door Problems Brownsburg Homeowners Call About Most',
				layout: 'split',
				imageId: 'install-driveway',
				paragraphs: [
					'Garage Door Repair in Brownsburg usually starts with a snapped torsion spring, a frayed or off-track cable, worn rollers, or an opener that runs while the door stays put. Along Northfield Drive and US 136, these are mostly newer insulated doors, and we often find springs too light for the door and sensors that quit.',
				],
			},
			{
				id: 'weather',
				h2: 'Garage Door Repair Solutions for Brownsburg Homeowners',
				layout: 'causes',
				intro: 'Garage Door Repair in Brownsburg covers the core failures on newer insulated doors, from broken springs and cables to openers and the yearly tune-up that keeps them running.',
				items: [
					{ title: 'Broken spring replacement', text: 'We replace snapped torsion springs and match the spring to an insulated door, so the weight is balanced and the opener is not doing the lifting.' },
					{ title: 'Cable and roller repair', text: 'We reset or replace frayed and off-track cables and swap worn rollers so the door rides straight in the track.' },
					{ title: 'Opener service', text: 'When the opener runs but the door stays put, we check the gear, the sensors, and the limits, and fix the sensors that so often quit on newer homes.' },
					{ title: 'Tune-ups and safety checks', text: 'We balance the door by hand, tighten hardware, and test auto-reverse so a light spring or loose part does not turn into a breakdown.' },
				],
			},
			{
				id: 'repair-replace',
				h2: 'Repairing a Garage Door Versus Replacing It in Brownsburg',
				layout: 'compare',
				intro: 'With Garage Door Repair in Brownsburg we weigh the age of the door, the damage, and the cost, then give you both numbers, the repair and a new door, so you can pick the one that makes sense.',
				columns: [
					{ heading: 'A repair makes sense', points: ['The door and panels are sound', 'One part failed, like a spring or cable', 'The opener still runs well', 'The door is newer and insulated'] },
					{ heading: 'A replacement makes sense', points: ['Panels are bent or cracked', 'Several parts are worn at once', 'The door is old or uninsulated', 'Repair cost nears a new door'] },
				],
				note: 'We give you the repair number and, when it is close, the price of a new door too.',
			},
			{
				id: 'expect',
				h2: 'Emergency Garage Door Repairs for Unexpected Mechanical Problems',
				layout: 'steps',
				intro: 'Garage Door Repair in Brownsburg runs day or night, because a spring or opener can fail with no warning and leave a car trapped. We answer the phone and head out when it happens.',
				items: [
					{ text: 'Garage Door Repair in Brownsburg starts with a call to 317-854-6917 or the form, with a quick word on what the door did.' },
					{ text: 'The same Fishers crew heads out from Glenn Abbey Lane, straight west past Speedway to Brownsburg.' },
					{ text: 'On site we check the door by hand, find the failed part, and give you the price before any work begins.' },
					{ text: 'We make the repair, test balance and auto-reverse, and leave the door running right.' },
				],
			},
		],
		poi: {
			intro: 'Goat Garage Door Service works out of 10378 Glenn Abbey Ln in Fishers. Brownsburg is a straight shot west, past Speedway, about 23 miles from Glenn Abbey Lane, so the same crew makes the drive on every job. The map below shows the route between Brownsburg and the Fishers base.',
			items: [
				{ title: 'Downtown Brownsburg', text: 'The older core of town around the shops and civic buildings, where a mix of homes and small businesses sit close together.' },
				{ title: 'Northfield Drive', text: 'A newer corridor lined with insulated doors on homes that often show light springs and balance issues.' },
				{ title: 'US 136', text: 'The main east-west route through Brownsburg, linking downtown to the subdivisions and commercial strips.' },
				{ title: 'Main Street', text: 'The spine of town, with newer subdivisions spreading out to the north of it.' },
				{ title: 'Hornaday Road', text: 'A north-south road serving neighborhoods and schools on the west side of Brownsburg.' },
			],
			mapSrc:
				'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d196002.65836642304!2d-86.35368687607685!3d39.862106148257915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x886cae0a5dcd0327%3A0x70cfba96bf830e0!2sBrownsburg%2C%20Indiana%2C%20USA!3m2!1d39.8433163!2d-86.397956!4m5!1s0xa4de2dc397083d3b%3A0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service%2C%2010378%20Glenn%20Abbey%20Ln%2C%20Fishers%2C%20IN%2046037%2C%20United%20States!3m2!1d39.9372773!2d-85.9791138!5e0!3m2!1sen!2s!4v1793860505229!5m2!1sen!2s',
			mapTitle: 'Driving directions from Brownsburg to Goat Garage Door Service in Fishers',
		},
		faqs: [
			{ q: 'Does Goat Garage Door Service cover Brownsburg from its Fishers base?', a: 'Yes. We work out of 10378 Glenn Abbey Ln in Fishers and cover Brownsburg on every job. It is a straight shot west, past Speedway, about 23 miles, so the same crew makes the drive.' },
			{ q: 'What are the most common garage door repairs in Brownsburg?', a: 'Snapped torsion springs, frayed or off-track cables, and worn rollers come up most. On newer insulated doors we also see openers that run while the door stays put and sensors that have quit.' },
			{ q: 'Can you come out if my garage door will not open or close?', a: 'Yes, 24/7. Keep people and cars clear of the door and leave the opener off so nothing moves on its own. Then call 317-854-6917 and we will head out.' },
			{ q: 'What should I tell you when I call about a door in Brownsburg?', a: 'Describe the sound or symptom, like a bang, a crooked door, or an opener that runs with nothing moving. Tell us the part of town, near Northfield Drive or north of Main Street. A photo helps us bring the right parts.' },
			{ q: 'Do you handle both repairs and new door installs in Brownsburg?', a: 'We do both. We repair springs, cables, rollers, and openers, and we install new doors when that is the better call. Either way, you hear the price before the work starts.' },
			{ q: 'How do I know if my garage door needs a professional?', a: 'If the door feels heavy by hand, hangs crooked, has come off the track, or shows a gap in the spring, call us. Do not try to work on springs or cables under tension yourself, as they can cause serious injury.' },
		],
	},
	{
		slug: 'greenfield',
		name: 'Greenfield',
		county: 'Hancock County',
		label: 'Southeast',
		description:
			'Garage door repair and installation in Greenfield, IN. Springs, cables, openers, and new doors from Fishers. Call 317-854-6917.',
		lead: 'From the courthouse square to the newer sections along New Road, Goat Garage Door Service handles Garage Door Repair in Greenfield on springs, cables, rollers, and openers.',
		paragraphs: [
			'Greenfield is farther east than McCordsville and still a regular drive from Fishers, about 15 miles out US 40 or toward I-70. We work on older doors near the courthouse square and on wider doors in the sections north of town along New Road.',
			'The job is the same one we do in Fishers. A broken spring gets replaced and sized to the door. Cables go back on the drums even. The opener gets checked only after the door moves by hand the way it should.',
			'Call if the door will not close for the night. For a replacement, send a photo of the opening and the current door.',
		],
		places: ['Downtown Greenfield', 'US 40', 'New Road', 'Riley Park', 'I-70', 'Broadway'],
		metaTitle: 'Garage Door Repair in Greenfield – Goat Garage Door',
		metaDescription: 'Need Garage Door Repair in Greenfield? Goat Garage Door Service handles jammed garage doors, sudden malfunctions, and slow or uneven operation. Call today!',
		h1: 'Garage Door Repair in Greenfield, IN',
		showTestimonials: true,
		hideNearbyMap: true,
		whyChoose: [
			{ title: 'Greenfield from Fishers', text: 'We run every job out of our Fishers base and reach Greenfield in about 15 miles east on US 40 or I-70.' },
			{ title: 'The price comes first', text: 'You hear the number before any repair starts, and if a full door makes more sense than one part, we tell you.' },
			{ title: 'The whole door checked', text: 'We disconnect the opener and check the spring, cables, and balance by hand before we name a single part.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, holidays included, for a door that traps a car or will not close.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the Greenfield door did — a loud bang, a door hanging crooked, or an opener that runs while nothing moves.' },
			{ title: 'We come from Fishers', text: 'The same crew rolls from Glenn Abbey Lane straight out to Greenfield.' },
			{ title: 'You hear the price', text: 'We find what failed, give you the number before the work, and you decide.' },
			{ title: 'We fix and test', text: 'We repair the spring, cable, roller, or opener, then test balance and auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'problems',
				h2: 'Garage Door Problems Greenfield Homeowners Call About Most',
				layout: 'split',
				imageId: 'install-driveway',
				paragraphs: [
					'Garage Door Repair in Greenfield usually starts with a snapped torsion spring, a cable that has frayed or jumped off the drum, worn rollers that bind the track, or an opener that runs while the door stays put. Older doors near the courthouse square and Riley Park show their age; the wider doors north of town along New Road put more load on every part.',
				],
			},
			{
				id: 'weather',
				h2: 'Garage Door Repair Solutions for Greenfield Homeowners',
				layout: 'causes',
				intro: 'Most calls for Garage Door Repair in Greenfield come down to a few fixes. Here is how we handle the springs, cables, rollers, and openers that fail most often.',
				items: [
					{ title: 'Broken spring replacement', text: 'A snapped torsion spring leaves the door too heavy to lift. We match the right spring to the door weight and width and set the balance by hand.' },
					{ title: 'Cable and roller repair', text: 'Frayed cables and worn rollers pull a door off track and out of square. We replace them in pairs and reseat the door in the track.' },
					{ title: 'Opener service', text: 'When an opener runs but the door stays put, the trouble is often the gear, the trolley, or the limits. We find it and repair or replace the unit.' },
					{ title: 'Tune-ups and safety checks', text: 'We tighten hardware, check the balance, and test the auto-reverse so a working door keeps working.' },
				],
			},
			{
				id: 'repair-replace',
				h2: 'Repairing a Garage Door Versus Replacing It in Greenfield',
				layout: 'compare',
				intro: 'With Garage Door Repair in Greenfield we weigh the door age, the damage, and the cost before we advise. On older doors near the square or wider doors along New Road, we give you both numbers so you can choose.',
				columns: [
					{ heading: 'A repair makes sense', points: ['The door is sound and square', 'One spring or cable failed', 'Rollers or hinges are worn', 'The opener needs a part, not a swap'] },
					{ heading: 'A replacement makes sense', points: ['Panels are cracked or caved', 'The door is old and heavy', 'Repairs keep adding up', 'You want a wider or quieter door'] },
				],
				note: 'We give you the repair number and, when it is close, the price of a new door too.',
			},
			{
				id: 'expect',
				h2: 'Emergency Garage Door Repairs for Unexpected Mechanical Problems',
				layout: 'steps',
				intro: 'Springs and openers fail without warning. Garage Door Repair in Greenfield is on call day or night, so a sudden break that traps a car or leaves a door stuck gets a fast answer and a fast fix.',
				items: [
					{ text: 'Garage Door Repair in Greenfield starts with a call to 317-854-6917 or the form, day or night.' },
					{ text: 'The same Fishers crew heads out from Glenn Abbey Lane toward Greenfield.' },
					{ text: 'On site we check the door by hand, find the failed part, and give you the price before any work.' },
					{ text: 'We make the repair, test the balance and auto-reverse, and leave the door running right.' },
				],
			},
		],
		poi: {
			intro: 'Goat Garage Door Service works out of 10378 Glenn Abbey Ln in Fishers. Greenfield sits about 15 miles east, an easy run out US 40, the old National Road, or over on I-70 past McCordsville. The map below shows the route between Greenfield and our Fishers base.',
			items: [
				{ title: 'Downtown Greenfield', text: 'The Hancock County seat, built around the courthouse square with its older storefronts and homes.' },
				{ title: 'Riley Park', text: 'A longtime park along Brandywine Creek tied to the poet James Whitcomb Riley, who was born in Greenfield.' },
				{ title: 'US 40 (National Road)', text: 'The historic National Road runs straight through town and carries much of our drive east from Fishers.' },
				{ title: 'New Road', text: 'North of town, New Road serves newer sections where the homes tend to have wider garage doors.' },
				{ title: 'I-70', text: 'The interstate skirts the south edge of Greenfield and gives us a quick alternate route from Fishers.' },
			],
			mapSrc:
				'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d111553.13765709002!2d-86.01240231555265!3d39.85931040325976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x886b31d46b522913%3A0xd8bea155e6111114!2sGreenfield%2C%20Indiana%2046140%2C%20USA!3m2!1d39.7852363!2d-85.7693087!4m5!1s0xa4de2dc397083d3b%3A0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service%2C%2010378%20Glenn%20Abbey%20Ln%2C%20Fishers%2C%20IN%2046037%2C%20United%20States!3m2!1d39.9372773!2d-85.9791138!5e0!3m2!1sen!2s!4v1793860522924!5m2!1sen!2s',
			mapTitle: 'Driving directions from Greenfield to Goat Garage Door Service in Fishers',
		},
		faqs: [
			{ q: 'Does Goat Garage Door Service cover Greenfield from its Fishers base?', a: 'Yes. We run every job out of 10378 Glenn Abbey Ln in Fishers. Greenfield is about 15 miles east, so the drive out US 40 or I-70 is short and we reach the whole town and the sections along New Road.' },
			{ q: 'What are the most common garage door repairs in Greenfield?', a: 'Broken torsion springs lead the list, followed by frayed cables and worn rollers that pull a door off track. Openers that run while the door stays put are close behind. Older doors near the square tend to need spring and cable work most.' },
			{ q: 'Can you come out if my garage door will not open or close?', a: 'Yes, 24/7. Keep people and cars clear of the door and leave the opener off so nothing moves on its own. Call 317-854-6917 and we will head out from Fishers.' },
			{ q: 'What should I tell you when I call about a door in Greenfield?', a: 'Tell us the sound or symptom — a bang, a grinding opener, a door hanging crooked — and what part of town you are in, near the square or out along New Road. A quick photo of the spring or cable helps us arrive ready.' },
			{ q: 'Do you handle both repairs and new door installs in Greenfield?', a: 'We do both. Most calls are repairs, but when a door is past saving we install a new one. Either way you hear the price before any work starts.' },
			{ q: 'How do I know if my garage door needs a professional?', a: 'If the door feels heavy by hand, hangs crooked, has jumped off the track, or you see a gap in the spring, call us. Do not try to work on springs or cables yourself — they are under high tension and can injure you.' },
		],
	},
	{
		slug: 'fortville',
		name: 'Fortville',
		county: 'Hancock County',
		label: 'East of Fishers',
		description:
			'Garage door repair and installation in Fortville, IN. Springs, cables, openers, off-track doors, and new doors from a Fishers crew. Call 317-854-6917.',
		lead: 'Goat Garage Door Service brings reliable Garage Door Repair in Fortville to downtown\'s older steel doors and the wider insulated doors near State Road 13, with upfront pricing every time.',
		paragraphs: [
			'Fortville sits a short drive east of Fishers, just past McCordsville near the Hamilton and Hancock county line. The crew that answers in Fishers runs the same work out to Fortville: broken torsion springs, cables off the drum, doors that have jumped the track, worn rollers, and full door replacements.',
			'Older garages near downtown Fortville often have raised-panel steel doors on a single torsion spring, where a snapped spring leaves the door too heavy for the opener. Newer sections toward State Road 13 tend to have wider insulated doors that need springs sized to the weight and rollers that stay quiet in the track. We check the whole system by hand before we talk about parts.',
			'Call any hour the door will not close for the night or will not open in the morning. For a planned install, send the rough opening size and a photo of the current door.',
		],
		places: ['Downtown Fortville', 'Main Street', 'State Road 13'],
		metaTitle: 'Garage Door Repair in Fortville – Goat Garage Door',
		metaDescription: 'Need Garage Door Repair in Fortville? Goat Garage Door Service handles jammed garage doors, sudden malfunctions, and slow or uneven operation. Call today!',
		h1: 'Garage Door Repair in Fortville, IN',
		showTestimonials: true,
		hideNearbyMap: true,
		whyChoose: [
			{ title: 'A short run east from Fishers', text: 'Our base sits on Glenn Abbey Lane in Fishers, a short drive east past McCordsville, so we reach Fortville fast.' },
			{ title: 'The price comes first', text: 'You hear the number before any repair starts, and if a full door is the better value than one part, we say so.' },
			{ title: 'The whole door checked', text: 'We disconnect the opener and check the spring, cables, and balance by hand before we name a single part.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, including holidays, when a door traps a car or will not close.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the Fortville door did, whether it was a loud bang, a door hanging crooked, or an opener that runs while nothing moves.' },
			{ title: 'We come from Fishers', text: 'The same crew rolls out of Glenn Abbey Lane and heads east through McCordsville to Fortville.' },
			{ title: 'You hear the price', text: 'We find what failed, give you the number before the work, and you decide.' },
			{ title: 'We fix and test', text: 'We replace the spring, cable, roller, or opener part, then test the balance and auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'problems',
				h2: 'Garage Door Problems Fortville Homeowners Call About Most',
				layout: 'split',
				imageId: 'install-driveway',
				paragraphs: [
					'Garage Door Repair in Fortville usually starts with a snapped torsion spring. Older raised-panel steel doors downtown run on a single spring that wears out, while wider insulated doors near State Road 13 need springs sized to the weight. We also see frayed or off-track cables, worn rollers, and openers that run while the door stays put.',
				],
			},
			{
				id: 'weather',
				h2: 'Garage Door Repair Solutions for Fortville Homeowners',
				layout: 'causes',
				intro: 'Most Garage Door Repair in Fortville comes down to four fixes. Here is how we handle the springs, cables, rollers, and openers that fail on local doors.',
				items: [
					{ title: 'Broken spring replacement', text: 'We replace snapped torsion springs and size the new spring to the door, whether it is an older downtown steel door or a wider insulated one near State Road 13.' },
					{ title: 'Cable and roller repair', text: 'We reset or replace frayed cables that have slipped off the drum and swap worn rollers so the door tracks straight again.' },
					{ title: 'Opener service', text: 'We fix openers that run while the door stays put, along with bad gears, logic boards, and safety sensors.' },
					{ title: 'Tune-ups and safety checks', text: 'We check balance, tighten hardware, and test the auto-reverse so a working door keeps working.' },
				],
			},
			{
				id: 'repair-replace',
				h2: 'Repairing a Garage Door Versus Replacing It in Fortville',
				layout: 'compare',
				intro: 'Not every door is worth another repair. With Garage Door Repair in Fortville we weigh the age of the door, the damage, and the cost, then give you both numbers so you can make the call.',
				columns: [
					{ heading: 'A repair makes sense', points: ['The door is sound and panels are solid', 'One part failed, like a spring or cable', 'The door is newer and well built', 'The fix costs far less than a new door'] },
					{ heading: 'A replacement makes sense', points: ['The door is old and rusted through', 'Several panels are bent or cracked', 'Repairs keep stacking up', 'A new insulated door costs about the same'] },
				],
				note: 'We give you the repair number and, when the two are close, the price of a new door too.',
			},
			{
				id: 'expect',
				h2: 'Emergency Garage Door Repairs for Unexpected Mechanical Problems',
				layout: 'steps',
				intro: 'A spring or opener can fail without warning. Garage Door Repair in Fortville runs 24/7, so a door that will not open or close late at night still gets a fast answer and a crew on the way.',
				items: [
					{ text: 'Garage Door Repair in Fortville starts with a call to 317-854-6917 or the form on this page.' },
					{ text: 'The same Fishers crew heads out east past McCordsville to your door.' },
					{ text: 'On site we check the door by hand, find the failed part, and give the price before any work.' },
					{ text: 'We make the repair, test the balance and auto-reverse, and leave the door running right.' },
				],
			},
		],
		poi: {
			intro: 'Goat Garage Door Service works out of 10378 Glenn Abbey Ln in Fishers. Fortville is a short drive east, just past McCordsville near the Hamilton and Hancock county line, so the crew is there quickly. The map below shows the route between Fortville and the Fishers base.',
			items: [
				{ title: 'Downtown Fortville', text: 'The historic downtown holds older raised-panel steel doors that run on a single torsion spring.' },
				{ title: 'Main Street', text: 'Main Street anchors the old center of town and the homes and shops around it.' },
				{ title: 'State Road 13', text: 'Toward State Road 13 you find newer, wider insulated doors that need springs sized to the weight.' },
				{ title: 'Hamilton/Hancock county line', text: 'Fortville sits near the line where Hamilton County meets Hancock County, just east of our Fishers base.' },
				{ title: 'Memorial Park', text: 'Memorial Park is a familiar green space for Fortville families close to downtown.' },
			],
			mapSrc:
				'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48943.29230365282!2d-85.95551087073366!3d39.942379028376706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8814cc97758b92d9%3A0x664e668666c3610f!2sFortville%2C%20Indiana%2C%20USA!3m2!1d39.9322625!2d-85.8480354!4m5!1s0xa4de2dc397083d3b%3A0x4c2371cfdff1a31c!2sGoat%20Garage%20Door%20Service%2C%2010378%20Glenn%20Abbey%20Ln%2C%20Fishers%2C%20IN%2046037%2C%20United%20States!3m2!1d39.9372773!2d-85.9791138!5e0!3m2!1sen!2s!4v1793860540646!5m2!1sen!2s',
			mapTitle: 'Driving directions from Fortville to Goat Garage Door Service in Fishers',
		},
		faqs: [
			{ q: 'Does Goat Garage Door Service cover Fortville from its Fishers base?', a: 'Yes. We work out of 10378 Glenn Abbey Ln in Fishers, and Fortville is a short drive east, just past McCordsville. The same crew that serves Fishers handles Fortville jobs.' },
			{ q: 'What are the most common garage door repairs in Fortville?', a: 'Snapped torsion springs are the most common, followed by frayed or off-track cables and worn rollers. We also fix openers that run while the door stays put. Older downtown doors and newer doors near State Road 13 each bring their own issues.' },
			{ q: 'Can you come out if my garage door will not open or close?', a: 'Yes, day or night. Keep people and cars clear of the door and leave the opener off so no one gets hurt. Call 317-854-6917 and we will head out, since the line is answered 24/7.' },
			{ q: 'What should I tell you when I call about a door in Fortville?', a: 'Describe the sound or symptom, like a loud bang, a crooked door, or an opener that runs with no movement. Tell us what part of town you are in, whether downtown or out toward State Road 13. A photo of the door helps us bring the right parts.' },
			{ q: 'Do you handle both repairs and new door installs in Fortville?', a: 'We do both. We repair springs, cables, rollers, and openers, and we install new doors when that is the better value. Either way, you hear the price before the work starts.' },
			{ q: 'How do I know if my garage door needs a professional?', a: 'If the door feels heavy by hand, hangs crooked, or has come off its track, call us. A gap in the torsion spring is a clear sign too. Do not try to fix springs or cables yourself, since they are under high tension and can injure you.' },
		],
	},
];

export function getArea(slug: string) {
	return areas.find((area) => area.slug === slug);
}
