import { HashLoader } from 'react-spinners';

import { Container, Label } from './styles';
import { useTheme } from 'styled-components';

export default function Loader() {
  const theme = useTheme();

  return (
    <Container>
      <HashLoader color={theme.COLORS.primary} />
      <Label>Aguarde...</Label>
    </Container>
  );
}
