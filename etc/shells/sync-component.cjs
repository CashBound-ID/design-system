const fs = require('fs');
const path = require('path');
const FILE_LIST = require('../config/entrypoint-file.json');

/////////////////////////////////////////////////////////////////////////////
// Generated Git Ignore File
/////////////////////////////////////////////////////////////////////////////

/**
 * Removes the generated section in the `.gitignore` file and updates it
 * with the list of files from `FILE_LIST`.
 */
const removeGeneratedSectionGitIgnore = () => {
  const GIT_IGNORE_START_LINE = '### Start Generated Section';
  const GIT_IGNORE_END_LINE = '### End Generated Section';
  const GIT_IGNORE_FILE_PATH = path.join(__dirname, '../../.gitignore');

  // Read the content of .gitignore
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

  // Append the new generated section
  filteredLines.push(GIT_IGNORE_START_LINE);
  FILE_LIST.forEach((item) => {
    filteredLines.push(
      ...[
        `${item.name}.js`,
        `${item.name}.d.ts`,
        `${item.name}.esm.js`,
        `${item.name}.esm.d.ts`
      ]
    );
  });
  filteredLines.push(GIT_IGNORE_END_LINE);

  // Write the updated content back to .gitignore
  fs.writeFileSync(GIT_IGNORE_FILE_PATH, filteredLines.join('\n'), 'utf8');
};

/////////////////////////////////////////////////////////////////////////////
// Generate Exposed File Package JSON
/////////////////////////////////////////////////////////////////////////////

/**
 * Updates `package.json` by adding an array of files that should be included
 * in the published package.
 */
const registerExposedFiles = () => {
  const PACKAGE_JSON_FILE_PATH = path.join(__dirname, '../../package.json');
  const PACKAGE_JSON_CONTENT = require(PACKAGE_JSON_FILE_PATH);

  // Clone package.json content
  const content = { ...PACKAGE_JSON_CONTENT };
  content.files = [];
  content.exports = {};

  // Add default files & exports
  content.files.push(
    ...['dist', 'index.js', 'index.d.ts', 'index.esm.js', 'index.esm.d.ts']
  );
  content.exports['.'] = {
    import: './index.esm.js',
    require: './index.js',
    types: './index.d.ts'
  }
  content.exports['./styles.css'] = './dist/styles.css'

  // Add files & exports from FILE_LIST
  FILE_LIST.forEach((item) => {
    content.files.push(
      ...[
        `${item.name}.js`,
        `${item.name}.d.ts`,
        `${item.name}.esm.js`,
        `${item.name}.esm.d.ts`
      ]
    );

    content.exports[`./${item.name}`] = {
      import: `./${item.name}.esm.js`,
      require: `./${item.name}.js`,
      types: `./${item.name}.d.ts`
    }
  });

  // Write the updated package.json file
  fs.writeFileSync(
    PACKAGE_JSON_FILE_PATH,
    JSON.stringify(content, null, 2),
    'utf8'
  );
};

// Execute the functions
removeGeneratedSectionGitIgnore();
registerExposedFiles();