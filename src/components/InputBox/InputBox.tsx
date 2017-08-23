import AbstractInputBox, {
  AbstractInputBoxProps,
} from '../AbstractInputBox/AbstractInputBox';
import {abstractComponentRegister, ThemableComponents} from '../../Theme';

export {AbstractInputBoxProps as InputBoxProps};

export default abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.InputBox,
  AbstractInputBox,
);
