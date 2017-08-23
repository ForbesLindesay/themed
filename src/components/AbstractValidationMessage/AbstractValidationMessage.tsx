// @themable ValidationMessage

import * as React from 'react';
import styled, {css} from 'styled-components';

import {StyledComponentClass} from 'styled-components';
export {StyledComponentClass};

export enum ValidationState {
  Hidden,
  Success,
  Info,
  Failure,
}

export interface AbstractValidationMessageProps {
  children: React.ReactNode;
  className?: string;
  'data-test-id'?: string;
  validationState: ValidationState;
  style?: React.CSSProperties;
}

function AbstractValidationMessage({
  validationState,
  ...props,
}: AbstractValidationMessageProps) {
  return <div {...props} />;
}

export default styled(AbstractValidationMessage)`
  opacity: ${props =>
    props.validationState === ValidationState.Hidden ? 0 : 1};
  color: ${props =>
    props.validationState === ValidationState.Success
      ? 'green'
      : props.validationState === ValidationState.Info ? 'inherit' : 'red'};
  ${props =>
    props.validationState === ValidationState.Hidden
      ? css`transform: translate(0,-25%);`
      : css`transform: translate(0,0);`}
  transition: opacity .15s linear, transform .3s ease-in-out;
`;
