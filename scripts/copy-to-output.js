const {readdirSync, readFileSync, writeFileSync, unlinkSync} = require('fs');

const GITIGNORE_START = '# begin output modules';
const GITIGNORE_END = '# end output modules';

const gitignore = readFileSync(`${__dirname}/../.gitignore`, 'utf8');

const start = gitignore.split(GITIGNORE_START)[0];
const oldIgnoredFiles = gitignore.split(GITIGNORE_START)[1].split(GITIGNORE_END)[0].split('\n').map(str => str.trim()).filter(str => !!str);
const end = gitignore.split(GITIGNORE_END)[1];

oldIgnoredFiles.forEach(oldFile => {
  try {
    unlinkSync(`${__dirname}/..${oldFile}`);
  } catch (ex) {
    if (ex.code !== 'ENOENT') throw ex;
  }
});

if (process.argv.includes('--clean')) {
  process.exit(0);
}
const newIgnoredFiles = [];
const requiredFiles = ["themed/", "types/", "dev/", "prod/"];
readdirSync(__dirname + '/../themed/components').forEach(component => {
  if (/^abstract/i.test(component)) return;
  newIgnoredFiles.push(`/${component}.js`);
  newIgnoredFiles.push(`/${component}.d.ts`);
  requiredFiles.push(`${component}.js`);
  requiredFiles.push(`${component}.d.ts`);
  writeFileSync(
    `${__dirname}/../${component}.js`,
    `module.exports = process.env.NODE_ENV === 'development' ? require('./dev/components/${component}/${component}.js') : require('./prod/components/${component}/${component}.js')`
  );
  writeFileSync(
    `${__dirname}/../${component}.d.ts`,
    `export * from './themed/components/${component}/${component}';`
  );
});

writeFileSync(`${__dirname}/../.gitignore`, start + GITIGNORE_START + '\n\n' + newIgnoredFiles.join('\n') + '\n\n' + GITIGNORE_END + end);

const pkg = JSON.parse(readFileSync(__dirname + '/../package.json', 'utf8'));
pkg.files = requiredFiles;
writeFileSync(__dirname + '/../package.json', JSON.stringify(pkg, null, '  ') + '\n');
