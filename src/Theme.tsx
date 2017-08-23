import * as React from 'react';
import {
  ThemedStyledComponentsModule,
  ThemedOuterStyledProps,
} from 'styled-components';
import * as s from 'styled-components';
import {
  Component,
  ThemableComponents,
  AbstractComponentRegister,
  BaseThemeRegister,
} from './GeneratedTheme';
import {RenderInputLayoutProps} from './components/AbstractInput/AbstractInput';

function validateKey(key: any): string {
  if (typeof key !== 'string' && typeof key !== 'number') {
    throw new Error('Simple map only supports string/number keys');
  }
  return '$' + key;
}

export class SimpleMap<Key, Value> {
  _pairs: {[key: string]: Value} = {};
  get(key: Key): Value | null {
    const k = validateKey(key);
    return k in this._pairs ? this._pairs[k] : null;
  }
  set(key: Key, value: Value): void {
    const k = validateKey(key);
    this._pairs[k] = value;
  }
  delete(key: Key) {
    const k = validateKey(key);
    if (k in this._pairs) {
      delete this._pairs[k];
    }
  }
}

export interface IThemeRegister<Theme> extends BaseThemeRegister<Theme> {
  css: ThemedStyledComponentsModule<Theme>['css'];
  injectGlobal: ThemedStyledComponentsModule<Theme>['injectGlobal'];
  keyframes: ThemedStyledComponentsModule<Theme>['keyframes'];
  styled: ThemedStyledComponentsModule<Theme>['default'];
  withTheme: ThemedStyledComponentsModule<Theme>['withTheme'];
  ThemeProvider: ThemedStyledComponentsModule<Theme>['ThemeProvider'];

  layoutInput(render: (props: RenderInputLayoutProps) => JSX.Element): this;
}
export interface IAbstractComponentRegister extends AbstractComponentRegister {
  getInputLayout(): null | ((props: RenderInputLayoutProps) => JSX.Element);
}

export class ThemeRegister<Theme> implements IThemeRegister<Theme> {
  css: ThemedStyledComponentsModule<Theme>['css'] = s.css;
  injectGlobal: ThemedStyledComponentsModule<
    Theme
  >['injectGlobal'] = s.injectGlobal;
  keyframes: ThemedStyledComponentsModule<Theme>['keyframes'] = s.keyframes;
  styled: ThemedStyledComponentsModule<Theme>['default'] = s.default;
  withTheme: ThemedStyledComponentsModule<Theme>['withTheme'] = s.withTheme;
  ThemeProvider: ThemedStyledComponentsModule<
    Theme
  >['ThemeProvider'] = s.ThemeProvider as any;

  private _abstractComponents = new SimpleMap<
    ThemableComponents,
    Component<any, Theme>
  >();
  private _componentThemes = new SimpleMap<
    ThemableComponents,
    (AbstractComponent: Component<any, Theme>) => Component<any, Theme>
  >();
  private _registeredComponents = new SimpleMap<
    ThemableComponents,
    Component<any, Theme>
  >();

  private _renderInputLayout:
    | null
    | ((props: RenderInputLayoutProps) => JSX.Element) = null;

  layoutInput(render: (props: RenderInputLayoutProps) => JSX.Element): this {
    this._renderInputLayout = render;
    return this;
  }

  getInputLayout(): null | ((props: RenderInputLayoutProps) => JSX.Element) {
    return this._renderInputLayout;
  }

  register<TProps>(
    component: ThemableComponents,
    theme: ((
      AbstractComponent: Component<TProps, Theme>,
    ) => Component<TProps, Theme>),
  ): this {
    const AbstractComponent = this._abstractComponents.get(component);
    if (AbstractComponent != null) {
      this._registeredComponents.set(component, theme(AbstractComponent));
    } else {
      this._componentThemes.set(component, theme);
    }
    return this;
  }
  registerAbstractComponent<TProps>(
    component: ThemableComponents,
    implementation: Component<TProps, Theme>,
  ): Component<TProps, Theme> {
    this._abstractComponents.set(component, implementation);
    const theme = this._componentThemes.get(component);
    this._registeredComponents.set(
      component,
      theme == null ? implementation : theme(implementation),
    );
    const Component: Component<TProps, Theme> = (
      props: ThemedOuterStyledProps<TProps, Theme>,
    ) => {
      const ThemedComponent: Component<TProps, Theme> =
        this._registeredComponents.get(component) || implementation;
      return <ThemedComponent {...props as any} />;
    };
    Component.displayName = implementation.displayName
      ? `ThemedWrapper(${implementation.displayName})`
      : 'ThemedWrapper';
    return Component;
  }
}

export {ThemableComponents};

const theme = new ThemeRegister<any>();
export const abstractComponentRegister: IAbstractComponentRegister = theme;

export default function define<Theme>(): IThemeRegister<Theme> {
  return theme;
}
