// @themable PrimaryButton
// @themable SecondaryButton
// @themable SuccessButton
// @themable InfoButton
// @themable WarningButton
// @themable DangerButton
// @themable LinkButton
// @themable InlineLinkButton

import * as React from 'react';
import styled, {StyledComponentClass} from 'styled-components';
import AbstractButton, {
  ButtonVariant,
  AbstractButtonProps,
} from '../AbstractButton/AbstractButton';
import {abstractComponentRegister, ThemableComponents} from '../../Theme';

// export this to keep typescript happy
export {StyledComponentClass};

export {ButtonVariant, AbstractButtonProps};

const Button = abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.Button,
  AbstractButton,
);
if (!Button.defaultProps) Button.defaultProps = {};
if (!('variant' in Button.defaultProps))
  Button.defaultProps.variant = ButtonVariant.Primary;
if (!('type' in Button.defaultProps)) Button.defaultProps.type = 'button';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  'data-test-id'?: string;
  href?: string;
  style?: any;
  to?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onMouseDown?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onMouseUp?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onMouseEnter?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onMouseLeave?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
}

function getDisplayName(variant: ButtonVariant): string {
  switch (variant) {
    case ButtonVariant.Primary:
      return 'PrimaryButton';
    case ButtonVariant.Secondary:
      return 'SecondaryButton';
    case ButtonVariant.Success:
      return 'SuccessButton';
    case ButtonVariant.Info:
      return 'InfoButton';
    case ButtonVariant.Warning:
      return 'WarningButton';
    case ButtonVariant.Danger:
      return 'DangerButton';
    case ButtonVariant.Link:
      return 'LinkButton';
    case ButtonVariant.InlineLink:
      return 'InlineLinkButton';
  }
}

function variant(variant: ButtonVariant) {
  const ButtonVariant = (props: ButtonProps) =>
    <Button {...props} variant={variant} />;
  if (process.env.NODE_ENV === 'development') {
    (ButtonVariant as any).displayName = getDisplayName(variant);
  }
  return ButtonVariant;
}

export default Button;

export const PrimaryButton = abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.PrimaryButton,
  variant(ButtonVariant.Primary),
);
export const SecondaryButton = abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.SecondaryButton,
  variant(ButtonVariant.Secondary),
);
export const SuccessButton = abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.SuccessButton,
  variant(ButtonVariant.Success),
);
export const InfoButton = abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.InfoButton,
  variant(ButtonVariant.Info),
);
export const WarningButton = abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.WarningButton,
  variant(ButtonVariant.Warning),
);
export const DangerButton = abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.DangerButton,
  variant(ButtonVariant.Danger),
);
export const LinkButton = abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.LinkButton,
  styled(variant(ButtonVariant.Link))`
    background: none;
    border: none;
    color: blue;
  `,
);
export const InlineLinkButton = abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.InlineLinkButton,
  styled(variant(ButtonVariant.InlineLink))`
    background: none;
    border: none;
    color: blue;
    display: inline;
    padding: 0;
    &:focus, &:hover {
      outline: none;
      text-decoration: underline;
      background: none;
    }
    &:active {
      text-decoration: underline;
      background: none;
    }
  `,
);
