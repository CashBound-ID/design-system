const fs = require('fs');
const path = require('path');
const FILE_LIST = require('../config/entrypoint-file.json');

/////////////////////////////////////////////////////////////////////////////
// Generated Git Ignore File
/////////////////////////////////////////////////////////////////////////////

const removeGeneratedSectionGitIgnore = () => {
  const GIT_IGNORE_START_LINE = '### Start Generated Section'
  const GIT_IGNORE_END_LINE = '### End Generated Section'
  const GIT_IGNORE_FILE_PATH = path.join(__dirname, '../../.gitignore');

  const content = fs.readFileSync(GIT_IGNORE_FILE_PATH, 'utf8');
  const lines = content.split('\n');

  let inGeneratedSection = false;
  const filteredLines = lines.filter((line) => {
    if (line.includes(GIT_IGNORE_START_LINE)) {
      inGeneratedSection = true;
      return false;
    }
    if (line.includes(GIT_IGNORE_END_LINE)) {
      inGeneratedSection = false;
      return false;
    }
    return !inGeneratedSection;
  });
  
  filteredLines.push(GIT_IGNORE_START_LINE)
  FILE_LIST.forEach((item) => {
    filteredLines.push(...[
      `${item.name}.js`,
      `${item.name}.d.ts`,
      `${item.name}.esm.js`,
      `${item.name}.esm.d.ts`,
    ])
  })
  filteredLines.push(GIT_IGNORE_END_LINE)

  fs.writeFileSync(GIT_IGNORE_FILE_PATH, filteredLines.join("\n"), "utf8");
};



/////////////////////////////////////////////////////////////////////////////
// Generate Exposed File Package JSON
/////////////////////////////////////////////////////////////////////////////

const registerExposedFiles = () => {
  const PACKAGE_JSON_FILE_PATH = path.join(__dirname, '../../package.json');
  const PACKAGE_JSON_CONTENT = require(PACKAGE_JSON_FILE_PATH)
  
  const content = { ...PACKAGE_JSON_CONTENT };
  content.files = [];

  content.files.push(...[
    "dist",
    "index.js",
    "index.d.ts",
    "index.esm.js",
    "index.esm.d.ts"
  ])

  FILE_LIST.forEach((item) => {
    content.files.push(...[
      `${item.name}.js`,
      `${item.name}.d.ts`,
      `${item.name}.esm.js`,
      `${item.name}.esm.d.ts`,
    ])
  })

  fs.writeFileSync(PACKAGE_JSON_FILE_PATH, JSON.stringify(content, null, 2), "utf8");
};


removeGeneratedSectionGitIgnore();
registerExposedFiles();