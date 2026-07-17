const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/app/portfolio');
const dirs = fs.readdirSync(baseDir);

for (const dir of dirs) {
  const pagePath = path.join(baseDir, dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // 1. Update image container height
    content = content.replace(/h-\[55vh\] md:h-\[60vh\]/g, 'h-[65vh] md:h-[70vh]');
    
    // 2. Update mask gradient from black_40% or black_30% to black_15%
    content = content.replace(/black_[234]0%\]/g, 'black_15%]');
    
    // 3. Update text container padding top
    content = content.replace(/pt-\[45vh\]|pt-\[50vh\]/g, 'pt-[55vh]');
    
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`Updated ${pagePath}`);
  }
}
