import AbstractFormGroup, {
  AbstractFormGroupProps,
} from '../AbstractFormGroup/AbstractFormGroup';
import {abstractComponentRegister, ThemableComponents} from '../../Theme';
import ValidationState from '../../enums/ValidationState';

export {ValidationState};

export {AbstractFormGroupProps as FormGroupProps};

export default abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.FormGroup,
  AbstractFormGroup,
);
