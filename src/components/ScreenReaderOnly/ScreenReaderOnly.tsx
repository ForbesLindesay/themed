import styled, {StyledComponentClass} from 'styled-components';

export {StyledComponentClass};

export default styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

// .sr-only-focusable:active, .sr-only-focusable:focus {
//   position: static;
//   width: auto;
//   height: auto;
//   margin: 0;
//   overflow: visible;
//   clip: auto;
// }
