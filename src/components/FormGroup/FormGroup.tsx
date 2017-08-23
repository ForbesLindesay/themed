import AbstractFormGroup, {
  AbstractFormGroupProps,
} from '../AbstractFormGroup/AbstractFormGroup';
import {abstractComponentRegister, ThemableComponents} from '../../Theme';

export {AbstractFormGroupProps as FormGroupProps};

export default abstractComponentRegister.registerAbstractComponent(
  ThemableComponents.FormGroup,
  AbstractFormGroup,
);
