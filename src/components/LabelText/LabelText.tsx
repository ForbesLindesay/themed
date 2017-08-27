import AbstractLabelText, {
  AbstractLabelTextProps,
} from '../AbstractLabelText/AbstractLabelText';
import {abstractComponentRegister, ThemableComponents} from '../../Theme';
import ValidationState from '../../enums/ValidationState';

export {ValidationState};

export {AbstractLabelTextProps as LabelTextProps};

export default abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.LabelText,
  AbstractLabelText,
);
