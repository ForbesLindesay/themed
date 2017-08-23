import AbstractValidationMessage, {
  ValidationState,
  AbstractValidationMessageProps,
} from '../AbstractValidationMessage/AbstractValidationMessage';
import {abstractComponentRegister, ThemableComponents} from '../../Theme';

export {
  ValidationState,
  AbstractValidationMessageProps as ValidationMessageProps,
};

export default abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.ValidationMessage,
  AbstractValidationMessage,
);
