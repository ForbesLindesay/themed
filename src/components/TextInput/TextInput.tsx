import * as React from 'react';
import styled from '../../styled-components';

export const enum InputMode {
  Normal,
  Row,
  Inline,
}

export const enum InputType {
  text = 'text',
  search = 'search',
  email = 'email',
  url = 'url',
  password = 'password',
  date = 'date',
  localTime = 'time',

  // the rest of these have separate wrapper components
  // for parsing/validating the values
  localDateTime = 'datetime-local',
  number = 'tel',
}

const TextLabel = styled.label`
  display: block;
  margin-bottom: 1em;
  touch-action: manipulation;
`;
const TextLabelName = styled.span`
  display: inline-block;
  margin-bottom: 0.4em;
`;
function AbstractTextInput({
  hasError,
  ...props,
}: React.ChangeTargetHTMLProps<HTMLInputElement> & {hasError: boolean}) {
  return <input {...props} />;
}
const TextInputStyled = styled(AbstractTextInput)`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: .5em .75em;
  font-size: 1em;
  color: hsl(200, 4%, 29%);
  background-color: white;
  border: 1px solid;
  border-color: ${props => (props.hasError ? 'red' : 'hsla(0, 0%, 0%, 0.15)')};
  border-radius: ${// make search always render as a pill shaped input
  props => (props.type === 'search' ? '100vw' : '.25em')};

  // for validation states
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  :invalid {
    border-color: red;
  }
`;
const ValidationMessage = styled.p`
  color: red;
  transition: opacity ease-in-out .15s, box-shadow ease-in-out .15s,
    -webkit-box-shadow ease-in-out .15s;
`;

export interface ChangeEvent {
  name: string;
  value: string | null;
}
export interface InputProps {
  /**
   * This property is for internal usage, please use the typed exports
   */
  type?: InputType;
  mode?: InputMode;
  /**
   * The human readable description of the field
   */
  label?: string;
  /**
   * A name, included in the callback
   */
  name: string;
  /**
   * The value of the field, the empty string is always represented as `null` in callbacks
   */
  value: string | null;
  /**
   * Should this element be rendered in the error state (red border and error message visible)
   */
  hasError?: boolean;
  /**
   * Error message to be displayed when `hasError=true`
   */
  errorMessage?: string;
  /**
   * A callback called on change with `{name: string, value: string | null}`
   */
  onChange: (e: ChangeEvent) => void;
}

export const TextInput = (props: InputProps) => {
  return (
    <TextLabel>
      <TextLabelName>
        {props.label}
      </TextLabelName>
      <TextInputStyled
        type={props.type || 'text'}
        name={props.name}
        value={props.value || ''}
        hasError={props.hasError || false}
        onChange={e =>
          props.onChange({
            name: e.currentTarget.name,
            value: e.currentTarget.value || null,
          })}
      />
      <ValidationMessage style={{opacity: props.hasError ? 1 : 0}}>
        {props.errorMessage || '\u00A0'}
      </ValidationMessage>
    </TextLabel>
  );
};

export interface TextInputProps {
  mode?: InputMode;
  label?: string;
  name: string;
  value: string | null;
  hasError?: boolean;
  errorMessage?: string;
  onChange: (e: {name: string; value: string | null}) => void;
}

function createTextInput(type: InputType, defaultErrorMessage?: string) {
  const Input = (props: TextInputProps) =>
    TextInput({
      ...props,
      type,
      errorMessage: props.errorMessage || defaultErrorMessage,
    });
  if (process.env.NODE_ENV === 'development') {
    (Input as any).displayName =
      type[0].toUpperCase() + type.substr(1) + 'Input';
  }
  return Input;
}

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

export default TextInput;
