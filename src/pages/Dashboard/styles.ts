import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.borderColor};
  display: flex;
  gap: 4px;
  justify-content: space-between;
  padding: 40px 60px 40px 50px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.span`
  color: ${({ theme }) => theme.COLORS.textColor500};
  font-size: ${({ theme }) => theme.FONT_SIZES.xl};
  font-weight: 800;
`;

export const HeaderSubtitle = styled.span`
  color: ${({ theme }) => theme.COLORS.textColor500};
  font-size: 14px;
  opacity: 0.7;
`;

export const HeaderFilter = styled.div`
  align-items: center;
  display: flex;
  gap: 14px;
  width: 320px;
`;

export const Loading = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Body = styled.div`
  flex: 1;
  padding: 40px 50px;
`;

export const BodyRow = styled.div`
  display: flex;
  gap: 10px;

  & + div {
    margin-top: 30px;
  }
`;

export const InformationCard = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.borderColor};
  border-radius: 10px;
  display: flex;
  gap: 25px;
  padding: 35px 30px;
  width: 100%;
`;

export const InformationCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InformationCardContentValue = styled.span`
  color: ${({ theme }) => theme.COLORS.textColor500};
  font-size: ${({ theme }) => theme.FONT_SIZES.lg};
  font-weight: 700;
`;

export const InformationCardContentLabel = styled.span`
  color: ${({ theme }) => theme.COLORS.textColor400};
  font-weight: 600;
`;

export const NewTransactionCard = styled(Link)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.primaryBackgroundExtraLight};
  border: 1px solid ${({ theme }) => theme.COLORS.borderColor};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  padding: 30px;
  text-decoration: none;
  width: 100%;

  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.COLORS.primary};
  }
`;

export const NewTransactionCardLabel = styled.span`
  color: ${({ theme }) => theme.COLORS.primary};
  font-size: ${({ theme }) => theme.FONT_SIZES.lg};
  font-weight: 800;
`;
