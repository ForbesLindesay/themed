import AbstractInputBox, {
  AbstractInputBoxProps,
} from '../AbstractInputBox/AbstractInputBox';
import {abstractComponentRegister, ThemableComponents} from '../../Theme';
import ValidationState from '../../enums/ValidationState';

export {ValidationState};

export {AbstractInputBoxProps as InputBoxProps};

export default abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.InputBox,
  AbstractInputBox,
);
