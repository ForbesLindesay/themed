import * as React from 'react';
import styled from '../../styled-components';
import AbstractButton, {
  AbstractButtonProps,
  setLinkRenderer,
} from '../AbstractButton/AbstractButton';
import Style from '../../Style';
import Theme from '../../Theme';
import {ButtonVariantStyle} from './ButtonTheme';
import {darken} from 'polished';

const DefaultDisplay = 'inline-block';
export type Display = 'flex' | 'inline-block' | 'inline';

export const enum ButtonShadowStyle {
  None,
  Raised,
  SoftRaised,
  Hovering,
}
export const enum ButtonVariant {
  Primary,
  Secondary,
  Success,
  Info,
  Warning,
  Danger,
  Link,
}

const ExtendedAbstractButton = ({
  display,
  overrideTheme,
  variant,
  ...props,
}: AbstractButtonProps & {
  display: Display;
  overrideTheme?: ButtonVariantStyle;
  variant: ButtonVariant;
}) => <AbstractButton {...props} />;

const EMPTY_STYLE = {};
function getVariant(theme: Theme, variant: ButtonVariant): ButtonVariantStyle {
  const button = theme.Button;
  if (!button) {
    return EMPTY_STYLE;
  }
  switch (variant) {
    case ButtonVariant.Primary:
      return button.Primary || EMPTY_STYLE;
    case ButtonVariant.Secondary:
      return button.Secondary || EMPTY_STYLE;
    case ButtonVariant.Success:
      return button.Success || EMPTY_STYLE;
    case ButtonVariant.Info:
      return button.Info || EMPTY_STYLE;
    case ButtonVariant.Warning:
      return button.Warning || EMPTY_STYLE;
    case ButtonVariant.Danger:
      return button.Danger || EMPTY_STYLE;
    case ButtonVariant.Link:
      return button.Link || EMPTY_STYLE;
  }
}
function buttonThemeProperty<T>(
  getter: (style: ButtonVariantStyle) => T | void,
  defaultValue:
    | T
    | ((
        props: {
          overrideTheme?: ButtonVariantStyle;
          variant: ButtonVariant;
          theme: Theme;
        },
      ) => T),
) {
  return (props: {
    overrideTheme?: ButtonVariantStyle;
    variant: ButtonVariant;
    theme: Theme;
  }) => {
    const override = props.overrideTheme || EMPTY_STYLE;
    const base = props.theme.Button || EMPTY_STYLE;
    const variant = getVariant(props.theme, props.variant);

    const overrideValue = getter(override);
    if (overrideValue != null) {
      return overrideValue;
    }
    const variantValue = getter(variant);
    if (variantValue != null) {
      return variantValue;
    }

    const baseValue = getter(base);
    if (baseValue != null) {
      return baseValue;
    }

    if (typeof defaultValue === 'function') {
      return defaultValue(props);
    }
    return defaultValue;
  };
}

const getBackground = buttonThemeProperty<string>(
  s => s.background,
  (props): string => {
    switch (props.variant) {
      case ButtonVariant.Primary:
        return 'hsl(340, 60%, 65%)';
      case ButtonVariant.Secondary:
        return 'hsl(0, 0%, 90%)';
      case ButtonVariant.Success:
        return 'hsl(120, 39%, 54%)';
      case ButtonVariant.Info:
        return 'hsl(194, 66%, 61%)';
      case ButtonVariant.Warning:
        return 'hsl(35, 84%, 62%)';
      case ButtonVariant.Danger:
        return 'hsl(2, 64%, 58%)';
      case ButtonVariant.Link:
        return 'none';
    }
  },
);
const getShadowStyle = buttonThemeProperty<ButtonShadowStyle>(
  s => s.shadowStyle,
  ButtonShadowStyle.Hovering,
);
const getBorderColor = buttonThemeProperty<string>(
  s => s.borderColor,
  (props): string => {
    // if (props.variant === ButtonVariant.Secondary) {
    //   return darken(0.2, getBackground(props));
    // }
    if (props.variant === ButtonVariant.Link) {
      return 'transparent';
    }
    return 'transparent';
  },
);
const getPadding = buttonThemeProperty<string>(s => s.padding, '.4em .8em');
const StyledButton = styled(ExtendedAbstractButton)`
  background: ${getBackground};
  border: 1px solid;
  background-clip: padding-box;
  border-color: ${getBorderColor};
  border-radius: ${buttonThemeProperty<string>(s => s.borderRadius, '.3em')};
  box-shadow: ${(props): string => {
    if (props.variant === ButtonVariant.Link) {
      return 'none';
    }
    const style = getShadowStyle(props);
    switch (style) {
      case ButtonShadowStyle.None:
        return 'none';
      case ButtonShadowStyle.Raised:
        return 'inset rgba(0,0,0,0.2) -.03em -.2em 0.02em';
      case ButtonShadowStyle.SoftRaised:
        return 'inset rgba(0,0,0,0.2) -.2em -.4em .8em';
      case ButtonShadowStyle.Hovering:
        return 'rgba(0,0,0,0.2) .3em .15em 3px';
    }
  }};
  box-sizing: border-box;
  color: ${buttonThemeProperty<string>(
    s => s.color,
    (p): string => {
      switch (p.variant) {
        case ButtonVariant.Secondary:
          return 'black';
        case ButtonVariant.Link:
          return 'blue';
        default:
          return 'white';
      }
    },
  )};
  cursor: pointer;
  display: ${props => props.display};
  font: inherit;
  justify-content: space-around;
  text-align: center;
  text-decoration: inherit;
  padding: ${props => {
    if (props.display === 'inline' && props.variant === ButtonVariant.Link) {
      return '0';
    }
    return getPadding(props);
  }};
  width: ${props => {
    return props.display === 'flex' ? '100%' : 'auto';
  }}
  &:focus:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:focus:not(:active) {
    border-color: ${buttonThemeProperty<string>(
      s => s.focusBorderColor,
      (props): string => {
        if (props.variant === ButtonVariant.Link) {
          return 'transparent';
        }
        const defaultBorder = getBorderColor(props);
        return darken(
          0.2,
          defaultBorder === 'transparent'
            ? getBackground(props)
            : defaultBorder,
        );
      },
    )};
    text-decoration: ${props =>
      props.variant === ButtonVariant.Link ? 'underline' : 'none'};
  }
  &:active {
    background-color: ${buttonThemeProperty<string>(
      s => s.activeBackground,
      (props): string => {
        if (props.variant === ButtonVariant.Link) {
          return 'none';
        }
        return darken(0.3, getBackground(props));
      },
    )};
    box-shadow: none;
  }
`;

export type ClickEvent = React.MouseEvent<
  HTMLButtonElement | HTMLAnchorElement
>;
export interface Props {
  children: React.ReactNode;
  /**
   * You can optionally add a `data-test-id` for use in automated tests.
   */
  'data-test-id'?: string;
  /**
   * foo bar
   */
  display?: Display;
  /**
   * If you provide an `href`, the component will be rendered as a an anchor tag.
   */
  href?: string;
  /**
   * Customise margins and flexbox properties
   */
  style?: Style;
  /**
   * Override any of the themable properties of this specific button
   */
  overrideTheme?: ButtonVariantStyle;
  /**
   * If you provie a `to`, the component will be rendered as a react router link.
   * 
   * You should call `setLinkRenderer` if you plan on using this.
   */
  to?: string;
  /**
   * You can optionall pass a `type` to enable the default browser behaviour for that button type.
   */
  type?: 'submit' | 'reset' | 'button';
  /**
   * Variants indicate the different styles of button, they do not change the functionality.
   */
  variant?: ButtonVariant;
  /**
   * An event handler, called when the button is clicked.
   */
  onClick?: (e: ClickEvent) => void;
}

/**
 * A component for rendering a button or link.  It will automatically render as an anchor (`a`) tag if you provide an `href`,
 * a link tag (e.g. for React Router) if you provide a `to` property, and a button tag (`button`) if you provide neither `href`,
 * nor `to` properties.
 */
export const Button = (props: Props) => {
  return (
    <StyledButton
      data-test-id={props['data-test-id']}
      display={props.display || DefaultDisplay}
      href={props.href}
      style={props.style}
      overrideTheme={props.overrideTheme}
      to={props.to}
      type={props.type}
      variant={props.variant || ButtonVariant.Primary}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

export {setLinkRenderer};
export default Button;

export interface VariantProps {
  children: React.ReactNode;
  'data-test-id'?: string;
  display?: Display;
  href?: string;
  style?: Style;
  overrideTheme?: ButtonVariantStyle;
  to?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (e: ClickEvent) => void;
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
  }
}
function variant(variant: ButtonVariant) {
  const ButtonVariant = (props: VariantProps) => Button({...props, variant});
  if (process.env.NODE_ENV === 'development') {
    (ButtonVariant as any).displayName = getDisplayName(variant);
  }
  return ButtonVariant;
}

export const PrimaryButton = variant(ButtonVariant.Primary);
export const SecondaryButton = variant(ButtonVariant.Secondary);
export const SuccessButton = variant(ButtonVariant.Success);
export const InfoButton = variant(ButtonVariant.Info);
export const WarningButton = variant(ButtonVariant.Warning);
export const DangerButton = variant(ButtonVariant.Danger);
export const LinkButton = variant(ButtonVariant.Link);
