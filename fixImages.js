const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  "src/components/results/SuccessStories.jsx",
  "src/components/results/RankerCard.jsx",
  "src/components/news/NewsCard.jsx",
  "src/components/navigation/Navbar.jsx",
  "src/components/navigation/Footer.jsx",
  "src/components/home/GalleryPreview.jsx",
  "src/components/home/Hero3DVisual.jsx",
  "src/components/gallery/Lightbox.jsx",
  "src/components/gallery/GalleryCard.jsx",
  "src/components/faculty/TeacherCard.jsx",
  "src/components/courses/CourseDetailsHero.jsx",
  "src/components/cards/CourseCard.jsx",
  "src/components/cards/ContentCards.jsx",
  "src/app/news/[slug]/page.js",
  "src/components/about/DirectorMessage.jsx"
];

filesToUpdate.forEach(relativePath => {
  const file = path.join(__dirname, relativePath);
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('next/image')) {
    content = content.replace(/import Image from ['"]next\/image['"];?\r?\n/g, '');
    
    // First, find all <Image tags and process them
    content = content.replace(/<Image([^>]+)>/g, (match, innerProps) => {
       let cleanedProps = innerProps
        .replace(/\sfill(\s|\/|$)/g, '$1')
        .replace(/\spriority=\{[^}]*\}/g, '')
        .replace(/\spriority(\s|\/|$)/g, '$1')
        .replace(/\ssizes="[^"]*"/g, '')
        .replace(/\splaceholder="[^"]*"/g, '')
        .replace(/\sblurDataURL="[^"]*"/g, '');
        
       // Ensure w-full h-full is added to className
       if (cleanedProps.includes('className="')) {
           cleanedProps = cleanedProps.replace(/className="/g, 'className="w-full h-full ');
       } else {
           cleanedProps += ' className="w-full h-full object-cover"';
       }
       
       return `<img${cleanedProps}>`;
    });
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${relativePath}`);
  }
});
