import * as React from 'react';
import styled from '../../styled-components';
import Style from '../../Style';

const FluidStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  margin-left: auto;
  margin-right: auto;
`;
const StyledContainer = styled(FluidStyledContainer)`
  max-width: 1140px;
`;

export interface ContainerProps {
  children?: React.ReactNode;
  fluid?: boolean;
  style?: Style;
}

/**
 * A container to add margin on the left and right of a page.
 */
export const Container = ({children, fluid = false, style}: ContainerProps) => {
  if (fluid) {
    return (
      <FluidStyledContainer style={style}>
        {children}
      </FluidStyledContainer>
    );
  }
  return (
    <StyledContainer style={style}>
      {children}
    </StyledContainer>
  );
};

export default Container;
