import {ButtonShadowStyle} from './Button';

export interface ButtonVariantStyle {
  activeBackground?: string;
  background?: string;
  borderColor?: string;
  borderRadius?: string;
  color?: string;
  focusBorderColor?: string;
  padding?: string;
  shadowStyle?: ButtonShadowStyle;
}
type ButtonTheme = ButtonVariantStyle & {
  Primary?: ButtonVariantStyle;
  Secondary?: ButtonVariantStyle;
  Success?: ButtonVariantStyle;
  Info?: ButtonVariantStyle;
  Warning?: ButtonVariantStyle;
  Danger?: ButtonVariantStyle;
  Link?: ButtonVariantStyle;
};
export default ButtonTheme;
