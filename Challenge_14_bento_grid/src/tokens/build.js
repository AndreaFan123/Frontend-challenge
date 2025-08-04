
import StyleDictionary from 'style-dictionary';
import { formats, transformGroups } from 'style-dictionary/enums';

const sd = new StyleDictionary({
  source: [
    'src/tokens/colors.json',
    'src/tokens/typography.json',
    'src/tokens/spacing.json'
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: true
          }
        }
      ]
    }
  }
});

await sd.buildAllPlatforms();
