import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { swc } from 'rollup-plugin-swc3';


const inputDir = 'src';
const outputDir = 'dist';
const baseDir = path.resolve(__dirname, './');

/////////////////////////////////////////////////////////////////////////////
// Generate swc configuration
/////////////////////////////////////////////////////////////////////////////

/**
 * Generates a specific SWC configuration based on the module format (ESM or CJS).
 *
 * @param {string} format - The module format ('es6' for ESM or 'cjs' for CommonJS).
 * @returns {import('@swc/core').Config} The SWC configuration for the given format.
 */
const generateSWCConfig = (format) => {
  /**
   * Attempts to load SWC configuration from `.fit-swcrc` file.
   * If the file is not found, it falls back to a default configuration for React (automatic runtime).
   *
   * @type {import('@swc/core').Config} swcConfig - SWC configuration object.
   */
  let swcConfig = {};

  try {
    const swcConfigPath = path.resolve(__dirname, '.cb-swcrc');
    swcConfig = JSON.parse(fs.readFileSync(swcConfigPath, 'utf-8'));
  } catch {
    swcConfig = {
      jsc: {
        transform: {
          react: {
            runtime: 'automatic'
          }
        }
      }
    };
  }

  let moduleType = 'es6';
  if (format === 'cjs') moduleType = 'commonjs';

  return {
    ...swcConfig,
    jsc: {
      ...swcConfig.jsc,
      baseUrl: baseDir
    },
    module: {
      type: moduleType
    },
    sourceMaps: false
  };
};

/////////////////////////////////////////////////////////////////////////////
// Recursively find all .ts and .tsx files
/////////////////////////////////////////////////////////////////////////////

/**
 * Recursively retrieves all `.ts` and `.tsx` files from a given directory.
 *
 * @param {string} dir - The directory to search for TypeScript files.
 * @param {string[]} [files=[]] - An array to store the found file paths.
 * @returns {string[]} An array of file paths for all `.ts` and `.tsx` files.
 */
const getFiles = (dir, files = []) => {
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);

    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      files.push(fullPath);
    }
  });
  return files;
};

/**
 * Reduces the input files array into a Rollup-compatible entry object,
 * excluding test, storybook, and other non-relevant files.
 *
 * @returns {Object<string, string>} The reduced entries object with cleaned filenames.
 */
const collectEntryFiles = () => {
  const inputFiles = getFiles(path.join(__dirname, inputDir));

  return inputFiles.reduce((acc, file) => {
    const entry = path.relative(inputDir, file);
    const name = entry.replace(/\.[^/.]+$/, ''); // Remove file extension

    // Ignore files you want to exclude
    if (
      !entry.includes('.test.') &&
      !entry.includes('stories') &&
      !entry.includes('.d.') &&
      !entry.includes('storybook') &&
      !entry.includes('setup-test')
    ) {
      acc[name] = path.join(inputDir, entry);
    }

    return acc;
  }, {});
};

/////////////////////////////////////////////////////////////////////////////
// Rollup Configuration
/////////////////////////////////////////////////////////////////////////////

// console.log(collectEntryFiles())

/**
 * Rollup configuration for building both ESM and CJS outputs.
 * Includes resolving modules, handling peer dependencies, and transpiling TypeScript and SWC.
 */
export default [
  {
    external: [
      'react',
      'react-dom',
      '@emotion/react',
      'emoji-picker-react',
      'dayjs'
    ],
    input: collectEntryFiles(),
    output: [
      {
        dir: outputDir,
        entryFileNames: '[name].esm.js',
        format: 'es',
        plugins: [swc(generateSWCConfig('es6'))],
        sourcemap: true
      },
      {
        dir: outputDir,
        format: 'cjs',
        plugins: [swc(generateSWCConfig('cjs'))],
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal({ includeDependencies: true }),
      replace({
        'import * as styles from': 'import styles from',
        'import * as style from': 'import style from'
      }),
      postcss({
        autoModules: false,
        extract: 'styles.css',
        minimize: true,
        modules: {
          generateScopedName: '[hash:base64:9]'
        },
        namedExports: true,
        use: ['sass']
      }),
      resolve({
        mainFields: ['module', 'main']
      }),
      commonjs({
        include: 'node_modules/**',
        sourceMap: false
      }),
      typescript()
    ]
  }
];