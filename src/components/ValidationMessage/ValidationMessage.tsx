import AbstractValidationMessage, {
  AbstractValidationMessageProps,
} from '../AbstractValidationMessage/AbstractValidationMessage';
import {abstractComponentRegister, ThemableComponents} from '../../Theme';
import ValidationState from '../../enums/ValidationState';

export {
  ValidationState,
  AbstractValidationMessageProps as ValidationMessageProps,
};

export default abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.ValidationMessage,
  AbstractValidationMessage,
);
