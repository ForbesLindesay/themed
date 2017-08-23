import AbstractLabelText, {
  AbstractLabelTextProps,
} from '../AbstractLabelText/AbstractLabelText';
import {abstractComponentRegister, ThemableComponents} from '../../Theme';

export {AbstractLabelTextProps as LabelTextProps};

export default abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.LabelText,
  AbstractLabelText,
);
