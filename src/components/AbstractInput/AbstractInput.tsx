import * as React from 'react';
import FormGroup from '../FormGroup/FormGroup';
import LabelText from '../LabelText/LabelText';
import ValidationMessage from '../ValidationMessage/ValidationMessage';
import LabelMode from '../../enums/LabelMode';
import {abstractComponentRegister} from '../../Theme';
import ValidationState from '../../enums/ValidationState';

export {ValidationState};

export interface RenderInputProps {
  focused: boolean;
  labelMode: LabelMode;
  validationMessage?: React.ReactNode;
  validationState: ValidationState;
  onFocus: () => void;
  onBlur: () => void;
}
export interface RenderInputLayoutProps {
  renderInput: (props: RenderInputProps) => React.ReactNode;

  formGroupProps: {
    component: 'div' | 'label';
    labelMode: LabelMode;
  };
  labelProps: {
    labelMode: LabelMode;
    required: boolean;
    validationMessage: React.ReactNode;
    validationState: ValidationState;
    style: React.CSSProperties;
  };
  renderInputProps: RenderInputProps;

  focused: boolean;
  formGroupComponent: 'div' | 'label';
  inputContainerStyle: React.CSSProperties;
  label: React.ReactNode;
  labelMode: LabelMode;
  labelStyle: React.CSSProperties;
  required: boolean;
  validationMessage: React.ReactNode;
  validationState: ValidationState;
  onFocus: () => void;
  onBlur: () => void;
}

export interface AbstractInputProps {
  renderInput: (props: RenderInputProps) => React.ReactNode;

  formGroupComponent?: 'div' | 'label';
  inputContainerStyle?: React.CSSProperties;
  label: React.ReactNode;
  labelMode?: LabelMode;
  labelStyle?: React.CSSProperties;
  required?: boolean;
  validationMessage?: React.ReactNode;
  validationState: ValidationState;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface AbstractInputBaseProps {
  inputContainerStyle?: React.CSSProperties;
  label: React.ReactNode;
  labelMode?: LabelMode;
  labelStyle?: React.CSSProperties;
  required?: boolean;
  validationMessage?: React.ReactNode;
  validationState?: ValidationState;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface State {
  focused: boolean;
}

export function renderAbstractInput(props: RenderInputLayoutProps) {
  return (
    <FormGroup {...props.formGroupProps}>
      <LabelText {...props.labelProps}>
        {props.label}
      </LabelText>
      <div style={props.inputContainerStyle}>
        {props.renderInput(props.renderInputProps)}
        <ValidationMessage validationState={props.validationState}>
          {props.validationMessage || '\u00A0'}
        </ValidationMessage>
      </div>
    </FormGroup>
  );
}

class AbstractInput extends React.Component<AbstractInputProps, State> {
  state: State = {
    focused: false,
  };
  _onFocus = () => {
    this.setState({focused: true});
  };
  _onBlur = () => {
    this.setState({focused: false});
  };
  render() {
    const render =
      abstractComponentRegister.getInputLayout() || renderAbstractInput;

    const formGroupComponent = this.props.formGroupComponent || 'label';
    const labelMode = this.props.labelMode || LabelMode.Normal;
    const labelStyle = this.props.labelStyle || {};
    const required = this.props.required || false;
    const validationMessage: React.ReactNode =
      this.props.validationMessage || '\u00A0';
    const validationState =
      this.props.validationState || ValidationState.Hidden;

    return render({
      formGroupProps: {
        component: formGroupComponent,
        labelMode,
      },
      labelProps: {
        labelMode,
        required,
        validationMessage,
        validationState,
        style: labelStyle,
      },
      renderInput: this.props.renderInput,
      renderInputProps: {
        focused: this.state.focused,
        labelMode,
        validationMessage,
        validationState,
        onFocus: this._onFocus,
        onBlur: this._onBlur,
      },

      focused: this.state.focused,
      formGroupComponent,
      inputContainerStyle: this.props.inputContainerStyle || {},
      label: this.props.label,
      labelMode,
      labelStyle,
      required,
      validationMessage,
      validationState,
      onFocus: this._onFocus,
      onBlur: this._onBlur,
    });
  }
}
export default AbstractInput;
