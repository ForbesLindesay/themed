import * as React from 'react';
import styled from 'styled-components';
import {StyledComponentClass} from 'styled-components';
import InputType from '../../enums/InputType';
import ValidationState from '../../enums/ValidationState';

export {ValidationState};

export {InputType, StyledComponentClass};

export interface AbstractInputCoreProps {
  className?: string;
  style?: React.CSSProperties;
  type: InputType;
  name: string;
  value: string | null;
  placeholder?: string;
  validationMessage?: React.ReactNode;
  validationState?: ValidationState;
  onChange: (e: {name: string; value: string | null}) => void;
  onFocus: () => void;
  onBlur: () => void;
}

class AbstractInputCore extends React.Component<AbstractInputCoreProps> {
  _input: null | HTMLInputElement = null;
  _focusPending: boolean = false;
  _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange({
      name: this.props.name,
      value: e.target.value || null,
    });
  };
  focus() {
    if (this._input) {
      this._input.focus();
    } else {
      this._focusPending = true;
    }
  }
  _onInputRef = (input: HTMLInputElement | null) => {
    this._input = input;
    if (input) {
      if (this._focusPending) {
        input.focus();
        this._focusPending = false;
      }
      this._updateCustomValidity(input);
    }
  };
  componentWillReceiveProps(props: AbstractInputCoreProps) {
    if (this._input) {
      this._updateCustomValidity(this._input);
    }
  }
  _updateCustomValidity(input: HTMLInputElement) {
    if (input.setCustomValidity) {
      if (this.props.validationState === ValidationState.Failure) {
        // setCustomValidity will prevent `onSubmit` from firing in forms
        const message = this.props.validationMessage
          ? this.props.validationMessage.toString().trim()
          : null;
        input.setCustomValidity(message || 'Please enter a valid value');
      } else {
        // setting validity to the empty string removes the validation error
        input.setCustomValidity('');
      }
    }
  }
  render() {
    const {validationMessage, validationState, ...props} = this.props;
    return (
      <input
        {...props}
        value={props.value || ''}
        onChange={this._onChange}
        ref={this._onInputRef}
      />
    );
  }
}

const StyledAbstractInputCore = styled(AbstractInputCore)`
  display: block;
  flex-grow: 1;
  font: inherit;
  color: inherit;
  background: none;
  border: none;
  outline: none;
  padding: .8em 1em;
  margin: 0;
`;

StyledAbstractInputCore.defaultProps = {
  type: InputType.text,
};

export default StyledAbstractInputCore;
