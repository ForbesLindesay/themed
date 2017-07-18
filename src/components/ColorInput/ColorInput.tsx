import * as React from 'react';
import styled from '../../styled-components';
import Label from '../Label/Label';
import AbstractButton from '../AbstractButton/AbstractButton';
const {ChromePicker} = require('react-color');

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
export interface ColorInputProps {
  /**
   * Set this to true to remove the alpha slider and options
   */
  disableAlpha?: boolean;
  /**
   * The human readable description of the field
   */
  label?: string;
  /**
   * A name, included in the callback
   */
  name: string;
  /**
   * The color in hex format
   */
  value: string;
  /**
   * Should this element be rendered in the error state (red border and error message visible)
   */
  hasError?: boolean;
  /**
   * Error message to be displayed when `hasError=true`
   */
  errorMessage?: string;
  /**
   * A callback called on change with `{name: string, value: string}`
   */
  onChange: (e: ChangeEvent) => void;
}

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
  render() {
    // We pass doNotUseLabel to disable the slightly odd behaviour that mouse clicks exhibit when inside labels
    return (
      <Label
        doNotUseLabel={true}
        label={this.props.label}
        hasError={this.props.hasError}
        errorMessage={this.props.errorMessage}
      >
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
      </Label>
    );
  }
}

export default ColorInput;
