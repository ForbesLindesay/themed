import * as React from 'react';
import {AbstractInputBaseProps} from '../AbstractInput/AbstractInput';
import AbstractTextInput from '../AbstractTextInput/AbstractTextInput';
import InputType from '../../enums/InputType';
import ValidationState from '../../enums/ValidationState';

export {ValidationState};

export interface TextInputExtraProps {
  name: string;
  value: string | null;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange: (e: {name: string; value: string | null}) => void;
}
export type TextInputProps = TextInputExtraProps & AbstractInputBaseProps;

export {InputType};

function createTextInput(type: InputType, defaultValidationMessage?: string) {
  const Input = (props: TextInputProps) =>
    <AbstractTextInput
      {...props}
      type={type}
      validationMessage={props.validationMessage || defaultValidationMessage}
    />;
  if (process.env.NODE_ENV === 'development') {
    (Input as any).displayName =
      type[0].toUpperCase() + type.substr(1) + 'Input';
  }
  return Input;
}

export const TextInput = createTextInput(InputType.text);
export const SearchInput = createTextInput(InputType.search);
export const EmailInput = createTextInput(
  InputType.email,
  'Please enter a valid e-mail address',
);
export const UrlInput = createTextInput(
  InputType.url,
  'Please enter a valid, absolute url',
);
export const PasswordInput = createTextInput(InputType.password);
export const DateInput = createTextInput(
  InputType.date,
  'Please enter a valid date',
);
export const LocalTimeInput = createTextInput(
  InputType.localTime,
  'Please enter a valid time',
);
export const NumberInput = createTextInput(
  InputType.number,
  'Please enter a valid number',
);
export const LocalDateTimeInput = createTextInput(
  InputType.localDateTime,
  'Please enter a valid date and time',
);

export default TextInput;
