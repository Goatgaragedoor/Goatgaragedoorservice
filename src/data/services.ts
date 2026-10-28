export interface Faq {
	q: string;
	a: string;
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
}

export const services: Service[] = [
	{
		slug: 'emergency-garage-door-repair',
		title: 'Emergency Garage Door Repair',
		card: 'Door stuck open, snapped spring, or an opener that quit. We take those calls day and night.',
		description:
			'24/7 emergency garage door repair in Fishers and Indianapolis. Stuck doors, broken springs, snapped cables, and dead openers. Call 317-854-6917.',
		lead: 'If the door will not close tonight or will not open in the morning, call. We answer 24/7.',
		imageId: 'tech-spring',
		paragraphs: [
			'An emergency is a door that leaves the house open, traps the cars, or is hanging crooked in the tracks. Goat Garage Door Service covers those calls across Fishers, Indianapolis, and the nearby Hamilton County towns any hour of the day.',
			'Most after-hours failures are a torsion spring that separated, a cable that jumped the drum, or an opener that is trying to lift a door the springs no longer balance. We find which one it is on site, quote the repair, and get the door moving again.',
			'You do not need the model number to call. Tell us what the door did — a loud bang from the ceiling, a gap in the spring, a cable hanging loose, or a motor that hums — and we will bring the parts those symptoms usually need.',
		],
		signs: [
			'The door is stuck open and will not stay down',
			'A loud bang came from above the door, then it got very heavy',
			'The door is crooked, with one side higher than the other',
			'The opener runs but the door does not move',
			'A cable is slack, frayed, or off the drum',
		],
		includes: [
			'On-site look at the springs, cables, track, and opener',
			'Spring, cable, roller, hinge, and opener repairs',
			'A quote before the repair goes ahead',
			'A test cycle of the door and the auto-reverse before we leave',
		],
		safety:
			'Leave a door with a broken spring or loose cable alone. Those parts are under tension. Do not pull the red release and try to lift a two-car door by hand, and do not keep hitting the wall button.',
		faqs: [
			{
				q: 'Do you really answer at night?',
				a: 'Yes. Hours are 24/7, including weekends and holidays. Call 317-854-6917 if the door is stuck.',
			},
			{
				q: 'What should I do while I wait?',
				a: 'Keep people and cars clear of the door. If it is open and will not close, lock the house entry from the garage. Unplug the opener if it is grinding or reversing on its own.',
			},
			{
				q: 'Can you secure the door the same visit?',
				a: 'That is the point of the trip. We repair the failed part when we have the match on the truck, and we tell you straight when a full door is the right fix instead.',
			},
		],
		related: ['garage-door-spring-replacement', 'garage-door-cable-replacement', 'garage-door-opener-repair'],
	},
	{
		slug: 'garage-door-bottom-seal-replacement',
		title: 'Garage Door Bottom Seal Replacement',
		card: 'A new seal along the floor stops light, water, leaves, and drafts under the door.',
		description:
			'Garage door bottom seal replacement in Fishers and Indianapolis. Close gaps that let in water, leaves, and pests. Call Goat Garage Door Service.',
		lead: 'When you can see daylight under the door, the bottom seal is done.',
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
		],
		related: ['garage-door-maintenance', 'garage-door-panel-replacement', 'garage-door-repair'],
	},
	{
		slug: 'garage-door-cable-replacement',
		title: 'Garage Door Cable Replacement',
		card: 'Frayed or unwound lift cables put the door crooked. We replace them and set them back on the drums.',
		description:
			'Garage door cable replacement in Fishers and Indianapolis. We replace frayed or snapped lift cables and set the door back on track. Call 317-854-6917.',
		lead: 'Cables do the lifting with the springs. When one lets go, the door racks.',
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
		],
		related: ['garage-door-spring-replacement', 'emergency-garage-door-repair', 'garage-door-repair'],
	},
	{
		slug: 'garage-door-installation',
		title: 'Garage Door Installation',
		card: 'New residential doors, measured, sprung, and set so they run quiet and stay balanced.',
		description:
			'Garage door installation in Fishers and Indianapolis. New insulated doors, carriage-house styles, and full replacements. Call Goat Garage Door Service.',
		lead: 'A new door for a worn-out opening or a house that needs the front to look finished.',
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
		],
		related: ['garage-door-opener-installation', 'garage-door-panel-replacement', 'garage-door-spring-replacement'],
	},
	{
		slug: 'garage-door-maintenance',
		title: 'Garage Door Maintenance',
		card: 'A tune-up of balance, hardware, seals, and the opener before a small issue becomes a stuck door.',
		description:
			'Garage door maintenance in Fishers and Indianapolis. Balance, rollers, hardware, seals, and opener safety checks. Call 317-854-6917.',
		lead: 'A working door still needs a look. Balance and hardware fail a little at a time.',
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
		],
		related: ['garage-door-repair', 'garage-door-spring-replacement', 'garage-door-bottom-seal-replacement'],
	},
	{
		slug: 'garage-door-opener-installation',
		title: 'Garage Door Opener Installation',
		card: 'A new opener, sensors, and remotes, set to the weight of the door you actually have.',
		description:
			'Garage door opener installation in Fishers and Indianapolis. New openers, sensors, and remotes, including Chamberlain units. Call 317-854-6917.',
		lead: 'New power for a door that still has life, or a matched opener with a new door.',
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
		],
		related: ['garage-door-opener-repair', 'garage-door-installation', 'garage-door-maintenance'],
	},
	{
		slug: 'garage-door-opener-repair',
		title: 'Garage Door Opener Repair',
		card: 'Motors, sensors, remotes, and doors that reverse, grind, or sit still while the light blinks.',
		description:
			'Garage door opener repair in Fishers and Indianapolis. Motors, sensors, remotes, and doors that reverse or will not move. Call 317-854-6917.',
		lead: 'When the motor runs and the door does not, or the door reverses for no clear reason.',
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
				a: 'Only if you need to get a car out and the door is balanced enough to lift. If the door feels like a dead weight, leave the cord alone and call for emergency garage door repair.',
			},
		],
		related: ['garage-door-opener-installation', 'emergency-garage-door-repair', 'garage-door-repair'],
	},
	{
		slug: 'garage-door-panel-replacement',
		title: 'Garage Door Panel Replacement',
		card: 'One dented or cracked section swapped when a matching panel is still available.',
		description:
			'Garage door panel replacement in Fishers and Indianapolis. Dented or cracked sections repaired when a match is available. Call 317-854-6917.',
		lead: 'A single bad section does not always mean a whole new door.',
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
		],
		related: ['garage-door-installation', 'garage-door-repair', 'garage-door-bottom-seal-replacement'],
	},
	{
		slug: 'garage-door-repair',
		title: 'Garage Door Repair',
		card: 'Off-track doors, worn rollers, bent hinges, noisy travel, and everything between a spring and a sensor.',
		description:
			'Garage door repair in Fishers and Indianapolis. Springs, cables, tracks, hinges, panels, and openers. 24/7. Call Goat at 317-854-6917.',
		lead: 'The general visit: we find what failed and repair the door, the hardware, or the opener.',
		imageId: 'job-windows',
		paragraphs: [
			'Garage door repair is the broad call, and it covers the parts the specialty pages break out. Springs, cables, rollers, hinges, track, panels, bottom seals, and openers. Goat Garage Door Service does that work for homes in Fishers, Indianapolis, Carmel, Noblesville, Westfield, Lawrence, McCordsville, Zionsville, Greenwood, Anderson, Brownsburg, and Greenfield.',
			'A lot of “the opener is broken” calls are a door problem. We start with the door disconnected, because a balanced door tells the truth. From there the repair is specific: a new roller hinge like the Fishers job on this page, a straightened track, a cable back on the drum, or a spring that actually matches the door.',
			'If you are not sure which service you need, call this one. Describe the noise or send a photo. We will point you to the right fix, and the emergency line is the same number.',
		],
		signs: [
			'Grinding, popping, or a door that shudders on the way up',
			'Rollers popping out or a hinge that ripped through the stile',
			'The door sticks halfway and the opener flashes',
			'Track is bent, loose from the wall, or rubbing the door',
			'You can name the symptom and not the part',
		],
		includes: [
			'Diagnosis with the opener disconnected',
			'Repair of springs, cables, rollers, hinges, track, and panels',
			'Opener adjustments when the door itself is sound',
			'A written-clear quote before parts go on',
		],
		faqs: [
			{
				q: 'Do you repair every brand of door?',
				a: 'We repair the standard residential systems used around Indianapolis: sectional steel doors, torsion springs, and the common opener brands. If you have something unusual, send a photo and we will tell you before the drive.',
			},
			{
				q: 'How fast can you get here?',
				a: 'Emergency calls are 24/7. How soon a truck arrives depends on what is already on the board and where you are. Fishers and the north side are the shortest runs. Call and we will give you a real window.',
			},
			{
				q: 'What if the door needs several things?',
				a: 'We list them. A noisy door might only need rollers. The same door might also have a spring near the end of its life. You choose what to do now.',
			},
		],
		related: ['emergency-garage-door-repair', 'garage-door-spring-replacement', 'garage-door-opener-repair'],
	},
	{
		slug: 'garage-door-spring-replacement',
		title: 'Garage Door Spring Replacement',
		card: 'Torsion springs sized to the door, wound correctly, and paired when the system was built that way.',
		description:
			'Garage door spring replacement in Fishers and Indianapolis. Torsion springs sized to the door and installed safely. Call 317-854-6917.',
		lead: 'A broken torsion spring is the most common reason a door suddenly will not open.',
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
				q: 'How long does a spring replacement take?',
				a: 'A straightforward torsion swap is usually a single visit once we are on site. Rusted cones, a bad bearing, or cables that have to be replaced add time. We will tell you after we see the shaft.',
			},
			{
				q: 'Why did it break?',
				a: 'Springs are a wear item. Every open and close cycles the steel. Corrosion and a door that is out of balance shorten that life. A spring with a gap has already failed; the cycles are used up.',
			},
			{
				q: 'Can you convert extension springs to torsion?',
				a: 'Many older doors still use extension springs along the horizontal tracks. If there is headroom for a torsion shaft, conversion is often the better system. We confirm the framing before we promise it.',
			},
		],
		related: ['garage-door-cable-replacement', 'emergency-garage-door-repair', 'garage-door-maintenance'],
	},
];

export function getService(slug: string) {
	return services.find((service) => service.slug === slug);
}
