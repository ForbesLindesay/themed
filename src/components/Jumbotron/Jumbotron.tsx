import * as React from 'react';
import Style from '../../Style';
import styled from '../../styled-components';

const StyledJumbotron = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${props =>
    (props.theme.Jumbotron && props.theme.Jumbotron.fontSize) || '1.5em'};
  padding: ${props =>
    (props.theme.Jumbotron && props.theme.Jumbotron.padding) || '2em 1em'};
  background-color: ${props =>
    (props.theme.Jumbotron && props.theme.Jumbotron.backgroundColor) ||
    'hsl(200, 9%, 93%)'};
  border-radius: ${props =>
    (props.theme.Jumbotron && props.theme.Jumbotron.borderRadius) || '.2em'};
`;

export interface JumbotronProps {
  children: React.ReactNode;
  style?: Style;
}

/**
 * A component to emphasize a section of a web page
 */
export const Jumbotron = (props: JumbotronProps) => {
  return (
    <StyledJumbotron style={props.style}>
      {props.children}
    </StyledJumbotron>
  );
};

export default Jumbotron;
