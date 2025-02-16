import { FcBullish, FcCancel, FcOk } from 'react-icons/fc';
import { MdAdd } from 'react-icons/md';

import Button from '../../components/Button';

import {
  Body,
  BodyRow,
  Container,
  Header,
  HeaderInfo,
  HeaderSubtitle,
  HeaderTitle,
  InformationCard,
  InformationCardContent,
  InformationCardContentLabel,
  InformationCardContentValue,
  NewTransactionCard,
  NewTransactionCardLabel,
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <HeaderInfo>
          <HeaderTitle>Meu saldo</HeaderTitle>
          <HeaderSubtitle>
            Acompanhe o seu saldo e filtre por mês e ano com facilidade.
          </HeaderSubtitle>
        </HeaderInfo>
      </Header>

      <Body>
        <BodyRow>
          <InformationCard>
            <FcBullish size={32} />

            <InformationCardContent>
              <InformationCardContentValue>0</InformationCardContentValue>

              <InformationCardContentLabel>
                Saldo atual do mês!
              </InformationCardContentLabel>
            </InformationCardContent>
          </InformationCard>

          <InformationCard>
            <FcCancel size={32} />

            <InformationCardContent>
              <InformationCardContentValue>0</InformationCardContentValue>

              <InformationCardContentLabel>
                Transações Pendentes
              </InformationCardContentLabel>
            </InformationCardContent>
          </InformationCard>

          <InformationCard>
            <FcOk size={32} />

            <InformationCardContent>
              <InformationCardContentValue>0</InformationCardContentValue>

              <InformationCardContentLabel>
                Transações Concluídas
              </InformationCardContentLabel>
            </InformationCardContent>
          </InformationCard>
        </BodyRow>

        <BodyRow>
          <NewTransactionCard to="transações/nova">
            <Button borderRadius="rounded">
              <MdAdd size={21} />
            </Button>
            <NewTransactionCardLabel>
              Criar nova transação
            </NewTransactionCardLabel>
          </NewTransactionCard>
        </BodyRow>
      </Body>
    </Container>
  );
}
