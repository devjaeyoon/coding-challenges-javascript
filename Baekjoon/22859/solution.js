const htmlDocument = require('fs').readFileSync('/dev/stdin').toString().trim();

const divRegex = /<div title="([^"]+)">(.*?)<\/div>/g;
const pRegex = /<p>(.*?)<\/p>/g;
const divMatches = htmlDocument.matchAll(divRegex);

for (const divMatch of divMatches) {
  const title = divMatch[1];
  const divContent = divMatch[2];

  console.log(`title : ${title}`);

  const pMatches = divContent.matchAll(pRegex);

  for (const pMatch of pMatches) {
    let pContent = pMatch[1];
    let cleanedContent = pContent.replace(/<[^>]+>/g, '');

    cleanedContent = cleanedContent.trim();
    cleanedContent = cleanedContent.replace(/ {2,}/g, ' ');

    console.log(cleanedContent);
  }
}
