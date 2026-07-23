const fs = require('fs');

const antonymsMap = {
  1: ["idealistic", "impractical", "unrealistic", "theoretical"],
  2: ["malevolent", "cruel", "selfish", "unkind"],
  3: ["ignorant", "uneducated", "illiterate", "uninformed"],
  4: ["provoke", "agitate", "enrage", "irritate"],
  5: ["modernize", "update", "renew", "renovate"],
  6: ["magnify", "emphasize", "exaggerate", "amplify"],
  7: ["whisper", "mumble", "praise calmly", "speak softly"],
  8: ["deliberate", "planned", "intentional", "calculated"],
  9: ["vague", "imprecise", "approximate", "inaccurate"],
  10: ["stiff", "rigid", "clumsy", "inflexible"],
  11: ["timely", "opportune", "well-timed", "appropriate"],
  12: ["nail", "ace", "succeed", "perfect"],
  13: ["retained", "kept", "preserved", "saved"],
  14: ["accepted", "embraced", "endorsed", "acknowledged"],
  15: ["separated", "divided", "detached", "split"],
  16: ["retreated", "withdrew", "respected", "receded"],
  17: ["uniformity", "sameness", "homogeneity"],
  18: ["obedient", "compliant", "submissive", "docile"],
  19: ["obvious", "clear", "transparent", "apparent"],
  20: ["diverse", "varied", "heterogeneous", "mixed"],
  21: ["unified", "blended", "integrated", "mixed"],
  22: ["adoration", "love", "admiration", "affection"],
  23: ["atypical", "unrepresentative", "unusual", "aberrant"],
  24: ["praised", "commended", "applauded", "honored"],
  25: ["enlightened", "clear-headed", "composed", "unfazed"],
  26: ["confessed", "admitted", "disclosed", "revealed"],
  27: ["genuine", "sincere", "authentic", "real"],
  28: ["forgiveness", "pardon", "mercy", "clemency"],
  29: ["criticism", "condemnation", "disapproval", "scorn"],
  30: ["solitude", "isolation"],
  31: ["somber", "gloomy", "morose", "sullen"],
  32: ["substantial", "significant", "generous", "considerable"],
  33: ["obvious", "conspicuous", "loud", "overt"],
  34: ["skeptical", "suspicious", "shrewd", "astute"],
  35: ["subdued", "listless", "apathetic", "lethargic"],
  36: ["verified", "authentic", "genuine", "proven"],
  37: ["clear-headed", "focused", "attentive", "sharp"],
  38: ["imaginative", "poetic", "exciting", "extraordinary"],
  39: ["aloof", "indifferent", "critical", "genuine"],
  40: ["serious", "earnest", "sincere", "solemn"],
  41: ["simple", "straightforward", "clear", "accessible"],
  42: ["petty", "vindictive", "spiteful", "mean-spirited"],
  43: ["left alone", "ignored", "unbothered", "freed"],
  44: ["scarce", "meager", "sparse", "insufficient"],
  45: ["quiet", "subdued", "soft", "gentle"],
  46: ["cheerful", "jovial", "happy", "upbeat"],
  47: ["subtle", "concealed", "minor", "hidden"],
  48: ["aftermath", "consequence", "result"],
  49: ["suggestion", "opinion", "request"],
  50: ["stagnation", "stability", "permanence"],
  51: ["nadir", "low point", "bottom", "trough"],
  52: ["willing", "eager", "enthusiastic", "generous"],
  53: ["heir", "offspring", "descendant"],
  54: ["mature animal", "adult"],
  55: [],
  56: ["evasive", "dishonest", "guarded", "secretive"],
  57: ["barren", "infertile", "uncultivable", "sterile"],
  58: ["bold", "courageous", "brave", "confident"],
  59: ["cosmopolitan", "worldly", "sophisticated", "broad-minded"],
  60: ["serious", "unfunny", "solemn", "humorless"],
  61: ["improper", "indecent", "rude", "unrefined"],
  62: ["postwar", "modern", "contemporary"],
  63: ["loyal", "obedient", "principled", "trustworthy"],
  64: ["overdue", "late", "belated", "delayed"],
  65: ["careless", "negligent", "sloppy", "casual"],
  66: ["benign", "harmless", "wholesome", "healthy"],
  67: ["declining", "fading", "waning", "dying"],
  68: ["imperfection", "mediocrity", "inferiority"],
  69: ["antithesis", "opposite", "contradiction"],
  70: ["calm", "peace", "tranquility", "serenity"],
  71: ["tribute", "honor", "faithful representation"],
  72: ["silent", "quiet", "mute", "noiseless"],
  73: ["dull", "boring", "tedious", "uninspiring"],
  74: ["straight", "direct", "linear", "unbending"],
  75: ["boring", "tedious", "monotonous", "dull"],
  76: ["merciful", "compassionate", "sympathetic", "kind"],
  77: ["naive", "honest", "straightforward", "guileless"],
  78: ["cheerful", "bright", "lively", "lighthearted"],
  79: ["despondent", "sorrowful", "dejected", "miserable"]
};

const filePath = '/Users/ojaswigupta/Downloads/tcs practice/words.js';
let fileContent = fs.readFileSync(filePath, 'utf8');

const regex = /(id:\s*(\d+),[\s\S]*?synonyms:\s*\[[^\]]*\])(,)/g;
let matchCount = 0;

fileContent = fileContent.replace(regex, (match, p1, idStr, p3) => {
  const id = parseInt(idStr, 10);
  const antonyms = antonymsMap[id];
  if (antonyms !== undefined) {
    matchCount++;
    const antonymsStr = JSON.stringify(antonyms).replace(/,/g, ", ");
    return `${p1},\n    antonyms: ${antonymsStr}${p3}`;
  }
  return match;
});

fs.writeFileSync(filePath, fileContent);
console.log(`Replaced ${matchCount} matches.`);
