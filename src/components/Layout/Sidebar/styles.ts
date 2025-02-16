import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type ContainerProps = {
  $expanded: boolean;
};

type NavigationItemProps = {
  $isActive: boolean;
};

type UserProps = {
  $isActive: boolean;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${({ theme }) => theme.COLORS.sidebarBackground};
  border-right: 1px solid ${({ theme }) => theme.COLORS.sidebarBorderColor};
  display: flex;
  flex-direction: column;
  width: ${({ $expanded }) => ($expanded ? '300px' : '79px')};

  transition: width 0.6s ease-in-out;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 44px;
  overflow: hidden;
  padding: 26px 0;
`;

export const HeaderLogo = styled.img``;

export const HeaderIcon = styled(GiHamburgerMenu)`
  color: ${({ theme }) => theme.COLORS.sidebarColor};
  font-size: ${({ theme }) => theme.FONT_SIZES.md};
`;

export const NavigationContainer = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
`;

export const NavigationItem = styled.li<NavigationItemProps>`
  background-color: ${({ $isActive, theme }) =>
    $isActive && theme.COLORS.sidebarBackgroundHover};
  border-radius: 4px;
  color: ${({ theme }) => theme.COLORS.sidebarColor};
  cursor: pointer;
  display: flex;
  gap: 14px;
  overflow: hidden;
  padding: 14px 20px;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.sidebarBackgroundHover};
  }
`;

export const NavigationItemIcon = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.FONT_SIZES.xl};
`;

export const NavigationItemLabel = styled.span`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.FONT_SIZES.md};
  font-weight: 700;
  white-space: nowrap;
`;

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.COLORS.sidebarBorderColor};
  margin: 10px;
`;

export const User = styled.div<UserProps>`
  align-items: center;
  background-color: ${({ $isActive, theme }) =>
    $isActive && theme.COLORS.sidebarBackgroundHover};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  padding: 20px 10px;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ $isActive, theme }) =>
      $isActive && theme.COLORS.sidebarBackgroundHover};
  }
`;

export const UserAvatar = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.primary};
  border-radius: 50%;
  color: ${({ theme }) => theme.COLORS.sidebarColor};
  display: flex;
  font-weight: 700;
  justify-content: center;
  min-height: 38px;
  min-width: 38px;
  text-transform: uppercase;
`;

export const UserName = styled.div`
  color: ${({ theme }) => theme.COLORS.sidebarColor};
  flex: 1;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
