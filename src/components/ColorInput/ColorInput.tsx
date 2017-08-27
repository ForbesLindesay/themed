import * as React from 'react';
import styled from 'styled-components';
import AbstractButton from '../AbstractButton/AbstractButton';
import AbstractInput, {
  AbstractInputBaseProps,
  RenderInputProps,
  ValidationState,
} from '../AbstractInput/AbstractInput';
const {ChromePicker} = require('react-color');

export {ValidationState};

const Button = styled(AbstractButton)`
  box-sizing: border-box;
  display: block;
  width: 4em;
  height: 2em;
  box-shadow: 0 0 0 .25em white, rgba(0,0,0,0.2) .15em .075em 3px 3px;
  border-radius: 0.25em;
  &:active:focus {
    outline: none;
  }
`;
const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const Popover = styled.div`
  position: absolute;
  z-index: 2;
  margin-top: 0.5em;
`;

export interface ChangeEvent {
  name: string;
  value: string | null;
}

export interface ColorInputExtraProps {
  /**
   * Set this to true to remove the alpha slider and options
   */
  disableAlpha?: boolean;
  /**
   * A name, included in the callback
   */
  name: string;
  /**
   * The color in hex format
   */
  value: string | null;
  /**
   * A callback called on change with `{name: string, value: string}`
   */
  onChange: (e: {name: string; value: string | null}) => void;
}
export type ColorInputProps = ColorInputExtraProps & AbstractInputBaseProps;

export class ColorInput extends React.Component<
  ColorInputProps,
  {displayColorPicker: boolean}
> {
  _lastToggle = Date.now();
  state = {displayColorPicker: false};
  _onClick = (e: any) => {
    this.setState(s => ({displayColorPicker: !s.displayColorPicker}));
  };
  _onHide = (e: any) => {
    this.setState({displayColorPicker: false});
  };
  _onChange = (color: {hex: string}) => {
    this.props.onChange({name: this.props.name, value: color.hex});
  };

  _renderInput = ({
    focused,
    labelMode,
    validationMessage,
    validationState,
    onFocus,
    onBlur,
  }: RenderInputProps) => {
    return (
      <div>
        <Button style={{background: this.props.value}} onClick={this._onClick}>
          {' '}
        </Button>
        {this.state.displayColorPicker
          ? <Popover>
              <Cover onClick={this._onHide} />
              <ChromePicker
                type="button"
                color={this.props.value}
                disableAlpha={this.props.disableAlpha}
                onChangeComplete={this._onChange}
              />
            </Popover>
          : null}
      </div>
    );
  };

  render() {
    // We use a div to disable the slightly odd behaviour that mouse
    // clicks exhibit when inside labels
    return (
      <AbstractInput
        formGroupComponent="div"
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

export default ColorInput;
