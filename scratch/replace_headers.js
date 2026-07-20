const fs = require('fs');
const path = require('path');

const dir = 'c:/Sharda_academy/sharda-academy-f/src/components/home';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update headings
  content = content.replace(/text-4xl md:text-5xl font-bold/g, 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight');
  
  // Ensure rounded-2xl consistency in UpcomingBatches
  content = content.replace(/rounded-xl p-6/g, 'rounded-2xl p-6');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
