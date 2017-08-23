const fs = require('fs');
const lsr = require('lsr').lsrSync;

const results = [];
const output = [];
lsr(__dirname + '/../src').forEach(entry => {
  if (entry.isFile()) {
    const src = fs.readFileSync(entry.fullPath, 'utf8');
    const filename = entry.path.replace(/\.tsx?$/, '');
    const propsName = entry.name.replace(/\.tsx?$/, '') + 'Props';
    src.replace(/@themable ([A-Za-z]+)$/gm, (_, name) => {
      results.push({filename, propsName, name});
    });
  }
});
output.push(`// to regenerate this file, run "npm run build:theme"`);
output.push(`// do not edit by hand`);
output.push(``);

output.push(`import {ComponentClass, StatelessComponent} from 'react';`);
output.push(`import {ThemedOuterStyledProps} from 'styled-components';`);
const loadedFiles = {};
results.forEach(entry => {
  if (loadedFiles[entry.filename]) {
    return;
  }
  loadedFiles[entry.filename] = true;
  output.push(`import {${entry.propsName}} from '${entry.filename}';`);
});
output.push(``);
output.push(`export enum ThemableComponents {`);
results.forEach(entry => {
  output.push(`  ${entry.name},`);
});
output.push(`}`);

output.push(``);
output.push(`export type Component<TProps, Theme> =`);
output.push(`  | ComponentClass<ThemedOuterStyledProps<TProps, Theme>>`);
output.push(`  | StatelessComponent<ThemedOuterStyledProps<TProps, Theme>>`);

output.push(`export interface BaseThemeRegister<Theme> {`);
results.forEach(entry => {
  output.push(`  register(`);
  output.push(`    component: ThemableComponents.${entry.name},`);
  output.push(`    theme: ((abstractValidationmessage: Component<${entry.propsName}, Theme>) => Component<${entry.propsName}, Theme>),`)
  output.push(`  ): this;`);
});
output.push(`}`);
output.push(``);

output.push(`export interface AbstractComponentRegister {`);
results.forEach(entry => {
  output.push(`  registerAbstractComponent(`);
  output.push(`    component: ThemableComponents.${entry.name},`);
  output.push(`    implementation: Component<${entry.propsName}, any>,`);
  output.push(`  ): Component<${entry.propsName}, any>`);
});
output.push(`}`);
output.push(``);
fs.writeFileSync(
  __dirname + '/../src/GeneratedTheme.tsx',
  output.join('\n'),
);