const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const { search, replace } of replacements) {
    content = content.replace(search, replace);
  }
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

// 1. ContentCards.jsx
replaceInFile('c:/Sharda_academy/sharda-academy-f/src/components/cards/ContentCards.jsx', [
  { search: /rounded-xl/g, replace: 'rounded-2xl' }, // Standardize border radius
  { search: /fill className="object-cover transition-transform duration-500 group-hover:scale-105"/g, replace: 'fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105"' },
  { search: /fill className="object-cover"/g, replace: 'fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover"' }
]);

// 2. CourseCard.jsx
replaceInFile('c:/Sharda_academy/sharda-academy-f/src/components/cards/CourseCard.jsx', [
  { search: /fill className="object-cover"/g, replace: 'fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover"' }
]);

// 3. FeatureCard.jsx
replaceInFile('c:/Sharda_academy/sharda-academy-f/src/components/cards/FeatureCard.jsx', [
  { search: /rounded-xl/g, replace: 'rounded-2xl' }
]);

// 4. GalleryPreview.jsx
replaceInFile('c:/Sharda_academy/sharda-academy-f/src/components/home/GalleryPreview.jsx', [
  { search: /fill \r?\n\s*className="object-cover transition-transform duration-500 group-hover:scale-110"/g, replace: 'fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"\n                    className="object-cover transition-transform duration-500 group-hover:scale-110"' }
]);

// 5. globals.css (Global Focus State)
let globalsContent = fs.readFileSync('c:/Sharda_academy/sharda-academy-f/src/app/globals.css', 'utf8');
if (!globalsContent.includes('focus-visible:ring-primary')) {
  globalsContent = globalsContent.replace(
    /@layer base {/,
    `@layer base {
  a, button {
    @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background;
  }`
  );
  fs.writeFileSync('c:/Sharda_academy/sharda-academy-f/src/app/globals.css', globalsContent);
  console.log('Updated globals.css');
}
