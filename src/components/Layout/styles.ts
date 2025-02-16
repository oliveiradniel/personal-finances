import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
`;

export const NavbarContent = styled.div`
  background-color: ${({ theme }) => theme.COLORS.navbarBackground};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.borderColor};
  height: 70px;
`;

export const BodyContent = styled.div`
  background-color: ${({ theme }) => theme.COLORS.background};
  height: calc(100vh - 70px);
  overflow: auto;
`;
