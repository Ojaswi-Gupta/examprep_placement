const WORDS_DATA = [
  {
    id: 1,
    word: "Pragmatic",
    simple: "Practical / Sensible",
    partOfSpeech: "adjective",
    definition: "Focusing on realistic, real-world solutions rather than theoretical or ideal conditions.",
    example: "Instead of arguing about the perfect system, she took a pragmatic approach and fixed the immediate problem.",
    synonyms: ["practical", "realistic", "sensible", "down-to-earth"],
    antonyms: ["idealistic", "impractical", "unrealistic", "theoretical"],
    additionalExamples: [
      "The government took a pragmatic stance on the trade deal, prioritizing jobs over ideology.",
      "As a pragmatic leader, she focused on what could actually be achieved within the budget."
    ],
    usageTip: "Use 'pragmatic' when describing someone or something focused on practical results rather than theories or ideals."
  },
  {
    id: 2,
    word: "Benevolent",
    simple: "Kind / Well-meaning",
    partOfSpeech: "adjective",
    definition: "Kind, generous, and having a genuine desire to do good for others.",
    example: "The benevolent donor secretly paid off all tuition fees for the graduating class.",
    synonyms: ["kindhearted", "generous", "charitable", "compassionate"],
    antonyms: ["malevolent", "cruel", "selfish", "unkind"],
    additionalExamples: [
      "The benevolent ruler ensured that all his subjects had enough food during the harsh winter.",
      "She had a benevolent smile that instantly made the frightened children feel at ease."
    ],
    usageTip: "Use 'benevolent' to describe people or actions motivated by a genuine desire to help others."
  },
  {
    id: 3,
    word: "Erudite",
    simple: "Scholarly / Well-read",
    partOfSpeech: "adjective",
    definition: "Having or showing deep knowledge gained from extensive reading and academic study.",
    example: "The professor gave an erudite lecture that connected 18th-century literature to modern psychology.",
    synonyms: ["scholarly", "knowledgeable", "learned", "intellectual"],
    antonyms: ["ignorant", "uneducated", "illiterate", "uninformed"],
    additionalExamples: [
      "Her erudite writing style made the complex scientific concepts accessible to academics.",
      "The magazine is known for its erudite commentary on global economic policies."
    ],
    usageTip: "Use 'erudite' to compliment someone's deep academic knowledge or a highly educated piece of work."
  },
  {
    id: 4,
    word: "Placate",
    simple: "Calm down / Appease",
    partOfSpeech: "verb",
    definition: "To make someone less angry or hostile by doing or saying something to appease them.",
    example: "The manager tried to placate the upset customer by offering a full refund and a free gift card.",
    synonyms: ["appease", "pacify", "soothe", "mollify"],
    antonyms: ["provoke", "agitate", "enrage", "irritate"],
    additionalExamples: [
      "They attempted to placate the opposing political faction by offering a series of concessions.",
      "A simple apology wasn't enough to placate her after waiting in the rain for two hours."
    ],
    usageTip: "Use 'placate' when describing efforts to calm down someone who is already angry or defensive."
  },
  {
    id: 5,
    word: "Antiquate",
    simple: "Make outdated",
    partOfSpeech: "verb",
    definition: "To make something old-fashioned, obsolete, or out-of-date.",
    example: "Rapid advances in AI could quickly antiquate traditional software development tools.",
    synonyms: ["outdate", "obsolete", "retire", "supersede"],
    antonyms: ["modernize", "update", "renew", "renovate"],
    additionalExamples: [
      "The invention of the smartphone has effectively antiquated standalone digital cameras.",
      "New environmental regulations may antiquate older manufacturing facilities."
    ],
    usageTip: "Use 'antiquate' to describe how new technologies or methods render older ones useless."
  },
  {
    id: 6,
    word: "Trivialize",
    simple: "Downplay / Brush off",
    partOfSpeech: "verb",
    definition: "To make something seem far less important, serious, or complex than it actually is.",
    example: "You shouldn't trivialize his concerns—he raises a very valid security risk.",
    synonyms: ["downplay", "minimize", "underestimate", "belittle"],
    antonyms: ["magnify", "emphasize", "exaggerate", "amplify"],
    additionalExamples: [
      "The media's coverage tended to trivialize the severity of the ecological disaster.",
      "By joking about the failure, she unintentionally trivialized the hard work her team had put in."
    ],
    usageTip: "Use 'trivialize' when someone unfairly dismisses the importance or severity of a situation."
  },
  {
    id: 7,
    word: "Rant",
    simple: "Angry tirade",
    partOfSpeech: "noun/verb",
    definition: "To speak or write in an angry, loud, or impassioned way for a long period of time.",
    example: "He spent twenty minutes ranting about how terrible the train delays were this morning.",
    synonyms: ["tirade", "diatribe", "vent", "harangue"],
    antonyms: ["whisper", "mumble", "praise calmly", "speak softly"],
    additionalExamples: [
      "Her latest blog post was a long rant against the hidden fees in airline tickets.",
      "The coach went on a massive rant in the locker room after the team's dismal first-half performance."
    ],
    usageTip: "Use 'rant' for loud, angry, and prolonged complaints that might lack structure or restraint."
  },
  {
    id: 8,
    word: "Fortuitous",
    simple: "Happy accident",
    partOfSpeech: "adjective",
    definition: "Happening by a lucky chance or coincidence rather than by deliberate design.",
    example: "Their fortuitous meeting at the airport led to a successful business partnership.",
    synonyms: ["lucky", "accidental", "serendipitous", "unexpected"],
    antonyms: ["deliberate", "planned", "intentional", "calculated"],
    additionalExamples: [
      "The company's timing was fortuitous, launching their home fitness app right before the global lockdown.",
      "Finding a $50 bill on the sidewalk was a fortuitous end to an otherwise terrible day."
    ],
    usageTip: "Use 'fortuitous' to emphasize that a positive outcome happened by sheer luck, not planning."
  },
  {
    id: 9,
    word: "Precise",
    simple: "Exact / Spot-on",
    partOfSpeech: "adjective",
    definition: "Exact, accurate, and carefully expressed with detailed clarity.",
    example: "The engineer gave precise instructions so the machine wouldn't malfunction.",
    synonyms: ["exact", "accurate", "specific", "meticulous"],
    antonyms: ["vague", "imprecise", "approximate", "inaccurate"],
    additionalExamples: [
      "The surgical robot allows for highly precise incisions, reducing patient recovery time.",
      "She provided a precise timeline of the events leading up to the system crash."
    ],
    usageTip: "Use 'precise' when highlighting exactness, strict accuracy, or clearly defined boundaries."
  },
  {
    id: 10,
    word: "Lithe",
    simple: "Flexible / Agile",
    partOfSpeech: "adjective",
    definition: "Thin, supple, and graceful in movement or body shape.",
    example: "The gymnast's lithe body allowed her to perform difficult flips effortlessly.",
    synonyms: ["flexible", "supple", "agile", "graceful"],
    antonyms: ["stiff", "rigid", "clumsy", "inflexible"],
    additionalExamples: [
      "The martial artist moved with lithe grace, dodging the heavy attacks with ease.",
      "A lithe panther silently stalked its prey through the dense jungle undergrowth."
    ],
    usageTip: "Use 'lithe' to describe someone or something that moves with elegant flexibility and lightness."
  },
  {
    id: 11,
    word: "Untimely",
    simple: "Badly timed / Early",
    partOfSpeech: "adjective",
    definition: "Happening or done at an unsuitable, inappropriate, or unexpectedly early time.",
    example: "The sudden rain caused an untimely interruption to the outdoor wedding.",
    synonyms: ["premature", "inconvenient", "ill-timed", "inappropriate"],
    antonyms: ["timely", "opportune", "well-timed", "appropriate"],
    additionalExamples: [
      "The untimely passing of the company's founder left everyone in shock.",
      "Her phone ringing was an untimely distraction during the silent meditation retreat."
    ],
    usageTip: "Use 'untimely' for events that happen too soon or at a highly inconvenient moment."
  },
  {
    id: 12,
    word: "Flub",
    simple: "Mess up / Botch",
    partOfSpeech: "verb",
    definition: "To botch, mess up, or blunder through a task, performance, or response.",
    example: "He practiced his speech all week, but he flubbed the opening line because of nerves.",
    synonyms: ["botch", "bungle", "muff", "fumble"],
    antonyms: ["nail", "ace", "succeed", "perfect"],
    additionalExamples: [
      "The goalkeeper flubbed the easy save, resulting in a humiliating goal.",
      "I completely flubbed the job interview by forgetting the name of the CEO."
    ],
    usageTip: "Use 'flub' to describe a clumsy mistake or failure in a performance or execution."
  },
  {
    id: 13,
    word: "Jettisoned",
    simple: "Dumped / Cast aside",
    partOfSpeech: "verb",
    definition: "Throwing something away, dropping it, or discarding it literally or figuratively.",
    example: "As deadlines approached, the team jettisoned the extra features to focus on launching the core app.",
    synonyms: ["discarded", "dumped", "abandoned", "ditched"],
    antonyms: ["retained", "kept", "preserved", "saved"],
    additionalExamples: [
      "The struggling airline jettisoned its less profitable routes to avoid bankruptcy.",
      "During the storm, the crew jettisoned the heavy cargo to keep the ship from sinking."
    ],
    usageTip: "Use 'jettisoned' when someone forcefully or urgently gets rid of something holding them back."
  },
  {
    id: 14,
    word: "Repudiated",
    simple: "Publicly rejected",
    partOfSpeech: "verb",
    definition: "Formally rejecting, disowning, or denying the truth or authority of something.",
    example: "The company strongly repudiated the false rumors regarding an upcoming buyout.",
    synonyms: ["rejected", "denied", "disowned", "renounced"],
    antonyms: ["accepted", "embraced", "endorsed", "acknowledged"],
    additionalExamples: [
      "The scientist repudiated her earlier theory after discovering new, contradicting evidence.",
      "He completely repudiated the contract, claiming it was signed under extreme duress."
    ],
    usageTip: "Use 'repudiated' for formal, strong rejections of claims, associations, or agreements."
  },
  {
    id: 15,
    word: "Conjoined",
    simple: "Joined / Linked",
    partOfSpeech: "adjective",
    definition: "Joined, connected, or combined together into a single unit.",
    example: "The two small villages eventually became conjoined into a single sprawling city.",
    synonyms: ["connected", "linked", "united", "fused"],
    antonyms: ["separated", "divided", "detached", "split"],
    additionalExamples: [
      "The twins were conjoined at the hip and required complex surgery to separate.",
      "The new highway successfully conjoined the remote industrial area with the major port."
    ],
    usageTip: "Use 'conjoined' when emphasizing the physical or structural merging of two distinct entities."
  },
  {
    id: 16,
    word: "Encroached",
    simple: "Intruded / Invaded",
    partOfSpeech: "verb",
    definition: "Intruding or gradually advancing beyond acceptable or established limits.",
    example: "Over the years, housing developments gradually encroached on the surrounding forest land.",
    synonyms: ["intruded", "trespassed", "infringed", "invaded"],
    antonyms: ["retreated", "withdrew", "respected", "receded"],
    additionalExamples: [
      "The manager felt that the new tracking software encroached upon employee privacy.",
      "Weeds had encroached into the neighbor's carefully manicured garden."
    ],
    usageTip: "Use 'encroached' for gradual, steady intrusions into someone else's space or rights."
  },
  {
    id: 17,
    word: "Strata",
    simple: "Layers / Levels",
    partOfSpeech: "noun",
    definition: "Layers or levels within a structure, system, rock formation, or social hierarchy.",
    example: "The scholarship program was designed to support students from all socioeconomic strata.",
    synonyms: ["layers", "levels", "tiers", "classes"],
    antonyms: ["uniformity", "sameness", "homogeneity"],
    additionalExamples: [
      "Geologists studied the exposed rock strata to understand the area's ancient climate.",
      "The marketing campaign was targeted at the upper strata of society."
    ],
    usageTip: "Use 'strata' to describe distinct levels in a hierarchy, society, or geological formation."
  },
  {
    id: 18,
    word: "Defiant",
    simple: "Rebellious / Resistant",
    partOfSpeech: "adjective",
    definition: "Showing bold, open resistance or disobedience toward authority.",
    example: "Despite facing heavy penalties, the protest leader remained defiant during the interview.",
    synonyms: ["rebellious", "insubordinate", "resistant", "unyielding"],
    antonyms: ["obedient", "compliant", "submissive", "docile"],
    additionalExamples: [
      "The defiant teenager refused to follow the strict curfew set by her parents.",
      "The startup struck a defiant tone against the massive tech monopolies dominating the market."
    ],
    usageTip: "Use 'defiant' when someone deliberately and openly challenges rules or authority."
  },
  {
    id: 19,
    word: "Mysterious",
    simple: "Puzzling / Secretive",
    partOfSpeech: "adjective",
    definition: "Difficult or impossible to understand, explain, or identify clearly.",
    example: "A mysterious noise kept echoing through the abandoned hallway.",
    synonyms: ["enigmatic", "puzzling", "baffling", "cryptic"],
    antonyms: ["obvious", "clear", "transparent", "apparent"],
    additionalExamples: [
      "The billionaire maintained a mysterious public profile, rarely giving interviews.",
      "They found a mysterious ancient artifact buried deep within the cave."
    ],
    usageTip: "Use 'mysterious' for things that are unknown, secretive, or intentionally hard to figure out."
  },
  {
    id: 20,
    word: "Homogenous",
    simple: "Uniform / All same",
    partOfSpeech: "adjective",
    definition: "Consisting of parts or elements that are all of the same kind or nature throughout.",
    example: "The group was surprisingly homogenous, with almost everyone sharing a similar background.",
    synonyms: ["uniform", "identical", "consistent", "unvaried"],
    antonyms: ["diverse", "varied", "heterogeneous", "mixed"],
    additionalExamples: [
      "The mixture must be stirred until it forms a completely homogenous liquid.",
      "A homogenous corporate culture can sometimes stifle creative out-of-the-box thinking."
    ],
    usageTip: "Use 'homogenous' to highlight the lack of diversity or variation in a group or mixture."
  },
  {
    id: 21,
    word: "Stratified",
    simple: "Divided into layers",
    partOfSpeech: "adjective",
    definition: "Arranged, divided, or categorized into distinct layers or hierarchical groups.",
    example: "In data analysis, a stratified sampling method ensures every sub-group is fairly represented.",
    synonyms: ["layered", "hierarchical", "categorized", "graded"],
    antonyms: ["unified", "blended", "integrated", "mixed"],
    additionalExamples: [
      "The ancient society was highly stratified, with rigid lines between nobles and commoners.",
      "The lake's stratified waters do not mix heavily, keeping the colder water at the bottom."
    ],
    usageTip: "Use 'stratified' when describing a system clearly separated into classes, tiers, or levels."
  },
  {
    id: 22,
    word: "Abhorrence",
    simple: "Deep hatred / Disgust",
    partOfSpeech: "noun",
    definition: "A feeling of intense hatred, disgust, or extreme repugnance toward something.",
    example: "Her strong abhorrence for corruption made her a fiercely principled judge.",
    synonyms: ["hatred", "disgust", "loathing", "repugnance"],
    antonyms: ["adoration", "love", "admiration", "affection"],
    additionalExamples: [
      "The community expressed absolute abhorrence at the vandalism of the local monument.",
      "He looked at the unappetizing meal with complete abhorrence."
    ],
    usageTip: "Use 'abhorrence' for a deep, almost physical level of disgust or moral outrage."
  },
  {
    id: 23,
    word: "Quintessential",
    simple: "Classic example",
    partOfSpeech: "adjective",
    definition: "Representing the most perfect, typical, or classic example of a quality or type.",
    example: "Cricket during a sunny afternoon is seen as the quintessential British summer pastime.",
    synonyms: ["typical", "classic", "ideal", "exemplary"],
    antonyms: ["atypical", "unrepresentative", "unusual", "aberrant"],
    additionalExamples: [
      "The quaint diner on the corner was the quintessential American small-town restaurant.",
      "She was the quintessential professional, always prepared and impeccably dressed."
    ],
    usageTip: "Use 'quintessential' to describe the ultimate, most representative example of something."
  },
  {
    id: 24,
    word: "Censured",
    simple: "Officially reprimanded",
    partOfSpeech: "verb",
    definition: "Formally and severely reprimanded or condemned by an official authority.",
    example: "The board censured the director for failing to report the conflict of interest.",
    synonyms: ["reprimanded", "condemned", "criticized", "rebuked"],
    antonyms: ["praised", "commended", "applauded", "honored"],
    additionalExamples: [
      "The lawyer was censured by the bar association for professional misconduct.",
      "The ambassador was formally censured by the UN for his aggressive remarks."
    ],
    usageTip: "Use 'censured' for formal, official condemnation rather than just casual criticism."
  },
  {
    id: 25,
    word: "Flummoxed",
    simple: "Baffled / Stumped",
    partOfSpeech: "adjective",
    definition: "Completely confused, bewildered, or perplexed by something unexpected.",
    example: "The developer was completely flummoxed by the unexpected edge case causing the crash.",
    synonyms: ["baffled", "perplexed", "bewildered", "confused"],
    antonyms: ["enlightened", "clear-headed", "composed", "unfazed"],
    additionalExamples: [
      "Even the expert mechanic was flummoxed by the strange engine noise.",
      "I was completely flummoxed when she handed me a gift for no reason at all."
    ],
    usageTip: "Use 'flummoxed' to describe being so surprised or confused that you don't know how to react."
  },
  {
    id: 26,
    word: "Prevaricated",
    simple: "Evaded direct truth",
    partOfSpeech: "verb",
    definition: "Spoken or acted in an evasive or misleading way to avoid giving a direct answer.",
    example: "When asked directly about the missing funds, the spokesperson prevaricated.",
    synonyms: ["evaded", "dodged", "equivocated", "hedged"],
    antonyms: ["confessed", "admitted", "disclosed", "revealed"],
    additionalExamples: [
      "The politician prevaricated when questioned about his voting record on taxes.",
      "Instead of admitting the mistake, the contractor prevaricated and blamed the suppliers."
    ],
    usageTip: "Use 'prevaricated' for situations where someone beats around the bush to avoid the truth."
  },
  {
    id: 27,
    word: "Feigned",
    simple: "Pretended / Faked",
    partOfSpeech: "adjective/verb",
    definition: "Pretended to feel, have, or be affected by something.",
    example: "He feigned surprise when they brought out the cake, even though he knew about it.",
    synonyms: ["pretended", "faked", "simulated", "sham"],
    antonyms: ["genuine", "sincere", "authentic", "real"],
    additionalExamples: [
      "The player feigned an injury to delay the game and run down the clock.",
      "She greeted her ex-boyfriend with a feigned smile of politeness."
    ],
    usageTip: "Use 'feigned' to describe emotions, reactions, or conditions that are artificially put on."
  },
  {
    id: 28,
    word: "Reprisal",
    simple: "Retaliation / Payback",
    partOfSpeech: "noun",
    definition: "An act of retaliation or revenge against someone for an injury or wrongdoing.",
    example: "Employees feared reprisal from management if they spoke up about safety violations.",
    synonyms: ["retaliation", "revenge", "payback", "vengeance"],
    antonyms: ["forgiveness", "pardon", "mercy", "clemency"],
    additionalExamples: [
      "The military launched a swift air strike in reprisal for the border attack.",
      "Whistleblower laws are designed to protect workers from unfair reprisal."
    ],
    usageTip: "Use 'reprisal' specifically for acts of retaliation or getting back at someone."
  },
  {
    id: 29,
    word: "Adulation",
    simple: "Excessive praise",
    partOfSpeech: "noun",
    definition: "Excessive praise, admiration, or flattery beyond what is reasonable.",
    example: "The young actor struggled to handle the intense adulation from millions of fans.",
    synonyms: ["worship", "flattery", "idolization", "adoration"],
    antonyms: ["criticism", "condemnation", "disapproval", "scorn"],
    additionalExamples: [
      "Despite the adulation of the critics, the author remained remarkably humble.",
      "The dictator demanded constant adulation from his subjects and inner circle."
    ],
    usageTip: "Use 'adulation' for extreme, almost worship-like flattery that borders on being too much."
  },
  {
    id: 30,
    word: "Retinue",
    simple: "Entourage / Staff",
    partOfSpeech: "noun",
    definition: "A group of advisers, assistants, or bodyguards accompanying an important person.",
    example: "The visiting diplomat arrived accompanied by an impressive retinue of aides.",
    synonyms: ["entourage", "escort", "staff", "company"],
    antonyms: ["solitude", "isolation"],
    additionalExamples: [
      "The rock star's retinue took up the entire top floor of the luxury hotel.",
      "A medieval king never traveled without a large retinue of knights and servants."
    ],
    usageTip: "Use 'retinue' to describe the entourage of staff surrounding a high-profile or royal individual."
  },
  {
    id: 31,
    word: "Jovial",
    simple: "Cheerful / Jolly",
    partOfSpeech: "adjective",
    definition: "Full of happiness, high spirits, and good humor.",
    example: "Her jovial personality made her the life of every social gathering.",
    synonyms: ["cheerful", "jolly", "merry", "good-humored"],
    antonyms: ["somber", "gloomy", "morose", "sullen"],
    additionalExamples: [
      "The host gave a jovial welcome to everyone arriving at the holiday party.",
      "Despite the stressful deadline, he remained surprisingly jovial and optimistic."
    ],
    usageTip: "Use 'jovial' to describe a consistently warm, cheerful, and friendly demeanor."
  },
  {
    id: 32,
    word: "Paltry",
    simple: "Meager / Worthless",
    partOfSpeech: "adjective",
    definition: "So small or trivial as to be considered negligible, meager, or worthless.",
    example: "He refused to accept the job after being offered a paltry salary well below market rate.",
    synonyms: ["meager", "trivial", "measly", "insignificant"],
    antonyms: ["substantial", "significant", "generous", "considerable"],
    additionalExamples: [
      "The defense presented a paltry amount of evidence to support their bold claims.",
      "She tipped the rude waiter a paltry fifty cents on a hundred-dollar bill."
    ],
    usageTip: "Use 'paltry' to criticize an amount or offer as laughably small or inadequate."
  },
  {
    id: 33,
    word: "Stealthy",
    simple: "Sneaky / Silent",
    partOfSpeech: "adjective",
    definition: "Behaving or done in a cautious, quiet, and secretive manner to avoid notice.",
    example: "The stealthy cat crept through the tall grass without making a single sound.",
    synonyms: ["sneaky", "silent", "surreptitious", "furtive"],
    antonyms: ["obvious", "conspicuous", "loud", "overt"],
    additionalExamples: [
      "The cybersecurity firm uses stealthy software to monitor network threats quietly.",
      "He made a stealthy exit from the boring meeting when the boss wasn't looking."
    ],
    usageTip: "Use 'stealthy' for actions specifically designed to be unnoticed, silent, or hidden."
  },
  {
    id: 34,
    word: "Gullible",
    simple: "Easily fooled",
    partOfSpeech: "adjective",
    definition: "Easily persuaded, tricked, or fooled into believing something because of a naive nature.",
    example: "He was gullible enough to believe that he had won a prize from a random text message.",
    synonyms: ["naive", "trusting", "susceptible", "foolish"],
    antonyms: ["skeptical", "suspicious", "shrewd", "astute"],
    additionalExamples: [
      "The scammer targeted gullible tourists by selling fake tickets to landmarks.",
      "I was so gullible as a child that I believed the moon was made of cheese."
    ],
    usageTip: "Use 'gullible' to describe someone who lacks skepticism and is easily taken advantage of."
  },
  {
    id: 35,
    word: "Ebullient",
    simple: "Bursting with energy",
    partOfSpeech: "adjective",
    definition: "Overflowing with enthusiasm, high spirits, and bubbly energy.",
    example: "Her ebullient personality immediately lifted the mood of the entire room.",
    synonyms: ["exuberant", "bubbly", "enthusiastic", "vivacious"],
    antonyms: ["subdued", "listless", "apathetic", "lethargic"],
    additionalExamples: [
      "The ebullient crowd cheered as the band finally took the stage.",
      "He was in an ebullient mood after finding out he had been accepted into his dream college."
    ],
    usageTip: "Use 'ebullient' for an extreme level of cheerful, almost uncontrollable enthusiasm."
  },
  {
    id: 36,
    word: "Apocryphal",
    simple: "Dubious / Unverified",
    partOfSpeech: "adjective",
    definition: "Widely circulated as true, but actually of doubtful authenticity or fabricated.",
    example: "The story about the founder starting the company in a garage is largely apocryphal.",
    synonyms: ["fictitious", "unverified", "dubious", "mythical"],
    antonyms: ["verified", "authentic", "genuine", "proven"],
    additionalExamples: [
      "Many of the quotes attributed to Albert Einstein on the internet are completely apocryphal.",
      "An apocryphal tale about hidden treasure drew hundreds of hopeful diggers to the island."
    ],
    usageTip: "Use 'apocryphal' for popular legends or stories that people believe but aren't actually true."
  },
  {
    id: 37,
    word: "Bemused",
    simple: "Puzzled & amused",
    partOfSpeech: "adjective",
    definition: "Mildly amused in a puzzled or confused way; bewildered.",
    example: "He stared at the overly complex coffee machine with a bemused expression.",
    synonyms: ["puzzled", "bewildered", "confused", "perplexed"],
    antonyms: ["clear-headed", "focused", "attentive", "sharp"],
    additionalExamples: [
      "She gave a bemused smile as the dog tried to catch its own reflection in the mirror.",
      "The professor looked bemused when half the class submitted the wrong assignment."
    ],
    usageTip: "Use 'bemused' when someone is gently confused or slightly amused by an odd situation."
  },
  {
    id: 38,
    word: "Prosaic",
    simple: "Dull / Ordinary",
    partOfSpeech: "adjective",
    definition: "Lacking poetic beauty, imagination, or excitement; dull and matter-of-fact.",
    example: "Instead of a grand romantic speech, he gave a very prosaic explanation.",
    synonyms: ["dull", "ordinary", "mundane", "unimaginative"],
    antonyms: ["imaginative", "poetic", "exciting", "extraordinary"],
    additionalExamples: [
      "The title of the novel sounded exciting, but the plot was disappointingly prosaic.",
      "They had to shift from creative brainstorming to the prosaic task of balancing the budget."
    ],
    usageTip: "Use 'prosaic' to describe things that are boringly practical, factual, or unimaginative."
  },
  {
    id: 39,
    word: "Fawning",
    simple: "Excessively flattering",
    partOfSpeech: "adjective",
    definition: "Displaying exaggerated affection or flattery toward someone to gain favor.",
    example: "The team was tired of his fawning behavior toward every visiting executive.",
    synonyms: ["sycophantic", "flattering", "obsequious", "cringing"],
    antonyms: ["aloof", "indifferent", "critical", "genuine"],
    additionalExamples: [
      "The celebrity ignored the fawning paparazzi and quickly stepped into her car.",
      "He wrote a fawning email to the boss hoping it would secure him a promotion."
    ],
    usageTip: "Use 'fawning' to criticize obvious, insincere flattery aimed at gaining an advantage."
  },
  {
    id: 40,
    word: "Facetious",
    simple: "Playfully sarcastic",
    partOfSpeech: "adjective",
    definition: "Treating serious issues with deliberate, inappropriate, or sarcastic humor.",
    example: "Please don't be facetious—this system outage is costing the company money.",
    synonyms: ["flippant", "sarcastic", "tongue-in-cheek", "joking"],
    antonyms: ["serious", "earnest", "sincere", "solemn"],
    additionalExamples: [
      "Her facetious remark about the budget cuts didn't go over well with the worried staff.",
      "I was just being facetious when I said we should solve the problem by burning the building down."
    ],
    usageTip: "Use 'facetious' when a joke is poorly timed or inappropriate for a serious situation."
  },
  {
    id: 41,
    word: "Abstruse",
    simple: "Complex / Obscure",
    partOfSpeech: "adjective",
    definition: "Complex, deep, and difficult to comprehend; obscure or highly specialized.",
    example: "The paper was filled with abstruse mathematical proofs that few could follow.",
    synonyms: ["obscure", "complex", "esoteric", "perplexing"],
    antonyms: ["simple", "straightforward", "clear", "accessible"],
    additionalExamples: [
      "The philosopher's abstruse arguments left the audience more confused than before.",
      "To a beginner, the legal jargon in the contract seemed completely abstruse."
    ],
    usageTip: "Use 'abstruse' for topics or writing that are unnecessarily dense or hard to understand."
  },
  {
    id: 42,
    word: "Magnanimous",
    simple: "Generous in spirit",
    partOfSpeech: "adjective",
    definition: "Generous, forgiving, and noble in spirit, especially toward a rival.",
    example: "In a magnanimous gesture, the winner publicly credited her opponent for a great match.",
    synonyms: ["generous", "forgiving", "noble", "charitable"],
    antonyms: ["petty", "vindictive", "spiteful", "mean-spirited"],
    additionalExamples: [
      "The CEO was magnanimous in defeat, warmly congratulating the rival firm on the acquisition.",
      "It was magnanimous of him to forgive the debt during their time of financial hardship."
    ],
    usageTip: "Use 'magnanimous' to describe noble, big-hearted gestures, especially toward a defeated opponent."
  },
  {
    id: 43,
    word: "Hounded",
    simple: "Harassed / Pestered",
    partOfSpeech: "verb",
    definition: "Harassed, pursued, or pestered continuously without relief.",
    example: "The celebrity was hounded by reporters from the moment he stepped out of the hotel.",
    synonyms: ["harassed", "pestered", "pursued", "badgered"],
    antonyms: ["left alone", "ignored", "unbothered", "freed"],
    additionalExamples: [
      "Creditors hounded the failing business owner for months before he filed for bankruptcy.",
      "She felt hounded by her manager's constant micro-management and hourly status checks."
    ],
    usageTip: "Use 'hounded' when someone is relentlessly pursued or bothered without a break."
  },
  {
    id: 44,
    word: "Copious",
    simple: "Abundant / Plentiful",
    partOfSpeech: "adjective",
    definition: "Abundant in supply or quantity; plentiful.",
    example: "She took copious notes during the lecture to prepare for the end-of-term exams.",
    synonyms: ["abundant", "plentiful", "profuse", "extensive"],
    antonyms: ["scarce", "meager", "sparse", "insufficient"],
    additionalExamples: [
      "He drank copious amounts of coffee to stay awake during the all-night coding session.",
      "The witness provided copious details about the suspect's appearance."
    ],
    usageTip: "Use 'copious' to emphasize a very large, abundant quantity of something."
  },
  {
    id: 45,
    word: "Raucous",
    simple: "Loud & boisterous",
    partOfSpeech: "adjective",
    definition: "Making or constituting a disturbingly harsh, loud, and rowdy noise.",
    example: "The crowd erupted into raucous laughter after the comedian's punchline.",
    synonyms: ["rowdy", "loud", "boisterous", "noisy"],
    antonyms: ["quiet", "subdued", "soft", "gentle"],
    additionalExamples: [
      "The raucous party next door kept the entire neighborhood awake until 3 AM.",
      "A raucous debate broke out in the parliament over the controversial new law."
    ],
    usageTip: "Use 'raucous' to describe unpleasantly loud, chaotic, and energetic noise or behavior."
  },
  {
    id: 46,
    word: "Morose",
    simple: "Gloomy / Sullen",
    partOfSpeech: "adjective",
    definition: "Sullen, gloomy, and ill-tempered; maintaining a dark mood.",
    example: "He sat in the corner with a morose expression after receiving the disappointing news.",
    synonyms: ["gloomy", "sullen", "moody", "melancholy"],
    antonyms: ["cheerful", "jovial", "happy", "upbeat"],
    additionalExamples: [
      "The prolonged winter weather left the entire town in a morose and sluggish state.",
      "She became withdrawn and morose after her long-term project was abruptly canceled."
    ],
    usageTip: "Use 'morose' for a deeply sullen, depressed, and uncommunicative mood."
  },
  {
    id: 47,
    word: "Flagrant",
    simple: "Blatant / Shocking",
    partOfSpeech: "adjective",
    definition: "Conspicuously, blatantly, and outrageously offensive or bad.",
    example: "The foul was a flagrant violation of sportsmanship and resulted in an ejection.",
    synonyms: ["blatant", "glaring", "obvious", "outrageous"],
    antonyms: ["subtle", "concealed", "minor", "hidden"],
    additionalExamples: [
      "His flagrant disregard for the safety protocols put the entire crew at risk.",
      "The auditor discovered a flagrant misuse of company funds by the executive team."
    ],
    usageTip: "Use 'flagrant' to describe bad behavior that is shockingly obvious and unapologetic."
  },
  {
    id: 48,
    word: "Harbinger",
    simple: "Sign of things to come",
    partOfSpeech: "noun",
    definition: "A person, event, or signal that announces or indicates the approach of something.",
    example: "The sudden drop in temperatures was a clear harbinger of the approaching winter storm.",
    synonyms: ["omen", "sign", "indicator", "herald"],
    antonyms: ["aftermath", "consequence", "result"],
    additionalExamples: [
      "The booming stock market was seen as a harbinger of broader economic prosperity.",
      "The presence of certain birds is often a harbinger of spring."
    ],
    usageTip: "Use 'harbinger' for signs or indicators that foreshadow a significant upcoming event."
  },
  {
    id: 49,
    word: "Dictum",
    simple: "Formal statement / Maxim",
    partOfSpeech: "noun",
    definition: "A formal or authoritative statement, declaration, or widely accepted principle.",
    example: "The old dictum 'quality over quantity' holds true in modern product design.",
    synonyms: ["maxim", "proverb", "saying", "pronouncement"],
    antonyms: ["suggestion", "opinion", "request"],
    additionalExamples: [
      "The CEO issued a new dictum banning all personal software on company computers.",
      "He lived his life by the simple dictum that honesty is always the best policy."
    ],
    usageTip: "Use 'dictum' for an authoritative rule, formal statement, or a wise saying."
  },
  {
    id: 50,
    word: "Metamorphosis",
    simple: "Total transformation",
    partOfSpeech: "noun",
    definition: "A complete, dramatic transformation in structure, appearance, or character.",
    example: "Over two years, the small startup underwent a metamorphosis into a global tech firm.",
    synonyms: ["transformation", "mutation", "alteration", "change"],
    antonyms: ["stagnation", "stability", "permanence"],
    additionalExamples: [
      "The caterpillar's metamorphosis into a butterfly is a classic wonder of nature.",
      "His physical metamorphosis after joining the military was astonishing to his family."
    ],
    usageTip: "Use 'metamorphosis' for profound, fundamental changes in form, character, or appearance."
  },
  {
    id: 51,
    word: "Apogee",
    simple: "Peak / Highest point",
    partOfSpeech: "noun",
    definition: "The highest point, peak, or climax of something.",
    example: "Winning the championship marked the apogee of her athletic career.",
    synonyms: ["pinnacle", "climax", "zenith", "peak"],
    antonyms: ["nadir", "low point", "bottom", "trough"],
    additionalExamples: [
      "The empire reached its apogee in the 2nd century before slowly beginning to decline.",
      "At its apogee, the satellite is at the furthest point from the Earth in its orbit."
    ],
    usageTip: "Use 'apogee' for the absolute highest or most successful point of a trajectory or career."
  },
  {
    id: 52,
    word: "Begrudging",
    simple: "Reluctant / Resentful",
    partOfSpeech: "adjective",
    definition: "Given, done, or allowed reluctantly, resentfully, or with hesitation.",
    example: "He gave a begrudging compliment to his rival after losing the closely contested match.",
    synonyms: ["reluctant", "resentful", "grudging", "unwilling"],
    antonyms: ["willing", "eager", "enthusiastic", "generous"],
    additionalExamples: [
      "The company issued a begrudging apology only after facing massive public backlash.",
      "She paid the exorbitant parking fine with begrudging acceptance."
    ],
    usageTip: "Use 'begrudging' when someone does something they know they have to do, but clearly hate doing it."
  },
  {
    id: 53,
    word: "Foundling",
    simple: "Abandoned child",
    partOfSpeech: "noun",
    definition: "An abandoned infant or young child whose parents are unknown and who is cared for by others.",
    example: "In classic literature, the protagonist often starts out as a poor foundling.",
    synonyms: ["orphan", "waif", "stray", "castaway"],
    antonyms: ["heir", "offspring", "descendant"],
    additionalExamples: [
      "The hospital set up a safe haven box where a foundling could be left anonymously.",
      "The king took pity on the foundling and raised him within the palace walls."
    ],
    usageTip: "Use 'foundling' in historical or literary contexts to describe an abandoned infant."
  },
  {
    id: 54,
    word: "Yearling",
    simple: "1-year-old animal",
    partOfSpeech: "noun",
    definition: "An animal (especially a horse or cow) in its second year of life (1–2 years old).",
    example: "The farmer led the spirited young yearling into the main training arena.",
    synonyms: ["calf", "foal", "juvenile", "youngster"],
    antonyms: ["mature animal", "adult"],
    additionalExamples: [
      "The horse racing auction featured several promising yearlings with strong pedigrees.",
      "The herd of deer consisted mostly of does and a few energetic yearlings."
    ],
    usageTip: "Use 'yearling' in agricultural or wildlife contexts for animals between one and two years old."
  },
  {
    id: 55,
    word: "Starling",
    simple: "Dark songbird",
    partOfSpeech: "noun",
    definition: "A dark, medium-sized songbird with iridescent feathers, known for flying in large flocks.",
    example: "A huge flock of starlings swooped and swirled together gracefully across the sky.",
    synonyms: ["bird", "songbird", "passerine", "avian"],
    antonyms: [],
    additionalExamples: [
      "The noisy starlings nested in the rafters of the old abandoned barn.",
      "European starlings were introduced to North America in the 19th century and quickly spread."
    ],
    usageTip: "Use 'starling' when identifying this specific type of noisy, flocking bird."
  },
  {
    id: 56,
    word: "Candid",
    simple: "Frank / Direct",
    partOfSpeech: "adjective",
    definition: "Truthful, straightforward, and frank; open and honest without sugarcoating.",
    example: "In a candid moment during the interview, the manager admitted the launch was a mistake.",
    synonyms: ["frank", "honest", "straightforward", "outspoken"],
    antonyms: ["evasive", "dishonest", "guarded", "secretive"],
    additionalExamples: [
      "I appreciate your candid feedback on my presentation, even if it was hard to hear.",
      "The photographer specialized in candid shots, capturing natural expressions rather than posed smiles."
    ],
    usageTip: "Use 'candid' for moments of refreshing, unscripted honesty or unposed photography."
  },
  {
    id: 57,
    word: "Arable",
    simple: "Farmable / Fertile",
    partOfSpeech: "adjective",
    definition: "Land that is suitable for growing crops or being farmed.",
    example: "The region has vast stretches of arable land, making it ideal for agriculture.",
    synonyms: ["fertile", "farmable", "cultivable", "productive"],
    antonyms: ["barren", "infertile", "uncultivable", "sterile"],
    additionalExamples: [
      "The expansion of the desert threatened to consume the last remaining arable acres.",
      "A nation's wealth historically depended on the amount of arable land it controlled."
    ],
    usageTip: "Use 'arable' strictly in geographical or agricultural contexts regarding farmable land."
  },
  {
    id: 58,
    word: "Timid",
    simple: "Shy / Hesitant",
    partOfSpeech: "adjective",
    definition: "Lacking courage, confidence, or boldness; easily frightened or hesitant.",
    example: "The timid kitten hid under the couch whenever a stranger entered the room.",
    synonyms: ["shy", "fearful", "hesitant", "meek"],
    antonyms: ["bold", "courageous", "brave", "confident"],
    additionalExamples: [
      "The new employee was too timid to speak up during the large departmental meetings.",
      "The government's timid response to the crisis drew heavy criticism from the public."
    ],
    usageTip: "Use 'timid' for behavior that shows fear, shyness, or a lack of self-confidence."
  },
  {
    id: 59,
    word: "Provincial",
    simple: "Narrow-minded / Local",
    partOfSpeech: "adjective",
    definition: "Having narrow, unsophisticated, or limited views characteristic of an isolated region.",
    example: "Her travels helped her outgrow the provincial attitudes of her small hometown.",
    synonyms: ["narrow-minded", "parochial", "unsophisticated", "insular"],
    antonyms: ["cosmopolitan", "worldly", "sophisticated", "broad-minded"],
    additionalExamples: [
      "The critic dismissed the play as too provincial to appeal to a sophisticated metropolitan audience.",
      "He lived a quiet, provincial life, rarely venturing beyond the borders of his county."
    ],
    usageTip: "Use 'provincial' to critique an overly narrow, isolated, or unsophisticated perspective."
  },
  {
    id: 60,
    word: "Droll",
    simple: "Dryly funny / Quirky",
    partOfSpeech: "adjective",
    definition: "Having an odd, quirky, or dry sense of humor; amusing in an understated way.",
    example: "His droll sense of humor made everyone chuckle despite his straight face.",
    synonyms: ["amusing", "comical", "witty", "quirky"],
    antonyms: ["serious", "unfunny", "solemn", "humorless"],
    additionalExamples: [
      "The film was praised for its droll dialogue and eccentric cast of characters.",
      "She offered a droll observation about the absurdity of modern office life."
    ],
    usageTip: "Use 'droll' to describe humor that is dry, understated, and peculiarly amusing."
  },
  {
    id: 61,
    word: "Decorous",
    simple: "Proper / Polite",
    partOfSpeech: "adjective",
    definition: "Polite, proper, and in good taste; adhering strictly to etiquette.",
    example: "The guests maintained decorous behavior throughout the formal ceremony.",
    synonyms: ["proper", "polite", "appropriate", "refined"],
    antonyms: ["improper", "indecent", "rude", "unrefined"],
    additionalExamples: [
      "The debate was surprisingly decorous, with both candidates avoiding personal attacks.",
      "She dressed in a decorous, understated gown suitable for the conservative event."
    ],
    usageTip: "Use 'decorous' to praise behavior that perfectly matches polite social expectations."
  },
  {
    id: 62,
    word: "Antebellum",
    simple: "Pre-Civil War",
    partOfSpeech: "adjective",
    definition: "Occurring or existing before a particular war, especially the American Civil War.",
    example: "The historic town is famous for its preserved antebellum architecture.",
    synonyms: ["pre-war", "historical", "prior", "preceding"],
    antonyms: ["postwar", "modern", "contemporary"],
    additionalExamples: [
      "The novel is set in the antebellum South, exploring the societal norms of the era.",
      "Many grand antebellum plantations have been converted into historical museums."
    ],
    usageTip: "Use 'antebellum' almost exclusively when referring to the period right before the US Civil War."
  },
  {
    id: 63,
    word: "Rogue",
    simple: "Renegade / Unprincipled",
    partOfSpeech: "adjective/noun",
    definition: "Operating independently in a way that breaks rules, or a dishonest person.",
    example: "A rogue employee bypassed company protocols and leaked confidential documents.",
    synonyms: ["renegade", "scoundrel", "rebel", "dishonest"],
    antonyms: ["loyal", "obedient", "principled", "trustworthy"],
    additionalExamples: [
      "The rogue elephant separated from its herd and caused damage to the nearby village.",
      "The spy agency hunted down a rogue agent who was selling state secrets."
    ],
    usageTip: "Use 'rogue' for someone or something that has gone dangerously off-script or out of control."
  },
  {
    id: 64,
    word: "Premature",
    simple: "Too early",
    partOfSpeech: "adjective",
    definition: "Happening, done, or arriving too early—before the proper or expected time.",
    example: "It is premature to declare victory when half the results haven't been counted yet.",
    synonyms: ["early", "hasty", "untimely", "precipitate"],
    antonyms: ["overdue", "late", "belated", "delayed"],
    additionalExamples: [
      "The premature launch of the video game resulted in numerous bugs and bad reviews.",
      "The baby was born premature and had to spend several weeks in the neonatal unit."
    ],
    usageTip: "Use 'premature' for actions or conclusions made before the right or safe time."
  },
  {
    id: 65,
    word: "Punctilious",
    simple: "Meticulous about rules",
    partOfSpeech: "adjective",
    definition: "Showing great attention to detail, strict etiquette, or correct behavior.",
    example: "He was punctilious about replying to every single email on the day it arrived.",
    synonyms: ["meticulous", "careful", "conscientious", "strict"],
    antonyms: ["careless", "negligent", "sloppy", "casual"],
    additionalExamples: [
      "The punctilious butler ensured that every piece of silverware was aligned perfectly.",
      "She is known for her punctilious adherence to laboratory safety protocols."
    ],
    usageTip: "Use 'punctilious' for someone who follows rules, etiquette, or details to an extreme degree."
  },
  {
    id: 66,
    word: "Malignant",
    simple: "Harmful / Cancerous",
    partOfSpeech: "adjective",
    definition: "Harmful, hostile, or dangerous in nature; medically describing a cancerous growth.",
    example: "Biopsy results confirmed that the growth was benign and not malignant.",
    synonyms: ["harmful", "cancerous", "malicious", "deadly"],
    antonyms: ["benign", "harmless", "wholesome", "healthy"],
    additionalExamples: [
      "A malignant rumor began circulating, threatening to destroy his career.",
      "The doctor scheduled surgery immediately to remove the malignant tumor."
    ],
    usageTip: "Use 'malignant' for medical cancers or for deeply malicious, spreading negativity."
  },
  {
    id: 67,
    word: "Resurgent",
    simple: "Making a comeback",
    partOfSpeech: "adjective",
    definition: "Increasing or reviving after a period of little activity or weakness.",
    example: "There is a resurgent interest in vinyl records among younger generations.",
    synonyms: ["reviving", "recovering", "renewed", "rising"],
    antonyms: ["declining", "fading", "waning", "dying"],
    additionalExamples: [
      "The resurgent economy led to record low unemployment numbers this quarter.",
      "The team, resurgent in the second half, managed to overcome a massive point deficit."
    ],
    usageTip: "Use 'resurgent' when describing a powerful comeback or revival of popularity/strength."
  },
  {
    id: 68,
    word: "Quintessence",
    simple: "Purest essence",
    partOfSpeech: "noun",
    definition: "The most perfect or typical representation of a quality, state, or class.",
    example: "Her speech was the quintessence of professionalism and grace.",
    synonyms: ["essence", "embodiment", "core", "epitome"],
    antonyms: ["imperfection", "mediocrity", "inferiority"],
    additionalExamples: [
      "The cozy cabin in the snowy woods was the quintessence of winter charm.",
      "He believed that freedom of speech is the quintessence of a democratic society."
    ],
    usageTip: "Use 'quintessence' to describe the absolute purest or most perfect core example of an idea."
  },
  {
    id: 69,
    word: "Epitome",
    simple: "Ideal embodiment",
    partOfSpeech: "noun",
    definition: "A person or thing that serves as a perfect example of a quality or type.",
    example: "He is the epitome of dedication, working long hours to refine every detail.",
    synonyms: ["embodiment", "paragon", "model", "archetype"],
    antonyms: ["antithesis", "opposite", "contradiction"],
    additionalExamples: [
      "With its sleek design and advanced features, the phone is the epitome of modern engineering.",
      "The villain in the story was the epitome of greed and corruption."
    ],
    usageTip: "Use 'epitome' to point out a perfect real-world representation of an abstract quality."
  },
  {
    id: 70,
    word: "Tempest",
    simple: "Violent storm / Turmoil",
    partOfSpeech: "noun",
    definition: "A violent, windy storm; or a state of intense commotion or emotional uproar.",
    example: "The decision sparked a political tempest that lasted for weeks.",
    synonyms: ["storm", "gale", "uproar", "tumult"],
    antonyms: ["calm", "peace", "tranquility", "serenity"],
    additionalExamples: [
      "The ship was badly damaged during a raging tempest at sea.",
      "She felt a tempest of emotions—anger, sadness, and relief—all at once."
    ],
    usageTip: "Use 'tempest' for literal fierce storms or metaphorical storms of anger and chaos."
  },
  {
    id: 71,
    word: "Travesty",
    simple: "Mockery of justice",
    partOfSpeech: "noun",
    definition: "A grotesque, absurd, or grossly distorted representation of something.",
    example: "Allowing an unfair trial to proceed would be a complete travesty of justice.",
    synonyms: ["mockery", "parody", "sham", "distortion"],
    antonyms: ["tribute", "honor", "faithful representation"],
    additionalExamples: [
      "The poorly made movie adaptation was a travesty of the beloved original novel.",
      "Firing him for such a minor mistake is an absolute travesty."
    ],
    usageTip: "Use 'travesty' when something is a shockingly bad or unfair imitation of what it should be."
  },
  {
    id: 72,
    word: "Sibilant",
    simple: "Hissing sound",
    partOfSpeech: "adjective",
    definition: "Making or characterized by a hissing sound, like the 's' or 'sh' sounds.",
    example: "The snake made a low, sibilant sound as it slithered through the dry leaves.",
    synonyms: ["hissing", "buzzing", "whispering", "sounding"],
    antonyms: ["silent", "quiet", "mute", "noiseless"],
    additionalExamples: [
      "The actor spoke with a highly sibilant whisper that echoed menacingly in the theater.",
      "The wind blew through the pines with a soft, sibilant murmur."
    ],
    usageTip: "Use 'sibilant' specifically to describe speech or sounds that feature strong 's' hissing noises."
  },
  {
    id: 73,
    word: "Scintillating",
    simple: "Dazzling / Brilliant",
    partOfSpeech: "adjective",
    definition: "Sparkling, brilliant, or exceptionally clever and animated.",
    example: "Her scintillating conversation kept everyone entertained throughout dinner.",
    synonyms: ["brilliant", "dazzling", "sparkling", "fascinating"],
    antonyms: ["dull", "boring", "tedious", "uninspiring"],
    additionalExamples: [
      "The author wrote a scintillating essay that completely reframed the philosophical debate.",
      "The diamond necklace was absolutely scintillating under the ballroom lights."
    ],
    usageTip: "Use 'scintillating' to describe exceptionally lively, intelligent, and sparkling conversation or work."
  },
  {
    id: 74,
    word: "Sinuous",
    simple: "Winding / Curvy",
    partOfSpeech: "adjective",
    definition: "Having many curves, bends, or turns; winding and graceful in movement.",
    example: "The road followed a sinuous path through the mountains.",
    synonyms: ["winding", "curving", "twisting", "meandering"],
    antonyms: ["straight", "direct", "linear", "unbending"],
    additionalExamples: [
      "The dancer moved with sinuous grace, captivating the entire audience.",
      "A sinuous river carved its way through the center of the vast valley."
    ],
    usageTip: "Use 'sinuous' for things that curve, twist, or bend in a smooth and graceful way."
  },
  {
    id: 75,
    word: "Diverting",
    simple: "Amusing distraction",
    partOfSpeech: "adjective",
    definition: "Entertaining, amusing, or pleasantly distracting from seriousness or boredom.",
    example: "He read a diverting novel during his long train journey to pass the time.",
    synonyms: ["entertaining", "amusing", "distracting", "fun"],
    antonyms: ["boring", "tedious", "monotonous", "dull"],
    additionalExamples: [
      "The mobile game was a diverting way to spend the lunch break.",
      "They had a diverting conversation that took their minds off the impending exam."
    ],
    usageTip: "Use 'diverting' for light entertainment that pleasantly occupies your attention."
  },
  {
    id: 76,
    word: "Pitiless",
    simple: "Merciless / Cold",
    partOfSpeech: "adjective",
    definition: "Showing no mercy, compassion, or pity toward others; completely cold-hearted.",
    example: "The team faced a pitiless opponent that refused to slow down.",
    synonyms: ["merciless", "ruthless", "cruel", "heartless"],
    antonyms: ["merciful", "compassionate", "sympathetic", "kind"],
    additionalExamples: [
      "The desert sun beat down on the hikers with pitiless intensity.",
      "The dictator ruled with a pitiless fist, crushing any signs of dissent."
    ],
    usageTip: "Use 'pitiless' to describe harsh, cruel actions or conditions completely devoid of sympathy."
  },
  {
    id: 77,
    word: "Cunning",
    simple: "Sly / Crafty",
    partOfSpeech: "adjective",
    definition: "Skillful at achieving goals through cleverness, deceit, evasion, or trickery.",
    example: "The cunning fox managed to sneak past the guards without making a sound.",
    synonyms: ["sly", "crafty", "devious", "wily"],
    antonyms: ["naive", "honest", "straightforward", "guileless"],
    additionalExamples: [
      "The politician used a cunning strategy to discredit his opponent without breaking the rules.",
      "It took a cunning mind to solve the intricate puzzle box."
    ],
    usageTip: "Use 'cunning' for cleverness that often involves trickery, strategy, or deception."
  },
  {
    id: 78,
    word: "Somber",
    simple: "Gloomy / Solemn",
    partOfSpeech: "adjective",
    definition: "Dark, gloomy, serious, or solemn in mood, color, or tone.",
    example: "A somber mood settled over the room as the leader announced the bad news.",
    synonyms: ["gloomy", "solemn", "serious", "melancholy"],
    antonyms: ["cheerful", "bright", "lively", "lighthearted"],
    additionalExamples: [
      "The mourners wore somber black clothing to the funeral service.",
      "The movie's somber ending left the theater in complete silence."
    ],
    usageTip: "Use 'somber' to describe a deeply serious, sad, or heavy atmosphere or color scheme."
  },
  {
    id: 79,
    word: "Jubilant",
    simple: "Overjoyed / Celebrating",
    partOfSpeech: "adjective",
    definition: "Feeling or expressing great happiness, triumph, and celebration.",
    example: "The jubilant crowd cheered wildly when their team scored the winning goal.",
    synonyms: ["overjoyed", "triumphant", "exultant", "ecstatic"],
    antonyms: ["despondent", "sorrowful", "dejected", "miserable"],
    additionalExamples: [
      "The scientists were jubilant when the rover successfully landed on Mars.",
      "She let out a jubilant laugh when she saw the acceptance letter in the mail."
    ],
    usageTip: "Use 'jubilant' for extreme, expressive joy resulting from a major success or victory."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WORDS_DATA;
}
