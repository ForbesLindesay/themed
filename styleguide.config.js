const path = require('path');
const snapguidist = process.argv.includes('build') ? (v => v) : require('snapguidist');

module.exports = snapguidist({
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return `import ${name} from 'themed/${name}';`;
  },
  title: 'Themed Components',
  components: 'src/components/**/*.tsx',
  propsParser: require('react-docgen-typescript').parse,
  ignore: ['**/components/AbstractButton/AbstractButton.tsx', '**/*Theme.tsx'],
  showUsage: true,
  styles: {
    Playground: {
      preview: {
        'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      },
    },
  },
});
