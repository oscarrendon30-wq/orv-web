const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/app/portfolio');
const dirs = fs.readdirSync(baseDir);

for (const dir of dirs) {
  const pagePath = path.join(baseDir, dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Replace black_40%), black_30%), black_20%) with black_15%)
    content = content.replace(/black_[234]0%\)/g, 'black_15%)');
    
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`Updated mask in ${pagePath}`);
  }
}
