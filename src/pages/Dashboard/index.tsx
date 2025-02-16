import { ChangeEvent, useState } from 'react';

import { FcBullish, FcCancel, FcOk } from 'react-icons/fc';
import { MdAdd } from 'react-icons/md';

import Button from '../../components/Button';
import SelectInput from '../../components/SelectInput';

import {
  Body,
  BodyRow,
  Container,
  Header,
  HeaderFilter,
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
  const [monthSelected, setMonthSelected] = useState(
    (new Date().getMonth() + 1).toString().padStart(2, '0')
  );
  const [yearSelected, setYearSelected] = useState(
    new Date().getFullYear().toString()
  );

  function handleMonthSelected({ target }: ChangeEvent<HTMLSelectElement>) {
    setMonthSelected(target.value);
  }

  function handleYearSelected({ target }: ChangeEvent<HTMLSelectElement>) {
    setYearSelected(target.value);
  }

  const yearsList = Array.from(
    { length: new Date().getFullYear() - 2025 + 1 },
    (_, index) => {
      return {
        value: (2025 + index).toString(),
        label: (2025 + index).toString(),
      };
    }
  );

  const monthsList = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(new Date().getFullYear(), index, 1);
    return {
      value: (index + 1).toString().padStart(2, '0'),
      label: date.toLocaleDateString('pt-BR', { month: 'long' }),
    };
  });

  return (
    <Container>
      <Header>
        <HeaderInfo>
          <HeaderTitle>Meu saldo</HeaderTitle>
          <HeaderSubtitle>
            Acompanhe o seu saldo e filtre por mês e ano com facilidade.
          </HeaderSubtitle>
        </HeaderInfo>

        <HeaderFilter>
          <SelectInput
            value={monthSelected}
            options={monthsList}
            onChange={handleMonthSelected}
          />

          <SelectInput
            value={yearSelected}
            options={yearsList}
            onChange={handleYearSelected}
          />
        </HeaderFilter>
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
