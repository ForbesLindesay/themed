import * as React from 'react';
import AbstractInput, {
  AbstractInputBaseProps,
  RenderInputProps,
  ValidationState,
} from '../AbstractInput/AbstractInput';
import AbstractInputCore from '../AbstractInputCore/AbstractInputCore';
import InputBox from '../InputBox/InputBox';
import InputType from '../../enums/InputType';

export {ValidationState};

export interface AbstractTextInputExtraProps {
  type: InputType;
  name: string;
  value: string | null;
  placeholder?: string;
  onChange: (e: {name: string; value: string | null}) => void;
}
export type AbstractTextInputProps = AbstractTextInputExtraProps &
  AbstractInputBaseProps;

class AbstractTextInput extends React.Component<AbstractTextInputProps> {
  _renderInput = ({
    focused,
    labelMode,
    validationMessage,
    validationState,
    onFocus,
    onBlur,
  }: RenderInputProps) => {
    return (
      <InputBox
        focused={focused}
        labelMode={labelMode}
        validationMessage={validationMessage}
        validationState={validationState}
      >
        <AbstractInputCore
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          validationMessage={validationMessage}
          validationState={validationState}
          onChange={this.props.onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </InputBox>
    );
  };
  render() {
    return (
      <AbstractInput
        formGroupComponent="label"
        inputContainerStyle={this.props.inputContainerStyle}
        label={this.props.label}
        labelMode={this.props.labelMode}
        labelStyle={this.props.labelStyle}
        required={this.props.required}
        validationMessage={this.props.validationMessage}
        validationState={this.props.validationState || ValidationState.Hidden}
        renderInput={this._renderInput}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
      />
    );
  }
}
export default AbstractTextInput;
