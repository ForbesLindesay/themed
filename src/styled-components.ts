import * as sc from 'styled-components';
import { StyledComponentClass, ThemedStyledComponentsModule } from 'styled-components';

import Theme from './Theme';

type T = ThemedStyledComponentsModule<Theme>;

export const css = (sc.css as T['css']);
export const injectGlobal = (sc.injectGlobal as T['injectGlobal']);
export const keyframes = (sc.keyframes as T['keyframes']);
export const ThemeProvider = (sc.ThemeProvider as T['ThemeProvider']);
export {StyledComponentClass};
export default (sc.default as T['default']);