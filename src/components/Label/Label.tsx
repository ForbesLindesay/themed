import * as React from 'react';
import styled from '../../styled-components';

const TextLabel = styled.label`
  display: block;
  margin-bottom: 1em;
  touch-action: manipulation;
`;
const DivLabel = TextLabel.withComponent('div');
const TextLabelName = styled.span`
  display: inline-block;
  margin-bottom: 0.4em;
`;
const ValidationMessage = styled.p`
  color: red;
  transition: opacity ease-in-out .15s, box-shadow ease-in-out .15s,
    -webkit-box-shadow ease-in-out .15s;
`;

export interface LabelProps {
  doNotUseLabel?: boolean;
  children: React.ReactNode;
  /**
   * The human readable description of the field
   */
  label?: string;
  /**
   * Should this element be rendered in the error state (red border and error message visible)
   */
  hasError?: boolean;
  /**
   * Error message to be displayed when `hasError=true`
   */
  errorMessage?: string;
}

export class Label extends React.Component<LabelProps, {}> {
  render() {
    const OuterComponent = this.props.doNotUseLabel ? DivLabel : TextLabel;
    return (
      <OuterComponent>
        <TextLabelName>
          {this.props.label}
        </TextLabelName>
        {this.props.children}
        <ValidationMessage style={{opacity: this.props.hasError ? 1 : 0}}>
          {this.props.errorMessage || '\u00A0'}
        </ValidationMessage>
      </OuterComponent>
    );
  }
}
export default Label;
