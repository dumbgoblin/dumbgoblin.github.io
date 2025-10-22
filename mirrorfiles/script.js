// loopFolders.js
import fs from "fs";
import path from "path";
const baseDir = "./"; 
const folders = fs.readdirSync(baseDir, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(dir => dir.name);
const scriptContent = `
  const container = document.getElementById("container");
  const folders = ${JSON.stringify(folders)};
  folders.forEach(folder => {
    const a = document.createElement("a");
    a.href = "./${path.join(baseDir, folder)}";
    a.textContent = folder;
    a.style.display = "block";
    container.appendChild(a);
  });
`;
fs.writeFileSync("populateLinks.js", scriptContent);
