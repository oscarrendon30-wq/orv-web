import fs from 'fs';
import path from 'path';

const esPath = path.join('src', 'translations', 'es.ts');
const enPath = path.join('src', 'translations', 'en.ts');

function updateFile(filePath, oldText, newText) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(oldText, newText);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filePath}`);
}

updateFile(esPath, 'helperText: "¿Te ayudo?",', 'helperText: "¿Necesitas ayuda?",');
updateFile(enPath, 'helperText: "Need help?",', 'helperText: "Need help?",'); // Or maybe it was different in en.ts
