// @themable FormGroup

import * as React from 'react';
import styled, {css} from 'styled-components';
import {StyledComponentClass} from 'styled-components';
import LabelMode from '../../enums/LabelMode';

export {StyledComponentClass};

export interface AbstractFormGroupProps {
  children?: React.ReactNode;
  className?: string;
  component?: 'div' | 'label';
  labelMode?: LabelMode;
  style?: React.CSSProperties;
}
function AbstractFormGroup({
  component,
  labelMode,
  ...props,
}: AbstractFormGroupProps) {
  const OuterComponent = component === 'div' ? 'div' : 'label';
  return <OuterComponent {...props} />;
}
export default styled(AbstractFormGroup)`
  display: flex;
  flex-direction: ${props =>
    props.labelMode === LabelMode.Normal ? 'column' : 'row'};
  margin-bottom: 1em;
  ${props =>
    props.component !== 'div' ? css`touch-action: manipulation;` : ''}
`;
