/* ============================================================
   Cuba History Timeline — event data
   Edit this file to add, remove, or correct timeline events.
   Each event follows the schema documented in README.md.
   ============================================================ */

const ERAS = [
  { key: "indigenous-conquest", label: "Indigenous Society, Conquest & Transculturation", short: "Conquest", color: "#b45309" },
  { key: "sugar-slavery-colonialism", label: "Sugar, Slavery & Colonialism", short: "Colonialism", color: "#7c2d12" },
  { key: "independence-struggle", label: "Struggle for Independence", short: "Independence", color: "#9d174d" },
  { key: "neocolonial-revolution", label: "Neocolonialism & the Revolution", short: "Revolution", color: "#6d28d9" },
  { key: "building-new-society", label: "Building the New Society", short: "New Society", color: "#1d4ed8" },
  { key: "culture-revolution", label: "Culture and Revolution", short: "Culture", color: "#0f766e" },
  { key: "revolution-and-world", label: "The Revolution and the World", short: "Cold War", color: "#b91c1c" },
  { key: "post-revolutionary-contemporary", label: "Post-Revolutionary / Contemporary Cuba", short: "Contemporary", color: "#15803d" },
];

const EVENTS = [
// ---------------- ERA 1: Indigenous Society, Conquest & Transculturation ----------------
{
  id: "taino-society",
  title: "Taíno Society in Pre-Columbian Cuba",
  date: "1100-01-01", dateDisplay: "c. 1100s–1492",
  era: "indigenous-conquest",
  readingTags: ["Indigenous Society, Conquest & Transculturation"],
  isFunFact: false,
  summary: "Taíno communities across Cuba lived in agricultural, cacique-led settlements, growing cassava and using tobacco long before European contact. Their society forms the baseline against which the conquest — and later, transculturation — has to be understood.",
  details: {
    context: "Taíno groups arrived in Cuba over centuries via migration through the Antilles, developing agricultural villages organized around caciques (chiefs) and the batey, a ceremonial ball court that doubled as a communal gathering space. Cassava (yuca) was a dietary staple, and tobacco use had deep ceremonial roots that would later spread worldwide through European contact.",
    connections: ["columbus-lands-1492", "hatuey-execution-1512"],
    whyItMatters: "Understanding Taíno society as a functioning, sophisticated culture — not an empty backdrop for European arrival — is essential context for everything the course covers about conquest, resistance, and Ortiz's later concept of transculturation."
  },
  confidence: "high", confidenceNotes: "Specific population and settlement-date ranges are debated among historians; figures here are broad estimates.",
  wikimedia: { searchTerm: "Taíno zemi sculpture", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "columbus-lands-1492",
  title: "Columbus Lands in Cuba, Believing It's Cipangu (Japan)",
  date: "1492-10-27", dateDisplay: "October 27, 1492",
  era: "indigenous-conquest",
  readingTags: ["Indigenous Society, Conquest & Transculturation"],
  isFunFact: false,
  summary: "Columbus's ships reach Cuba's northeastern coast, and he records in his journal that this must be the edge of Asia described by Marco Polo. His mistaken geography would shape Spanish colonial thinking for years.",
  details: {
    context: "Columbus had crossed the Atlantic seeking a westward route to Asia, and when he sighted Cuba, he assumed he had reached Cipangu (Japan) or the Asian mainland itself. He sent envoys inland expecting to find the Great Khan's court. The mismatch between his expectations and what he actually found would eventually force a slow, reluctant reassessment of what the Americas were.",
    connections: ["columbus-cipangu-oath-1494", "taino-society"],
    whyItMatters: "This single misunderstanding launched the European conquest of Cuba — and the belief was so entrenched that Columbus later forced his own crew to swear to it under oath (see the following entry)."
  },
  confidence: "high", confidenceNotes: "The exact landing day is given as October 27 or 28 depending on the source and calendar conversion used.",
  wikimedia: { searchTerm: "Christopher Columbus landing 1492", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "columbus-cipangu-oath-1494",
  title: "Columbus Forces His Crew to Swear Cuba Is Mainland Asia",
  date: "1494-06-12", dateDisplay: "June 12, 1494",
  era: "indigenous-conquest",
  readingTags: ["Indigenous Society, Conquest & Transculturation"],
  isFunFact: true,
  summary: "On his second voyage, Columbus gathered his crew on what is now Isla de la Juventud and made them sign a notarized oath that Cuba was the Asian mainland, not an island — under threat of a fine and having their tongues cut out.",
  details: {
    context: "Despite mounting evidence — including reports from indigenous people — that Cuba was an island, Columbus insisted otherwise. He had a notary formally record a declaration that all aboard the fleet agreed Cuba was continental Asia, with severe penalties (a 10,000-maravedí fine and tongue removal) for anyone who later said otherwise.",
    connections: ["columbus-lands-1492"],
    whyItMatters: "It's a vivid, genuinely surprising illustration of how colonial power could compel 'truth' by decree — a theme that recurs throughout Cuban history in different forms."
  },
  confidence: "high", confidenceNotes: "Well documented in multiple historical accounts of the second voyage.",
  wikimedia: { searchTerm: "Columbus ship Santa María replica", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "velazquez-settlements",
  title: "Diego Velázquez Founds Cuba's First Spanish Settlements",
  date: "1511-01-01", dateDisplay: "1511–1519",
  era: "indigenous-conquest",
  readingTags: ["Indigenous Society, Conquest & Transculturation"],
  isFunFact: false,
  summary: "Diego Velázquez de Cuéllar leads the Spanish conquest of Cuba, founding Baracoa in 1511 and, by 1519, relocating Havana to its current site. The encomienda system of forced indigenous labor begins.",
  details: {
    context: "Velázquez founded seven original villas across Cuba, establishing the administrative backbone of Spanish colonization. The encomienda system nominally granted Spanish colonists the right to indigenous labor in exchange for 'protection' and religious instruction — in practice, a system of forced labor that devastated Taíno communities.",
    connections: ["taino-population-collapse", "old-havana-founding-unesco"],
    whyItMatters: "These settlements are the direct ancestors of Cuba's modern cities, and the encomienda system set the template for the coerced-labor economy that sugar and slavery would later scale up dramatically."
  },
  confidence: "high", confidenceNotes: "General dates well established; exact founding dates of all seven original villas vary slightly by source.",
  wikimedia: { searchTerm: "intitle:DiegoVelazquezCuellar", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "hatuey-execution-1512",
  title: "Execution of Hatuey",
  date: "1512-02-02", dateDisplay: "February 2, 1512",
  era: "indigenous-conquest",
  readingTags: ["Indigenous Society, Conquest & Transculturation"],
  isFunFact: true,
  summary: "Taíno cacique Hatuey, who fled Hispaniola to organize resistance in Cuba, is captured and burned at the stake near Yara. Bartolomé de las Casas records his famous refusal to convert to Christianity.",
  details: {
    context: "Hatuey led roughly 400 followers by canoe from Hispaniola to Cuba around 1511 to warn islanders about Spanish cruelty and organize armed resistance. After roughly a year of guerrilla resistance, he was captured and sentenced to be burned alive. Las Casas records that when a priest offered him conversion and a place in Christian heaven, Hatuey asked whether Spaniards went there too — and on hearing yes, said he'd rather go to hell.",
    connections: ["taino-society", "grito-de-yara-1868"],
    whyItMatters: "Hatuey is honored today as Cuba's first national hero and a symbol of anti-colonial resistance — notably, he was executed near Yara, the same town where Céspedes would declare independence 356 years later."
  },
  confidence: "high", confidenceNotes: "Date and core narrative are consistently corroborated across historical sources, including Las Casas's own account.",
  wikimedia: { searchTerm: "Hatuey monument Baracoa statue", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "taino-population-collapse",
  title: "Collapse of the Taíno Population",
  date: "1550-01-01", dateDisplay: "through the mid-1500s",
  era: "indigenous-conquest",
  readingTags: ["Indigenous Society, Conquest & Transculturation"],
  isFunFact: false,
  summary: "Disease, forced labor under the encomienda system, and violence devastate Cuba's indigenous population within decades of conquest, though Taíno ancestry and cultural influence persist far longer than older narratives acknowledged.",
  details: {
    context: "European diseases to which Taíno people had no immunity, combined with forced labor and violent suppression of resistance, caused a demographic catastrophe. Historians continue to debate the precise scale, and more recent scholarship (including genetic research) has revised older 'total extinction' narratives, showing significant Taíno genetic and cultural continuity in eastern Cuba especially.",
    connections: ["velazquez-settlements", "ortiz-transculturacion-1940"],
    whyItMatters: "This sets up one of the course's central tensions: the old narrative of indigenous 'disappearance' versus Ortiz's later transculturation framework, which insists indigenous, African, and Spanish elements all persist and blend rather than one simply vanishing."
  },
  confidence: "high", confidenceNotes: "Specific population figures are heavily disputed and vary widely across sources; treat any single number with caution.",
  wikimedia: { searchTerm: "Taino petroglyph rock art Caribbean", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "ortiz-transculturacion-1940",
  title: "Fernando Ortiz Coins \"Transculturación\"",
  date: "1940-01-01", dateDisplay: "1940",
  era: "indigenous-conquest",
  readingTags: ["Indigenous Society, Conquest & Transculturation"],
  isFunFact: false,
  summary: "In Contrapunteo cubano del tabaco y el azúcar (Cuban Counterpoint: Tobacco and Sugar), anthropologist Fernando Ortiz proposes \"transculturation\" over \"acculturation\" to describe how Cuban culture blends Indigenous, African, and Spanish elements into something genuinely new.",
  details: {
    context: "Ortiz argued that older terms like 'acculturation' implied a one-way process of a minority culture simply absorbing a dominant one. He coined 'transculturación' to capture a more reciprocal process: a loss of prior culture, a partial acquisition of a new one, and — crucially — the creation of new cultural phenomena that didn't exist in either source culture. He illustrated the idea through the parallel histories of tobacco (indigenous-rooted) and sugar (colonial, industrial) in Cuba. In a later essay, 'Los factores humanos de la cubanidad' (The Human Factors of Cubanness), Ortiz offered a second, more famous metaphor: Cuba as an ajiaco, a hearty stew — pork, yuca, malanga, corn, plantains — that never stops cooking as new ingredients are added. Where 'transculturación' is the process, the ajiaco is the image of the result: a culture defined by constant mixture rather than a fixed origin.",
    connections: ["taino-population-collapse", "columbus-lands-1492"],
    whyItMatters: "Transculturación became one of the most influential concepts in Latin American cultural studies, and it's the analytical lens the course uses to read every other event on this timeline — not a simple story of conquest and loss, but of ongoing cultural synthesis."
  },
  confidence: "high", confidenceNotes: "Publication year and core argument are well documented.",
  wikimedia: { searchTerm: "Fernando Ortiz", confidence: "verify" },
  links: [
    { label: "Cuban Counterpoint: Tobacco and Sugar (English translation, Internet Archive)", url: "https://archive.org/details/cubancounterpoin0000orti", confidence: "verify" }
  ],
  videos: []
},

// ---------------- ERA 2: Sugar, Slavery, and Colonialism ----------------
{
  id: "old-havana-founding-unesco",
  title: "Old Havana / Habana Vieja — Founding & UNESCO Recognition",
  date: "1519-01-01", dateDisplay: "1519 (founded) · 1982 (UNESCO listing)",
  era: "sugar-slavery-colonialism",
  readingTags: ["Sugar, Slavery & Colonialism"],
  isFunFact: false,
  summary: "Havana is founded on its current site in 1519 and grows into Spain's key Caribbean shipbuilding and treasure-fleet port. Its colonial core — laid out around five historic plazas — is declared a UNESCO World Heritage Site in 1982.",
  details: {
    context: "Havana's strategic harbor made it the assembly point for Spain's treasure fleets sailing back to Europe, and by the 17th century it was one of the Caribbean's most fortified and important cities. The historic center, Habana Vieja, preserves Baroque and neoclassical architecture around Plaza de Armas, Plaza Vieja, Plaza de San Francisco, Plaza del Cristo, and Plaza de la Catedral.",
    connections: ["velazquez-settlements", "real-fuerza-plaza-armas", "havana-sacked-1555"],
    whyItMatters: "Old Havana's streets are the physical setting for a huge share of Cuban history covered in this course — walking them today (see the video gallery) means walking through five centuries at once."
  },
  confidence: "high", confidenceNotes: "Founding date and UNESCO listing year are well documented.",
  wikimedia: { searchTerm: "Old Havana colonial architecture street", confidence: "high" },
  links: [],
  videos: [
    { id: "398868506", title: "Start of the Walking Tour: Historical Center of Havana" },
    { id: "398872072", title: "Havana Tue 2" },
    { id: "398887818", title: "Havana Tue 3" },
    { id: "398888310", title: "Havana Tue 4" },
    { id: "398890533", title: "Havana Tue 5" },
    { id: "398899801", title: "Havana Tue 6" },
    { id: "398900868", title: "Havana Tue 7" },
    { id: "403062122", title: "Coco Taxi Race Around Havana" },
    { id: "399203491", title: "Havana Street Vendor" },
    { id: "399191311", title: "Plaza de San Francisco de Asís" }
  ]
},
{
  id: "havana-sacked-1555",
  title: "Havana Sacked by the French Pirate Jacques de Sores",
  date: "1555-07-10", dateDisplay: "1555",
  era: "sugar-slavery-colonialism",
  readingTags: ["Sugar, Slavery & Colonialism"],
  isFunFact: true,
  summary: "French privateer Jacques de Sores raids and burns much of Havana, exposing the port's vulnerability and pushing Spain toward serious stone fortification.",
  details: {
    context: "Havana in the mid-1500s was wealthy but poorly defended. De Sores's raid — reportedly followed by a demand for ransom the town couldn't fully pay — was a wake-up call. It directly led to the construction of the Castillo de la Real Fuerza a few years later.",
    connections: ["real-fuerza-plaza-armas", "la-cabana-fortress"],
    whyItMatters: "It's a fun, little-known hinge point: without this raid, Havana's iconic fortification system — a huge part of what makes Old Havana a UNESCO site today — might have taken a very different shape."
  },
  confidence: "high", confidenceNotes: "Corroborated by fort-construction histories, though exact casualty/ransom details vary by source.",
  wikimedia: { searchTerm: "16th century Caribbean pirate ship painting", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "real-fuerza-plaza-armas",
  title: "Castillo de la Real Fuerza & Plaza de Armas",
  date: "1558-01-01", dateDisplay: "1558–1577",
  era: "sugar-slavery-colonialism",
  readingTags: ["Sugar, Slavery & Colonialism"],
  isFunFact: false,
  summary: "Built after the 1555 raid, the Castillo de la Real Fuerza is the oldest surviving stone fort in the Americas, facing Havana's oldest public square, Plaza de Armas.",
  details: {
    context: "Engineer Bartolomé Sánchez began construction in 1558; the fort was substantially complete by 1577. Plaza de Armas, at its doorstep, became the seat of Spanish colonial governance in Cuba and remains Havana's oldest square. In March 2016, First Lady Michelle Obama and Malia dedicated a bench and two magnolia trees in a small park beside the plaza's library, a gift to the Cuban people marking the U.S.-Cuba diplomatic thaw.",
    connections: ["havana-sacked-1555", "old-havana-founding-unesco", "cuban-thaw-obama"],
    whyItMatters: "The plaza connects 450+ years of history in one place — from the earliest Spanish colonial defenses to a 21st-century diplomatic gesture, visible in the same physical space."
  },
  confidence: "high", confidenceNotes: "Construction dates and the Obama gift are both well documented.",
  wikimedia: { searchTerm: "Castillo de la Real Fuerza Havana", confidence: "high" },
  links: [],
  videos: [
    { id: "399187346", title: "Plaza de Armas 3" },
    { id: "398838890", title: "Plaza de Armas" },
    { id: "399190501", title: "A Gift from Michelle Obama" }
  ]
},
{
  id: "university-havana-1728",
  title: "University of Havana Founded",
  date: "1728-01-05", dateDisplay: "January 5, 1728",
  era: "sugar-slavery-colonialism",
  readingTags: ["Supplementary — Havana landmark, not tied to a specific reading"],
  isFunFact: true,
  summary: "Dominican friars found the Real y Pontificia Universidad de San Gerónimo de la Habana — one of the oldest universities in the Americas and the first in the Caribbean.",
  details: {
    context: "Originally housed in a Dominican convent in Old Havana with faculties in art, philosophy, theology, canon law, and medicine, the university secularized in 1842 and relocated to its present Vedado campus in 1902. It later became a hotbed of student activism, including Fidel Castro's own student days.",
    connections: ["hemingway-havana"],
    whyItMatters: "It's a genuinely surprising fact for most students: Cuba has one of the oldest universities in the hemisphere, predating the United States itself by nearly 50 years."
  },
  confidence: "high", confidenceNotes: "Founding date is well documented and consistent across sources.",
  wikimedia: { searchTerm: "University of Havana building", confidence: "high" },
  links: [],
  videos: [
    { id: "398906689", title: "Walking with Jorge: First University & Hemingway's Hotel" }
  ]
},
{
  id: "british-capture-havana-1762",
  title: "British Capture Havana",
  date: "1762-08-13", dateDisplay: "1762",
  era: "sugar-slavery-colonialism",
  readingTags: ["Sugar, Slavery & Colonialism"],
  isFunFact: false,
  summary: "British forces seize Havana during the Seven Years' War, holding it for about a year before trading it back to Spain for Florida in the 1763 Treaty of Paris.",
  details: {
    context: "The brief British occupation opened Havana to expanded trade — including a surge in the slave trade — and exposed how vulnerable the city's existing defenses were. That vulnerability directly triggered Spain's decision to build La Cabaña, the massive fortress that still dominates Havana's harbor entrance.",
    connections: ["la-cabana-fortress", "real-fuerza-plaza-armas"],
    whyItMatters: "This single year of British rule reshaped Havana's trade patterns and defensive architecture for the following century."
  },
  confidence: "high", confidenceNotes: "Well-documented Seven Years' War episode.",
  wikimedia: { searchTerm: "Siege of Havana 1762", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "la-cabana-fortress",
  title: "La Cabaña Fortress Built",
  date: "1763-11-01", dateDisplay: "1763–1774",
  era: "sugar-slavery-colonialism",
  readingTags: ["Sugar, Slavery & Colonialism"],
  isFunFact: false,
  summary: "Ordered by King Carlos III after the British occupation, La Cabaña becomes the largest fortress complex built by Spain in the Americas — nearly 700 meters of walls and bastions guarding Havana's harbor.",
  details: {
    context: "Engineer Silvestre Abarca designed the fortress in the Vauban military style; some 4,000 laborers, including Mexican and indigenous prisoners, worked on the project over more than a decade, at a reported cost of 14 million pesos. It later served, notoriously, as a military prison and execution site in the 20th century, including during the early revolutionary government.",
    connections: ["british-capture-havana-1762", "havana-sacked-1555"],
    whyItMatters: "La Cabaña's dual identity — colonial engineering marvel and, later, a site of revolutionary-era executions — makes it a useful entry point for discussing how the same physical spaces carry very different meanings across Cuban history."
  },
  confidence: "high", confidenceNotes: "Construction dates are well documented.",
  wikimedia: { searchTerm: "Fortaleza San Carlos de la Cabaña Havana", confidence: "high" },
  links: [],
  videos: [
    { id: "399269850", title: "La Cabana Fortress" }
  ]
},
{
  id: "haitian-refugees-cuba",
  title: "Haitian Revolution Refugees Reshape Cuban Agriculture",
  date: "1791-01-01", dateDisplay: "1791–1804",
  era: "sugar-slavery-colonialism",
  readingTags: ["Sugar, Slavery & Colonialism"],
  isFunFact: false,
  summary: "French planters flee the Haitian Revolution for eastern Cuba, bringing capital, enslaved laborers, and expertise that accelerate Cuba's coffee cultivation and broader plantation economy.",
  details: {
    context: "As the only successful large-scale slave revolt in the Americas unfolded in Saint-Domingue, thousands of French colonists and their enslaved workers relocated to Cuba's Oriente region, introducing intensive coffee farming alongside the island's growing sugar sector.",
    connections: ["cuba-largest-sugar-producer"],
    whyItMatters: "It's a reminder that Cuba's plantation boom didn't happen in isolation — it was directly accelerated by the collapse of a rival slave colony next door."
  },
  confidence: "high", confidenceNotes: "General narrative is well established; specific migration figures vary by source.",
  wikimedia: { searchTerm: "Haitian Revolution refugees coffee plantation", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "cuba-largest-sugar-producer",
  title: "Cuba Becomes the World's Largest Sugar Producer",
  date: "1830-01-01", dateDisplay: "c. 1820s–1860s",
  era: "sugar-slavery-colonialism",
  readingTags: ["Sugar, Slavery & Colonialism"],
  isFunFact: false,
  summary: "A booming, slavery-dependent plantation economy — sometimes called the 'sugarocracy' — makes Cuba the world's leading sugar exporter, cementing the island's economic and social structure for the century to come.",
  details: {
    context: "Steam-powered mills, expanding rail lines, and a growing enslaved workforce combined to make Cuban sugar dominant in global markets. Plantation wealth concentrated political power among a small class of sugar planters, while the human cost fell overwhelmingly on enslaved Africans and, later, indentured Chinese laborers.",
    connections: ["chinese-indentured-laborers-1847", "slavery-abolition-1886"],
    whyItMatters: "This economic structure — export monoculture, concentrated land ownership, imported coerced labor — echoes through Cuban economic history well into the 20th century."
  },
  confidence: "high", confidenceNotes: "Exact peak years of dominance vary by source and metric (volume vs. share of world market).",
  wikimedia: { searchTerm: "Cuba sugar plantation 19th century", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "chinese-indentured-laborers-1847",
  title: "First Chinese Indentured Laborers Arrive in Cuba",
  date: "1847-06-03", dateDisplay: "June 1847",
  era: "sugar-slavery-colonialism",
  readingTags: ["Sugar, Slavery & Colonialism"],
  isFunFact: true,
  summary: "Ships from the port of Amoy (Xiamen) bring the first Chinese contract laborers to Cuba's sugar plantations. Over the next 27 years, more than 125,000 would arrive under brutal eight-year indenture contracts.",
  details: {
    context: "As the transatlantic slave trade came under growing international pressure, Cuban planters turned to indentured Chinese labor as a supplement. In practice, conditions were often nearly indistinguishable from slavery: laborers were frequently deceived or coerced into contracts, held in barracoons before departure, and subjected to a Middle-Passage-like voyage. This history is the root of Havana's historic Barrio Chino (Chinatown).",
    connections: ["cuba-largest-sugar-producer", "slavery-abolition-1886"],
    whyItMatters: "This is one of the most overlooked chapters of Cuban labor history — most students have never heard of it, and it's essential context for Cuba's Chinese-Cuban community and cultural fusion today."
  },
  confidence: "high", confidenceNotes: "First-arrival date and overall trade timeline (1847–1874) are well corroborated across academic sources.",
  wikimedia: { searchTerm: "Barrio Chino Havana Chinatown", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "moret-law-1870",
  title: "Moret Law — Gradual \"Free Womb\" Abolition Begins",
  date: "1870-07-04", dateDisplay: "July 4, 1870",
  era: "sugar-slavery-colonialism",
  readingTags: ["Sugar, Slavery & Colonialism"],
  isFunFact: false,
  summary: "Spain enacts the Moret Law, freeing children born to enslaved mothers going forward — though they remain bound in unpaid 'patronato' apprenticeship until age 18 — alongside a few other narrow emancipation categories.",
  details: {
    context: "The law was a cautious, incremental response to abolitionist pressure and the ongoing Ten Years' War, in which many insurgents were freeing slaves outright. It freed slaves over 60, state-owned slaves, and those who had served in the Spanish military, but left the core enslaved population still bound.",
    connections: ["slavery-abolition-1886", "grito-de-yara-1868"],
    whyItMatters: "It shows how slowly and reluctantly formal abolition proceeded in Cuba compared to the more radical, immediate emancipations declared by independence fighters like Céspedes."
  },
  confidence: "high", confidenceNotes: "Date and core provisions are well documented.",
  wikimedia: { searchTerm: "Segismundo Moret portrait", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "slavery-abolition-1886",
  title: "Final Abolition of Slavery in Cuba",
  date: "1886-10-07", dateDisplay: "October 7, 1886",
  era: "sugar-slavery-colonialism",
  readingTags: ["Sugar, Slavery & Colonialism"],
  isFunFact: false,
  summary: "A royal decree ends legal slavery and abolishes the patronato apprenticeship system, making Cuba one of the last places in the Americas to fully abolish slavery — only Brazil, in 1888, comes later.",
  details: {
    context: "Formal abolition came decades after Britain and the U.S., and years after the Moret Law's partial measures. By this point demographic and economic shifts — plus the political pressure of the ongoing independence movement — had made slavery increasingly unsustainable.",
    connections: ["moret-law-1870", "chinese-indentured-laborers-1847"],
    whyItMatters: "The lateness of Cuban abolition is a key data point for understanding how deeply the sugar economy depended on coerced labor, and how that legacy shaped Afro-Cuban social and political life into the 20th century."
  },
  confidence: "high", confidenceNotes: "Well documented and consistently dated.",
  wikimedia: { searchTerm: "Cuban sugar plantation slavery illustration", confidence: "verify" },
  links: [],
  videos: []
},

// ---------------- ERA 3: Struggle for Independence ----------------
{
  id: "grito-de-yara-1868",
  title: "Grito de Yara — Céspedes Declares Independence",
  date: "1868-10-10", dateDisplay: "October 10, 1868",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: false,
  summary: "Plantation owner Carlos Manuel de Céspedes frees his own enslaved workers and declares Cuban independence from Spain, launching the Ten Years' War.",
  details: {
    context: "Céspedes's declaration at his Demajagua estate, near Yara, combined anti-colonial and (partially) anti-slavery politics from the outset — though full nationwide abolition would take almost two more decades. He is remembered as 'El Padre de la Patria' (Father of the Nation).",
    connections: ["hatuey-execution-1512", "moret-law-1870", "pact-zanjon-1878"],
    whyItMatters: "This is the opening act of Cuba's three-decade independence struggle, and it links slavery and nationhood together as intertwined questions from the very beginning."
  },
  confidence: "high", confidenceNotes: "Date and core narrative are well established.",
  wikimedia: { searchTerm: "Carlos Manuel de Céspedes", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "pact-zanjon-1878",
  title: "Ten Years' War Ends — Pact of Zanjón",
  date: "1878-02-10", dateDisplay: "1878",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: false,
  summary: "An inconclusive peace agreement ends the Ten Years' War without granting independence, though some reforms and partial emancipation follow. The independence movement regroups rather than disbands.",
  details: {
    context: "The pact offered limited autonomy and amnesty but fell short of the independence and full abolition many insurgents had fought for. Antonio Maceo's refusal to accept the pact's terms (the 'Protest of Baraguá') became its own symbol of continued resistance.",
    connections: ["grito-de-yara-1868", "grito-de-baire-1895"],
    whyItMatters: "It demonstrates that Cuban independence was never a single clean break, but a long, repeatedly interrupted struggle — the war that resumes in 1895 picks up threads left unresolved here."
  },
  confidence: "high", confidenceNotes: "General outcome is well documented; specific negotiated terms vary in emphasis across sources.",
  wikimedia: { searchTerm: "Antonio Maceo Cuban general", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "marti-exiled-1871",
  title: "José Martí Exiled to Spain",
  date: "1871-01-01", dateDisplay: "1871",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: false,
  summary: "At just 17, José Martí is deported to Spain for supporting Cuban independence. He would spend most of the next two decades in exile, writing and organizing.",
  details: {
    context: "Martí's early arrest and exile set the pattern for the rest of his life: a writer and organizer working largely from abroad — Spain, Mexico, Guatemala, Venezuela, and finally New York — building the intellectual and political case for Cuban independence.",
    connections: ["marti-nuestra-america-1891", "cuban-revolutionary-party-1892", "marti-death-dos-rios-1895"],
    whyItMatters: "Martí's decades of exile-based organizing show how much of the independence movement's ideological groundwork was laid outside Cuba entirely."
  },
  confidence: "high", confidenceNotes: "Exact date of deportation within 1871 varies slightly by source.",
  wikimedia: { searchTerm: "José Martí", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "marti-nuestra-america-1891",
  title: "Martí Publishes \"Nuestra América\"",
  date: "1891-01-10", dateDisplay: "January 1891",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: false,
  summary: "Martí's landmark essay argues for a Latin American identity rooted in its own mixed heritage, warning against both Spanish colonial nostalgia and uncritical imitation of the United States.",
  details: {
    context: "Published first in New York's La Revista Ilustrada and weeks later in Mexico City's El Partido Liberal, the essay is one of the foundational texts of Latin American political and cultural thought, urging Latin American nations to know and govern themselves rather than import foreign models.",
    connections: ["marti-exiled-1871", "cuban-revolutionary-party-1892"],
    whyItMatters: "\"Nuestra América\" remains a touchstone text across Latin American studies and directly anticipates later 20th-century arguments about cultural and economic dependency."
  },
  confidence: "high", confidenceNotes: "Publication dates in both cities are well documented.",
  wikimedia: { searchTerm: "José Martí", confidence: "verify" },
  links: [
    { label: "\"Nuestra América\" / \"Our America\" — English translation, Portal José Martí", url: "https://www.josemarti.cu/publicacion/nuestra-america-version-ingles/", confidence: "verify" }
  ],
  videos: []
},
{
  id: "cuban-revolutionary-party-1892",
  title: "Martí Founds the Cuban Revolutionary Party",
  date: "1892-01-05", dateDisplay: "1892",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: false,
  summary: "Martí organizes exiled Cubans, largely in the U.S. and Caribbean, into a unified political party to fund and coordinate the coming war for independence.",
  details: {
    context: "The party unified previously fragmented exile factions and raised money — famously including small contributions from Cuban cigar workers in Florida — to prepare for a renewed war.",
    connections: ["marti-nuestra-america-1891", "grito-de-baire-1895"],
    whyItMatters: "It's the organizational bridge between Martí's writing and the actual outbreak of the 1895 war."
  },
  confidence: "high", confidenceNotes: "Exact founding date within 1892 varies by source.",
  wikimedia: { searchTerm: "José Martí", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "grito-de-baire-1895",
  title: "War of Independence Begins — Grito de Baire",
  date: "1895-02-24", dateDisplay: "February 24, 1895",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: false,
  summary: "Coordinated uprisings across Cuba mark the start of the final War of Independence, organized by Martí's revolutionary party and led in the field by generals Máximo Gómez and Antonio Maceo.",
  details: {
    context: "This war would prove more sustained and militarily effective than the Ten Years' War, ultimately drawing in U.S. intervention just three years later.",
    connections: ["pact-zanjon-1878", "marti-death-dos-rios-1895"],
    whyItMatters: "It's the war that finally ends Spanish rule in Cuba — though not, as the following entries show, with the independence its architects had envisioned."
  },
  confidence: "high", confidenceNotes: "Well-documented start date.",
  wikimedia: { searchTerm: "Cuban War of Independence 1895", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "marti-death-dos-rios-1895",
  title: "Death of José Martí at Dos Ríos",
  date: "1895-05-19", dateDisplay: "May 19, 1895",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: false,
  summary: "Martí is killed in one of his first battles, just weeks after landing in Cuba to join the war he had spent over two decades organizing from exile.",
  details: {
    context: "Martí insisted on joining the fighting despite having limited military experience; he was killed at Dos Ríos in eastern Cuba. His death instantly transformed him into Cuba's most enduring national martyr and symbol.",
    connections: ["marti-exiled-1871", "marti-nuestra-america-1891"],
    whyItMatters: "Martí's martyrdom cemented his status as 'the Apostle' of Cuban independence — a figure both the pre-1959 republic and the post-1959 revolutionary government would claim as their own."
  },
  confidence: "high", confidenceNotes: "Date is well documented and undisputed.",
  wikimedia: { searchTerm: "José Martí monument statue", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "uss-maine-explosion-1898",
  title: "USS Maine Explodes in Havana Harbor",
  date: "1898-02-15", dateDisplay: "February 15, 1898",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: false,
  summary: "The U.S. battleship Maine explodes while anchored in Havana harbor, killing roughly 260 sailors. The cause remains historically disputed, but the incident becomes the immediate pretext for U.S. entry into the war.",
  details: {
    context: "Contemporary U.S. press blamed a Spanish mine (\"Remember the Maine!\" became a rallying cry), though later investigations have suggested an internal accident — likely a coal-bunker fire igniting an ammunition magazine — is at least as plausible. The truth has never been conclusively settled.",
    connections: ["yellow-journalism-1898", "spanish-american-war-1898"],
    whyItMatters: "The Maine explosion is a textbook case of how an ambiguous event can be mobilized toward war — directly setting up the following entry on U.S. press coverage of Cuba."
  },
  confidence: "high", confidenceNotes: "Date is certain; exact casualty count varies slightly by source (commonly cited between 260–270).",
  wikimedia: { searchTerm: "USS Maine explosion Havana 1898", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "yellow-journalism-1898",
  title: "Yellow Journalism and U.S. Press Coverage of Cuba",
  date: "1898-01-01", dateDisplay: "1895–1898",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: true,
  summary: "Sensationalized U.S. newspaper coverage — led by Hearst's and Pulitzer's papers — shapes American public opinion toward war with Spain over Cuba, often exaggerating or fabricating atrocity stories.",
  details: {
    context: "This period is often summed up by a quote supposedly telegraphed by William Randolph Hearst to an illustrator in Cuba: \"You furnish the pictures, and I'll furnish the war.\" Historians widely consider this quote apocryphal — there's no solid documentary evidence Hearst actually sent it, though it captures a real dynamic of press-driven war fervor.",
    connections: ["uss-maine-explosion-1898", "spanish-american-war-1898"],
    whyItMatters: "This is a direct anchor for the course's reading on U.S. press portrayal of Cuba — a useful case study in how media narratives about Cuba have been shaped by U.S. political interests since the 19th century, a pattern that recurs throughout the 20th century."
  },
  confidence: "high", confidenceNotes: "The famous Hearst quote is very likely apocryphal — flagged explicitly rather than presented as fact.",
  wikimedia: { searchTerm: "yellow journalism Cuba newspaper 1898", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "spanish-american-war-1898",
  title: "Spanish-American War",
  date: "1898-04-21", dateDisplay: "April–August 1898",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: false,
  summary: "The United States declares war on Spain and intervenes militarily in Cuba, transforming a Cuban war of independence into a U.S.-Spanish conflict decided largely without Cuban participation in the peace terms.",
  details: {
    context: "U.S. forces landed in Cuba (including the famous Rough Riders at San Juan Hill) and fought alongside — but increasingly sidelined — Cuban insurgent forces who had already been fighting Spain for three years.",
    connections: ["uss-maine-explosion-1898", "treaty-paris-1898"],
    whyItMatters: "Cuban independence fighters were excluded from the surrender negotiations, a direct preview of the neocolonial relationship the U.S. would impose in the years immediately following."
  },
  confidence: "high", confidenceNotes: "Well-documented, undisputed dates.",
  wikimedia: { searchTerm: "Spanish-American War 1898", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "treaty-paris-1898",
  title: "Treaty of Paris — Spain Cedes Cuba",
  date: "1898-12-10", dateDisplay: "December 10, 1898",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: false,
  summary: "Spain formally cedes Cuba, Puerto Rico, Guam, and the Philippines. Cuba is placed under U.S. military occupation rather than granted immediate independence.",
  details: {
    context: "Cuban representatives were not party to the treaty negotiations — a glaring omission for a war Cubans had been fighting since 1895. U.S. occupation would last until 1902, shaping the constitutional and economic terms of Cuban 'independence' before it even began.",
    connections: ["spanish-american-war-1898", "platt-amendment-1901"],
    whyItMatters: "This is the hinge point where a Cuban war of independence becomes, instead, the start of U.S. neocolonial influence over Cuba — the exact dynamic the course's 'Neocolonialism and the Revolution' unit examines."
  },
  confidence: "high", confidenceNotes: "Date is well documented.",
  wikimedia: { searchTerm: "Treaty of Paris 1898 Spain United States", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "platt-amendment-1901",
  title: "Platt Amendment Imposed on Cuba",
  date: "1901-03-02", dateDisplay: "1901",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: false,
  summary: "Written into the Cuban constitution as a condition of U.S. withdrawal, the Platt Amendment grants the U.S. the right to intervene in Cuban affairs and secures a permanent lease on Guantánamo Bay.",
  details: {
    context: "The amendment, attached to a U.S. Army appropriations bill, limited Cuba's ability to make treaties or take on debt, and explicitly authorized U.S. military intervention to preserve Cuban 'independence' — an irony not lost on Cuban nationalists at the time.",
    connections: ["treaty-paris-1898", "cuban-republic-1902", "platt-amendment-abrogated-1934"],
    whyItMatters: "The Platt Amendment is the single clearest legal expression of U.S. neocolonial control over the nominally independent Cuban republic, and Guantánamo's lease — a direct legacy of this amendment — remains in effect today."
  },
  confidence: "high", confidenceNotes: "Core provisions and 1901 date are well documented.",
  wikimedia: { searchTerm: "Orville Platt senator portrait", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "cuban-republic-1902",
  title: "Cuban Republic Established",
  date: "1902-05-20", dateDisplay: "May 20, 1902",
  era: "independence-struggle",
  readingTags: ["Struggle for Independence"],
  isFunFact: false,
  summary: "Cuba formally becomes independent under President Tomás Estrada Palma — but constrained from day one by the Platt Amendment's constraints on its sovereignty.",
  details: {
    context: "The new republic inherited both the promise of self-government fought for since 1868 and the structural limits imposed by the U.S. relationship — a tension that would define Cuban politics for the next half-century.",
    connections: ["platt-amendment-1901", "us-interventions-platt-1906-1922"],
    whyItMatters: "This 'independence with an asterisk' is the direct backdrop for the course's next unit on neocolonialism and the eventual revolution against it."
  },
  confidence: "high", confidenceNotes: "Well-documented date.",
  wikimedia: { searchTerm: "Cuban Republic 1902 flag", confidence: "verify" },
  links: [],
  videos: []
},

// ---------------- ERA 4: Neocolonialism and the Revolution ----------------
{
  id: "us-interventions-platt-1906-1922",
  title: "Early U.S. Military Interventions Under the Platt Amendment",
  date: "1906-09-01", dateDisplay: "1906–1922",
  era: "neocolonial-revolution",
  readingTags: ["Neocolonialism and the Revolution"],
  isFunFact: false,
  summary: "The U.S. repeatedly invokes its Platt Amendment authority to intervene militarily and politically in Cuban affairs during the republic's early decades.",
  details: {
    context: "U.S. forces occupied Cuba again from 1906–1909 following a political crisis, and Washington continued to exert significant influence over Cuban governments and the sugar economy through the 1920s.",
    connections: ["platt-amendment-1901", "machado-dictatorship"],
    whyItMatters: "These repeated interventions are the lived reality behind the abstract term 'neocolonialism' — Cuban sovereignty was formally recognized but practically constrained."
  },
  confidence: "high", confidenceNotes: "General pattern is well documented; specific dates/instances of intervention vary by source.",
  wikimedia: { searchTerm: "US Marines Guantanamo Cuba early 1900s", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "machado-dictatorship",
  title: "Rise and Fall of the Machado Dictatorship",
  date: "1925-05-20", dateDisplay: "1925–1933",
  era: "neocolonial-revolution",
  readingTags: ["Neocolonialism and the Revolution"],
  isFunFact: false,
  summary: "President Gerardo Machado, elected in 1925, becomes increasingly authoritarian and is overthrown by a popular uprising in 1933.",
  details: {
    context: "Machado's government grew repressive amid the Great Depression's economic strain on Cuba's sugar-dependent economy; a general strike and military mutiny (the 'Sergeants' Revolt,' which brought Batista to prominence) forced him from power.",
    connections: ["batista-coup-1952"],
    whyItMatters: "The Sergeants' Revolt that toppled Machado is the same event that first brought Fulgencio Batista onto the national stage — decades before his own 1952 coup."
  },
  confidence: "high", confidenceNotes: "General dates well established; details of the 1933 downfall vary in emphasis by source.",
  wikimedia: { searchTerm: "Gerardo Machado Cuba president", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "platt-amendment-abrogated-1934",
  title: "Platt Amendment Abrogated",
  date: "1934-05-29", dateDisplay: "1934",
  era: "neocolonial-revolution",
  readingTags: ["Neocolonialism and the Revolution"],
  isFunFact: false,
  summary: "The U.S. and Cuba formally repeal the Platt Amendment, though the Guantánamo Bay lease it established continues under a separate agreement.",
  details: {
    context: "The repeal was part of Franklin Roosevelt's 'Good Neighbor Policy,' softening (though not eliminating) direct U.S. legal claims over Cuban sovereignty. Guantánamo remained under U.S. control, a legacy that persists to this day.",
    connections: ["platt-amendment-1901"],
    whyItMatters: "It's a reminder that formal legal changes didn't necessarily end the underlying power imbalance — Guantánamo's continued U.S. control is the clearest surviving proof."
  },
  confidence: "high", confidenceNotes: "Well-documented date.",
  wikimedia: { searchTerm: "Franklin D. Roosevelt Good Neighbor Policy", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "hemingway-havana",
  title: "Hemingway's Havana",
  date: "1939-01-01", dateDisplay: "1930s–1960",
  era: "neocolonial-revolution",
  readingTags: ["Supplementary — Havana landmark, not tied to a specific reading"],
  isFunFact: true,
  summary: "Ernest Hemingway lived at Finca Vigía outside Havana from 1939 and frequented Old Havana's Hotel Ambos Mundos in the 1930s, writing part of For Whom the Bell Tolls there before leaving Cuba in 1960.",
  details: {
    context: "Hemingway's room at the Ambos Mundos, number 511, is preserved today. His 1951 novella The Old Man and the Sea draws directly on Cuban fishermen he knew, and his boat, the Pilar, remains on display at Finca Vigía. He left Cuba for the last time in 1960, as U.S.-Cuba relations deteriorated.",
    connections: ["university-havana-1728"],
    whyItMatters: "It's a vivid, unexpected thread connecting American literary history directly to pre- and early-revolutionary Havana — and a reminder of how deeply intertwined Cuban and American cultural life were before 1959."
  },
  confidence: "high", confidenceNotes: "Broad timeline is well documented; some specific dates and details vary by source.",
  wikimedia: { searchTerm: "Ernest Hemingway Cuba Finca Vigia", confidence: "high" },
  links: [],
  videos: [
    { id: "398906689", title: "Walking with Jorge: First University & Hemingway's Hotel" }
  ]
},
{
  id: "batista-coup-1952",
  title: "Batista's 1952 Coup Cancels Elections",
  date: "1952-03-10", dateDisplay: "1952",
  era: "neocolonial-revolution",
  readingTags: ["Neocolonialism and the Revolution"],
  isFunFact: false,
  summary: "Fulgencio Batista seizes power in a bloodless coup just before scheduled elections, ending Cuba's fragile constitutional period and installing an increasingly repressive, U.S.-backed government.",
  details: {
    context: "Batista had previously served as elected president (1940–1944) before returning to power by force. His second government became closely associated with U.S. business interests and organized crime-linked casino tourism in Havana — exactly the arrangement Castro's movement would target.",
    connections: ["machado-dictatorship", "moncada-attack-1953"],
    whyItMatters: "This coup is the direct trigger for the armed opposition movement that becomes the Cuban Revolution."
  },
  confidence: "high", confidenceNotes: "Well-documented date and outcome.",
  wikimedia: { searchTerm: "Fulgencio Batista", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "moncada-attack-1953",
  title: "Moncada Barracks Attack",
  date: "1953-07-26", dateDisplay: "July 26, 1953",
  era: "neocolonial-revolution",
  readingTags: ["Neocolonialism and the Revolution"],
  isFunFact: false,
  summary: "Fidel Castro leads roughly 135 fighters in a failed attack on the Moncada army barracks in Santiago de Cuba, intended to spark a nationwide uprising against Batista.",
  details: {
    context: "The attack failed militarily and many participants were killed or tortured after capture, but it gave the movement its name — the 26th of July Movement (M-26-7) — and its foundational myth.",
    connections: ["batista-coup-1952", "history-will-absolve-me"],
    whyItMatters: "Moncada is where the 'Fidel Castro as revolutionary leader' narrative begins, and it directly produces the next entry's speech."
  },
  confidence: "high", confidenceNotes: "Well-documented date; exact number of attackers varies slightly by source.",
  wikimedia: { searchTerm: "Moncada Barracks attack 1953", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "history-will-absolve-me",
  title: "\"History Will Absolve Me\"",
  date: "1953-10-16", dateDisplay: "October 1953 (trial) / reconstructed text, 1954",
  era: "neocolonial-revolution",
  readingTags: ["Neocolonialism and the Revolution"],
  isFunFact: false,
  summary: "At his trial for the Moncada attack, Fidel Castro delivers a lengthy self-defense speech outlining his political program — later reconstructed from memory in prison and smuggled out, becoming the Revolution's founding manifesto.",
  details: {
    context: "Castro, a trained lawyer, used the courtroom as a political platform, closing with the line that gives the speech its name: 'Condemn me, it does not matter. History will absolve me.' He was sentenced to 15 years but served less than two before a general amnesty.",
    connections: ["moncada-attack-1953", "castro-exile-mexico-che-1955"],
    whyItMatters: "This text lays out, years before 1959, the reform program the Revolution would later claim to fulfill — a key primary source for understanding what the movement said it stood for."
  },
  confidence: "high", confidenceNotes: "Trial date is certain; the widely-circulated written text was reconstructed by Castro from memory after the fact, so it should be read as a retrospective political document as much as a verbatim transcript.",
  wikimedia: { searchTerm: "Fidel Castro young 1950s", confidence: "verify" },
  links: [
    { label: "\"History Will Absolve Me\" — full text, Marxists Internet Archive", url: "https://www.marxists.org/history/cuba/archive/castro/1953/10/16.htm", confidence: "verify" }
  ],
  videos: []
},
{
  id: "castro-exile-mexico-che-1955",
  title: "Castro Exiled to Mexico; Meets Che Guevara",
  date: "1955-07-01", dateDisplay: "1955",
  era: "neocolonial-revolution",
  readingTags: ["Neocolonialism and the Revolution"],
  isFunFact: false,
  summary: "Released in a general amnesty, Castro travels to Mexico to organize an invasion force and meets Ernesto \"Che\" Guevara, an Argentine doctor who had witnessed the 1954 U.S.-backed coup in Guatemala.",
  details: {
    context: "Che's experience watching the CIA-backed overthrow of Guatemala's Árbenz government shaped his conviction that revolutionary change required armed struggle, not electoral reform. He joined Castro's small band training in Mexico for the return to Cuba.",
    connections: ["history-will-absolve-me", "granma-landing-1956"],
    whyItMatters: "This meeting is the origin point of one of the 20th century's most consequential political partnerships, and it links the Cuban Revolution directly to the broader Cold War pattern of U.S. intervention in Latin America."
  },
  confidence: "high", confidenceNotes: "Year is well documented; exact month/circumstances of the first meeting vary slightly by source.",
  wikimedia: { searchTerm: "Che Guevara portrait", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "granma-landing-1956",
  title: "Landing of the Granma",
  date: "1956-12-02", dateDisplay: "December 2, 1956",
  era: "neocolonial-revolution",
  readingTags: ["Neocolonialism and the Revolution"],
  isFunFact: true,
  summary: "82 rebels sail from Mexico to Cuba on the overloaded yacht Granma; ambushed on landing, only a small core group survives to reach the Sierra Maestra mountains.",
  details: {
    context: "The Granma — named after a previous owner's grandmother — was built for far fewer passengers and barely made the crossing. Batista's forces were waiting, and most of the landing party was killed or captured; estimates of survivors who regrouped in the mountains range from about 12 to 20-plus. The boat's name later gave its name to Cuba's national newspaper, Granma, and to Granma Province.",
    connections: ["castro-exile-mexico-che-1955", "sierra-maestra-war"],
    whyItMatters: "It's a striking, almost absurd detail — a revolution that nearly ended before it began, on an overcrowded boat named for someone's grandma — and a good entry point for discussing how founding myths get built from chaotic, uncertain events."
  },
  confidence: "high", confidenceNotes: "Landing date is certain; exact survivor count varies significantly by source (commonly 12, sometimes cited higher).",
  wikimedia: { searchTerm: "Granma yacht landing Cuba", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "sierra-maestra-war",
  title: "Guerrilla War in the Sierra Maestra",
  date: "1957-01-01", dateDisplay: "1956–1958",
  era: "neocolonial-revolution",
  readingTags: ["Neocolonialism and the Revolution"],
  isFunFact: false,
  summary: "From a mountain base in eastern Cuba, Castro's small rebel force wages a guerrilla campaign that gradually gains popular support and erodes Batista's control of the countryside.",
  details: {
    context: "Che Guevara, Raúl Castro, Camilo Cienfuegos, and others built the Rebel Army from a handful of survivors into a force capable of taking on the Batista government, aided by urban underground networks and growing disillusionment with the regime.",
    connections: ["granma-landing-1956", "batista-flees-1959"],
    whyItMatters: "This two-year campaign is the military core of the Revolution's rise to power."
  },
  confidence: "high", confidenceNotes: "Broad timeline is well documented; specific campaign details are simplified here.",
  wikimedia: { searchTerm: "Sierra Maestra mountains Cuba landscape", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "batista-flees-1959",
  title: "Batista Flees Cuba",
  date: "1959-01-01", dateDisplay: "January 1, 1959",
  era: "neocolonial-revolution",
  readingTags: ["Neocolonialism and the Revolution"],
  isFunFact: false,
  summary: "As rebel forces close in, Fulgencio Batista flees Havana in the early hours of New Year's Day, first to the Dominican Republic and later to Portugal and Spain.",
  details: {
    context: "Batista's sudden departure left a power vacuum quickly filled by the 26th of July Movement, which entered Havana within days.",
    connections: ["sierra-maestra-war", "castro-enters-havana-1959"],
    whyItMatters: "It marks the definitive end of the pre-revolutionary Cuban republic."
  },
  confidence: "high", confidenceNotes: "Well-documented date.",
  wikimedia: { searchTerm: "Fulgencio Batista 1959", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "castro-enters-havana-1959",
  title: "Castro's Rebels Enter Havana — Triumph of the Revolution",
  date: "1959-01-08", dateDisplay: "January 8, 1959",
  era: "neocolonial-revolution",
  readingTags: ["Neocolonialism and the Revolution"],
  isFunFact: false,
  summary: "Fidel Castro leads his forces into Havana to jubilant crowds, marking the formal triumph of the Cuban Revolution.",
  details: {
    context: "Castro's caravan from Santiago to Havana became a defining image of the Revolution's arrival; Manuel Urrutia was installed as provisional president, though real power quickly consolidated around Castro himself.",
    connections: ["batista-flees-1959", "agrarian-reform-1959"],
    whyItMatters: "This is the pivot point of the entire course — everything before this leads up to it, and everything after flows from the government it installed."
  },
  confidence: "high", confidenceNotes: "Well-documented date.",
  wikimedia: { searchTerm: "Fidel Castro enters Havana 1959", confidence: "high" },
  links: [],
  videos: []
},

// ---------------- ERA 5: Building the New Society ----------------
{
  id: "agrarian-reform-1959",
  title: "Agrarian Reform Law",
  date: "1959-05-17", dateDisplay: "May 1959",
  era: "building-new-society",
  readingTags: ["Building the New Society"],
  isFunFact: false,
  summary: "Among the new revolutionary government's first major acts, the Agrarian Reform Law caps landholding size and redistributes large estates, striking directly at the plantation-era economic structure.",
  details: {
    context: "The law targeted both foreign-owned (heavily American) and domestic large landholdings, a move that quickly strained relations with the United States and foreshadowed the broader nationalization wave to come.",
    connections: ["castro-enters-havana-1959", "nationalization-us-industries-1960"],
    whyItMatters: "It's the first concrete sign that the new government intended structural economic change, not just a change in leadership."
  },
  confidence: "high", confidenceNotes: "Well-documented date and general provisions.",
  wikimedia: { searchTerm: "Cuban Agrarian Reform 1959", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "casa-de-las-americas-1959",
  title: "Founding of Casa de las Américas",
  date: "1959-04-28", dateDisplay: "1959",
  era: "building-new-society",
  readingTags: ["Building the New Society"],
  isFunFact: false,
  summary: "Revolutionary leader Haydée Santamaría founds Casa de las Américas, a cultural institution promoting Latin American literature and arts that quickly becomes a major regional cultural hub.",
  details: {
    context: "Casa de las Américas established prestigious literary prizes and journals that connected Cuba to Latin American intellectuals for decades, even through periods of Cuba's greatest political isolation.",
    connections: ["icaic-founded-1959", "uneac-founded-1961"],
    whyItMatters: "It shows the new government investing in cultural soft power and pan-Latin American solidarity almost immediately after taking power."
  },
  confidence: "high", confidenceNotes: "Exact founding month is not fully certain across sources.",
  wikimedia: { searchTerm: "Casa de las Américas building Havana", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "nationalization-us-industries-1960",
  title: "Nationalization of U.S.-Owned Industries",
  date: "1960-08-06", dateDisplay: "1960",
  era: "building-new-society",
  readingTags: ["Building the New Society"],
  isFunFact: false,
  summary: "The revolutionary government nationalizes major U.S.-owned businesses in Cuba — oil refineries, sugar mills, utilities, banks — sharply escalating tensions with Washington.",
  details: {
    context: "Nationalization proceeded in waves through 1960, generally in response to specific U.S. actions (like refusal to refine Soviet crude oil), each side's moves escalating the other's.",
    connections: ["agrarian-reform-1959", "us-embargo-1962"],
    whyItMatters: "This tit-for-tat escalation directly produces the U.S. embargo that would shape Cuban economic life for the rest of the 20th century and beyond."
  },
  confidence: "high", confidenceNotes: "General pattern is well documented; the precise sequence and dates of specific nationalizations vary by source.",
  wikimedia: { searchTerm: "Havana oil refinery", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "urban-reform-law-1960",
  title: "Urban Reform Law",
  date: "1960-10-14", dateDisplay: "1960",
  era: "building-new-society",
  readingTags: ["Building the New Society"],
  isFunFact: false,
  summary: "The government restructures urban housing and property ownership, eliminating rental profit and transferring housing toward direct occupant ownership.",
  details: {
    context: "The law was part of a broader push to eliminate private profit from basic needs like housing, alongside the healthcare and education reforms of the same period.",
    connections: ["agrarian-reform-1959", "healthcare-system-1960s"],
    whyItMatters: "Along with agrarian reform, it's a concrete example of the redistributive policy that defined the Revolution's early domestic agenda."
  },
  confidence: "high", confidenceNotes: "General provisions are documented; exact date and details are less consistently reported across sources.",
  wikimedia: { searchTerm: "Havana apartment buildings 1960s", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "literacy-campaign-1961",
  title: "The Cuban Literacy Campaign",
  date: "1961-01-01", dateDisplay: "1961 (\"Year of Education\")",
  era: "building-new-society",
  readingTags: ["Building the New Society"],
  isFunFact: true,
  summary: "Over 100,000 volunteer teachers — many of them teenagers — fan out across Cuba's countryside to teach reading and writing, dramatically cutting illiteracy within a single year.",
  details: {
    context: "Young brigadistas, identifiable by their uniforms and kerosene lanterns, lived with rural families they taught, in a mass mobilization campaign later recognized by UNESCO. Estimates of the resulting literacy rate and exact volunteer numbers vary by source, but the scale and speed of the campaign are widely regarded as historically remarkable.",
    connections: ["castro-enters-havana-1959", "healthcare-system-1960s"],
    whyItMatters: "It's one of the Revolution's most genuinely celebrated achievements, even among many critics of the government otherwise — and a striking example of mass mobilization as a tool of social transformation."
  },
  confidence: "high", confidenceNotes: "Core narrative is well documented; specific statistics (brigadista counts, resulting literacy rate) vary across sources.",
  wikimedia: { searchTerm: "Cuban literacy campaign 1961 brigadista", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "socialist-declaration-1961",
  title: "Castro Declares the Socialist Character of the Revolution",
  date: "1961-04-16", dateDisplay: "April 16, 1961",
  era: "building-new-society",
  readingTags: ["Building the New Society"],
  isFunFact: false,
  summary: "The day before the Bay of Pigs invasion, Castro publicly declares the Revolution socialist for the first time.",
  details: {
    context: "This declaration came amid rising tension with Washington and just ahead of the U.S.-backed invasion attempt — timing that some historians read as a deliberate rallying move, and others as a longer-building ideological shift finally made explicit.",
    connections: ["marxist-leninist-declaration-1961", "bay-of-pigs-1961"],
    whyItMatters: "It's often confused with Castro's later, more famous 'Marxist-Leninist' declaration in December — worth distinguishing the two as separate moments in the Revolution's ideological evolution."
  },
  confidence: "high", confidenceNotes: "Date is well documented.",
  wikimedia: { searchTerm: "Fidel Castro speech 1961", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "marxist-leninist-declaration-1961",
  title: "Castro Declares Himself Marxist-Leninist",
  date: "1961-12-02", dateDisplay: "December 2, 1961",
  era: "building-new-society",
  readingTags: ["Building the New Society"],
  isFunFact: false,
  summary: "In a televised address, Castro declares: \"I am a Marxist-Leninist and shall be one until the end of my life\" — a more specific and lasting ideological commitment than the April socialism declaration.",
  details: {
    context: "This speech sealed Cuba's alignment with the Soviet bloc for the Cold War's duration and marked a clear break from the more pluralistic coalition that had initially supported the Revolution.",
    connections: ["socialist-declaration-1961", "cuban-missile-crisis-1962"],
    whyItMatters: "It's the clearest single statement of the ideological direction that would define Cuban government policy for the next three decades."
  },
  confidence: "high", confidenceNotes: "Date and quote are well documented.",
  wikimedia: { searchTerm: "Fidel Castro 1961", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "healthcare-system-1960s",
  title: "Free Universal Healthcare System Established",
  date: "1961-01-01", dateDisplay: "early 1960s",
  era: "building-new-society",
  readingTags: ["Building the New Society"],
  isFunFact: false,
  summary: "The revolutionary government builds a free, universal healthcare system, extending rural clinics and services to areas long neglected under the pre-revolutionary republic.",
  details: {
    context: "Cuba's healthcare investment became one of the government's most internationally recognized achievements, eventually including the export of Cuban doctors abroad as a form of \"medical diplomacy.\"",
    connections: ["literacy-campaign-1961", "urban-reform-law-1960"],
    whyItMatters: "Alongside literacy, it's one of the clearest examples of the Revolution's poverty-reduction agenda in action."
  },
  confidence: "high", confidenceNotes: "General narrative is well documented; specific rollout dates and milestones are simplified here.",
  wikimedia: { searchTerm: "Cuban doctor medical", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "committees-defense-revolution-1960",
  title: "Committees for the Defense of the Revolution (CDRs) Founded",
  date: "1960-09-28", dateDisplay: "September 28, 1960",
  era: "building-new-society",
  readingTags: ["Building the New Society"],
  isFunFact: false,
  summary: "After counterrevolutionary bombs went off near a Havana rally, Castro announces a neighborhood 'committee of revolutionary vigilance' on every block — the CDRs, a nationwide network combining civil defense, surveillance, and community organizing.",
  details: {
    context: "Organized by city block, factory floor, and farm, CDRs quickly grew to hundreds of thousands of members and took on responsibilities well beyond watching for counterrevolutionary activity — coordinating vaccination and literacy campaigns, food distribution, and neighborhood improvement. By 2010, roughly 8.4 million of Cuba's 11.2 million people were registered CDR members. They've also drawn sustained criticism as an instrument of social surveillance and pressure against dissent.",
    connections: ["literacy-campaign-1961", "healthcare-system-1960s"],
    whyItMatters: "The CDRs are a useful single case for the double-edged nature of many revolutionary institutions: genuinely delivering public-health and social infrastructure at massive scale, while also functioning as a tool of political monitoring down to the block level."
  },
  confidence: "high", confidenceNotes: "Founding date and origin story are well documented; membership figures are most solid for the specific years cited.",
  wikimedia: { searchTerm: "Cuba CDR neighborhood mural", confidence: "verify" },
  links: [],
  videos: []
},

// ---------------- ERA 6: Culture and Revolution ----------------
{
  id: "nicolas-guillen-afro-cuban-poetry",
  title: "Nicolás Guillén and Afro-Cuban Poetry",
  date: "1930-01-01", dateDisplay: "1930",
  era: "culture-revolution",
  readingTags: ["Culture and Revolution"],
  isFunFact: false,
  summary: "Nicolás Guillén publishes Motivos de son, using the rhythms and speech of Afro-Cuban son music to found a new school of poetry — part of a broader 1930s movement to recover Afro-Cuban heritage as central to Cuban national identity, not peripheral to it.",
  details: {
    context: "Guillén — of mixed African and Spanish descent, and later named Cuba's national poet — wrote Motivos de son after meeting Langston Hughes in Havana in 1930, fusing literary form with the sound and speech patterns of Afro-Cuban popular music. His poem 'Caña' ('Sugarcane') distills the plantation economy into four blunt images — the Black laborer beside the cane, the Yankee above it, the earth beneath it, the blood being lost — connecting the sugar economy directly to race and foreign ownership. He would go on to serve as president of the Union of Writers and Artists of Cuba (UNEAC) after 1959.",
    connections: ["ortiz-transculturacion-1940", "cuba-largest-sugar-producer", "santeria-palo-monte"],
    whyItMatters: "Guillén's work is the clearest literary companion to Ortiz's transculturación — using poetry, rather than anthropology, to insist that Afro-Cuban culture is Cuban culture, not an addition to it."
  },
  confidence: "high", confidenceNotes: "Publication year and core biography are well documented; some anthologized translations of 'Caña' vary slightly in wording.",
  wikimedia: { searchTerm: "Nicolás Guillén Cuban poet", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "santeria-palo-monte",
  title: "Santería and Palo Monte",
  date: "1850-01-01", dateDisplay: "Roots in the 19th century, practiced today",
  era: "culture-revolution",
  readingTags: ["Culture and Revolution"],
  isFunFact: false,
  summary: "Enslaved Yoruba and Kongo peoples in Cuba built Santería (Regla de Ocha) and Palo Monte by fusing West and Central African religious traditions with Spanish Catholicism — worshipping their own orishas and spirits behind the faces of Catholic saints.",
  details: {
    context: "Under a colonial system that suppressed African religious practice, enslaved worshippers mapped their deities onto Catholic saints so the two could be practiced side by side, in the open: Ochún, orisha of rivers and love, is venerated through Cuba's patron saint, Our Lady of Charity (Virgen de la Caridad); Yemayá, mother of the sea, is venerated through Our Lady of Regla. Palo Monte, rooted in Kongo rather than Yoruba tradition, developed alongside Santería with its own distinct cosmology and ritual practice. Both religions were marginalized for decades after 1959 as the officially atheist state discouraged religious practice, before a more tolerant policy took hold from the 1990s on.",
    connections: ["callejon-de-hamel-1990", "nicolas-guillen-afro-cuban-poetry"],
    whyItMatters: "Santería and Palo Monte are living proof of Ortiz's transculturación in action — not a historical relic, but a religious practice still shaping Cuban daily life, music, and public art today, most visibly at Callejón de Hamel."
  },
  confidence: "high", confidenceNotes: "Core saint/orisha pairings are well documented; the history of state policy toward these religions is simplified here and varies by source and period.",
  wikimedia: { searchTerm: "Santería altar orishas", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "icaic-founded-1959",
  title: "ICAIC (Cuban Film Institute) Founded",
  date: "1959-03-24", dateDisplay: "March 1959",
  era: "culture-revolution",
  readingTags: ["Culture and Revolution"],
  isFunFact: false,
  summary: "One of the Revolution's earliest cultural institutions, the Cuban Institute of Cinematographic Art and Industry (ICAIC) launches a distinctive tradition of revolutionary filmmaking and poster art.",
  details: {
    context: "ICAIC produced internationally acclaimed films and, through its graphic design department, some of the 20th century's most striking political poster art — a visual style now recognized worldwide.",
    connections: ["casa-de-las-americas-1959", "taller-experimental-grafica-1962"],
    whyItMatters: "It's a reminder that cultural production was treated as a revolutionary priority from nearly the first weeks of the new government."
  },
  confidence: "high", confidenceNotes: "Exact founding date within March 1959 is not fully certain across sources.",
  wikimedia: { searchTerm: "Cuban film poster 1960s", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "uneac-founded-1961",
  title: "UNEAC (Union of Writers and Artists of Cuba) Founded",
  date: "1961-08-22", dateDisplay: "1961",
  era: "culture-revolution",
  readingTags: ["Culture and Revolution"],
  isFunFact: false,
  summary: "The state-sponsored Union of Writers and Artists of Cuba (UNEAC) is founded to organize the country's cultural producers — the same institution that would later stage the Padilla confession.",
  details: {
    context: "UNEAC became the official channel through which the state related to (and monitored) Cuban writers and artists, membership in it often functioning as de facto professional legitimacy.",
    connections: ["words-to-intellectuals-1961", "padilla-affair-1971"],
    whyItMatters: "Its role in the 1971 Padilla Affair shows how cultural institutions founded with genuine artistic ambitions could also become instruments of political control."
  },
  confidence: "high", confidenceNotes: "Exact founding date is not fully certain across sources.",
  wikimedia: { searchTerm: "Havana colonial mansion building", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "words-to-intellectuals-1961",
  title: "\"Words to the Intellectuals\" Speech",
  date: "1961-06-30", dateDisplay: "June 30, 1961",
  era: "culture-revolution",
  readingTags: ["Culture and Revolution"],
  isFunFact: false,
  summary: "Addressing writers and artists at the National Library, Castro declares: \"Within the Revolution, everything; against the Revolution, nothing\" — a line that would define the boundaries of acceptable art for decades.",
  details: {
    context: "The speech came amid growing debate over artistic freedom in the young revolutionary state, particularly following controversy over the short film P.M. Castro's formulation was deliberately ambiguous about where exactly those boundaries lay — an ambiguity that later fueled cases like the Padilla Affair.",
    connections: ["uneac-founded-1961", "padilla-affair-1971"],
    whyItMatters: "This single line is arguably the most consequential sentence in the history of Cuban cultural policy — cited by both defenders and critics of the Revolution's treatment of artists ever since."
  },
  confidence: "high", confidenceNotes: "Date and quote are well documented.",
  wikimedia: { searchTerm: "Biblioteca Nacional José Martí Havana", confidence: "verify" },
  links: [
    { label: "\"Words to the Intellectuals\" — full text", url: "http://www.walterlippmann.com/fc-06-30-1961.html", confidence: "verify" }
  ],
  videos: []
},
{
  id: "taller-experimental-grafica-1962",
  title: "Taller Experimental de Gráfica Founded",
  date: "1962-07-30", dateDisplay: "July 30, 1962",
  era: "culture-revolution",
  readingTags: ["Culture and Revolution"],
  isFunFact: false,
  summary: "A group of Cuban and Chilean artists founds an experimental printmaking workshop off Plaza de la Catedral, becoming central to Cuba's internationally celebrated graphic-art tradition.",
  details: {
    context: "Founded by muralist Orlando Suárez and Chilean painter José Venturelli using recycled lithography equipment, the workshop trained generations of Cuban printmakers and remains active today, having relocated within Habana Vieja in the 1990s.",
    connections: ["icaic-founded-1959"],
    whyItMatters: "It's a concrete, still-operating example of the state-supported visual arts infrastructure the Revolution built — and a great complement to ICAIC's poster tradition."
  },
  confidence: "high", confidenceNotes: "Founding date is well documented.",
  wikimedia: { searchTerm: "Cuban poster art print", confidence: "verify" },
  links: [],
  videos: [
    { id: "398904583", title: "Taller Experimental de Gráfica" }
  ]
},
{
  id: "nueva-trova-silvio-rodriguez",
  title: "Rise of Nueva Trova and Silvio Rodríguez",
  date: "1969-01-01", dateDisplay: "c. 1967–1972",
  era: "culture-revolution",
  readingTags: ["Culture and Revolution"],
  isFunFact: true,
  summary: "A new generation of Cuban singer-songwriters blends folk melody with revolutionary and deeply personal themes, with Silvio Rodríguez emerging as its best-known and most enduring figure.",
  details: {
    context: "Nueva Trova grew out of groups like the Grupo de Experimentación Sonora del ICAIC and coalesced as a named movement around the early 1970s. Its artists occupied a complicated position — broadly sympathetic to the Revolution, but often more introspective and occasionally more critical than official cultural policy was comfortable with.",
    connections: ["words-to-intellectuals-1961", "padilla-affair-1971"],
    whyItMatters: "Silvio Rodríguez's music remains hugely influential across Latin America today, and Nueva Trova's ambiguous relationship with state cultural policy is a useful case study alongside the Padilla Affair."
  },
  confidence: "high", confidenceNotes: "This was a gradual movement rather than a single founding event; the date given is an approximate midpoint.",
  wikimedia: { searchTerm: "Silvio Rodríguez musician", confidence: "high" },
  links: [
    { label: "Silvio Rodríguez — official YouTube channel", url: "https://www.youtube.com/channel/UC16aF70kysMIJdz51HdMx9Q", confidence: "verify" }
  ],
  videos: []
},
{
  id: "padilla-affair-1971",
  title: "The Padilla Affair",
  date: "1971-03-20", dateDisplay: "March 20 – April 27, 1971",
  era: "culture-revolution",
  readingTags: ["Culture and Revolution"],
  isFunFact: false,
  summary: "Poet Heberto Padilla is arrested, pressured into a written self-criticism while imprisoned, and forced to publicly recant before Cuba's writers' union — a scripted confession that shocks and alienates many of the Revolution's international intellectual allies.",
  details: {
    context: "Padilla was arrested March 20, 1971, for his poetry collection Fuera del juego, which had won a prize but drawn official criticism. That collection opens with 'En tiempos difíciles' ('In Difficult Times' / 'In Hard Times'), a poem that lists everything demanded of a man — his hands, eyes, legs, heart — closing with the demand that he 'get moving, because in difficult times / this is, without a doubt, the decisive test.' Read against what happened to Padilla months later, its quiet irony about falling in line with History reads as strikingly prophetic. Padilla signed a written 'self-criticism' on April 5 while still imprisoned, and hours after his April 25 release read a scripted public confession before UNEAC on April 27 — denouncing himself and even implicating friends. International figures including Jean-Paul Sartre, Mario Vargas Llosa, Julio Cortázar, and Susan Sontag signed open letters protesting the affair, permanently fracturing the Latin American literary left's united support for Cuba.",
    connections: ["words-to-intellectuals-1961", "uneac-founded-1961", "nueva-trova-silvio-rodriguez"],
    whyItMatters: "The Padilla Affair is widely seen as the moment Cuba's international intellectual honeymoon ended — a pivotal case study in the tension between revolutionary politics and artistic freedom."
  },
  confidence: "high", confidenceNotes: "Dates are well documented and precise.",
  wikimedia: { searchTerm: "Heberto Padilla poet", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "callejon-de-hamel-1990",
  title: "Callejón de Hamel Founded",
  date: "1990-04-21", dateDisplay: "April 21, 1990",
  era: "culture-revolution",
  readingTags: ["Culture and Revolution"],
  isFunFact: true,
  summary: "Artist Salvador González Escalona paints the first mural in a Havana alley, building it over decades into a vibrant public space dedicated to Afro-Cuban culture and Santería, with murals, sculpture, and weekly rumba performances.",
  details: {
    context: "What began as a single mural in a declining neighborhood grew into an entire block-long open-air art installation and community gathering space. It's now one of the most visible public expressions of Afro-Cuban religious and cultural heritage in Havana.",
    connections: ["padilla-affair-1971", "fusterlandia"],
    whyItMatters: "It directly supports the course's Santería/Palo Monte reading by making Afro-Cuban religious culture visible, public, and celebrated — a striking contrast to the decades in which such practices were marginalized."
  },
  confidence: "high", confidenceNotes: "Founding date is well documented.",
  wikimedia: { searchTerm: "Callejón de Hamel Havana mural", confidence: "high" },
  links: [],
  videos: [
    { id: "399324729", title: "Callejon de Hammel" }
  ]
},

// ---------------- ERA 7: The Revolution and the World ----------------
{
  id: "bay-of-pigs-1961",
  title: "Bay of Pigs Invasion",
  date: "1961-04-17", dateDisplay: "April 17–20, 1961",
  era: "revolution-and-world",
  readingTags: ["The Revolution and the World"],
  isFunFact: false,
  summary: "A CIA-organized force of Cuban exiles lands at the Bay of Pigs intending to spark a popular uprising against Castro; the invasion collapses within days.",
  details: {
    context: "Planned under Eisenhower and launched under Kennedy, the invasion badly miscalculated Cuban popular support for the exiles and Castro's military response. Its failure was a major early embarrassment for the new Kennedy administration and pushed Cuba further toward the Soviet Union. The roughly 1,500-man CIA-trained exile invasion force is remembered by its military designation, Brigade 2506 — named for the ID number of a trainee who died in a pre-invasion accident. Surviving members were ransomed back to the U.S. in December 1962 in exchange for food and medical aid.",
    connections: ["socialist-declaration-1961", "cuban-missile-crisis-1962"],
    whyItMatters: "It's a foundational episode in the pattern of U.S. covert action against Cuba that continues through the following entries."
  },
  confidence: "high", confidenceNotes: "Well-documented dates.",
  wikimedia: { searchTerm: "Bay of Pigs invasion 1961", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "us-embargo-1962",
  title: "U.S. Embargo on Cuba Formalized",
  date: "1962-02-07", dateDisplay: "February 1962",
  era: "revolution-and-world",
  readingTags: ["The Revolution and the World"],
  isFunFact: false,
  summary: "The United States formalizes a comprehensive trade embargo against Cuba, building on earlier partial sanctions from 1960.",
  details: {
    context: "The embargo (called the 'bloqueo' — blockade — in Cuba) would be tightened and loosened at various points over the following six decades, remaining, in modified form, in effect today. Its reach extends beyond direct trade: for decades it has barred the export to Cuba of foreign-made goods and technology containing more than 10 percent U.S.-origin components, extending its effect to third-country manufacturers. The Foreign Assistance Act of 1961 supplied part of the legal scaffolding, authorizing the president to impose a trade embargo and, via the later Hickenlooper Amendment, tying U.S. foreign aid decisions to how other countries responded to Cuba's uncompensated nationalizations.",
    connections: ["nationalization-us-industries-1960", "special-period-1991"],
    whyItMatters: "The embargo's economic impact is one of the most contested and enduring topics in any Cuba course — central to nearly every subsequent era on this timeline."
  },
  confidence: "high", confidenceNotes: "Well-documented formal date.",
  wikimedia: { searchTerm: "John F. Kennedy 1962", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "cia-plots-castro",
  title: "Operation Mongoose & CIA Plots Against Castro",
  date: "1961-11-01", dateDisplay: "1960–1965",
  era: "revolution-and-world",
  readingTags: ["The Revolution and the World"],
  isFunFact: true,
  summary: "A 1975 Senate investigation (the Church Committee) confirmed at least eight CIA attempts to assassinate Castro, including a poisoned cigar box, an exploding seashell, and a poison-tipped fountain pen.",
  details: {
    context: "Operation Mongoose was a broader CIA covert-action program aimed at destabilizing the Cuban government through sabotage and propaganda, alongside the assassination schemes. The Church Committee substantiated 8 serious attempts between 1960–1965; a much larger, often-repeated figure of '638 attempts' comes from a former Cuban counterintelligence chief and is far less rigorously documented — worth presenting as a widely cited claim rather than a verified count.",
    connections: ["bay-of-pigs-1961", "cuban-missile-crisis-1962"],
    whyItMatters: "It's both a genuinely bizarre, fun set of facts and a serious illustration of how far Cold War covert action against Cuba actually went — useful context for Cuban state rhetoric about U.S. hostility."
  },
  confidence: "high", confidenceNotes: "The 8 Church-Committee-substantiated plots are well documented; the popularized '638' figure is contested and should be flagged as such.",
  wikimedia: { searchTerm: "Central Intelligence Agency seal", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "cuban-missile-crisis-1962",
  title: "Cuban Missile Crisis",
  date: "1962-10-16", dateDisplay: "October 16–28, 1962",
  era: "revolution-and-world",
  readingTags: ["The Revolution and the World"],
  isFunFact: false,
  summary: "The discovery of Soviet nuclear missiles in Cuba brings the U.S. and USSR to the brink of nuclear war during a tense 13-day standoff, resolved by a secret U.S.-Soviet agreement.",
  details: {
    context: "In his October 22 televised address announcing the crisis, Kennedy warned that the Soviet medium- and intermediate-range missiles in Cuba could strike targets 'as far north as Hudson Bay, Canada, and as far south as Lima, Peru' — a line meant to underscore that this was a hemispheric threat, not just one to Florida. The crisis ended with the Soviets withdrawing their missiles in exchange for a public U.S. pledge not to invade Cuba and a secret agreement to remove U.S. missiles from Turkey. Cuba itself was notably sidelined from the negotiations that resolved a crisis unfolding on its own soil — a point underscored when Castro, furious at not being consulted, issued his own 'Five Points' on October 28, demanding an end to the U.S. embargo, subversive activities, air and naval incursions, and the U.S. presence at Guantánamo before he'd trust any non-invasion pledge. Washington rejected all five.",
    connections: ["marxist-leninist-declaration-1961", "us-embargo-1962"],
    whyItMatters: "It's the closest the Cold War came to direct nuclear conflict — and, once again, a moment where major decisions about Cuba's fate were made largely without Cuban input."
  },
  confidence: "high", confidenceNotes: "Well-documented, precisely dated.",
  wikimedia: { searchTerm: "Cuban Missile Crisis 1962", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "operation-pedro-pan",
  title: "Operation Pedro Pan",
  date: "1960-12-26", dateDisplay: "December 1960 – October 1962",
  era: "revolution-and-world",
  readingTags: ["The Revolution and the World"],
  isFunFact: false,
  summary: "Fearing Communist indoctrination of their children, over 14,000 Cuban parents send their unaccompanied minors to the United States, facilitated quietly by the Catholic Welfare Bureau in Miami.",
  details: {
    context: "The program ran from the first arrivals on December 26, 1960, until the Missile Crisis effectively cut off further flights in October 1962. Children ranged from age 3 to 16; many were not reunited with their parents for years, and some never were. It remains the largest recorded child refugee movement in the Western Hemisphere. 'Operation Pedro Pan' is technically the colloquial name for the airlift itself; roughly half the children had relatives already in the U.S. to take them in, while the rest were placed through a separate, longer-running welfare structure called the (Unaccompanied) Cuban Children's Program, which continued housing and placing children with foster families and institutions into the early 1980s, long after the original airlift had ended.",
    connections: ["us-embargo-1962", "elian-gonzalez-crisis"],
    whyItMatters: "It's a deeply personal, human-scale counterpart to the geopolitics of the Missile Crisis and embargo — central to understanding the Cuban exile community's formation and its lasting trauma."
  },
  confidence: "high", confidenceNotes: "Total figure (14,048) and date range are well documented.",
  wikimedia: { searchTerm: "Operation Pedro Pan Cuban children Miami", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "cuba-angola-war",
  title: "Cuban Military Involvement in Angola",
  date: "1975-11-01", dateDisplay: "1975–1991",
  era: "revolution-and-world",
  readingTags: ["The Revolution and the World"],
  isFunFact: false,
  summary: "Cuba deploys tens of thousands of troops to support the MPLA in the Angolan Civil War — one of the largest Cold War-era military interventions by a Global South nation.",
  details: {
    context: "Cuban forces played a decisive role in several major engagements, including the 1988 Battle of Cuito Cuanavale, which contributed to negotiations that eventually led to Namibian independence and, indirectly, the end of apartheid-era South African military intervention in the region.",
    connections: ["marxist-leninist-declaration-1961"],
    whyItMatters: "It's a reminder that Cuba's Cold War role extended far beyond its own hemisphere — revolutionary Cuba positioned itself as an active participant in anti-colonial struggles across the Global South."
  },
  confidence: "high", confidenceNotes: "Broad dates are well documented; specific troop figures vary by source.",
  wikimedia: { searchTerm: "Angola map location", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "mariel-boatlift-1980",
  title: "Mariel Boatlift",
  date: "1980-04-15", dateDisplay: "April–October 1980",
  era: "revolution-and-world",
  readingTags: ["The Revolution and the World"],
  isFunFact: false,
  summary: "Castro opens the port of Mariel, and roughly 125,000 Cubans flee to the United States by boat over the following months — one of the largest mass migrations in modern Cuban history.",
  details: {
    context: "The exodus began after a group of asylum-seekers stormed the Peruvian embassy; Castro responded by declaring anyone who wanted to leave could do so from Mariel. The resulting migration reshaped Cuban-American communities, particularly in Miami.",
    connections: ["us-embargo-1962", "balseros-crisis-1994"],
    whyItMatters: "It's a key data point in the recurring pattern of large-scale Cuban emigration tied to specific political and economic pressure points."
  },
  confidence: "high", confidenceNotes: "General narrative well documented; exact total figure varies slightly by source (commonly cited 124,000–125,000).",
  wikimedia: { searchTerm: "Mariel boatlift 1980", confidence: "high" },
  links: [],
  videos: []
},

// ---------------- ERA 8: Post-Revolutionary / Contemporary Cuba ----------------
{
  id: "cuban-adjustment-act-1966",
  title: "Cuban Adjustment Act",
  date: "1966-11-02", dateDisplay: "November 2, 1966",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba — exile and diaspora"],
  isFunFact: false,
  summary: "Congress grants Cubans a uniquely fast path to U.S. permanent residency, letting anyone who reached the U.S. after January 1, 1959 apply for a green card after just one year, without returning to Cuba to get a visa.",
  details: {
    context: "Ordinary U.S. immigration law would have required Cuban arrivals to return home for a visa interview — obviously unworkable for people fleeing the government there. The Act let them 'adjust' status from within the U.S. instead. Its scope narrowed considerably in 1995, when the Clinton administration's 'wet foot, dry foot' policy limited its benefits to Cubans who physically reached U.S. soil, turning back those intercepted at sea. That policy itself was ended in January 2017, though the underlying 1966 Act remains on the books.",
    connections: ["mariel-boatlift-1980", "balseros-crisis-1994"],
    whyItMatters: "No other nationality has ever had a comparable standing path to U.S. residency — a direct legal legacy of Cold War politics that still shapes Cuban migration today, even in modified form."
  },
  confidence: "high", confidenceNotes: "Well-documented law; later policy modifications (1995, 2017) are simplified here.",
  wikimedia: { searchTerm: "Cuban refugees Miami 1960s", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "cuba-exile-terrorism-coru-1976",
  title: "CORU and the Bombing of Cubana Flight 455",
  date: "1976-10-06", dateDisplay: "1976",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba — exile and diaspora"],
  isFunFact: false,
  summary: "Militant exiles Orlando Bosch and Luis Posada Carriles help found CORU, an anti-Castro umbrella group tied to dozens of 1976 bombings — including the mid-air bombing of a Cuban airliner that killed all 73 people aboard.",
  details: {
    context: "CORU (Coordination of United Revolutionary Organizations) formed in the Dominican Republic in June 1976 and was linked by the FBI to over 50 attacks that year alone, including the assassination of former Chilean diplomat Orlando Letelier in Washington, D.C. On October 6, 1976, bombs planted on Cubana de Aviación Flight 455 killed all 73 people aboard, including Cuba's entire 1975 national fencing team. Two operatives employed by Posada were convicted; Bosch was acquitted in Venezuela and later lived in Miami until his death in 2011, while Posada was never successfully prosecuted for the bombing and died in the U.S. in 2018.",
    connections: ["cuban-adjustment-act-1966", "el-dialogo-1978"],
    whyItMatters: "It's an uncomfortable but necessary counterweight to a purely sympathetic reading of the exile community — a reminder that anti-Castro exile politics included a real campaign of violence, not just lobbying and cultural nostalgia."
  },
  confidence: "high", confidenceNotes: "Well documented via declassified U.S. records and court proceedings; some casualty/attack-count details vary slightly by source.",
  wikimedia: { searchTerm: "Cubana de Aviación Flight 455", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "el-dialogo-1978",
  title: "El Diálogo",
  date: "1978-11-01", dateDisplay: "November–December 1978",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba — exile and diaspora"],
  isFunFact: false,
  summary: "Seventy-five Cuban exiles negotiate directly with the Castro government for the first time, winning the release of political prisoners and the right for exiles to visit the island — while Castro publicly drops the epithet 'gusano' (worm) for 'the Cuban community abroad.'",
  details: {
    context: "Encouraged by the Carter administration's human-rights-focused diplomacy, the 'Committee of 75' held two rounds of talks with Cuban officials. The result let some 100,000 exiles visit Cuba by 1979 for the first time since leaving — an emotionally fraught homecoming for many. The dialogue was bitterly controversial within the exile community itself; participants ('dialogueros') faced ostracism and, in some cases, violent reprisals from hardline opponents.",
    connections: ["cuba-exile-terrorism-coru-1976", "cuban-adjustment-act-1966"],
    whyItMatters: "It's an early preview of the same argument that recurs throughout later U.S.-Cuba relations, including the 2014 Thaw: does engagement help ordinary Cubans, or does it legitimize the government at their expense? El Diálogo split the exile community over exactly that question."
  },
  confidence: "high", confidenceNotes: "Broad outcomes are well documented; exact participant numbers and visit figures vary by source.",
  wikimedia: { searchTerm: "Cuban exile Miami 1970s community", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "canf-founded-1981",
  title: "Cuban American National Foundation Founded",
  date: "1981-01-01", dateDisplay: "1981",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba — exile and diaspora"],
  isFunFact: false,
  summary: "Jorge Mas Canosa and other exile businessmen found CANF, modeled on the pro-Israel lobby AIPAC, quickly becoming one of the most powerful ethnic lobbying organizations in U.S. politics and a driving force behind hardline U.S. Cuba policy for the next two decades.",
  details: {
    context: "Founded with encouragement from the incoming Reagan administration, CANF combined campaign contributions with direct policy advocacy to shape U.S. Cuba policy from the Reagan years through the 1990s, including pushing for both Radio and TV Martí and the 1996 Helms-Burton Act tightening the embargo. Its influence waned somewhat after Mas Canosa's death in 1997 and internal splits over how hardline a stance to take.",
    connections: ["radio-marti-1985", "el-dialogo-1978"],
    whyItMatters: "For roughly two decades, U.S. Cuba policy can't be fully explained without CANF — a textbook case of how a single, well-organized diaspora lobbying group can shape a bilateral relationship."
  },
  confidence: "high", confidenceNotes: "Founding year and general trajectory are well documented.",
  wikimedia: { searchTerm: "Jorge Mas Canosa", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "radio-marti-1985",
  title: "Radio Martí Begins Broadcasting",
  date: "1985-05-20", dateDisplay: "May 20, 1985",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba — exile and diaspora"],
  isFunFact: false,
  summary: "The U.S. government launches Radio Martí, a Voice of America-style station beaming pro-democracy and anti-Castro programming into Cuba, deliberately timed to the anniversary of Cuba's 1902 independence.",
  details: {
    context: "Pushed for years by Jorge Mas Canosa and approved by Congress in 1983, the station (later joined by TV Martí in 1990) broadcasts from Florida under the name of José Martí — a pointed choice, claiming the independence hero's legacy against the government that also claims him. Cuba responded to the 1985 launch by jamming the signal and suspending an existing U.S. immigration agreement; Cuban transmitters briefly retaliated by disrupting U.S. AM radio stations.",
    connections: ["canf-founded-1981"],
    whyItMatters: "Both governments claiming José Martí as their own — one via Radio Martí, the other via official state ideology — is a vivid illustration of how contested Cuban national symbols remain even a century after independence."
  },
  confidence: "high", confidenceNotes: "Well-documented launch date and context.",
  wikimedia: { searchTerm: "Voice of America shortwave transmitter", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "yoani-sanchez-generacion-y-2007",
  title: "Yoani Sánchez Launches \"Generación Y\"",
  date: "2007-04-01", dateDisplay: "2007",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: true,
  summary: "Philologist Yoani Sánchez starts the blog Generación Y from Havana, offering an unfiltered, often wry look at daily life under scarcity and censorship — smuggling posts out by email since she couldn't reliably get online from inside Cuba.",
  details: {
    context: "With limited, expensive internet access on the island, Sánchez emailed her posts to friends abroad, who published them for her — a workaround that became its own story about information control in Cuba. The blog's name plays on a generation of Cubans, herself included, given names starting with 'Y' (a fashion tied to Cuba's Soviet-era ties). Named one of Time's 100 most influential people in 2008, she later launched the independent outlet 14ymedio in 2014. Her essay 'Cow Suicide' ('Suicidio de una vaca'), assigned in some versions of this course, uses the absurdity of a Cuban law once treating cattle slaughter as a more serious crime than killing a person to illustrate the everyday absurdities of scarcity-era Cuban bureaucracy.",
    connections: ["special-period-1991"],
    whyItMatters: "Sánchez's blog marks a genuine shift in who gets to narrate Cuban daily life to the outside world — not foreign journalists or state media, but an ordinary Cuban writing around, rather than through, official channels."
  },
  confidence: "high", confidenceNotes: "Blog launch year and core biography are well documented; the summary of 'Cow Suicide' reflects the essay's well-known premise but should be checked against the specific translation assigned in your course.",
  wikimedia: { searchTerm: "Yoani Sánchez blogger Cuba", confidence: "verify" },
  links: [
    { label: "Generation Y — English translation of Sánchez's blog", url: "https://generacionyen.wordpress.com/", confidence: "verify" }
  ],
  videos: []
},
{
  id: "special-period-1991",
  title: "Special Period Begins",
  date: "1991-01-01", dateDisplay: "1991",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: false,
  summary: "The collapse of the Soviet Union ends Cuba's Soviet-subsidized trade relationship almost overnight, triggering the severe economic crisis known as the \"Special Period in Peacetime.\"",
  details: {
    context: "Fuel, food, and consumer goods became scarce almost overnight; the government promoted bicycle use, urban gardening, and other emergency adaptations. The Special Period reshaped daily Cuban life more dramatically than any single event since 1959.",
    connections: ["us-embargo-1962", "dollar-legalization-1993", "balseros-crisis-1994"],
    whyItMatters: "It's the hinge point between the revolutionary state's Soviet-dependent economy and the more mixed, informally market-adapted economy of contemporary Cuba."
  },
  confidence: "high", confidenceNotes: "Well-documented trigger and start year.",
  wikimedia: { searchTerm: "Havana Cuba 1990s", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "dollar-legalization-1993",
  title: "Dollar Legalization & Limited Market Reforms",
  date: "1993-07-26", dateDisplay: "1993",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: false,
  summary: "Facing economic collapse, the government legalizes possession of U.S. dollars and permits limited self-employment (cuentapropismo) for the first time since the 1960s.",
  details: {
    context: "These reforms created a dual economy — state salaries in Cuban pesos alongside a dollar-driven tourism and remittance economy — with lasting effects on inequality between Cubans with and without dollar access.",
    connections: ["special-period-1991"],
    whyItMatters: "It's the beginning of the market-oriented adaptations that, in different forms, continue to shape the Cuban economy today."
  },
  confidence: "high", confidenceNotes: "General reforms are well documented; exact scope and rollout dates are simplified here.",
  wikimedia: { searchTerm: "US dollar banknote", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "balseros-crisis-1994",
  title: "Cuban Rafter (Balseros) Crisis",
  date: "1994-08-05", dateDisplay: "Summer 1994",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: true,
  summary: "Amid Special Period desperation, tens of thousands of Cubans attempt the dangerous crossing to Florida on makeshift rafts, prompting a change in U.S. immigration policy.",
  details: {
    context: "The crisis led the U.S. and Cuba to negotiate new migration agreements and eventually the 'wet foot, dry foot' policy (in effect from 1995 until its repeal in January 2017), which treated Cuban migrants differently depending on whether they reached U.S. soil.",
    connections: ["special-period-1991", "mariel-boatlift-1980"],
    whyItMatters: "It's a striking, visceral illustration of the human cost of the Special Period, and it directly shaped decades of subsequent U.S.-Cuba migration policy."
  },
  confidence: "high", confidenceNotes: "General narrative well documented; exact figures for rafters intercepted vary by source (commonly cited as over 30,000).",
  wikimedia: { searchTerm: "Cuban rafters raft ocean", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "fusterlandia",
  title: "Fusterlandia",
  date: "1975-01-01", dateDisplay: "House decorated from 1975; neighborhood-wide project expands through the 1990s",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: true,
  summary: "Artist José Fuster begins covering his own house in Jaimanitas with vibrant mosaic tile, gradually spreading the project to neighboring homes until the entire fishing village becomes an open-air folk-art wonderland nicknamed \"Fusterlandia.\"",
  details: {
    context: "Fuster, sometimes called \"the Cuban Gaudí\" or \"the Caribbean Picasso,\" cites Constantin Brâncuși's outdoor sculpture park in Romania as an inspiration. Sources genuinely disagree on the exact starting point — some cite 1975, when Fuster first moved to Jaimanitas and began decorating his own house and studio; others cite the 1990s, when the mosaic project expanded to cover neighboring houses at scale. Today it draws roughly a thousand visitors a week.",
    connections: ["callejon-de-hamel-1990"],
    whyItMatters: "It's one of the most vivid living examples of contemporary Cuban folk art and cultural identity — a single artist's private obsession that became a beloved public landmark, and a direct, tangible complement to any reading on contemporary Cuban art."
  },
  confidence: "high", confidenceNotes: "Sources genuinely disagree on the 'start' date (1975 house vs. 1990s neighborhood expansion) — flagged explicitly rather than picking one.",
  wikimedia: { searchTerm: "Fusterlandia mosaic house Cuba", confidence: "verify" },
  links: [],
  videos: [
    { id: "399318837", title: "Welcome to Fusterlandia" },
    { id: "399293823", title: "Fusterlandia: Latin American Wall" }
  ]
},
{
  id: "buena-vista-social-club",
  title: "Buena Vista Social Club",
  date: "1997-06-23", dateDisplay: "Album: June 1997 · Documentary: September 1999",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: true,
  summary: "Producer Ry Cooder reunites elderly, largely forgotten pre-revolutionary Cuban son musicians for a Grammy-winning album; Wim Wenders's 1999 documentary brings their story — and Cuban music generally — to a massive global audience.",
  details: {
    context: "Recorded at Havana's EGREM studios and released internationally in June 1997, the album became an unexpected worldwide phenomenon, launching international touring careers for musicians in their 70s and 80s who had spent decades in obscurity. The documentary followed their first performances abroad, in Amsterdam and at New York's Carnegie Hall.",
    connections: ["nueva-trova-silvio-rodriguez"],
    whyItMatters: "It single-handedly reshaped how much of the world understood Cuban music, and it's a compelling case study in how the Special Period's isolation ironically helped preserve a musical tradition that became a global sensation once rediscovered."
  },
  confidence: "high", confidenceNotes: "Dates and core narrative are well documented.",
  wikimedia: { searchTerm: "Buena Vista Social Club musicians", confidence: "verify" },
  links: [
    { label: "Buena Vista Social Club — World Circuit Records", url: "https://worldcircuit.co.uk/artists/buena-vista-social-club/", confidence: "verify" }
  ],
  videos: []
},
{
  id: "elian-gonzalez-crisis",
  title: "Elián González Custody Crisis",
  date: "1999-11-25", dateDisplay: "November 1999 – June 2000",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: false,
  summary: "Six-year-old Elián González is found floating on an inner tube after the boat carrying him and his mother from Cuba capsizes; the resulting international custody battle between his Miami relatives and his father in Cuba dominates U.S. news for months.",
  details: {
    context: "Elián's mother and ten others died attempting the crossing on November 21, 1999; he was rescued November 25. After a bitter legal fight — including an April 2000 federal raid to remove him from his Miami relatives' home — he was returned to his father and to Cuba on June 28, 2000.",
    connections: ["operation-pedro-pan", "balseros-crisis-1994"],
    whyItMatters: "The case became a proxy battle over the entire U.S.-Cuba relationship and the Cuban exile community's politics, echoing — decades later — the same wrenching parent-child separation questions raised by Operation Pedro Pan."
  },
  confidence: "high", confidenceNotes: "Dates are well documented.",
  wikimedia: { searchTerm: "Elian Gonzalez 2000", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "fidel-cedes-power-raul",
  title: "Fidel Castro Cedes Power to Raúl Castro",
  date: "2006-07-31", dateDisplay: "July 31, 2006 (provisional) · February 2008 (formal)",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: false,
  summary: "Citing intestinal illness, Fidel Castro provisionally transfers power to his brother Raúl in 2006; the transfer becomes formal when Raúl is elected president by the National Assembly in February 2008.",
  details: {
    context: "Fidel's near-total absence from public life after 2006 marked a striking change after nearly five decades as the dominant figure in Cuban politics. Raúl's government pursued somewhat more significant economic liberalization than Fidel had allowed.",
    connections: ["death-of-fidel-castro-2016", "cuban-thaw-obama"],
    whyItMatters: "It's the beginning of the post-Fidel era in Cuban governance, setting the stage for the diplomatic and economic shifts that follow."
  },
  confidence: "high", confidenceNotes: "Dates are well documented.",
  wikimedia: { searchTerm: "Fidel Castro Raúl Castro", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "cuban-thaw-obama",
  title: "The Cuban Thaw — U.S.-Cuba Normalization",
  date: "2014-12-17", dateDisplay: "December 2014 – March 2016",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: false,
  summary: "Presidents Obama and Raúl Castro simultaneously announce the restoration of diplomatic relations; embassies reopen in 2015, and Obama visits Havana in March 2016 — the first sitting U.S. president to do so since 1928.",
  details: {
    context: "The rapprochement included eased travel and remittance rules and the resumption of direct commercial flights. During the March 2016 visit, First Lady Michelle Obama and daughter Malia dedicated a bench and two magnolia trees to the Cuban people in a small park beside Plaza de Armas — a quiet, personal gesture amid the larger diplomatic spectacle (see the video below and the Plaza de Armas entry in Era 2).",
    connections: ["real-fuerza-plaza-armas", "fidel-cedes-power-raul", "trump-cuba-rollback"],
    whyItMatters: "It's the high-water mark of post-Cold-War U.S.-Cuba relations — a reminder that the decades-long freeze was never permanent or inevitable, even though much of it would later be reversed."
  },
  confidence: "high", confidenceNotes: "Dates are well documented; the Michelle Obama gift is separately confirmed via press coverage of the visit.",
  wikimedia: { searchTerm: "Obama Cuba visit 2016 Havana", confidence: "high" },
  links: [],
  videos: []
},
{
  id: "death-of-fidel-castro-2016",
  title: "Death of Fidel Castro",
  date: "2016-11-25", dateDisplay: "November 25, 2016",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: false,
  summary: "Fidel Castro dies at age 90, prompting nine days of official mourning in Cuba and starkly divided reactions abroad — grief in Havana, celebration in parts of Miami.",
  details: {
    context: "Castro had already ceded formal power a decade earlier, but his death still marked a symbolic end to an era — he had led or dominated Cuban government longer than almost any other 20th-century leader worldwide.",
    connections: ["fidel-cedes-power-raul"],
    whyItMatters: "The sharply divided global reaction to his death is itself a useful teaching moment about how contested his legacy remains."
  },
  confidence: "high", confidenceNotes: "Well-documented date.",
  wikimedia: { searchTerm: "Fidel Castro elderly", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "trump-cuba-rollback",
  title: "U.S. Policy Rollback Under the Trump Administration",
  date: "2017-06-16", dateDisplay: "2017–2019",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: false,
  summary: "The Trump administration reverses significant parts of the Obama-era opening, tightening travel and financial restrictions and allowing lawsuits over confiscated properties for the first time.",
  details: {
    context: "Restrictions on individual travel and remittances were reimposed in stages, and cruise-line travel to Cuba was effectively shut down in 2019. The reversal illustrated how dependent the Cuban thaw had been on executive-branch discretion rather than settled law.",
    connections: ["cuban-thaw-obama"],
    whyItMatters: "It's a reminder that U.S.-Cuba policy has swung sharply between administrations, keeping the relationship politically unsettled up to the present."
  },
  confidence: "high", confidenceNotes: "Kept intentionally general given the number of individual policy actions across this period; consult current sources for specifics if teaching this in detail.",
  wikimedia: { searchTerm: "US embassy Havana building", confidence: "verify" },
  links: [],
  videos: []
},
{
  id: "patria-y-vida-2021",
  title: "\"Patria y Vida\" and the July 11, 2021 Protests",
  date: "2021-02-16", dateDisplay: "Song: February 16, 2021 · Protests: July 11, 2021",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: true,
  summary: "Cuban musicians release \"Patria y Vida\" (\"Homeland and Life\"), deliberately inverting the state slogan \"Patria o Muerte\" (\"Homeland or Death\"); the song becomes the anthem of the largest anti-government protests in Cuba since 1959.",
  details: {
    context: "The song was created by Yotuel Romero, Gente de Zona, Descemer Bueno, Maykel Osorbo, and El Funky (with contributions from Beatriz Luengo and artist-activist Luis Manuel Otero Alcántara). Months later, on July 11, 2021, economic hardship and pandemic strain boiled over into nationwide protests — the '11J' demonstrations — the largest since the Revolution itself. The song won Song of the Year and Best Urban Song at the 2021 Latin Grammy Awards.",
    connections: ["special-period-1991", "trump-cuba-rollback"],
    whyItMatters: "It's a striking, recent example of music functioning as direct political speech in Cuba — and a natural closing case study tying the course's cultural and political threads together."
  },
  confidence: "high", confidenceNotes: "Dates and artist list are well documented.",
  wikimedia: { searchTerm: "July 11 2021 Cuba protest", confidence: "verify" },
  links: [
    { label: "\"Patria y Vida\" — official music video, YouTube", url: "https://www.youtube.com/watch?v=pP9Bto5lOEQ", confidence: "verify" }
  ],
  videos: []
},
{
  id: "cuba-today-epilogue",
  title: "Cuba Today",
  date: "2022-01-01", dateDisplay: "Ongoing",
  era: "post-revolutionary-contemporary",
  readingTags: ["Post-Revolutionary / Contemporary Cuba"],
  isFunFact: false,
  summary: "U.S.-Cuba relations, Cuban civil society, and the island's economy remain unsettled and contested — this timeline ends not with resolution, but with an open, ongoing story.",
  details: {
    context: "Rather than pin an invented 'current event' to a specific recent date, this closing entry acknowledges that the most recent chapters of this history are still being written, and that reasonable people disagree sharply about what comes next.",
    connections: ["patria-y-vida-2021"],
    whyItMatters: "Every era on this timeline once looked like an ending and turned out to be a hinge point — a useful note to end a history course on."
  },
  confidence: "high", confidenceNotes: "Deliberately non-specific; not a dated historical claim.",
  wikimedia: { searchTerm: "Havana Cuba street 2020s", confidence: "verify" },
  links: [],
  videos: []
},
];

/* ============================================================
   Self-check quizzes — one set per era, shown after that era's
   last card. Instant client-side feedback, no persistence.
   ============================================================ */

const QUIZZES = {
  "indigenous-conquest": [
    {
      q: "What did Columbus force his crew to swear to in 1494?",
      options: ["That Cuba was an island", "That Cuba was the Asian mainland", "That gold was hidden inland", "That the Taíno were peaceful"],
      correct: 1,
      explanation: "Despite evidence to the contrary, Columbus had his crew sign a notarized oath that Cuba was continental Asia — under threat of losing their tongues."
    },
    {
      q: "What term did Fernando Ortiz coin in 1940 to describe Cuba's cultural blending?",
      options: ["Acculturation", "Mestizaje", "Transculturación", "Criollismo"],
      correct: 2,
      explanation: "Ortiz proposed 'transculturación' to capture a two-way process of cultural loss and creation, not simple one-way absorption."
    },
    {
      q: "How did Columbus describe Cuba in his journal after landing in 1492?",
      options: ["As a small, unremarkable island", "As the mainland of Asia (Cipangu)", "As uninhabited land", "As part of Hispaniola"],
      correct: 1,
      explanation: "Columbus believed Cuba was the edge of the Asian mainland described by Marco Polo — a belief he later forced his own crew to swear to under oath."
    },
    {
      q: "What is ajiaco, and how did Fernando Ortiz use it?",
      options: [
        "A dance; Ortiz used it to describe Afro-Cuban music",
        "A stew; Ortiz used it as a metaphor for Cuban culture as constant mixture",
        "A religious ritual; Ortiz used it to describe Santería",
        "A sugar byproduct; Ortiz used it to describe the plantation economy"
      ],
      correct: 1,
      explanation: "In 'Los factores humanos de la cubanidad,' Ortiz described Cuba as an ajiaco — a stew that never stops cooking as new ingredients are added, a companion image to his concept of transculturación."
    }
  ],
  "sugar-slavery-colonialism": [
    {
      q: "What event directly prompted Spain to build the Castillo de la Real Fuerza?",
      options: ["The Haitian Revolution", "A 1555 pirate raid on Havana", "The Chinese labor trade", "The British occupation"],
      correct: 1,
      explanation: "French privateer Jacques de Sores sacked Havana in 1555, exposing the port's weak defenses."
    },
    {
      q: "In what year did Cuba finally, formally abolish slavery?",
      options: ["1868", "1870", "1886", "1898"],
      correct: 2,
      explanation: "An 1886 royal decree ended legal slavery and the patronato system — making Cuba one of the last places in the Americas to abolish it."
    }
  ],
  "independence-struggle": [
    {
      q: "What event became the U.S.'s pretext for entering the war against Spain in 1898?",
      options: ["The death of José Martí", "The explosion of the USS Maine", "The Pact of Zanjón", "The Grito de Baire"],
      correct: 1,
      explanation: "The USS Maine's explosion in Havana harbor — cause still disputed — was seized on by the U.S. press and government as a reason for war."
    },
    {
      q: "What happened to Cuban independence fighters at the Treaty of Paris negotiations?",
      options: ["They led the negotiations", "They were excluded entirely", "They received full independence", "They split Cuba with the U.S."],
      correct: 1,
      explanation: "Cuban representatives had no seat at the table — a preview of the neocolonial relationship to come."
    }
  ],
  "neocolonial-revolution": [
    {
      q: "Roughly how many rebels landed with the Granma in 1956, and about how many reached the Sierra Maestra?",
      options: ["82 landed, about 12 survived", "20 landed, all survived", "200 landed, half survived", "82 landed, all reached the mountains"],
      correct: 0,
      explanation: "82 rebels made the crossing on the overloaded Granma; only a small core group, commonly cited as about 12, regrouped in the mountains."
    },
    {
      q: "What is \"History Will Absolve Me\"?",
      options: ["A 1959 victory speech", "Castro's self-defense speech at his 1953 Moncada trial", "A revolutionary law", "A Che Guevara essay"],
      correct: 1,
      explanation: "Castro delivered it at his trial after the failed Moncada attack; he later reconstructed it from memory in prison, and it became the Revolution's founding manifesto."
    }
  ],
  "building-new-society": [
    {
      q: "What was the primary goal of the 1961 Literacy Campaign?",
      options: ["Teaching English", "Teaching reading and writing nationwide", "Training new teachers only", "Building new schools"],
      correct: 1,
      explanation: "Over 100,000 volunteer brigadistas fanned out across Cuba to teach basic literacy, sharply cutting the illiteracy rate within a year."
    },
    {
      q: "On what date did Castro declare himself a Marxist-Leninist — distinct from his earlier socialism declaration?",
      options: ["January 1, 1959", "April 16, 1961", "December 2, 1961", "October 1962"],
      correct: 2,
      explanation: "The April 16 declaration named the Revolution socialist; the more specific 'Marxist-Leninist' declaration came separately, on December 2, 1961."
    },
    {
      q: "What prompted Castro to announce the Committees for the Defense of the Revolution (CDRs) in September 1960?",
      options: ["A Soviet request", "Counterrevolutionary bombs near a Havana rally", "The Bay of Pigs invasion", "The literacy campaign's launch"],
      correct: 1,
      explanation: "After bombs went off near a mass rally, Castro announced a 'committee of revolutionary vigilance' on every block — the origin of the CDRs."
    }
  ],
  "culture-revolution": [
    {
      q: "What did Heberto Padilla have to do before Cuba's Writers' Union in April 1971?",
      options: ["Accept a literary prize", "Deliver a scripted public self-criticism", "Announce his exile", "Launch a new magazine"],
      correct: 1,
      explanation: "After his arrest, Padilla read a scripted confession before UNEAC — an episode that alienated many international intellectuals who had supported the Revolution."
    },
    {
      q: "What line from Castro's 1961 \"Words to the Intellectuals\" speech defined the limits of acceptable art for decades?",
      options: ["\"History will absolve me\"", "\"Within the Revolution, everything; against the Revolution, nothing\"", "\"Patria o Muerte\"", "\"Cuba sí, Yanqui no\""],
      correct: 1,
      explanation: "The line drew a deliberately ambiguous boundary around acceptable artistic expression under the Revolution."
    },
    {
      q: "In Nicolás Guillén's poem \"Caña\" (\"Sugarcane\"), who or what stands \"over the canefield\"?",
      options: ["The Black laborer", "The Yankee", "The earth", "The Spanish colonizer"],
      correct: 1,
      explanation: "The poem's four short images place the Black laborer beside the cane, the Yankee above it, the earth beneath it, and blood being lost — tying the sugar economy directly to race and foreign ownership."
    },
    {
      q: "In Santería, which Catholic figure is used to venerate the orisha Yemayá?",
      options: ["Our Lady of Charity", "Saint Barbara", "Our Lady of Regla", "Saint Lazarus"],
      correct: 2,
      explanation: "Yemayá, orisha of the sea, is venerated through Our Lady of Regla; Ochún, orisha of rivers and love, is venerated through Cuba's patron saint, Our Lady of Charity."
    }
  ],
  "revolution-and-world": [
    {
      q: "Name a method the CIA's confirmed 1960s plots against Castro reportedly involved.",
      options: ["A poisoned cigar box", "A car bomb", "A sniper rifle", "A hijacked plane"],
      correct: 0,
      explanation: "The Church Committee confirmed plots involving a poisoned cigar box, an exploding seashell, and a poison-tipped pen, among others."
    },
    {
      q: "Roughly how many unaccompanied children left Cuba during Operation Pedro Pan (1960–1962)?",
      options: ["About 1,400", "About 14,000", "About 140,000", "About 400"],
      correct: 1,
      explanation: "Over 14,000 children were sent to the U.S. by parents fearing Communist indoctrination — the largest recorded child refugee movement in the Western Hemisphere."
    },
    {
      q: "What's the difference between \"Operation Pedro Pan\" and the Cuban Children's Program?",
      options: [
        "They're two names for the exact same thing",
        "Pedro Pan was the children's airlift itself; the Cuban Children's Program was the longer-running welfare structure that housed and placed children without family already in the U.S.",
        "Pedro Pan was Catholic-run; the Cuban Children's Program was entirely secular and unrelated",
        "The Cuban Children's Program came decades later, in the 1990s"
      ],
      correct: 1,
      explanation: "Pedro Pan is the colloquial name for the 1960-62 airlift; the Cuban Children's Program was the welfare/foster-care system that kept operating into the early 1980s for children without relatives to take them in."
    },
    {
      q: "In his October 22, 1962 speech, Kennedy said Soviet missiles in Cuba could reach as far as which two cities?",
      options: [
        "New York and Los Angeles",
        "Hudson Bay, Canada and Lima, Peru",
        "Mexico City and Ottawa",
        "Washington, D.C. and Miami only"
      ],
      correct: 1,
      explanation: "Kennedy framed the missiles as a hemispheric threat, warning they could strike 'as far north as Hudson Bay, Canada, and as far south as Lima, Peru.'"
    },
    {
      q: "What was one of Castro's \"Five Points\" demanded on October 28, 1962, before he'd trust a U.S. non-invasion pledge?",
      options: ["Soviet troops stationed permanently in Cuba", "U.S. withdrawal from Guantánamo Bay", "Cuban membership in NATO", "A U.S. apology for the Bay of Pigs"],
      correct: 1,
      explanation: "Castro's five conditions included ending the embargo, subversive activities, air/naval incursions, and piratical attacks — and returning the Guantánamo naval base to Cuba. The U.S. rejected all five."
    }
  ],
  "post-revolutionary-contemporary": [
    {
      q: "What Cuban Revolution-era slogan does \"Patria y Vida\" (2021) deliberately invert?",
      options: ["\"Cuba libre\"", "\"Hasta la victoria siempre\"", "\"Patria o Muerte\"", "\"Venceremos\""],
      correct: 2,
      explanation: "\"Patria y Vida\" (\"Homeland and Life\") flips the state slogan \"Patria o Muerte\" (\"Homeland or Death\")."
    },
    {
      q: "What triggered Cuba's severe 1990s economic crisis, the \"Special Period\"?",
      options: ["The U.S. embargo alone", "A hurricane", "The collapse of the Soviet Union", "The Mariel boatlift"],
      correct: 2,
      explanation: "The USSR's 1991 collapse ended Soviet trade subsidies almost overnight, triggering severe shortages."
    },
    {
      q: "What made the 1966 Cuban Adjustment Act unusual compared to normal U.S. immigration law?",
      options: [
        "It let Cubans in the U.S. apply for permanent residency after just one year, without returning to Cuba for a visa",
        "It banned all Cuban immigration to the U.S.",
        "It only applied to children",
        "It required a 10-year wait before applying for residency"
      ],
      correct: 0,
      explanation: "Ordinary immigration law would have required a visa interview back in Cuba — politically unworkable for people fleeing that government, so the Act let them adjust status from inside the U.S. instead."
    },
    {
      q: "What organization did Jorge Mas Canosa found in 1981, modeled on the pro-Israel lobby AIPAC?",
      options: ["El Diálogo", "Radio Martí", "The Cuban American National Foundation (CANF)", "CORU"],
      correct: 2,
      explanation: "CANF became one of the most influential ethnic lobbying organizations in U.S. politics, shaping Cuba policy for roughly two decades."
    }
  ]
};
