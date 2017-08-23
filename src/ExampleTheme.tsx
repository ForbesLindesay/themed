import styled from 'styled-components';
import defineTheme, {ThemableComponents} from './Theme';

const t = defineTheme<{}>();
t.register(ThemableComponents.ValidationMessage, AbstractValidationMessage => {
  return styled(AbstractValidationMessage)`
    font-weight: 600;
  `;
});
