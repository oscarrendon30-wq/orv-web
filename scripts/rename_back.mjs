import fs from 'fs';
import path from 'path';

const esPath = path.join('src', 'translations', 'es.ts');
const enPath = path.join('src', 'translations', 'en.ts');

function replaceStr(filePath, oldStr, newStr) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(oldStr, newStr);
  fs.writeFileSync(filePath, content, 'utf-8');
}

replaceStr(esPath, 'back_to_projects: "Volver a proyectos",', 'back_to_home: "Volver al inicio",');
replaceStr(enPath, 'back_to_projects: "Back to projects",', 'back_to_home: "Back to home",');
