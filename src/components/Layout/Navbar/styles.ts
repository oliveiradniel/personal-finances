import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 60px;
  user-select: none;
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const Icon = styled.div`
  align-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.COLORS.navbarColor};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.FONT_SIZES.xl};
  height: 42px;
  justify-content: center;
  width: 42px;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.navbarBackgroundHover};
  }
`;
