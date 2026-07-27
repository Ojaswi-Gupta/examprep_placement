export const STORIES_DATA = [
  {
    id: 1,
    title: "The Missing Artifact",
    genre: "Mystery",
    content: `
      <p>Detective Vance was known throughout the precinct as an <span class="vocab-highlight" data-word="Erudite">erudite</span> investigator, capable of solving cases that left others completely <span class="vocab-highlight" data-word="Flummoxed">flummoxed</span>. When the museum reported a priceless gem missing, Vance took a <span class="vocab-highlight" data-word="Pragmatic">pragmatic</span> approach, ignoring the wild rumors and focusing strictly on the evidence.</p>
      <p>Security footage revealed a <span class="vocab-highlight" data-word="Lithe">lithe</span> figure moving across the laser grid with incredible agility. The thief was so <span class="vocab-highlight" data-word="Stealthy">stealthy</span> that not a single alarm was triggered. Vance smiled; this was exactly the kind of challenge he enjoyed.</p>
    `
  },
  {
    id: 2,
    title: "The Disaster Interview",
    genre: "Comedy",
    content: `
      <p>Sarah walked into the interview room feeling <span class="vocab-highlight" data-word="Ebullient">ebullient</span>, ready to impress the hiring manager with her portfolio. However, the interviewer was far from <span class="vocab-highlight" data-word="Jovial">jovial</span>. He stared at her resume with a deep frown.</p>
      <p>When asked about a gap in her employment, Sarah panicked and <span class="vocab-highlight" data-word="Prevaricated">prevaricated</span>, offering a confusing story about a spiritual journey. The manager <span class="vocab-highlight" data-word="Feigned">feigned</span> interest, nodding slowly. Desperate to lighten the mood, Sarah made a <span class="vocab-highlight" data-word="Facetious">facetious</span> comment about the company's dress code, instantly realizing it was a terrible mistake.</p>
    `
  }
];

export const STORY_TEMPLATES = [
  {
    title: "Daily Review: The Unusual Commute",
    genre: "Personalized",
    template: `
      <p>My morning commute started off like any other, but soon became quite {word0}. I was trying to read my book, but a passenger nearby was being incredibly {word1}.</p>
      <p>When the train suddenly stopped, everyone looked {word2}. The conductor made a {word3} announcement that left us all confused. To lighten the mood, someone made a {word4} joke, but nobody laughed.</p>
    `
  },
  {
    title: "Daily Review: The Team Project",
    genre: "Personalized",
    template: `
      <p>Working on the final project was challenging. The team leader tried to be {word0}, but often ended up sounding {word1} when giving instructions.</p>
      <p>Sarah, who was usually very {word2}, surprised us all with a {word3} outburst about the deadline. In the end, we took a {word4} approach and somehow managed to finish on time.</p>
    `
  }
];
