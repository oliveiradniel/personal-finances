import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.background};
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  justify-content: center;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.COLORS.textColor400};
  font-size: 14px;
  font-weight: 700;
`;
