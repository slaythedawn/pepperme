import type { Program } from "@/components/pages/ProgramPage";

/**
 * The programs of care, in full.
 *
 * Per the handoff, only hormonal and sexual health genuinely fork Him/Her —
 * those get the three-page trio. Recovery, performance, sleep and longevity are
 * one unisex page each, because the physiology doesn't diverge and a fork block
 * where the content doesn't fork is decoration.
 *
 * Copy names the body system, the archetype and what the care includes. It
 * never names a medicine. Reference intervals are the Australian ones the panel
 * is read against, shown as data with no interpretation attached.
 */

export const PROGRAMS: Record<string, Program> = {
  recovery: {
    slug: "recovery",
    code: "RCV · 04",
    eyebrow: "Recovery",
    title: "Your recovery curve flattened. Nobody measured why",
    intro:
      "Soft tissue, sleep and inflammation are one system, and they are the system that decides whether you come back from a session or carry it into the next one. Pepper Me's recovery program is doctor-led and panel-driven: a real Australian doctor reads the markers that govern repair, together, and decides what — if anything — comes next.",
    heroImage: "recovery-hero",
    pepperNote: "Recovery isn't rest. It's a measurable process, and it can stall.",
    symptomHeading: "You're not just getting older",
    symptoms: [
      {
        title: "Three days to come back from a session",
        body: "The same session that used to cost you one.",
      },
      {
        title: "A tendon that never fully settles",
        body: "It quietens down, you train, it comes back. For months.",
      },
      {
        title: "Sleep that stopped doing the repair work",
        body: "Eight hours in bed and none of the benefit.",
      },
      {
        title: "Stiffness that outlasts the warm-up",
        body: "Thirty minutes in and you're still waiting to feel loose.",
      },
      {
        title: "Niggles that migrate",
        body: "One joint settles and another starts. That's a systemic pattern, not bad luck.",
      },
      {
        title: "Imaging that came back clean",
        body: "Nothing structural to find, and still nothing working.",
      },
    ],
    brandLine: "Repair is a system, not a body part",
    brandLineSupport: "Read it that way, or keep treating one joint at a time.",
    inclusions: [
      {
        label: "01 · Included",
        title: "42-marker recovery panel",
        body: "Australian-accredited lab, walk-in. Inflammatory, metabolic, endocrine and micronutrient markers, read together.",
      },
      {
        label: "02 · Included",
        title: "30-min doctor consult",
        body: "A sports physician reads your panel with you on a video call, alongside your training load and injury history.",
      },
      {
        label: "03 · Included",
        title: "A written read of your system",
        body: "What your panel actually says, in plain language. Yours to keep, share, or take to your physio.",
      },
      {
        label: "04 · If indicated",
        title: "A care plan, decided on the call",
        body: "Discussed only after your panel is read — never advertised, never up-sold. Re-read at 12 weeks against fresh bloods.",
        dark: true,
      },
    ],
    panelHeading: "The markers that govern repair, against their intervals.",
    panelIntro:
      "Six of the 42 markers, shown the way your doctor reads them — value, unit and the Australian reference interval, aligned so they compare down the column.",
    markers: [
      { name: "hs-CRP", value: 4.2, unit: "mg/L", low: 0, high: 3.0 },
      { name: "Creatine kinase", value: 268, unit: "U/L", low: 30, high: 200 },
      { name: "Ferritin", value: 41, unit: "µg/L", low: 30, high: 300 },
      { name: "Vitamin D (25-OH)", value: 44, unit: "nmol/L", low: 50, high: 150 },
      { name: "IGF-1", value: 16.4, unit: "nmol/L", low: 11.0, high: 30.0 },
      { name: "TSH", value: 2.4, unit: "mIU/L", low: 0.4, high: 4.0 },
    ],
    doctors: ["m-holt", "a-reid", "k-wong"],
    doctorHeading:
      "A sports physician reads your panel, alongside the training that produced it",
    faqs: [
      {
        q: "I've already had imaging and it was clean. Is this different?",
        a: "Yes. Imaging shows structure. This panel shows the inflammatory, endocrine and micronutrient environment that structure is trying to repair in. Clean imaging with a stalled recovery curve is exactly the case this program is built for.",
      },
      {
        q: "Do I need to stop training?",
        a: "That's a decision for the consult, and it depends on what the panel shows and what you're training for. Nobody at Pepper Me tells you to stop or continue before reading your bloods.",
      },
      {
        q: "How does this work with my physio?",
        a: "Alongside, not instead. Your written read is yours to hand over, and most members find it gives their physio information they've never had for that patient.",
      },
      {
        q: "What if my doctor declines?",
        a: "Your $149 is refunded in full. You keep your bloods and your written read. Around 14% of assessments are declined.",
      },
    ],
  },

  performance: {
    slug: "performance",
    code: "PRF · 02",
    eyebrow: "Performance",
    title: "The plateau isn't in your program. It's in your bloods",
    intro:
      "Output, power and lean mass sit downstream of endocrine, metabolic and haematological markers. When training and nutrition are already right and the numbers still won't move, the missing variable is usually one nobody has measured. Pepper Me's performance program measures it.",
    heroImage: "performance-hero",
    pepperNote: "A plateau is data. Most people never read it.",
    symptomHeading: "You've already fixed the obvious things",
    symptoms: [
      {
        title: "The same program, less return",
        body: "Progressive overload that stopped being progressive about a year ago.",
      },
      {
        title: "Lean mass going the wrong way",
        body: "Same training, same food, different composition.",
      },
      {
        title: "Output down, effort up",
        body: "The session feels harder and the numbers say it was easier.",
      },
      {
        title: "Recovery eating your volume",
        body: "You've cut sessions to keep up, not because you wanted to.",
      },
      {
        title: "Brain fog mid-session",
        body: "The concentration goes before the legs do.",
      },
      {
        title: "Everyone's advice, no one's data",
        body: "Four opinions from four coaches and not one blood panel between them.",
      },
    ],
    brandLine: "Train the athlete, read the system",
    brandLineSupport: "The program can only be as good as what it's written against.",
    inclusions: [
      {
        label: "01 · Included",
        title: "68-marker performance panel",
        body: "Endocrine, metabolic, haematological and inflammatory markers at an Australian-accredited lab.",
      },
      {
        label: "02 · Included",
        title: "30-min doctor consult",
        body: "A sports physician reads the panel against your training load, your sleep and your competition calendar.",
      },
      {
        label: "03 · Included",
        title: "A written read of your system",
        body: "In plain language, and specific enough for your coach to work from.",
      },
      {
        label: "04 · If indicated",
        title: "A care plan, decided on the call",
        body: "Discussed only after your panel is read. Re-read quarterly against fresh bloods.",
        dark: true,
      },
    ],
    panelHeading: "The markers under the plateau, against their intervals.",
    panelIntro:
      "Six of the 68 markers, shown the way your doctor reads them — value, unit and the Australian reference interval, aligned so they compare down the column.",
    markers: [
      { name: "Total testosterone", value: 12.1, unit: "nmol/L", low: 8.3, high: 29.0 },
      { name: "Free testosterone", value: 188, unit: "pmol/L", low: 170, high: 620 },
      { name: "Haemoglobin", value: 141, unit: "g/L", low: 130, high: 175 },
      { name: "Ferritin", value: 28, unit: "µg/L", low: 30, high: 300 },
      { name: "HbA1c", value: 5.4, unit: "%", low: 4.0, high: 6.0 },
      { name: "IGF-1", value: 19.8, unit: "nmol/L", low: 11.0, high: 30.0 },
    ],
    doctors: ["m-holt", "a-reid", "j-obrien"],
    doctorHeading: "A sports physician who reads bloods, not just programs",
    faqs: [
      {
        q: "Is this for competitive athletes only?",
        a: "No. Most members train seriously and compete against themselves. The panel is the same either way — what changes is what the doctor reads it against.",
      },
      {
        q: "I compete under anti-doping rules. Does that matter?",
        a: "It matters a great deal, and you should say so on the assessment. Your doctor will factor your governing body's rules into the consult before anything is decided.",
      },
      {
        q: "Can my coach see the results?",
        a: "Your written read is yours. Plenty of members hand it straight to their coach, and it's written to be useful to one.",
      },
      {
        q: "What if my doctor declines?",
        a: "Your $149 is refunded in full. You keep your bloods and your written read. Around 14% of assessments are declined.",
      },
    ],
  },

  sleep: {
    slug: "sleep",
    code: "SLP · 01",
    eyebrow: "Sleep",
    title: "You're not a bad sleeper. Your architecture changed",
    intro:
      "Sleep isn't one thing. Onset, depth, continuity and timing are separate systems with separate causes, and hormones, thyroid and iron sit underneath all four. Pepper Me's sleep program is led by a sleep physician who reads the diagnostic and the bloodwork together.",
    heroImage: "sleep-hero",
    pepperNote: "Eight hours in bed is not the same as eight hours of sleep.",
    symptomHeading: "You've tried the obvious things",
    symptoms: [
      {
        title: "Ninety minutes to fall asleep",
        body: "Tired all evening, wide awake the moment the light goes off.",
      },
      {
        title: "The 3am wake-up",
        body: "Reliable, unexplained, and a hormonal signature more often than a habit.",
      },
      {
        title: "Eight hours and no benefit",
        body: "Time in bed is fine. What happens in it isn't.",
      },
      {
        title: "Shift work you never adjusted to",
        body: "Years in, and the body still hasn't filed it as normal.",
      },
      {
        title: "Sleep hygiene you already do perfectly",
        body: "No screens, no caffeine, cold room, same time nightly. Still nothing.",
      },
      {
        title: "A tracker full of data nobody reads",
        body: "Months of nightly numbers and not one clinician has looked at them.",
      },
    ],
    brandLine: "Sleep is a measurement, not a habit",
    brandLineSupport: "Fix what the data shows, not what the advice column says.",
    inclusions: [
      {
        label: "01 · Included",
        title: "14-night diagnostic",
        body: "A ring worn for two weeks, plus a hormonal and metabolic panel at an Australian-accredited lab.",
      },
      {
        label: "02 · Included",
        title: "30-min sleep physician consult",
        body: "A sleep physician reads the fourteen nights and the bloods together, on a video call.",
      },
      {
        label: "03 · Included",
        title: "A written read of your architecture",
        body: "Onset, depth, continuity and timing, separated out, with what the bloods say about each.",
      },
      {
        label: "04 · If indicated",
        title: "A care plan, decided on the call",
        body: "Discussed only after the diagnostic is read. Re-read quarterly.",
        dark: true,
      },
    ],
    panelHeading: "What sits underneath sleep, against its intervals.",
    panelIntro:
      "Six markers from the sleep panel, shown the way your doctor reads them — value, unit and the Australian reference interval, aligned so they compare down the column.",
    markers: [
      { name: "Morning cortisol", value: 712, unit: "nmol/L", low: 140, high: 690 },
      { name: "TSH", value: 3.6, unit: "mIU/L", low: 0.4, high: 4.0 },
      { name: "Ferritin", value: 24, unit: "µg/L", low: 30, high: 300 },
      { name: "Vitamin D (25-OH)", value: 61, unit: "nmol/L", low: 50, high: 150 },
      { name: "Magnesium", value: 0.74, unit: "mmol/L", low: 0.7, high: 1.1 },
      { name: "HbA1c", value: 5.7, unit: "%", low: 4.0, high: 6.0 },
    ],
    doctors: ["k-wong", "l-mackenzie", "a-reid"],
    doctorHeading: "A sleep physician reads the fourteen nights and the bloods together",
    faqs: [
      {
        q: "I already have a sleep tracker. Do I need the ring?",
        a: "If yours exports raw nightly data, bring it to the assessment and your doctor will tell you whether it's enough. The ring is included so that nobody is reading a fortnight of guesswork.",
      },
      {
        q: "Is this a sleep study?",
        a: "No. A laboratory polysomnogram diagnoses sleep-disordered breathing, and if your doctor suspects that, they will refer you for one. This program reads architecture and the physiology underneath it.",
      },
      {
        q: "I work nights. Is this for me?",
        a: "Yes, and it's one of the clearest cases for it. Shift work is read as its own pattern rather than as insomnia with a different name.",
      },
      {
        q: "What if my doctor declines?",
        a: "Your $149 is refunded in full. You keep your bloods, your fourteen nights and your written read. Around 14% of assessments are declined.",
      },
    ],
  },

  longevity: {
    slug: "longevity",
    code: "LNG · 09",
    eyebrow: "Longevity",
    title: "Your age is a date. Your biology is a rate",
    intro:
      "How fast you are ageing is measurable, and it is not the same number as how long you have been alive. Pepper Me's longevity program reads metabolic, inflammatory and cardiovascular markers alongside an epigenetic pace-of-ageing test, quarterly, under one doctor.",
    heroImage: "longevity-hero",
    pepperNote: "The rate is the number worth watching. It's also the one that moves.",
    symptomHeading: "You want the number, not the reassurance",
    symptoms: [
      {
        title: "A family history you'd rather get ahead of",
        body: "Something in the last generation you don't intend to repeat.",
      },
      {
        title: "Bloods that are technically fine",
        body: "In range for the population average, which is not the same as good.",
      },
      {
        title: "Years of data nobody has trended",
        body: "Five annual checks sitting in five separate systems.",
      },
      {
        title: "A metabolic drift you can feel",
        body: "The same inputs producing a slowly different body.",
      },
      {
        title: "Cognitive maintenance on your mind",
        body: "Not a symptom. A priority.",
      },
      {
        title: "You want a baseline while it's still early",
        body: "The point of a rate is measuring it before it matters.",
      },
    ],
    brandLine: "Measure the rate, not the milestone",
    brandLineSupport: "A birthday tells you nothing a panel can't tell you better.",
    inclusions: [
      {
        label: "01 · Included",
        title: "Epigenetic pace-of-ageing test",
        body: "A validated methylation measure of how quickly you are ageing, taken at baseline.",
      },
      {
        label: "02 · Included",
        title: "Metabolic and cardiovascular panel",
        body: "Inflammatory, glycaemic, lipid and renal markers at an Australian-accredited lab.",
      },
      {
        label: "03 · Included",
        title: "30-min doctor consult",
        body: "A longevity-trained GP reads the rate against the panel, and both against your history.",
      },
      {
        label: "04 · If indicated",
        title: "A care plan, decided on the call",
        body: "Discussed only after the panel is read. Re-read every quarter, with the rate re-measured annually.",
        dark: true,
      },
    ],
    panelHeading: "The markers behind the rate, against their intervals.",
    panelIntro:
      "Six markers from the longevity panel, shown the way your doctor reads them — value, unit and the Australian reference interval, aligned so they compare down the column.",
    markers: [
      { name: "hs-CRP", value: 1.4, unit: "mg/L", low: 0, high: 3.0 },
      { name: "HbA1c", value: 5.9, unit: "%", low: 4.0, high: 6.0 },
      { name: "ApoB", value: 1.34, unit: "g/L", low: 0.6, high: 1.2 },
      { name: "Homocysteine", value: 12.1, unit: "µmol/L", low: 5.0, high: 15.0 },
      { name: "eGFR", value: 96, unit: "mL/min/1.73m²", low: 90, high: 120 },
      { name: "Vitamin D (25-OH)", value: 78, unit: "nmol/L", low: 50, high: 150 },
    ],
    doctors: ["j-obrien", "a-reid", "s-crawford"],
    doctorHeading: "A longevity-trained doctor reads the rate and the panel as one",
    faqs: [
      {
        q: "Is pace-of-ageing testing actually validated?",
        a: "The measure we use is a published methylation-based estimate of the rate of biological ageing, with peer-reviewed validation behind it. Your doctor will tell you plainly what it can and can't support — it's one input, not a verdict.",
      },
      {
        q: "I'm in my thirties. Is that too early?",
        a: "No. A rate is only useful measured against itself over time, so an early baseline is worth more than a late one. The program takes adults under 55.",
      },
      {
        q: "Will this replace my GP?",
        a: "No, and it isn't meant to. Your written read is designed to go to your GP, and anything requiring ongoing general care goes back to them.",
      },
      {
        q: "What if my doctor declines?",
        a: "Your $149 is refunded in full. You keep your bloods, your rate and your written read. Around 14% of assessments are declined.",
      },
    ],
  },

  "sexual-health": {
    slug: "sexual-health",
    code: "SXL · 03",
    eyebrow: "Sexual health",
    title: "Sexual response is downstream. Almost nobody reads upstream",
    intro:
      "Response sits at the end of an endocrine, vascular and psychological chain, and treating the end of a chain rarely holds. Pepper Me's sexual health program reads all three together, with a sexual medicine doctor, and starts where the cause is rather than where the symptom is.",
    heroImage: "sexual-hero",
    pepperNote: "It's a symptom of a system. It is almost never the system itself.",
    symptomHeading: "It changed, and nobody asked why",
    symptoms: [
      {
        title: "A change you can date",
        body: "It wasn't gradual. Something shifted, and around then.",
      },
      {
        title: "Desire that went quiet",
        body: "Not the relationship. Not the stress. Something else.",
      },
      {
        title: "Response that stopped being reliable",
        body: "Occasional at first, and now something you plan around.",
      },
      {
        title: "A GP visit that lasted four minutes",
        body: "One question, one script offered, no bloods taken.",
      },
      {
        title: "Cardiovascular risk nobody connected",
        body: "Vascular symptoms show up here first. That is worth investigating, not ignoring.",
      },
      {
        title: "Mood and sleep moving at the same time",
        body: "Three things changing together is one cause, not three.",
      },
    ],
    brandLine: "Start upstream",
    brandLineSupport: "The end of a chain is the worst place to begin.",
    inclusions: [
      {
        label: "01 · Included",
        title: "Endocrine and vascular panel",
        body: "Hormonal, metabolic, lipid and inflammatory markers at an Australian-accredited lab.",
      },
      {
        label: "02 · Included",
        title: "30-min doctor consult",
        body: "A sexual medicine doctor reads the panel with you, in a consult built for the conversation rather than around it.",
      },
      {
        label: "03 · Included",
        title: "A written read of your system",
        body: "What the endocrine and vascular picture says, in plain language. Yours to keep.",
      },
      {
        label: "04 · If indicated",
        title: "A care plan, decided on the call",
        body: "Discussed only after your panel is read — never advertised, never up-sold. Re-read at 12 weeks.",
        dark: true,
      },
    ],
    panelHeading: "The chain behind response, against its intervals.",
    panelIntro:
      "Six markers from the panel, shown the way your doctor reads them — value, unit and the Australian reference interval, aligned so they compare down the column.",
    markers: [
      { name: "Total testosterone", value: 9.8, unit: "nmol/L", low: 8.3, high: 29.0 },
      { name: "Free testosterone", value: 152, unit: "pmol/L", low: 170, high: 620 },
      { name: "SHBG", value: 47, unit: "nmol/L", low: 18, high: 54 },
      { name: "Prolactin", value: 402, unit: "mIU/L", low: 45, high: 375 },
      { name: "HbA1c", value: 6.1, unit: "%", low: 4.0, high: 6.0 },
      { name: "hs-CRP", value: 2.1, unit: "mg/L", low: 0, high: 3.0 },
    ],
    doctors: ["s-crawford", "m-holt", "r-bennett"],
    doctorHeading: "A sexual medicine doctor reads the endocrine and vascular picture as one",
    fork: {
      heading: "Two physiologies. One $149 starting point",
      him: {
        label: "SXL · M / For men",
        title: "Sexual health for him",
        body: "Endocrine, vascular and metabolic markers read together by a sexual medicine doctor. Vascular symptoms often show up here before anywhere else, which makes this worth investigating properly.",
        cta: "Start his assessment →",
        href: "/protocols/sexual-health/him",
        note: "Start for $149",
        image: "sexual-him-hero",
      },
      her: {
        label: "SXL · W / For women",
        title: "Sexual health for her",
        body: "Desire, arousal and response read against the full female endocrine panel, cycle-timed where it applies, by a women's-health-trained doctor who treats it as physiology.",
        cta: "Start her assessment →",
        href: "/protocols/sexual-health/her",
        note: "Start for $149",
        image: "sexual-her-hero",
      },
    },
    faqs: [
      {
        q: "Why bloods for this? My GP offered a script in four minutes.",
        a: "Because response is downstream of endocrine and vascular function, and a script that treats the symptom leaves the cause unread. It also means a vascular or metabolic finding that mattered gets caught rather than missed.",
      },
      {
        q: "Is this only for men?",
        a: "No. The program runs for both, with different panels and different doctors, because the physiology genuinely differs. Both start at $149.",
      },
      {
        q: "How private is this?",
        a: "Your record is visible to your treating doctor and to nobody else at Pepper Me without your say-so. The consult is one-to-one and video, and you can request a doctor of a particular gender at assessment.",
      },
      {
        q: "What if my doctor declines?",
        a: "Your $149 is refunded in full. You keep your bloods and your written read. Around 14% of assessments are declined.",
      },
    ],
  },
};

export const PROGRAM_SLUGS = Object.keys(PROGRAMS);
