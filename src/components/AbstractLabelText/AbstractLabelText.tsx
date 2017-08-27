// @themable LabelText

import * as React from 'react';
import styled, {StyledComponentClass} from 'styled-components';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import LabelMode from '../../enums/LabelMode';
import ValidationState from '../../enums/ValidationState';

export {ValidationState};

export {StyledComponentClass};

export interface AbstractLabelTextProps {
  children: React.ReactNode;
  className?: string;
  labelMode?: LabelMode;
  required?: boolean;
  style?: React.CSSProperties;
  validationMessage?: React.ReactNode;
  validationState?: ValidationState;
}
function AbstractLabelText({
  validationMessage,
  validationState,
  labelMode,
  required,
  ...props,
}: AbstractLabelTextProps) {
  if (labelMode === LabelMode.Inline) {
    return (
      <ScreenReaderOnly>
        {props.children}
      </ScreenReaderOnly>
    );
  }
  return <span {...props} />;
}
export default styled(AbstractLabelText)`
  display: inline-block;
  margin-bottom: 0.4em;
`;
