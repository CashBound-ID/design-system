const fs = require('fs');
const path = require('path');
const FILE_LIST = require('../config/entrypoint-file.json');

/////////////////////////////////////////////////////////////////////////////
// Generating the public API
/////////////////////////////////////////////////////////////////////////////

/**
 * Iterates through the `FILE_LIST` and generates JavaScript and TypeScript declaration files (.d.ts)
 * for both ESM and CommonJS (CJS) module formats.
 *
 * For each item in the `FILE_LIST`, the following files are created:
 * - `${item.name}.js` (CJS format)
 * - `${item.name}.esm.js` (ESM format)
 * - `${item.name}.d.ts` (TypeScript declaration file for CJS)
 * - `${item.name}.esm.d.ts` (TypeScript declaration file for ESM)
 *
 * Each generated file corresponds to the specified entry points.
 *
 * @param {Array<{ name: string, file: string }>} FILE_LIST - Array of file objects containing the `name` and `file` paths.
 */
FILE_LIST.forEach((item) => {
  const modernJSContent = `export { default } from '${item.file}/index.esm';\n`;
  const oldJSContent = `module.exports = require('${item.file}');\n`;
  const modernDTSContent = `export { default } from '${item.file}/index.esm';\n`;
  const dtsContent = `export { default } from '${item.file}';\n`;

  const jsFilePath = path.join(__dirname, `../../${item.name}.js`);
  const modernJSFilePath = path.join(__dirname, `../../${item.name}.esm.js`);
  const dtsFilePath = path.join(__dirname, `../../${item.name}.d.ts`);
  const modernDtsFilePath = path.join(__dirname, `../../${item.name}.esm.d.ts`);

  fs.writeFileSync(jsFilePath, oldJSContent, 'utf8');
  fs.writeFileSync(modernJSFilePath, modernJSContent, 'utf8');
  fs.writeFileSync(dtsFilePath, dtsContent, 'utf8');
  fs.writeFileSync(modernDtsFilePath, modernDTSContent, 'utf8');

  console.log(`Created ${item.name}.js and ${item.name}.d.ts`);
});

/////////////////////////////////////////////////////////////////////////////
// Generate d.ts contract API
/////////////////////////////////////////////////////////////////////////////

/**
 * Recursively retrieves all `.d.ts` files from a directory, excluding `.esm.d.ts` and `.cjs.d.ts` files.
 *
 * @param {string} dir - The directory to search for `.d.ts` files.
 * @param {string[]} [fileList=[]] - An array to hold the found `.d.ts` file paths.
 * @returns {string[]} An array of `.d.ts` file paths.
 */
const getAllDtsFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllDtsFiles(filePath, fileList); // Recursively search in subdirectories
    } else if (
      file.endsWith('.d.ts') &&
      !file.endsWith('.esm.d.ts') &&
      !file.endsWith('.cjs.d.ts')
    ) {
      fileList.push(filePath); // Only add regular .d.ts files (skip existing .esm.d.ts and .cjs.d.ts)
    }
  });

  return fileList;
};

/**
 * Reads all `.d.ts` files from the `dist` directory, generates corresponding `.esm.d.ts` files,
 * and appends export statements to them.
 */
const distDir = path.join(__dirname, '../../dist');
const dtsFiles = getAllDtsFiles(distDir);

dtsFiles.forEach((dtsFilePath) => {
  const relativePath = path.relative(distDir, dtsFilePath);
  const baseFileName = path.basename(relativePath, '.d.ts');

  // Generate .esm.d.ts
  const esmFilePath = path.join(
    distDir,
    `${relativePath.replace('.d.ts', '')}.esm.d.ts`
  );
  const esmExportContent = `export * from './${baseFileName}';\nexport { default } from './${baseFileName}';`;
  fs.writeFileSync(esmFilePath, esmExportContent);
});

console.log('ESM and CJS declaration files created successfully.');