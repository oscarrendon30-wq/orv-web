import fs from 'fs';
import path from 'path';

function updateFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf-8');
  for (const [oldStr, newStr] of replacements) {
    if (!content.includes(oldStr)) {
      console.warn(`WARNING: Could not find '${oldStr.substring(0, 50)}...' in ${filePath}`);
    }
    content = content.replace(oldStr, newStr);
  }
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filePath}`);
}

const enReplacements = [
  ["my clients'", "the clients'"],
  ["I prepare a structured work proposal", "a structured work proposal is prepared"],
  ["You can hire a single piece", "A single piece can be hired"],
  ["you need.", "required."],
  ["If your brand requires", "If the brand requires"],
  ["your budget.", "the budget."]
];

const enPath = path.join('src', 'translations', 'en.ts');

updateFile(enPath, enReplacements);
