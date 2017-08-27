// @themable InputBox

import * as React from 'react';
import styled, {css} from 'styled-components';
import {StyledComponentClass} from 'styled-components';
import LabelMode from '../../enums/LabelMode';
import ValidationState from '../../enums/ValidationState';

export {ValidationState};

export {StyledComponentClass};

export interface AbstractInputBoxProps {
  children: React.ReactNode;
  className?: string;
  focused: boolean;
  labelMode?: LabelMode;
  validationMessage?: React.ReactNode;
  validationState?: ValidationState;
  style?: React.CSSProperties;
}

function AbstractInputBox(props: AbstractInputBoxProps) {
  return (
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  );
}
export default styled(AbstractInputBox)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  font-size: 1em;
  color: hsl(200, 4%, 29%);
  background-color: white;
  border: 1px solid;
  border-color: ${props =>
    props.validationState === ValidationState.Failure
      ? 'red'
      : 'hsla(0, 0%, 0%, 0.15)'};
  border-radius: .25em;

  // for validation states
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  ${props =>
    props.focused ? css`box-shadow: rgb(68, 0, 255) 0 0 10px 0px;` : ``}
`;
