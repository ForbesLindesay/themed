// to regenerate this file, run "npm run build:theme"
// do not edit by hand

import * as React from 'react';
import {ThemedOuterStyledProps} from 'styled-components';
import {AbstractButtonProps} from './components/AbstractButton/AbstractButton';
import {AbstractFormGroupProps} from './components/AbstractFormGroup/AbstractFormGroup';
import {AbstractInputBoxProps} from './components/AbstractInputBox/AbstractInputBox';
import {AbstractLabelTextProps} from './components/AbstractLabelText/AbstractLabelText';
import {AbstractValidationMessageProps} from './components/AbstractValidationMessage/AbstractValidationMessage';
import {ButtonProps} from './components/Button/Button';

export enum ThemableComponents {
  Button,
  FormGroup,
  InputBox,
  LabelText,
  ValidationMessage,
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton,
  LinkButton,
  InlineLinkButton,
}

export type ComponentClass<TProps, Theme> = React.ComponentClass<
  ThemedOuterStyledProps<TProps, Theme>
>;
export type StatelessComponent<TProps, Theme> = React.StatelessComponent<
  ThemedOuterStyledProps<TProps, Theme>
>;
export type Component<TProps, Theme> =
  | ComponentClass<TProps, Theme>
  | StatelessComponent<TProps, Theme>;
export interface BaseThemeRegister<Theme> {
  register(
    component: ThemableComponents.Button,
    theme: ((
      abstractValidationmessage: ComponentClass<AbstractButtonProps, Theme>,
    ) => Component<AbstractButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.FormGroup,
    theme: ((
      abstractValidationmessage: ComponentClass<AbstractFormGroupProps, Theme>,
    ) => Component<AbstractFormGroupProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.InputBox,
    theme: ((
      abstractValidationmessage: ComponentClass<AbstractInputBoxProps, Theme>,
    ) => Component<AbstractInputBoxProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.LabelText,
    theme: ((
      abstractValidationmessage: ComponentClass<AbstractLabelTextProps, Theme>,
    ) => Component<AbstractLabelTextProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.ValidationMessage,
    theme: ((
      abstractValidationmessage: ComponentClass<
        AbstractValidationMessageProps,
        Theme
      >,
    ) => Component<AbstractValidationMessageProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.PrimaryButton,
    theme: ((
      abstractValidationmessage: ComponentClass<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.SecondaryButton,
    theme: ((
      abstractValidationmessage: ComponentClass<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.SuccessButton,
    theme: ((
      abstractValidationmessage: ComponentClass<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.InfoButton,
    theme: ((
      abstractValidationmessage: ComponentClass<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.WarningButton,
    theme: ((
      abstractValidationmessage: ComponentClass<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.DangerButton,
    theme: ((
      abstractValidationmessage: ComponentClass<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.LinkButton,
    theme: ((
      abstractValidationmessage: ComponentClass<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.InlineLinkButton,
    theme: ((
      abstractValidationmessage: ComponentClass<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
}

export interface AbstractComponentRegister {
  registerAbstractComponent(
    component: ThemableComponents.Button,
    implementation: Component<AbstractButtonProps, any>,
  ): StatelessComponent<AbstractButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.FormGroup,
    implementation: Component<AbstractFormGroupProps, any>,
  ): StatelessComponent<AbstractFormGroupProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.InputBox,
    implementation: Component<AbstractInputBoxProps, any>,
  ): StatelessComponent<AbstractInputBoxProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.LabelText,
    implementation: Component<AbstractLabelTextProps, any>,
  ): StatelessComponent<AbstractLabelTextProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.ValidationMessage,
    implementation: Component<AbstractValidationMessageProps, any>,
  ): StatelessComponent<AbstractValidationMessageProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.PrimaryButton,
    implementation: Component<ButtonProps, any>,
  ): StatelessComponent<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.SecondaryButton,
    implementation: Component<ButtonProps, any>,
  ): StatelessComponent<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.SuccessButton,
    implementation: Component<ButtonProps, any>,
  ): StatelessComponent<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.InfoButton,
    implementation: Component<ButtonProps, any>,
  ): StatelessComponent<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.WarningButton,
    implementation: Component<ButtonProps, any>,
  ): StatelessComponent<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.DangerButton,
    implementation: Component<ButtonProps, any>,
  ): StatelessComponent<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.LinkButton,
    implementation: Component<ButtonProps, any>,
  ): StatelessComponent<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.InlineLinkButton,
    implementation: Component<ButtonProps, any>,
  ): StatelessComponent<ButtonProps, any>;
}
