import { useContext } from 'react';

import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import * as DocBlock from '@storybook/blocks';
import type { Preview } from '@storybook/react';

import DesignSystemProvider from '@/context/DesignSystem';

import { DEFAULT_THEME } from '@/constant/theme';

const HowToImportDocs = () => {
  const context = useContext(DocBlock.DocsContext);

  const {
    'component-name': componentName,
    'import-path': importPath,
    'source-code': sourceCode
  } =
    // @ts-expect-error irfanandriansyah10@gmail.com expected error since we want to extract import path from stories parameters
    context?.primaryStory?.parameters || {};

  if (!(componentName || importPath)) return null;

  const text = `
\`\`\`js
import ${componentName} from '${importPath}';
\`\`\`
`;

  return (
    <>
      <DocBlock.Subheading>Getting Started</DocBlock.Subheading>
      <p>Import the component first:</p>
      <DocBlock.Markdown>{text}</DocBlock.Markdown>
      <p>
        You can start using the component now.
        {Boolean(sourceCode) && (
          <>
            If you're interested in the source code, you can view it by
            following{' '}
            <a
              href={`https://github.com/CashBound-ID/cashbound-design-system/tree/main/${sourceCode}`}
            >
              this link
            </a>{' '}
            to see the
            {componentName} component's code.
          </>
        )}
      </p>
    </>
  );
};

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      Provider: DesignSystemProvider,
      themes: { Default: DEFAULT_THEME }
    })
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      page: () => {
        return (
          <>
            <DocBlock.Title />
            <DocBlock.Description />
            <HowToImportDocs />
            <DocBlock.Primary />
            <DocBlock.Controls />
            <DocBlock.Stories includePrimary={false} />
          </>
        );
      },
      toc: true
    }
  },

  tags: ['autodocs']
};

export default preview;
