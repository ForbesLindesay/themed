import * as React from 'react';
import AbstractInput, {
  AbstractInputBaseProps,
  RenderInputProps,
} from '../AbstractInput/AbstractInput';
import AbstractInputCore from '../AbstractInputCore/AbstractInputCore';
import InputBox from '../InputBox/InputBox';
import InputType from '../../enums/InputType';
import ValidationState from '../../enums/ValidationState';

export {ValidationState};

export interface AbstractTextInputExtraProps {
  type: InputType;
  name: string;
  value: string | null;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
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
        {this.props.prefix}
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
        {this.props.suffix}
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
