export interface Faq {
	q: string;
	a: string;
}

export interface SeoSection {
	id: string;
	h2: string;
	layout: 'split' | 'causes' | 'compare' | 'steps';
	imageId?: string;
	intro?: string;
	paragraphs?: string[];
	items?: { title?: string; text: string }[];
	columns?: { heading: string; points: string[] }[];
	note?: string;
}

export interface Service {
	slug: string;
	title: string;
	card: string;
	description: string;
	lead: string;
	imageId: string;
	paragraphs: string[];
	signs: string[];
	includes: string[];
	safety?: string;
	faqs: Faq[];
	related: string[];
	metaTitle?: string;
	metaDescription?: string;
	whyChoose?: { title: string; text: string }[];
	process?: { title: string; text: string }[];
	showTestimonials?: boolean;
	showAreas?: boolean;
	seoSections?: SeoSection[];
}

export const services: Service[] = [
	{
		slug: 'garage-door-bottom-seal-replacement',
		title: 'Garage Door Bottom Seal Replacement',
		card: 'A new seal along the floor stops light, water, leaves, and drafts under the door.',
		description:
			'Garage door bottom seal replacement in Fishers and Indianapolis. Close gaps that let in water, leaves, and pests. Call Goat Garage Door Service.',
		lead: 'Garage door bottom seal replacement for homes in Fishers and Indianapolis — a fresh floor seal shuts out the water, leaves, drafts, and pests slipping under your door.',
		imageId: 'old-gray-door',
		paragraphs: [
			'The bottom seal is the rubber or vinyl bead that sits in a retainer along the lowest section. It is supposed to meet the concrete. Sun, ice, and a door that drags the floor flatten it until light, rain, and mice have a path inside.',
			'We pull the old seal, check the retainer, and fit a new one shaped for your door — a standard T or bead for a straight floor, or a taller profile when the slab is a little out of level. If the retainer itself is crushed, that gets replaced too.',
			'A seal is a small part, and it is worth doing before winter. If the bottom section is rotten or bent, we will say so. A new seal on a failed section will not hold.',
		],
		signs: [
			'Daylight or a visible gap along the garage floor',
			'Water stains or leaves inside after a storm',
			'The rubber is cracked, flat, or missing in pieces',
			'Cold air pours in under the door',
			'The door drags or chatters as it meets the floor',
		],
		includes: [
			'Removal of the worn seal',
			'A new seal matched to the retainer and the floor',
			'Retainer repair when the track that holds the seal is bent',
			'A check that the door still closes evenly on the slab',
		],
		faqs: [
			{
				q: 'Can I slide a new seal in myself?',
				a: 'On a straight retainer, sometimes. If the seal is stuck, the retainer is pinched, or the door is out of balance, it turns into a bigger job. We handle the stubborn ones and the doors that need the bottom section looked at first.',
			},
			{
				q: 'Will a thicker seal fix an uneven floor?',
				a: 'A taller bulb can close a small low spot. A large dip in the concrete needs a different profile or a threshold. We look at the slab before we pick the seal.',
			},
			{
				q: 'Does this include the sides of the door?',
				a: 'The bottom seal is the floor piece. Perimeter stop molding along the jamb is a separate trim. We can replace that on the same visit if it is cracked or missing.',
			},
			{
				q: 'How do I tell if it is the seal or the door?',
				a: 'If the gap is only at the rubber and the section above it is straight and solid, it is usually the seal. If the bottom panel is bent, rusted, or soft, the section is the real problem and a new seal alone will not close the gap.',
			},
			{
				q: 'Will a new seal keep water and mice out?',
				a: 'A seal matched to a level floor closes the common gaps that let water, leaves, and pests under the door. Where the slab is cracked or dips badly, we talk about a threshold or a taller profile so the seal actually meets the concrete.',
			},
		],
		related: ['garage-door-maintenance', 'garage-door-panel-replacement', 'garage-door-roller-replacement'],
		metaTitle: 'Garage Door Bottom Seal Replacement – Goat Garage Door',
		metaDescription:
			'Goat Garage Door Service handles garage door bottom seal replacement — worn floor seals, threshold gaps, and the drafts and water they let in. Call us.',
		showTestimonials: true,
		showAreas: true,
		whyChoose: [
			{ title: 'Sealed to your floor', text: 'We match the new seal to the retainer and the slab, including a taller profile where the concrete is a little out of level.' },
			{ title: 'The price comes first', text: 'You hear the number before any work begins, and we never sell a seal that will not fix the gap you actually have.' },
			{ title: 'We check the section too', text: 'A new seal on a rotten or bent bottom panel will not hold. We look at the section first and tell you straight.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, including weekends and holidays, so a door that will not close does not wait on winter.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what you see — daylight under the door, water after a storm, or rubber that is cracked and flat.' },
			{ title: 'We look at the floor', text: 'We check the seal, the retainer, and how evenly the door meets the slab from one side to the other.' },
			{ title: 'You hear the price', text: 'We tell you which seal or profile the door needs and the number before anything is pulled out.' },
			{ title: 'We fit and test', text: 'We set the new seal in the retainer and close the door to confirm it meets the floor along the whole width.' },
		],
		seoSections: [
			{
				id: 'lets-in',
				h2: 'What a Worn Bottom Seal Lets Into Your Garage',
				layout: 'split',
				imageId: 'old-gray-door',
				paragraphs: [
					'Garage door bottom seal replacement matters because the seal is the only thing between the door and the concrete, so once it flattens or cracks the gap lets in rain, melting snow, leaves, dust, and the mice that follow them. A failed seal also lets conditioned air straight out, which you feel most in an attached or heated garage.',
				],
			},
			{
				id: 'why-fail',
				h2: 'Why Garage Door Bottom Seals Flatten, Crack, and Fail',
				layout: 'causes',
				intro: 'A seal is a wear part, and garage door bottom seal replacement is eventually part of owning the door. A few things shorten its life.',
				items: [
					{ title: 'Sun and heat', text: 'UV and summer heat dry the rubber or vinyl until it hardens, cracks, and stops springing back against the floor.' },
					{ title: 'Ice and cold', text: 'Freezing and thawing stiffens the bead and can tear it, and a seal frozen to the slab rips when the door lifts.' },
					{ title: 'A dragging door', text: 'A door that sits low or is out of balance grinds the seal on every close and flattens it long before its time.' },
					{ title: 'Age and grit', text: 'Years of cycles plus the dirt and salt tracked under the door wear the contact edge down to nothing.' },
				],
			},
			{
				id: 'profiles',
				h2: 'Bottom Seal Profiles and Which One Fits Your Floor',
				layout: 'compare',
				intro: 'The right seal depends on the retainer on your door and how level the slab is.',
				columns: [
					{ heading: 'Level floors', points: ['A T-style or bead seal slides into the retainer', 'A single bulb closes a straight, even slab', 'The common fit on most sectional doors', 'Quick to swap when the retainer is sound'] },
					{ heading: 'Uneven floors', points: ['A taller bulb absorbs a small low spot', 'A threshold on the floor can meet the seal halfway', 'Needed where the slab dips or cracks', 'We check the slab before picking the profile'] },
				],
				note: 'If the retainer that holds the seal is crushed or pulling off the section, it is replaced too — a new seal in a bent retainer will not seat right.',
			},
			{
				id: 'visit',
				h2: 'What a Garage Door Bottom Seal Replacement Visit Involves',
				layout: 'steps',
				items: [
					{ text: 'We look at the old seal, the retainer, and the bottom section to confirm the seal is the real problem.' },
					{ text: 'The worn seal is pulled and the retainer is cleaned out or straightened so the new bead seats cleanly.' },
					{ text: 'A seal matched to the retainer and the floor is cut to length and fitted across the full width.' },
					{ text: 'We close the door and check that it meets the slab evenly, with no daylight left from corner to corner.' },
				],
			},
		],
	},
	{
		slug: 'garage-door-cable-replacement',
		title: 'Garage Door Cable Replacement',
		card: 'Frayed or unwound lift cables put the door crooked. We replace them and set them back on the drums.',
		description:
			'Garage door cable replacement in Fishers and Indianapolis. We replace frayed or snapped lift cables and set the door back on track. Call 317-854-6917.',
		lead: 'Garage door cable replacement in Fishers and Indianapolis — when a lift cable frays or jumps the drum the door racks, so we fit new cables and reset the balance.',
		imageId: 'spring-gap',
		paragraphs: [
			'Each lift cable runs from the bottom bracket, up the side of the door, and onto a drum beside the torsion spring. The spring turns the drum. The cable is what actually picks the door up. A frayed cable, a cable off the drum, or a cable that snapped will leave one side hanging.',
			'We replace cables in pairs on most doors so both sides start even. The springs have to be unwound to do that safely, which is why this is not a ladder-and-vise-grips job. After the new cables are on the drums, we set the tension back and run the door by hand before the opener is reconnected.',
			'If a bottom bracket is bent or the cable chewed the drum, those parts get replaced too. A new cable on a damaged drum will jump off again.',
		],
		signs: [
			'One side of the door sits higher than the other',
			'A cable is loose, tangled, or has broken strands',
			'The door slams or jerks as it starts up',
			'You can see the cable off the grooves of the drum',
			'The door came out of the vertical track',
		],
		includes: [
			'New lift cables, usually both sides',
			'Drums and bottom brackets when they are damaged',
			'Spring tension reset so the door is balanced',
			'Track and roller check after the door is square again',
		],
		safety:
			'A slack cable means the spring may still be wound, or it may have let go. Either way, stay out from under the door and leave the red release cord alone until we are there.',
		faqs: [
			{
				q: 'Why replace both cables if only one broke?',
				a: 'The other cable has the same age and the same cycles. Fitting one new cable next to a worn one puts the load on the old side. We replace them together unless the door is nearly new and the second cable is clearly sound.',
			},
			{
				q: 'My door is off the track. Is that the cable?',
				a: 'Often, yes. A cable that unwinds lets one side drop and the rollers leave the track. Sometimes a hit from a car does it. We look before we force anything back in.',
			},
			{
				q: 'Do cables and springs get replaced together?',
				a: 'When the spring is the part that failed, the cables are inspected and replaced if they are frayed. When the cable failed and the spring is still the right size and in one piece, we can replace cables only.',
			},
			{
				q: 'Why does a lift cable fray or come off the drum?',
				a: 'Cables wear where they wrap the drum and at the bottom bracket, and rust speeds that up. A door that is off balance, a loose bracket, or a drum with a rough groove all let the cable slip or chew through strands over time.',
			},
			{
				q: 'Is it safe to use the door with a frayed cable?',
				a: 'No. A frayed cable can part the rest of the way under load and drop that side of the door. Keep people and cars clear, leave the opener off, and call so it is not relied on until it is replaced.',
			},
		],
		related: ['garage-door-spring-replacement', 'off-track-garage-door-repair', 'garage-door-roller-replacement'],
		metaTitle: 'Garage Door Cable Replacement – Goat Garage Door',
		metaDescription:
			'Goat Garage Door Service does garage door cable replacement — frayed or snapped lift cables, cables off the drum, and racked, crooked doors. Call us.',
		showTestimonials: true,
		showAreas: true,
		whyChoose: [
			{ title: 'Cables replaced in pairs', text: 'We fit new lift cables on both sides so the door starts even, rather than loading a new cable next to a worn one.' },
			{ title: 'The price comes first', text: 'You hear the number before the springs are touched, and if a drum or bracket also failed we show you before replacing it.' },
			{ title: 'Spring and drum checked', text: 'A new cable on a damaged drum or a mismatched spring jumps off again, so we check the whole lift system while it is apart.' },
			{ title: 'On call day and night', text: 'A cable that let go can trap the cars or leave the door crooked. The phone is answered 24/7, holidays included.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the door did — one side dropped, a cable hanging loose, or the door pulled out of the track.' },
			{ title: 'We check the lift system', text: 'We look at both cables, the drums, the bottom brackets, and the spring before anything is unwound.' },
			{ title: 'You hear the price', text: 'We tell you which parts failed and the number before the tension comes off the springs.' },
			{ title: 'We replace and balance', text: 'New cables go on the drums, the spring tension is reset, and we run the door by hand before the opener reconnects.' },
		],
		seoSections: [
			{
				id: 'snaps',
				h2: 'What Happens When a Garage Door Lift Cable Snaps',
				layout: 'split',
				imageId: 'spring-gap',
				paragraphs: [
					'Garage door cable replacement comes up when a lift cable frays through or jumps its drum: the cables do the actual lifting while the springs supply the force, so that side loses support and the door drops, racks, or leans in the opening. Run the opener after that and the door can bind in the track or pull a roller out, which turns a cable job into a bigger one.',
				],
			},
			{
				id: 'why-fail',
				h2: 'Why Garage Door Cables Fray, Unwind, and Let Go',
				layout: 'causes',
				intro: 'A cable is a wear part under constant load, and garage door cable replacement is a common repair on older doors. A few things end its life.',
				items: [
					{ title: 'Rust and moisture', text: 'A garage that sees damp and road salt corrodes the strands, and a rusted cable gives out well before a clean one.' },
					{ title: 'A door out of balance', text: 'When the spring is tired the cables carry more than they should, which frays them faster at the drum and bracket.' },
					{ title: 'A rough drum or bracket', text: 'A burr on the drum groove or a loose bottom bracket chews the cable until strands start to break.' },
					{ title: 'Age and cycles', text: 'Every open and close flexes the cable where it wraps the drum, and years of that wear the wire thin.' },
				],
			},
			{
				id: 'share-load',
				h2: 'How Lift Cables and Springs Carry the Door Together',
				layout: 'compare',
				intro: 'Cables and springs are a pair. Knowing what each does explains why one failing affects the other.',
				columns: [
					{ heading: 'The springs', points: ['Store the force that offsets the door weight', 'Turn the shaft and the drums as the door moves', 'Sized to the height, width, and weight of the door', 'Fail with a bang and leave the door heavy'] },
					{ heading: 'The cables', points: ['Connect the bottom brackets to the drums', 'Do the actual lifting as the drums turn', 'Keep both sides rising evenly and square', 'Fail by fraying or slipping off the drum'] },
				],
				note: 'Because they share the load, a tired spring shortens cable life and a failed cable can leave a wound spring dangerous — we check both on the same visit.',
			},
			{
				id: 'visit',
				h2: 'What a Professional Garage Door Cable Replacement Visit Involves',
				layout: 'steps',
				items: [
					{ text: 'We secure the door and check the springs, drums, and brackets before any tension comes off.' },
					{ text: 'The spring is unwound safely so the old cables can come off the drums and bottom brackets.' },
					{ text: 'New cables, usually both sides, are set on the drums, with a damaged drum or bracket replaced too.' },
					{ text: 'Spring tension is reset, the door is balanced by hand, and the opener and auto-reverse are tested before we leave.' },
				],
			},
		],
	},
	{
		slug: 'garage-door-installation',
		title: 'Garage Door Installation',
		card: 'New residential doors, measured, sprung, and set so they run quiet and stay balanced.',
		description:
			'Garage door installation in Fishers and Indianapolis. New insulated doors, carriage-house styles, and full replacements. Call Goat Garage Door Service.',
		lead: 'Garage door installation in Fishers and Indianapolis — new insulated, raised-panel, and carriage-house doors measured, sprung, and set so they run quiet and stay balanced.',
		imageId: 'install-black-door',
		paragraphs: [
			'We install residential garage doors across Fishers and Indianapolis: insulated steel, raised-panel, flush, and carriage-house faces like the black door on our work page. The job is the whole system, not just the sections. Tracks, hinges, rollers, drums, cables, and a torsion spring sized to the door all go in together.',
			'If an opener is staying, we reset travel and force for the new weight. If the opener is old, grinding, or missing safety sensors that work, a new one can go up the same day. Chamberlain units are a regular install for us.',
			'Bring a photo of the house and the rough opening if you have it. We confirm width, height, headroom, and sideroom on site before the door is ordered, so the track actually fits the ceiling you have.',
		],
		signs: [
			'The door is rusted, delaminated, or full of patched sections',
			'You are remodeling and the old door no longer matches the house',
			'A new build or a converted garage needs a finished door',
			'The door is loud, drafty, and expensive to keep repairing',
			'A car strike bent the sections past a single-panel repair',
		],
		includes: [
			'Measure of the opening, headroom, and track path',
			'Removal and haul-away of the old door when there is one',
			'New sections, track, hardware, and a matched torsion spring',
			'Opener setup and a full open-close test, including auto-reverse',
		],
		faqs: [
			{
				q: 'How do I choose a style?',
				a: 'Match the house. Raised-panel steel is the common look on Fishers and Indianapolis colonials. Carriage-house faces suit brick and painted brick. Flush panels suit newer builds. We can walk the options from photos of doors we have already hung.',
			},
			{
				q: 'Do you install the opener too?',
				a: 'Yes. Opener installation can be part of the door job or its own visit. See garage door opener installation for that scope.',
			},
			{
				q: 'What do you need from me before the day?',
				a: 'Clear the garage floor near the door, move cars out, and tell us about low ducts, a ceiling that steps down, or a door that was never standard size. We measure the rest.',
			},
			{
				q: 'Should I repair the old door or replace it?',
				a: 'A sound door with one failed part is usually worth repairing. A door that is rusted through, delaminated, or patched across several sections, or one that is loud and drafty and keeps needing work, is often cheaper to replace than to keep fixing.',
			},
			{
				q: 'Is an insulated door worth it on an attached garage?',
				a: 'On an attached or heated garage, or a room above it, an insulated door holds temperature better and runs quieter and stiffer. On a detached garage you rarely enter, a non-insulated door can be the sensible choice. We talk through the use before you order.',
			},
		],
		related: ['garage-door-opener-installation', 'garage-door-panel-replacement', 'garage-door-spring-replacement'],
		metaTitle: 'Garage Door Installation – Goat Garage Door Service',
		metaDescription:
			'Goat Garage Door Service handles garage door installation — new insulated and carriage-house doors, matched hardware, and full door replacements. Call us.',
		showTestimonials: true,
		showAreas: true,
		whyChoose: [
			{ title: 'Measured for your opening', text: 'We confirm width, height, headroom, and sideroom on site before the door is ordered, so the track fits the ceiling you have.' },
			{ title: 'The price comes first', text: 'You hear the number for the door, the hardware, and the labor before anything is ordered or removed.' },
			{ title: 'The whole system set right', text: 'New sections, track, rollers, cables, and a torsion spring sized to the door go in together so it runs quiet and balanced.' },
			{ title: 'A local Fishers crew', text: 'The crew that measures the door is the one that hangs it, and the phone is answered 24/7 if you need us after.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us about the opening and the look you want, and send a photo of the house and current door if you have one.' },
			{ title: 'We measure on site', text: 'We confirm the rough opening, headroom, and track path and walk the style and material options with you.' },
			{ title: 'You hear the price', text: 'We quote the door, hardware, and labor before it is ordered, so there is no surprise on install day.' },
			{ title: 'We install and test', text: 'The old door comes out, the new system goes in, and we set the spring and opener and test a full cycle before we leave.' },
		],
		seoSections: [
			{
				id: 'includes',
				h2: 'What a New Garage Door Installation Actually Includes',
				layout: 'split',
				imageId: 'install-black-door',
				paragraphs: [
					'A proper garage door installation is the whole system, not just the panels you see. New sections, track, hinges, rollers, drums, cables, and a torsion spring sized to the finished weight all go in together, and the opener is set to that weight. Done this way the door runs quiet, balances by hand, and reverses the way it should.',
				],
			},
			{
				id: 'replace',
				h2: 'Signs Your Old Garage Door Is Due for Replacement',
				layout: 'causes',
				intro: 'A few things tip a door from worth-repairing to a full garage door installation.',
				items: [
					{ title: 'Rust and delamination', text: 'Steel skins rusting through or an insulated door peeling apart cannot be patched back to solid.' },
					{ title: 'Repeated repairs', text: 'When a door needs something new every season, the running cost starts to pass the price of one new door.' },
					{ title: 'Impact damage', text: 'A car strike that bends several sections or racks the track is often past a single-panel fix.' },
					{ title: 'Drafty and loud', text: 'A thin, worn door that lets weather in and shakes the house on every lift is a comfort and noise problem a new one solves.' },
				],
			},
			{
				id: 'insulation',
				h2: 'Insulated Versus Non-Insulated Garage Doors and Panel Styles',
				layout: 'compare',
				intro: 'The right door depends on how the garage is used and the look of the house.',
				columns: [
					{ heading: 'Insulated steel', points: ['Holds temperature on attached or heated garages', 'Runs quieter and feels stiffer', 'Better for a room above the garage', 'Available in raised-panel, flush, and carriage-house faces'] },
					{ heading: 'Non-insulated steel', points: ['A sensible choice on a detached garage', 'Lighter and lower cost', 'Still available in common panel styles', 'Fine where temperature is not a concern'] },
				],
				note: 'Style follows the house: raised-panel suits many colonials, carriage-house faces suit brick, and flush panels suit newer builds.',
			},
			{
				id: 'visit',
				h2: 'What Garage Door Installation Day Looks Like at Home',
				layout: 'steps',
				items: [
					{ text: 'We confirm the measurements and the door before the old one comes off, so there are no surprises.' },
					{ text: 'The old door and track are removed and hauled away when there is one to take out.' },
					{ text: 'New track, sections, rollers, cables, and a sized torsion spring are installed and squared to the opening.' },
					{ text: 'The opener is set or installed to the new weight, and we test the balance and auto-reverse before we leave.' },
				],
			},
		],
	},
	{
		slug: 'garage-door-maintenance',
		title: 'Garage Door Maintenance',
		card: 'A tune-up of balance, hardware, seals, and the opener before a small issue becomes a stuck door.',
		description:
			'Garage door maintenance in Fishers and Indianapolis. Balance, rollers, hardware, seals, and opener safety checks. Call 317-854-6917.',
		lead: 'Garage door maintenance in Fishers and Indianapolis — a yearly tune-up of balance, rollers, hardware, seals, and the opener that catches small problems before the door quits.',
		imageId: 'tech-repair',
		paragraphs: [
			'Maintenance is the visit you make before the bang. We disconnect the opener and check balance: a door in good shape should stay roughly where you leave it, halfway up, because the spring is carrying the weight. If it falls or flies up, the spring is no longer matched and the opener is doing work it was not built for.',
			'Then we go through rollers, hinges, and brackets, tighten what has walked loose, and lubricate the moving metal — the rollers and hinges, not a grease slick down the track. The bottom seal, the safety sensors, and the auto-reverse get checked on the same trip.',
			'You can test auto-reverse yourself with a scrap of wood laid flat in the opening. The door should reverse when it touches it. Adjusting springs, cables, or the bottom brackets is the part to leave to us.',
		],
		signs: [
			'The door has started to groan, pop, or shake',
			'The opener strains or the light flashes as it lifts',
			'You cannot remember the last time anyone looked at the springs',
			'Rollers look dry, cracked, or wobble in the track',
			'The door slams the floor or floats at the top',
		],
		includes: [
			'Balance test with the opener disconnected',
			'Hardware inspection and tightening',
			'Lubrication of rollers, hinges, and springs',
			'Sensor alignment and auto-reverse check',
		],
		faqs: [
			{
				q: 'How often should a door be serviced?',
				a: 'Once a year is a solid rhythm for a door that cycles every day. Do it sooner if the door has gotten loud or heavy.',
			},
			{
				q: 'Will you sell me parts I do not need?',
				a: 'We show you what is worn. A noisy roller is a roller. A spring with a gap in the coil is a spring. You decide what to replace after you see it.',
			},
			{
				q: 'Is lubrication enough?',
				a: 'Lubrication quiets a healthy door. It does not fix a spring that has lost its tension or a cable with broken strands. The visit separates those.',
			},
			{
				q: 'What does a balance test actually show?',
				a: 'With the opener disconnected, a balanced door stays put about halfway up because the spring carries the weight. If it drops or rises on its own, the spring no longer matches the door and the opener is lifting weight it was not built for.',
			},
			{
				q: 'Can maintenance really prevent a breakdown?',
				a: 'It will not make a spring last forever, but tightening loose hardware, correcting balance, and lubricating the moving metal keeps wear from piling onto the opener and the springs. Most stuck-door calls trace back to small things left to grind for too long.',
			},
		],
		related: ['garage-door-roller-replacement', 'garage-door-spring-replacement', 'garage-door-bottom-seal-replacement'],
		metaTitle: 'Garage Door Maintenance – Goat Garage Door Service',
		metaDescription:
			'Goat Garage Door Service handles garage door maintenance — balance checks, roller and hardware tune-ups, lubrication, and opener safety tests. Call us.',
		showTestimonials: true,
		showAreas: true,
		whyChoose: [
			{ title: 'The whole door checked', text: 'Balance, rollers, hinges, cables, seals, sensors, and the opener are all looked at on one visit, not just the squeaky part.' },
			{ title: 'The price comes first', text: 'You hear the number for the tune-up up front, and anything worn is shown to you before it is replaced.' },
			{ title: 'No upsell', text: 'We point out what is worn and let you decide. A noisy roller is a roller, not a reason to sell you a door.' },
			{ title: 'On call day and night', text: 'If the tune-up turns up something urgent, the same Fishers crew can act on it, and the phone is answered 24/7.' },
		],
		process: [
			{ title: 'You call', text: 'Book a tune-up, or tell us the door has gotten loud, heavy, or slow so we know what to look at first.' },
			{ title: 'We check balance first', text: 'We disconnect the opener and feel the door, because a balanced door tells us what the spring and opener are really doing.' },
			{ title: 'You hear the findings', text: 'We show you what is worn and the price to address it before replacing anything. You decide what to do now.' },
			{ title: 'We tune and test', text: 'We tighten hardware, lubricate the moving metal, align the sensors, and test the auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'covers',
				h2: 'What a Garage Door Maintenance Tune-Up Actually Covers',
				layout: 'split',
				imageId: 'tech-repair',
				paragraphs: [
					'Garage door maintenance starts with the opener disconnected so we can feel the balance, then works through the rollers, hinges, and brackets, tightens what has walked loose, and lubricates the moving metal. The bottom seal, the safety sensors, and the auto-reverse are checked on the same trip, so the door runs quiet and stops the way it should.',
				],
			},
			{
				id: 'overdue',
				h2: 'Signs Your Garage Door Is Overdue for a Tune-Up',
				layout: 'causes',
				intro: 'A door usually warns you before it quits, and these tells mean garage door maintenance is overdue.',
				items: [
					{ title: 'New noise', text: 'Groaning, popping, or a shake on the way up means hardware has loosened or rollers and hinges are drying out.' },
					{ title: 'The opener strains', text: 'A motor that labors or a light that flashes on the lift is a sign the door is heavier than it should be.' },
					{ title: 'Rough travel', text: 'A door that sticks at a spot, slams the floor, or floats at the top is out of balance or binding in the track.' },
					{ title: 'Time', text: 'If you cannot recall the last time anyone looked at the springs and hardware, it is due.' },
				],
			},
			{
				id: 'prevents',
				h2: 'What Yearly Maintenance Prevents Versus a Neglected Door',
				layout: 'compare',
				intro: 'The difference between a serviced door and a neglected one shows up over a few years.',
				columns: [
					{ heading: 'A maintained door', points: ['Stays balanced so the opener works less', 'Runs quiet on lubricated rollers and hinges', 'Reverses reliably on contact', 'Small wear is caught before it strands you'] },
					{ heading: 'A neglected door', points: ['Forces the opener to lift extra weight', 'Grinds and rattles on dry, worn parts', 'Can drift past a weak safety setup', 'Fails on the coldest or busiest day'] },
				],
			},
			{
				id: 'visit',
				h2: 'What a Professional Garage Door Maintenance Visit Involves',
				layout: 'steps',
				items: [
					{ text: 'We disconnect the opener and balance-test the door by hand to read the spring and the weight.' },
					{ text: 'Rollers, hinges, brackets, and fasteners are inspected and tightened, and the moving metal is lubricated.' },
					{ text: 'The bottom seal, the cables, and the safety sensors are checked, and anything worn is shown to you.' },
					{ text: 'We reconnect the opener, set it if needed, and test travel and auto-reverse before we leave.' },
				],
			},
		],
	},
	{
		slug: 'garage-door-opener-installation',
		title: 'Garage Door Opener Installation',
		card: 'A new opener, sensors, and remotes, set to the weight of the door you actually have.',
		description:
			'Garage door opener installation in Fishers and Indianapolis. New openers, sensors, and remotes, including Chamberlain units. Call 317-854-6917.',
		lead: 'Garage door opener installation in Fishers and Indianapolis — a new motor, safety sensors, and remotes set to the weight of the door you actually have.',
		imageId: 'opener-chamberlain',
		paragraphs: [
			'We install residential garage door openers in Fishers and Indianapolis, including Chamberlain units like the one on our Fishers ceiling job. The install covers the rail or the wall mount, the bracket on the door, the safety sensors at each side of the opening, the wall button, and the remotes.',
			'An opener is not a substitute for a dead spring. If the door is heavy by hand, we fix the balance first. Then the opener only has to start and stop a door the springs already hold.',
			'We set travel limits so the door meets the floor and opens clear of the car, and we set the force so the door reverses when it meets an obstacle. That last part is the safety check, and we do not skip it.',
		],
		signs: [
			'The old opener is dead, buzzing, or missing its cover',
			'You want remotes, a keypad, or a quieter drive',
			'The rail is bent or the chain is slapping',
			'A new door went in and the old opener is undersized or worn out',
			'Safety sensors are broken, taped up, or missing',
		],
		includes: [
			'Removal of the old opener when there is one',
			'New motor, rail or mount, and door bracket',
			'Safety sensors, wall control, and remotes',
			'Travel, force, and auto-reverse set to your door',
		],
		faqs: [
			{
				q: 'Belt, chain, or wall mount?',
				a: 'Chain is tough and a bit louder. Belt is the quieter trolley. A wall mount clears the ceiling when headroom is tight or you want the center of the ceiling open. We pick from the ceiling you have and how the door is used.',
			},
			{
				q: 'Do you only install Chamberlain?',
				a: 'Chamberlain is one we install and service often. If you already bought a compatible residential opener, ask us and we will tell you if we can hang it.',
			},
			{
				q: 'Will my old remotes work?',
				a: 'Sometimes, if the new head learns them. Plan on new remotes being part of a new opener, and we will test every one before we leave.',
			},
			{
				q: 'Do you balance the door before installing the opener?',
				a: 'Yes. An opener is built to start and stop a door the springs already hold, not to lift a heavy one. If the door is heavy by hand we correct the balance first, so the new opener is not straining from day one.',
			},
			{
				q: 'What safety features come on a new opener?',
				a: 'New openers use photo-eye sensors at the floor that stop and reverse the door if the beam is broken, plus a force setting that reverses on contact. We aim the sensors and set the force, then test the auto-reverse before we leave.',
			},
		],
		related: ['garage-door-opener-repair', 'garage-door-installation', 'garage-door-maintenance'],
		metaTitle: 'Garage Door Opener Installation – Goat Garage Door',
		metaDescription:
			'Goat Garage Door Service handles garage door opener installation — new motors, safety sensors, remotes, and belt, chain, or wall-mount drives. Call us.',
		showTestimonials: true,
		showAreas: true,
		whyChoose: [
			{ title: 'Set to your door weight', text: 'We size the opener and set the travel and force to the door you actually have, so it lifts easy and reverses right.' },
			{ title: 'The price comes first', text: 'You hear the number for the opener and the install before anything goes up on the ceiling.' },
			{ title: 'Balance fixed first', text: 'If the door is heavy by hand we correct the spring and balance before the opener, so the new motor is not straining.' },
			{ title: 'On call day and night', text: 'The phone is answered 24/7, and the Fishers crew that hangs the opener is the one who programs and tests it.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us the door size, whether an opener is already up there, and if you want a quieter drive, a keypad, or extra remotes.' },
			{ title: 'We check the door', text: 'We feel the balance and look at the ceiling and headroom so the right drive and mount are chosen.' },
			{ title: 'You hear the price', text: 'We quote the opener and the install before the work starts. You decide on the drive and accessories.' },
			{ title: 'We install and test', text: 'The opener, sensors, wall control, and remotes go in, and we set travel and force and test the auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'includes',
				h2: 'What a New Garage Door Opener Installation Includes',
				layout: 'split',
				imageId: 'opener-chamberlain',
				paragraphs: [
					'A full garage door opener installation is more than the motor on the ceiling. It covers the rail or wall mount, the bracket on the door, the safety sensors at each side of the opening, the wall control, and the remotes, all set to the weight of your door. We set the travel so it meets the floor and the force so it reverses on contact.',
				],
			},
			{
				id: 'time',
				h2: 'Signs It Is Time for a New Garage Door Opener',
				layout: 'causes',
				intro: 'A few things point to a new garage door opener installation rather than another repair.',
				items: [
					{ title: 'Dead or buzzing head', text: 'A motor that hums, clicks, or does nothing, or one missing its cover, is often past worthwhile repair.' },
					{ title: 'No real safety sensors', text: 'Older units with broken, taped-up, or missing photo-eyes do not meet the safety standard a new opener does.' },
					{ title: 'Loud and worn', text: 'A slapping chain, a bent rail, or a grinding gear set tells you the drive is near the end.' },
					{ title: 'New door, old opener', text: 'A heavier new door can outmatch an undersized old opener, and a matched unit saves the motor.' },
				],
			},
			{
				id: 'drives',
				h2: 'Belt, Chain, and Wall-Mount Garage Door Openers Compared',
				layout: 'compare',
				intro: 'The best drive depends on the ceiling you have and how the garage is used.',
				columns: [
					{ heading: 'Chain and belt drives', points: ['Mount on a rail along the ceiling', 'Chain is tough and a little louder', 'Belt is the quieter trolley, good under living space', 'The common choice for standard ceilings'] },
					{ heading: 'Wall-mount drives', points: ['Mount beside the door on the torsion shaft', 'Clear the center of the ceiling', 'Good where headroom is tight or storage is overhead', 'A clean option for taller or specialty doors'] },
				],
			},
			{
				id: 'visit',
				h2: 'What a Garage Door Opener Installation Visit Involves',
				layout: 'steps',
				items: [
					{ text: 'We check the door balance and the ceiling, and remove the old opener when there is one.' },
					{ text: 'The new motor, rail or wall mount, and door bracket are installed and squared to the door.' },
					{ text: 'Safety sensors, the wall control, and the remotes are wired, mounted, and programmed.' },
					{ text: 'We set the travel and force to your door and test the auto-reverse before we leave.' },
				],
			},
		],
	},
	{
		slug: 'garage-door-opener-repair',
		title: 'Garage Door Opener Repair',
		card: 'Motors, sensors, remotes, and doors that reverse, grind, or sit still while the light blinks.',
		description:
			'Garage door opener repair in Fishers and Indianapolis. Motors, sensors, remotes, and doors that reverse or will not move. Call 317-854-6917.',
		lead: 'Garage door opener repair in Fishers and Indianapolis — sensors, remotes, gears, and logic boards fixed when the motor runs but the door will not move.',
		imageId: 'opener-truck',
		paragraphs: [
			'Opener repairs in Fishers and Indianapolis start with a simple split: is the door healthy by hand, or is the opener being asked to lift a broken spring? We disconnect the trolley and feel the door. If it is heavy or crooked, the opener is not the real failure, and we fix the spring or cable first.',
			'If the door moves smoothly by hand, we stay on the opener. Misaimed sensors, a bad logic board, worn gears, a stripped trolley, travel limits that have drifted, and remotes that stopped talking to the head are the usual list. Blinking lights are a code, and we read them instead of guessing.',
			'Some heads are old enough that a new opener costs less than chasing parts. We will tell you which situation you are in before we start swapping pieces.',
		],
		signs: [
			'The opener hums, clicks, or flashes and the door stays put',
			'The door starts up and reverses on its own',
			'Remotes and the keypad stopped working, but the wall button works',
			'Sensors show a steady blink or the beam is obviously off',
			'The chain or belt is loose, dry, or has jumped the sprocket',
		],
		includes: [
			'Balance check so we are not repairing the wrong part',
			'Sensor alignment and wiring checks',
			'Travel and force adjustments',
			'Gear, trolley, logic board, or full opener replacement when that is the real fix',
		],
		safety:
			'A door that reverses and then gets held down with the wall button can injure someone or break the top section. Stop using it and call.',
		faqs: [
			{
				q: 'Why does the opener light blink?',
				a: 'It is a fault code. Sensor trouble, force limits, and travel faults each blink differently. Tell us the pattern on the phone if you can; otherwise we read it on site.',
			},
			{
				q: 'The door opens a foot and stops. What is that?',
				a: 'Often travel limits, a sensor that loses the beam as the door moves, or a spring that cannot finish the lift. We test all three.',
			},
			{
				q: 'Should I pull the red cord?',
				a: 'Only if you need to get a car out and the door is balanced enough to lift. If the door feels like a dead weight, leave the cord alone and call for help.',
			},
			{
				q: 'Why does the door reverse before it reaches the floor?',
				a: 'Usually a travel or force setting that needs adjusting, a sensor drifting out of alignment, or a door binding in the track so the opener reads resistance. We test each rather than just turning the force up, which hides a real problem.',
			},
			{
				q: 'Is it worth repairing an old opener or replacing it?',
				a: 'A newer unit with one failed part is usually worth repairing. On an older head where gears, a board, and sensors are all tired, the parts and labor can pass the price of a new opener. We tell you which situation you are in before swapping pieces.',
			},
		],
		related: ['garage-door-opener-installation', 'garage-door-spring-replacement', 'garage-door-maintenance'],
		metaTitle: 'Garage Door Opener Repair – Goat Garage Door Service',
		metaDescription:
			'Goat Garage Door Service does garage door opener repair — misaimed sensors, dead remotes, worn gears, and doors that reverse or will not move. Call us.',
		showTestimonials: true,
		showAreas: true,
		whyChoose: [
			{ title: 'We find the real fault', text: 'We check the door by hand first, because many opener calls are really a spring or a sensor, not the motor.' },
			{ title: 'The price comes first', text: 'You hear the number before any part goes in, and we say when a new opener costs less than chasing repairs.' },
			{ title: 'We read the codes', text: 'A blinking light is a fault code. We read sensor, force, and travel faults instead of guessing and swapping parts.' },
			{ title: 'On call day and night', text: 'A door stuck down traps the cars. The phone is answered 24/7, including weekends and holidays.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what the opener does — hums and stays put, reverses on its own, or the remotes quit — and any blink pattern.' },
			{ title: 'We check the door', text: 'We disconnect the trolley and feel the door, so we are not repairing the opener for a spring or cable problem.' },
			{ title: 'You hear the price', text: 'We tell you the fault and the number before any part goes in, including whether a new opener is the better value.' },
			{ title: 'We repair and test', text: 'We align sensors, set travel and force, or replace the failed part, then test a full cycle and the auto-reverse.' },
		],
		seoSections: [
			{
				id: 'runs-no-move',
				h2: 'Why the Opener Runs but the Garage Door Will Not Move',
				layout: 'split',
				imageId: 'opener-truck',
				paragraphs: [
					'Garage door opener repair often starts with a surprise: when the motor hums or the light blinks but the door stays put, the opener is frequently fine and the door is the problem — a broken spring leaves it too heavy to lift, so the head gives up. The first step is always to disconnect the trolley and feel the door by hand, which separates an opener fault from a door fault.',
				],
			},
			{
				id: 'problems',
				h2: 'Common Garage Door Opener Problems and What Causes Them',
				layout: 'causes',
				intro: 'Most garage door opener repair calls come down to a short list of faults.',
				items: [
					{ title: 'Misaimed sensors', text: 'Photo-eyes knocked out of alignment or with a blocked beam stop the door from closing and make the light blink.' },
					{ title: 'Drifted travel or force', text: 'Settings that have crept over time make the door stop short, reverse early, or strain at the floor.' },
					{ title: 'Worn gears or trolley', text: 'A stripped gear set or a cracked trolley lets the motor run while the door barely moves.' },
					{ title: 'Remotes and boards', text: 'Remotes that stop talking to the head, or a failing logic board, cut control even when the door is fine.' },
				],
			},
			{
				id: 'door-vs-opener',
				h2: 'A Door Problem Versus an Opener Problem, Told Apart',
				layout: 'compare',
				intro: 'Pulling the release and lifting the door by hand tells you which side the fault is on.',
				columns: [
					{ heading: 'Points to the door', points: ['Heavy or crooked when lifted by hand', 'A loud bang came before it quit', 'One side sits higher than the other', 'The opener strains only near the floor'] },
					{ heading: 'Points to the opener', points: ['The door is light and smooth by hand', 'The light blinks a repeating code', 'Remotes or the keypad stopped working', 'It reverses with nothing in the way'] },
				],
			},
			{
				id: 'visit',
				h2: 'What a Professional Garage Door Opener Repair Visit Involves',
				layout: 'steps',
				items: [
					{ text: 'We disconnect the trolley and balance-check the door so the real fault is clear before any part is touched.' },
					{ text: 'We read the blink code, check the sensors and wiring, and test the travel and force settings.' },
					{ text: 'The failed part — sensor, gear, trolley, board, or the whole head — is repaired or replaced after you hear the price.' },
					{ text: 'We run a full cycle and confirm the door reverses on contact before we leave.' },
				],
			},
		],
	},
	{
		slug: 'garage-door-panel-replacement',
		title: 'Garage Door Panel Replacement',
		card: 'One dented or cracked section swapped when a matching panel is still available.',
		description:
			'Garage door panel replacement in Fishers and Indianapolis. Dented or cracked sections repaired when a match is available. Call 317-854-6917.',
		lead: 'Garage door panel replacement in Fishers and Indianapolis — one dented or cracked section swapped and matched when the rest of the door is still solid.',
		imageId: 'door-removal',
		paragraphs: [
			'Garage door panels — the horizontal sections — take the hits from basketballs, bumpers, and storms. If the rest of the door is solid and the section is still made, we replace that panel and reuse the hardware that is still good.',
			'Matching matters. Color, panel style, and insulation thickness have to line up, or the repair looks like a patch and may not sit right in the track. When the style is discontinued or several sections are crushed, a full garage door installation is the cleaner result. We say that before you pay for a panel that will not match.',
			'The bottom section is the one that rots and gets hit most. Replacing it includes the bottom brackets and a look at the cables, because those brackets anchor the lift cables.',
		],
		signs: [
			'One section is creased, cracked, or has a hole',
			'The bottom panel is soft, rusty, or pulling off the rollers',
			'A window section has broken glass or a bent frame',
			'The door still runs, but one section bows out of the track',
			'A previous patch is coming loose',
		],
		includes: [
			'A match check on style, color, and thickness',
			'The new section and the hinges that tie it in',
			'Bottom fixtures and cable inspection on lowest-panel jobs',
			'A straight answer when the whole door should be replaced instead',
		],
		faqs: [
			{
				q: 'Can you match an old door color?',
				a: 'Sometimes, if that color and stamp are still produced. Paint fades, so a new section can be a shade off even in the same color code. If the mismatch will bother you, we talk about a full door before ordering.',
			},
			{
				q: 'Is a panel replacement safe on a door with a tired spring?',
				a: 'We check the spring while the section is off. Adding or removing weight changes what the spring should be. A heavier insulated panel on an old spring is a bad combination.',
			},
			{
				q: 'What if two sections are damaged?',
				a: 'We can replace more than one. Once you are replacing most of the door, a new door usually costs about the same and gives you new hardware. We price both.',
			},
			{
				q: 'How do I know if one panel can be replaced?',
				a: 'If the rest of the door is solid, the track is straight, and the section is still manufactured in your style and color, a single panel is usually workable. A discontinued stamp, several crushed sections, or a bent track point toward a full door instead.',
			},
			{
				q: 'Will a new section match the rest of the door?',
				a: 'Color, panel style, and insulation thickness have to line up, and even then years of sun can fade the old sections so a new one reads slightly brighter. We check the match before ordering and tell you honestly if it will look like a patch.',
			},
		],
		related: ['garage-door-installation', 'off-track-garage-door-repair', 'garage-door-bottom-seal-replacement'],
		metaTitle: 'Garage Door Panel Replacement – Goat Garage Door',
		metaDescription:
			'Goat Garage Door Service handles garage door panel replacement — dented sections, cracked panels, bottom-panel swaps, and careful match checks. Call us.',
		showTestimonials: true,
		showAreas: true,
		whyChoose: [
			{ title: 'A real match check', text: 'We confirm the style, color, and insulation thickness are still made before you pay for a section, so the repair does not look like a patch.' },
			{ title: 'The price comes first', text: 'You hear the number for the panel and the labor up front, and we price a full door beside it when that is the better value.' },
			{ title: 'An honest call', text: 'When a discontinued stamp or several crushed sections make a panel pointless, we say so instead of selling a mismatch.' },
			{ title: 'On call day and night', text: 'A damaged bottom section can leave a door that will not seal or secure. The phone is answered 24/7.' },
		],
		process: [
			{ title: 'You call', text: 'Send a photo of the damaged section and the whole door so we can start the match before we come out.' },
			{ title: 'We check the match', text: 'We confirm the style, color, and thickness are still made and that the rest of the door and track are sound.' },
			{ title: 'You hear the price', text: 'We quote the panel repair and a full door beside it, so you can choose with both numbers in hand.' },
			{ title: 'We replace and square', text: 'The new section and hinges go in, the spring is checked for the changed weight, and the door is run to confirm it tracks.' },
		],
		seoSections: [
			{
				id: 'when',
				h2: 'When One Damaged Garage Door Panel Can Be Replaced',
				layout: 'split',
				imageId: 'door-removal',
				paragraphs: [
					'Garage door panel replacement works when the rest of the door is solid, the track is straight, and the damaged section is still manufactured in your style, color, and thickness. When the stamp is discontinued, several sections are crushed, or the track is bent, a new door is usually the cleaner result — and we tell you which case you are in before anything is ordered.',
				],
			},
			{
				id: 'causes',
				h2: 'What Damages a Garage Door Panel or Section',
				layout: 'causes',
				intro: 'Sections take more abuse than any other part of the door, and garage door panel replacement follows.',
				items: [
					{ title: 'Impacts', text: 'A bumper, a basketball, or a trailer creases or punches the steel, most often in the lower sections.' },
					{ title: 'Rust and rot', text: 'The bottom panel sits closest to water and salt, so it rusts, softens, and pulls off the rollers first.' },
					{ title: 'Storms and wind', text: 'High wind can bow a section out of the track, and hail dents thinner steel skins.' },
					{ title: 'Failed patches', text: 'An old filler or bracket patch works loose over time and leaves the section weaker than before.' },
				],
			},
			{
				id: 'panel-vs-door',
				h2: 'Replacing One Panel Versus Installing a New Door',
				layout: 'compare',
				intro: 'Both are valid. The right call depends on the door, the match, and the damage.',
				columns: [
					{ heading: 'A panel replacement', points: ['Keeps a sound door and its hardware', 'Lower cost when the match is available', 'Quick when the style is still made', 'Best for one damaged section'] },
					{ heading: 'A new door', points: ['The answer when the stamp is discontinued', 'Makes sense once several sections are hit', 'Gives you new track, rollers, and spring', 'Avoids paying for a section that will not match'] },
				],
			},
			{
				id: 'visit',
				h2: 'What a Garage Door Panel Replacement Visit Involves',
				layout: 'steps',
				items: [
					{ text: 'We confirm the match and check that the track, rollers, and spring are sound for the repair.' },
					{ text: 'The door is secured and the damaged section is removed, reusing the hardware that is still good.' },
					{ text: 'The new section and the hinges that tie it in are fitted and aligned in the track.' },
					{ text: 'We check the spring for the changed weight and run the door to confirm it tracks and seals.' },
				],
			},
		],
	},
	{
		slug: 'off-track-garage-door-repair',
		title: 'Off-Track Garage Door Repair',
		card: 'A door off the track sits crooked and can drop. We ease it back, fix what pulled it off, and square it up.',
		description:
			'Off-track garage door repair in Fishers and Indianapolis. Doors that jumped the track, leaned, or dropped after a cable or roller let go. Call 317-854-6917.',
		lead: 'Off-track garage door repair in Fishers and Indianapolis — when the rollers leave the track the door leans and binds, so we ease it back and fix what caused it.',
		imageId: 'hinge-fishers-side',
		paragraphs: [
			'A garage door rides on rollers that sit inside a steel track up each side and across the ceiling. When the rollers come out of that track, the door leans, jams against the frame, or hangs with one corner dropped. Running the opener at that point bends the track further and can pull the door down.',
			'Doors come off the track for a handful of reasons: a cable that unwound and let one side fall, a roller that broke or wore until it slipped the channel, a track knocked loose by a bumper, or hinges that tore through the section. We find which one it was, because setting the door back without fixing the cause just means it jumps again.',
			'On site we take the tension off, guide the rollers back into the track, straighten or replace the bent section of track, and replace the roller, hinge, cable, or bracket that failed. Then we balance the door by hand and run a full cycle before the opener goes back to work.',
		],
		signs: [
			'The door leans, with one corner dropped out of the track',
			'Rollers are sitting outside the track channel',
			'The door binds, scrapes the frame, or stops partway',
			'A loud pop or bang came before the door went crooked',
			'A car or trailer clipped the door or the track',
		],
		includes: [
			'The door eased back into the track with the tension off',
			'Straightening or replacement of the bent track section',
			'New rollers, hinges, cables, or brackets where they caused the jump',
			'A balance test and a full open-close cycle before we leave',
		],
		safety:
			'A door off the track is not balanced and can fall. Keep people and cars from under it, leave the opener off, and do not try to force the rollers back by hand — the spring and cables are still under load.',
		faqs: [
			{
				q: 'Can you put it back the same visit?',
				a: 'Usually, yes. Guiding the door back and replacing the roller, hinge, or cable that caused it is normal same-visit work. A badly bent track or a crushed section can need a part we order, and we tell you that on site.',
			},
			{
				q: 'My door came off after a cable broke. Is that related?',
				a: 'Often it is the cause. A cable that unwinds lets one side drop, and the rollers leave the track. We set the cable back on the drum, check the spring, and square the door so it tracks evenly again.',
			},
			{
				q: 'Is it safe to use until you arrive?',
				a: 'No. Leave it where it is. A door off the track is not carrying its weight evenly and can drop. Keep it clear and call 317-854-6917.',
			},
			{
				q: 'Why did my garage door come off the track?',
				a: 'The common causes are a broken or unwound cable that drops one side, a roller that wore or broke and slipped the channel, a track knocked loose by a vehicle, or hinges that tore through a section. We find the cause so the door does not jump again.',
			},
			{
				q: 'Will running the opener make an off-track door worse?',
				a: 'Yes. Forcing a crooked door with the opener bends the track further, can crack a section, and may pull the door down. Leave the opener off and the door where it is until the rollers are guided back and the cause is fixed.',
			},
		],
		related: ['garage-door-roller-replacement', 'garage-door-cable-replacement', 'garage-door-spring-replacement'],
		metaTitle: 'Off-Track Garage Door Repair – Goat Garage Door',
		metaDescription:
			'Goat Garage Door Service handles off-track garage door repair — doors that jumped the track, lean, bind, or dropped off their rollers. Call us today.',
		showTestimonials: true,
		showAreas: true,
		whyChoose: [
			{ title: 'We fix the cause', text: 'We find what pulled the door off — a cable, a roller, a bent track, or a torn hinge — so it does not jump the track again.' },
			{ title: 'The price comes first', text: 'You hear the number before the door is worked on, and we show you any part that failed before replacing it.' },
			{ title: 'Safe under tension', text: 'An off-track door is unbalanced and the springs are still loaded. We take the tension off properly rather than forcing it.' },
			{ title: 'On call day and night', text: 'A door off the track can trap the cars or leave the house open. The phone is answered 24/7, holidays included.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us what happened — a bang, a dropped corner, or a car that clipped the door — and leave the opener off.' },
			{ title: 'We find the cause', text: 'On site we take the tension off and check the rollers, cables, track, and hinges to see what let go.' },
			{ title: 'You hear the price', text: 'We tell you what failed and the number before the door is set back and the parts are replaced.' },
			{ title: 'We square and test', text: 'We guide the rollers back, straighten or replace the track, fit new parts, and run a full cycle before the opener returns.' },
		],
		seoSections: [
			{
				id: 'what',
				h2: 'What Puts a Garage Door Off Its Track',
				layout: 'split',
				imageId: 'hinge-fishers-side',
				paragraphs: [
					'Off-track garage door repair starts with why a door leaves its track: the rollers sit in the steel channel and the cables hold both sides even, so when a cable drops a side, a roller breaks, a track is knocked loose, or a hinge tears through, that balance is lost and the door leans or hangs crooked. From there it jams against the frame, and forcing it only bends the track further.',
				],
			},
			{
				id: 'causes',
				h2: 'Common Reasons a Garage Door Comes Off the Track',
				layout: 'causes',
				intro: 'Off-track garage door repair almost always traces back to one of these causes.',
				items: [
					{ title: 'A broken cable', text: 'A cable that unwinds or snaps lets one side drop, and the rollers on that side leave the channel.' },
					{ title: 'A failed roller', text: 'A roller that cracks or wears until the stem slips the track lets the section wander out.' },
					{ title: 'An impact', text: 'A car, trailer, or bumper that clips the door or the track knocks the rollers out and bends the steel.' },
					{ title: 'Torn hinges', text: 'A hinge that rips through a section lets the rollers it carries pull out of line.' },
				],
			},
			{
				id: 'back-vs-track',
				h2: 'Guiding the Door Back Versus Replacing Bent Track',
				layout: 'compare',
				intro: 'What the repair needs depends on how much the track and parts were damaged.',
				columns: [
					{ heading: 'Guide it back', points: ['Works when the track is still straight', 'The rollers are reseated with the tension off', 'The failed roller, cable, or hinge is replaced', 'Usually a same-visit repair'] },
					{ heading: 'Replace the track', points: ['Needed when a section of track is bent or crushed', 'A badly kinked track will not hold the rollers', 'The bent length is straightened or swapped', 'May need a part ordered on severe damage'] },
				],
			},
			{
				id: 'visit',
				h2: 'What an Off-Track Garage Door Repair Visit Involves',
				layout: 'steps',
				items: [
					{ text: 'We secure the door, take the spring tension off, and find what pulled it off the track.' },
					{ text: 'The rollers are guided back into the channel and the bent track is straightened or replaced.' },
					{ text: 'The roller, hinge, cable, or bracket that caused the jump is replaced after you hear the price.' },
					{ text: 'We balance the door by hand and run a full cycle before the opener goes back to work.' },
				],
			},
		],
	},
	{
		slug: 'garage-door-roller-replacement',
		title: 'Garage Door Roller Replacement',
		card: 'Worn or cracked rollers make a door grind and wobble. New rollers let it run quiet and track straight.',
		description:
			'Garage door roller replacement in Fishers and Indianapolis. Quiet nylon and steel rollers for doors that grind, wobble, or stick in the track. Call 317-854-6917.',
		lead: 'Garage door roller replacement in Fishers and Indianapolis — worn, cracked rollers make a door grind and wander, so a fresh set runs quiet and tracks straight.',
		imageId: 'hinge-fishers',
		paragraphs: [
			'Every section of a garage door carries rollers that ride in the track and turn on a stem seated in the hinges. They take the load every time the door moves, and they wear. Old rollers go from quiet to grinding, develop flat spots, or crack until the door shakes and drifts toward one side of the opening.',
			'We replace the full set so the door runs on even wheels, not a mix of new and worn. Nylon rollers run quieter than bare steel and are a common upgrade on a door that has gotten loud. On a heavier insulated door we match the roller and the stem to the weight so they last.',
			'Rollers are checked and changed with the door balanced and the tension managed, because the bottom roller sits in the bottom bracket that anchors the lift cable. While the sections are open we look at the hinges, since a worn hinge lets a roller wobble no matter how new it is.',
		],
		signs: [
			'The door grinds, rattles, or squeals as it moves',
			'A roller looks cracked, flat-spotted, or is missing its wheel',
			'The door wobbles or drifts toward one side of the opening',
			'Rollers feel loose or wobble on their stems',
			'The door sticks or chatters at the same spot every time',
		],
		includes: [
			'A full set of rollers matched to the door weight',
			'Quieter nylon rollers where that is the better fit',
			'A hinge check, since a worn hinge lets a new roller wobble',
			'A balance test and a quiet open-close cycle before we leave',
		],
		faqs: [
			{
				q: 'Do you replace all the rollers or just the bad one?',
				a: 'We replace the set. The rest have the same age and cycles, so putting one new roller next to worn ones just moves the noise. On a nearly new door with one clearly damaged roller, we will say if a single swap makes sense.',
			},
			{
				q: 'Will nylon rollers make the door quieter?',
				a: 'Usually, yes. Nylon rides quieter than bare steel and does not need the same oiling. On a loud door, new nylon rollers and a hinge check are often what turns the grind back into a quiet door.',
			},
			{
				q: 'Can worn rollers pull a door off the track?',
				a: 'They can. A roller that breaks or wears until it slips the channel lets the door leave the track. If that has already happened, start with off-track garage door repair and we will set it right and replace the rollers.',
			},
			{
				q: 'How long do garage door rollers last?',
				a: 'It depends on the roller and how often the door runs. Basic plastic or bare-steel rollers on a daily door wear in a handful of years, while sealed nylon rollers last considerably longer. We match the roller to the door weight so the new set holds up.',
			},
			{
				q: 'Why does my door wobble or drift to one side?',
				a: 'Rollers with flat spots or worn stems, or hinges that have loosened, let the sections wander in the track instead of riding straight. A fresh set of rollers and a hinge check usually settles the door back to tracking square and quiet.',
			},
		],
		related: ['off-track-garage-door-repair', 'garage-door-maintenance', 'garage-door-spring-replacement'],
		metaTitle: 'Garage Door Roller Replacement – Goat Garage Door',
		metaDescription:
			'Goat Garage Door Service handles garage door roller replacement — quiet nylon rollers for doors that grind, wobble, stick, or drift in the track. Call us.',
		showTestimonials: true,
		showAreas: true,
		whyChoose: [
			{ title: 'A full matched set', text: 'We replace the whole set with rollers matched to the door weight, so it runs on even wheels rather than a mix of new and worn.' },
			{ title: 'The price comes first', text: 'You hear the number before the work starts, and we only suggest a single roller when that genuinely makes sense.' },
			{ title: 'Hinges checked too', text: 'A worn hinge lets a brand-new roller wobble, so we check and replace hinges that would undo the quiet.' },
			{ title: 'On call day and night', text: 'A grinding door is a warning. The same Fishers crew answers 24/7 if a worn roller turns into a stuck door.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us how the door sounds and behaves — grinding, wobbling, or sticking at the same spot each time.' },
			{ title: 'We check the rollers', text: 'We look at the rollers, stems, and hinges with the door balanced to see what is worn and why.' },
			{ title: 'You hear the price', text: 'We tell you the number for the set and any hinges before the first roller comes out.' },
			{ title: 'We replace and test', text: 'The new rollers go in, worn hinges are swapped, and we run a quiet open-close cycle before we leave.' },
		],
		seoSections: [
			{
				id: 'grind',
				h2: 'Why Worn Garage Door Rollers Make the Door Grind',
				layout: 'split',
				imageId: 'hinge-fishers',
				paragraphs: [
					'Garage door roller replacement comes up because rollers are the wheels the door rides on, and when they wear flat, crack, or seize on their stems they stop rolling cleanly and start dragging in the track. That drag is the grind and rattle you hear, and it also lets the sections wander so the door drifts to one side, binds at a spot, and loads the opener harder than it should.',
				],
			},
			{
				id: 'wear',
				h2: 'What Wears Garage Door Rollers Out Over Time',
				layout: 'causes',
				intro: 'Garage door roller replacement is a wear job — rollers carry the door on every cycle, so several things wear them.',
				items: [
					{ title: 'Cycles and load', text: 'Every open and close spins the rollers under the full weight of the door, and that steady use grinds them down.' },
					{ title: 'Dry bearings', text: 'Bare-steel rollers run dry and noisy as the bearing wears, developing flat spots that chatter in the track.' },
					{ title: 'A heavy door', text: 'An insulated or out-of-balance door pushes harder on each roller and shortens the life of the set.' },
					{ title: 'Worn hinges', text: 'A loose hinge lets the roller stem wobble, so the wheel wears unevenly no matter how new it is.' },
				],
			},
			{
				id: 'nylon-steel',
				h2: 'Nylon Versus Steel Garage Door Rollers and Their Trade-Offs',
				layout: 'compare',
				intro: 'The right roller depends on how quiet you want the door and how hard it works.',
				columns: [
					{ heading: 'Nylon rollers', points: ['Run noticeably quieter than bare steel', 'Do not need regular oiling', 'Sealed-bearing versions last a long time', 'A common upgrade on a loud door'] },
					{ heading: 'Steel rollers', points: ['Lower cost up front', 'Tough but louder as the bearing wears', 'Benefit from regular lubrication', 'Fine on a door that runs less often'] },
				],
			},
			{
				id: 'visit',
				h2: 'What a Garage Door Roller Replacement Visit Involves',
				layout: 'steps',
				items: [
					{ text: 'We check the rollers, stems, and hinges with the door balanced and the tension managed.' },
					{ text: 'The full set of rollers is replaced with ones matched to the door weight, section by section.' },
					{ text: 'Worn hinges that would let a new roller wobble are swapped after you hear the price.' },
					{ text: 'We run a quiet open-close cycle and confirm the door tracks straight before we leave.' },
				],
			},
		],
	},
	{
		slug: 'garage-door-spring-replacement',
		title: 'Garage Door Spring Replacement',
		card: 'Torsion springs sized to the door, wound correctly, and paired when the system was built that way.',
		description:
			'Garage door spring replacement in Fishers and Indianapolis. Torsion springs sized to the door and installed safely. Call 317-854-6917.',
		lead: 'Fast, safe garage door spring replacement for homes across Fishers and Indianapolis — we size and fit new torsion springs so your door lifts smoothly again.',
		imageId: 'spring-new',
		paragraphs: [
			'The torsion spring above the door is what makes a hundred-plus pounds of steel feel light. When the coil separates, you often hear a bang, and the door becomes dead weight. The opener may still run. It should not be asked to lift the door like that.',
			'We replace torsion springs across Fishers and Indianapolis and size them to the door: height, width, and weight, including whether the door is insulated. A spring that is too strong or too weak wears the opener, the cables, and the door. Most double-car doors were built with a pair. If one broke and they were installed as a set, we recommend replacing both so you are not back here in a month.',
			'The photos on our work page show the real hardware: a separated spring, a new black spring on the shaft, and a Fishers job with the old spring and the new one side by side. Winding those springs is done with the proper bars, not with screwdrivers.',
		],
		signs: [
			'A loud bang from the garage, then the door will not open',
			'A visible gap in the coils above the door',
			'The door feels extremely heavy with the opener disconnected',
			'The opener strains, slips, or flashes a force error',
			'One spring looks intact and the other is in two pieces',
		],
		includes: [
			'Springs sized to the actual door',
			'Both springs when the door uses a matched pair',
			'Cables, drums, and center bearing checked while the system is apart',
			'A balance test and opener reconnect after the wind is set',
		],
		safety:
			'Torsion springs store enough energy to break bones. Do not try to wind, unwind, or clamp a spring. Call 317-854-6917 and stay clear of the shaft.',
		faqs: [
			{
				q: 'Why did my garage door spring break?',
				a: 'Springs are a wear item. Every open and close cycles the steel, and corrosion or a door out of balance shortens that life. A spring with a gap has used up its cycles.',
			},
			{
				q: 'Should both springs be replaced if only one broke?',
				a: 'On a door built with a pair, we recommend replacing both. The second spring has the same age and cycles, so a lone new spring next to a worn one just brings you back sooner.',
			},
			{
				q: 'Is it safe to open the door by hand after a spring breaks?',
				a: 'No. With the spring gone the door is full dead weight and can drop. Keep people and cars clear, leave it down, and do not pull the red release to lift it by hand.',
			},
			{
				q: 'Can I keep using the opener until the spring is fixed?',
				a: 'Better not. The opener is built to move a door the springs already balance, not to lift the full weight alone. Running it against a broken spring can strip the gears or snap a cable.',
			},
			{
				q: 'How long does a spring replacement take?',
				a: 'A straightforward torsion swap is usually a single visit once we are on site. Rusted cones, a bad bearing, or cables that must be replaced add time. We tell you after we see the shaft.',
			},
			{
				q: 'Can extension springs be converted to a torsion system?',
				a: 'Many older doors still use extension springs along the horizontal tracks. If there is headroom for a torsion shaft, conversion is often the better system. We confirm the framing first.',
			},
		],
		related: ['garage-door-cable-replacement', 'off-track-garage-door-repair', 'garage-door-maintenance'],
		metaTitle: 'Garage Door Spring Replacement – Goat Garage Door',
		metaDescription:
			'Goat Garage Door Service does garage door spring replacement — broken torsion springs, snapped coils, and paired-spring swaps sized to your door. Call us.',
		showTestimonials: true,
		showAreas: true,
		whyChoose: [
			{ title: 'Springs sized to your door', text: 'We match the new torsion spring to the door by height, width, and weight, including insulated sections, so it balances right.' },
			{ title: 'The price comes first', text: 'You hear the number before any spring work begins. If a full door is the better fix, we say so before anything is wound.' },
			{ title: 'Safe spring work', text: 'Torsion springs hold real tension. We release and reset it with the proper winding bars rather than makeshift tools.' },
			{ title: 'On call day and night', text: 'A door that will not open rarely waits for morning. The phone is answered 24/7, including weekends and holidays.' },
		],
		process: [
			{ title: 'You call', text: 'Day or night, tell us what the door did — a bang from the ceiling, a gap in the spring, or a door gone heavy.' },
			{ title: 'We check the door', text: 'We disconnect the opener and feel the balance, then look at the spring, cables, drums, and center bearing.' },
			{ title: 'You hear the price', text: 'We tell you which spring the door needs and the number before any winding starts. You decide what happens next.' },
			{ title: 'We replace and balance', text: 'We fit the sized spring, set the winding, seat the cables, and test the balance and auto-reverse before we leave.' },
		],
		seoSections: [
			{
				id: 'broken',
				h2: 'What Happens When a Garage Door Torsion Spring Breaks',
				layout: 'split',
				imageId: 'spring-gap',
				paragraphs: [
					'Garage door spring replacement is needed when the torsion spring above the door breaks: that spring stores the energy that makes a heavy door feel light, so once a coil separates the door becomes dead weight the opener cannot safely lift. You usually hear a loud bang the moment it happens.',
				],
			},
			{
				id: 'wear',
				h2: 'Why Garage Door Springs Wear Out and Eventually Fail',
				layout: 'causes',
				intro: 'A spring is a wear item, so garage door spring replacement is eventually part of owning the door. A few things decide how long it lasts.',
				items: [
					{ title: 'Everyday cycles', text: 'Every open and close winds and unwinds the steel. A spring is rated for a set number of cycles, and a door used daily spends them.' },
					{ title: 'Corrosion', text: 'Moisture and road salt through a hard winter pit the coils. A rusted spring loses strength and gives out sooner than a clean one.' },
					{ title: 'A door out of balance', text: 'A heavy or dragging door makes the spring work harder than it was sized to, which shortens the life of the whole system.' },
					{ title: 'The wrong spring', text: 'A spring undersized for the door wears out early and pulls the opener down with it. Sizing it correctly is the fix.' },
				],
			},
			{
				id: 'types',
				h2: 'Torsion Versus Extension Springs and Which System Your Door Uses',
				layout: 'compare',
				intro: 'Not every door uses the same spring. Knowing which system you have helps you describe the problem on the phone.',
				columns: [
					{ heading: 'Torsion springs', points: ['Mount on a shaft above the door', 'Wind and unwind to raise and lower it', 'Common on modern sectional doors', 'Balanced by spring size and the cable drums'] },
					{ heading: 'Extension springs', points: ['Run along the horizontal tracks', 'Stretch and contract as the door moves', 'Found on many older doors', 'Often paired with safety cables through the center'] },
				],
				note: 'Where a door has the headroom for a torsion shaft, converting from extension springs is often the sturdier setup. We confirm the framing before recommending it.',
			},
			{
				id: 'visit',
				h2: 'What a Professional Garage Door Spring Replacement Visit Involves',
				layout: 'steps',
				items: [
					{ text: 'The opener is disconnected and the door is checked by hand, so the real problem is clear before any parts come off.' },
					{ text: 'The old spring tension is released safely with winding bars, and the spring comes off the shaft.' },
					{ text: 'A new spring sized to the door goes on — both springs together when the door was built with a matched pair.' },
					{ text: 'Cables, drums, and the center bearing are checked while the system is apart, and anything worn is flagged for you.' },
					{ text: 'The spring is wound to spec, the door is balanced by hand, and the opener and auto-reverse are tested before we leave.' },
				],
			},
		],
	},
	{
		slug: 'commercial-garage-door-repair-installation',
		title: 'Commercial Garage Door Repair & Installation',
		card: 'Shop, dock, and warehouse doors repaired, replaced, and kept cycling so the building keeps working.',
		description:
			'Commercial garage door repair and installation in Fishers and Indianapolis. Service doors, rolling steel, sectional doors, and commercial openers. Call 317-854-6917.',
		lead: 'Commercial garage door repair and installation in Fishers and Indianapolis — shop, dock, and warehouse doors diagnosed, repaired, and kept cycling so the building keeps working.',
		imageId: 'job-materials',
		paragraphs: [
			'Commercial buildings run on doors that cycle far more than a house door: the sectional steel door on a loading dock, the rolling steel curtain over a shop bay, and the operator that lifts it through the day. Goat Garage Door Service takes commercial repair and installation calls across Fishers, Indianapolis, and the surrounding towns, with the phone answered 24/7 when a door strands a crew or leaves a building open.',
			'A repair starts the same way it does on any door: we find the part that failed before we quote it. Commercial doors give out at the spring, the cables, the rollers and track, the bottom bar, or the operator and its safety edge. We diagnose on site, give you the number before the work starts, and get the door cycling again.',
			'When a door is past repair we measure the opening and install a replacement built for the use — an insulated sectional door for a conditioned space, or a heavier door for a bay that takes weather and traffic. Planned maintenance keeps a high-cycle door from becoming an emergency: balance, hardware, and the operator checked on a schedule that fits how hard the door works.',
		],
		signs: [
			'A bay or dock door is stuck and the crew cannot get to work',
			'The operator runs but the door will not lift or reverses',
			'A spring or cable let go on a heavy door',
			'The door is off the track or dragging in the curtain',
			'The door is slow, loud, or cycling rough under daily use',
		],
		includes: [
			'On-site diagnosis of the door, the hardware, and the operator',
			'Repair or replacement of springs, cables, rollers, track, and panels',
			'Commercial operator repair, replacement, and safety checks',
			'A price before the work starts and a test cycle before we leave',
		],
		safety:
			'Commercial counterbalance springs hold even more energy than a house door. Keep people and equipment clear of a door that is stuck, off the track, or dropping, and leave the operator off until we arrive.',
		faqs: [
			{
				q: 'Do you work on rolling steel and sectional doors?',
				a: 'Both are common commercial doors. A sectional steel door rides overhead on tracks like a larger house door; a rolling steel door coils into a barrel above the opening. Tell us which you have, or send a photo, and we will tell you what the repair needs before we come out.',
			},
			{
				q: 'Can you come out after hours?',
				a: 'Yes. The phone is answered 24/7, including weekends and holidays. A commercial door that leaves a building open or traps equipment is an emergency call. Reach us at 317-854-6917.',
			},
			{
				q: 'Do you service the opener as well as the door?',
				a: 'Yes. The operator — the motor, the controls, and the safety edge or photo-eyes — is part of the same visit. We check the door balance first, because an operator should not be lifting a door the springs no longer carry.',
			},
			{
				q: 'Can a commercial door be repaired or does it need replacing?',
				a: 'Many commercial doors are worth repairing — a spring, cables, rollers, a bottom bar, or an operator part. When the sections are crushed, the curtain is damaged, or the door is worn out from years of cycles, a replacement built for the use is the better value. We tell you which on site.',
			},
			{
				q: 'Do high-cycle doors need regular maintenance?',
				a: 'They benefit from it. A door that opens dozens of times a day wears springs, cables, and the operator far faster than a home door, so scheduled checks of balance, hardware, and the safety edge keep a busy door from failing mid-shift.',
			},
		],
		related: ['garage-door-installation', 'garage-door-opener-repair', 'off-track-garage-door-repair'],
		metaTitle: 'Commercial Garage Door Repair – Goat Garage Door',
		metaDescription:
			'Goat Garage Door Service handles commercial garage door repair and installation — service doors, rolling steel, sectional doors, and operators. Call us.',
		showTestimonials: true,
		showAreas: true,
		whyChoose: [
			{ title: 'Built for the use', text: 'We repair and install doors to match how hard they work, from a conditioned-space sectional to a heavier door on a busy bay.' },
			{ title: 'The price comes first', text: 'You hear the number before the work starts, so a repair or a replacement is a decision you make with the cost in hand.' },
			{ title: 'Door and operator together', text: 'We check the balance before the operator, because a commercial opener should not be lifting a door the springs no longer carry.' },
			{ title: 'On call day and night', text: 'A stuck bay or dock door stops the work. The phone is answered 24/7, including weekends and holidays.' },
		],
		process: [
			{ title: 'You call', text: 'Tell us the door type and what it did, or send a photo, so we arrive ready for a rolling steel or sectional door.' },
			{ title: 'We diagnose on site', text: 'We check the door, the hardware, and the operator to find the part that failed before anything is quoted.' },
			{ title: 'You hear the price', text: 'We give you the number for the repair, and a replacement beside it when the door is past fixing. You decide.' },
			{ title: 'We repair and test', text: 'We fix or replace the failed parts, check the safety edge or photo-eyes, and run a full cycle before we leave.' },
		],
		seoSections: [
			{
				id: 'need',
				h2: 'What Commercial Garage Doors Need That House Doors Do Not',
				layout: 'split',
				imageId: 'job-materials',
				paragraphs: [
					'Commercial garage door repair is different because a commercial door cycles far more often than a home door and is usually heavier, so its springs, cables, rollers, and operator wear faster and the hardware is built to a sturdier standard. A loading dock or shop bay also depends on the door staying secure and reliable, which is why diagnosis, balance, and the safety edge matter as much as the panels.',
				],
			},
			{
				id: 'problems',
				h2: 'Common Commercial Garage Door Problems on Busy Doors',
				layout: 'causes',
				intro: 'Commercial garage door repair usually starts here — high-cycle doors fail in a few predictable ways.',
				items: [
					{ title: 'Worn springs and cables', text: 'Heavy doors that cycle all day wear the counterbalance faster, and a failed spring or cable leaves the door stuck.' },
					{ title: 'Operator faults', text: 'The motor, controls, or safety edge on a commercial operator take constant use and are a frequent point of failure.' },
					{ title: 'Off-track and dragging', text: 'An impact or a worn roller pulls a sectional door off the track, or a rolling curtain starts to drag in its guides.' },
					{ title: 'Impact damage', text: 'Forklifts and trucks dent sections and bend track, which binds the door and needs repair before it worsens.' },
				],
			},
			{
				id: 'rolling-sectional',
				h2: 'Rolling Steel Versus Sectional Doors for Commercial Buildings',
				layout: 'compare',
				intro: 'The two common commercial doors work differently, which changes how each is repaired.',
				columns: [
					{ heading: 'Sectional steel', points: ['Rides overhead on tracks like a larger house door', 'Built from horizontal sections and rollers', 'Common on docks and conditioned spaces', 'Available insulated for heated buildings'] },
					{ heading: 'Rolling steel', points: ['Coils into a barrel above the opening', 'A single steel curtain rather than sections', 'Common over shop bays and storefronts', 'Saves ceiling space where headroom is tight'] },
				],
			},
			{
				id: 'visit',
				h2: 'What a Commercial Garage Door Service Visit Involves',
				layout: 'steps',
				items: [
					{ text: 'We identify the door type and diagnose the door, the hardware, and the operator on site.' },
					{ text: 'You hear the price for the repair, and for a replacement when the door is past fixing, before work starts.' },
					{ text: 'We repair or replace the failed springs, cables, rollers, track, panels, or operator parts.' },
					{ text: 'We check the safety edge or photo-eyes and run a full cycle before the door goes back into use.' },
				],
			},
		],
	},
];

export function getService(slug: string) {
	return services.find((service) => service.slug === slug);
}
