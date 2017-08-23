// to regenerate this file, run "npm run build:theme"
// do not edit by hand

import {ComponentClass, StatelessComponent} from 'react';
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

export type Component<TProps, Theme> =
  | ComponentClass<ThemedOuterStyledProps<TProps, Theme>>
  | StatelessComponent<ThemedOuterStyledProps<TProps, Theme>>;
export interface BaseThemeRegister<Theme> {
  register(
    component: ThemableComponents.Button,
    theme: ((
      abstractValidationmessage: Component<AbstractButtonProps, Theme>,
    ) => Component<AbstractButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.FormGroup,
    theme: ((
      abstractValidationmessage: Component<AbstractFormGroupProps, Theme>,
    ) => Component<AbstractFormGroupProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.InputBox,
    theme: ((
      abstractValidationmessage: Component<AbstractInputBoxProps, Theme>,
    ) => Component<AbstractInputBoxProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.LabelText,
    theme: ((
      abstractValidationmessage: Component<AbstractLabelTextProps, Theme>,
    ) => Component<AbstractLabelTextProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.ValidationMessage,
    theme: ((
      abstractValidationmessage: Component<
        AbstractValidationMessageProps,
        Theme
      >,
    ) => Component<AbstractValidationMessageProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.PrimaryButton,
    theme: ((
      abstractValidationmessage: Component<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.SecondaryButton,
    theme: ((
      abstractValidationmessage: Component<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.SuccessButton,
    theme: ((
      abstractValidationmessage: Component<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.InfoButton,
    theme: ((
      abstractValidationmessage: Component<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.WarningButton,
    theme: ((
      abstractValidationmessage: Component<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.DangerButton,
    theme: ((
      abstractValidationmessage: Component<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.LinkButton,
    theme: ((
      abstractValidationmessage: Component<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
  register(
    component: ThemableComponents.InlineLinkButton,
    theme: ((
      abstractValidationmessage: Component<ButtonProps, Theme>,
    ) => Component<ButtonProps, Theme>),
  ): this;
}

export interface AbstractComponentRegister {
  registerAbstractComponent(
    component: ThemableComponents.Button,
    implementation: Component<AbstractButtonProps, any>,
  ): Component<AbstractButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.FormGroup,
    implementation: Component<AbstractFormGroupProps, any>,
  ): Component<AbstractFormGroupProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.InputBox,
    implementation: Component<AbstractInputBoxProps, any>,
  ): Component<AbstractInputBoxProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.LabelText,
    implementation: Component<AbstractLabelTextProps, any>,
  ): Component<AbstractLabelTextProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.ValidationMessage,
    implementation: Component<AbstractValidationMessageProps, any>,
  ): Component<AbstractValidationMessageProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.PrimaryButton,
    implementation: Component<ButtonProps, any>,
  ): Component<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.SecondaryButton,
    implementation: Component<ButtonProps, any>,
  ): Component<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.SuccessButton,
    implementation: Component<ButtonProps, any>,
  ): Component<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.InfoButton,
    implementation: Component<ButtonProps, any>,
  ): Component<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.WarningButton,
    implementation: Component<ButtonProps, any>,
  ): Component<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.DangerButton,
    implementation: Component<ButtonProps, any>,
  ): Component<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.LinkButton,
    implementation: Component<ButtonProps, any>,
  ): Component<ButtonProps, any>;
  registerAbstractComponent(
    component: ThemableComponents.InlineLinkButton,
    implementation: Component<ButtonProps, any>,
  ): Component<ButtonProps, any>;
}
