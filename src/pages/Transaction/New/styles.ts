import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Loading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;
`;
export const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.borderColor};
  display: flex;
  justify-content: space-between;
  padding: 40px 50px;
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

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 50px;
`;

export const Footer = styled.div`
  padding: 5px 50px;
`;
