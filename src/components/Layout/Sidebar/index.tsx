import { useState } from 'react';

import { useLocation } from 'react-router-dom';

import {
  MdOutlineAddTask,
  MdOutlineDashboard,
  MdOutlineList,
} from 'react-icons/md';

import { useAppSelector } from '../../../redux/hooks';

import Button from '../../Button';

import {
  Container,
  Footer,
  Header,
  HeaderIcon,
  HeaderLogo,
  NavigationContainer,
  NavigationItem,
  NavigationItemIcon,
  NavigationItemLabel,
  StyledLink,
  User,
  UserAvatar,
  UserName,
} from './styles';

const menuItems = [
  { label: 'Dashboard', url: '/', icon: <MdOutlineDashboard /> },
  {
    label: 'Nova Transação',
    url: '/transações/nova',
    icon: <MdOutlineAddTask />,
  },
  { label: 'Transações', url: '/transações', icon: <MdOutlineList /> },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const { pathname } = useLocation();

  const auth = useAppSelector((state) => state.auth);

  function handleToggleExpanded() {
    setIsExpanded((prevState) => !prevState);
  }

  return (
    <Container $expanded={isExpanded}>
      <Header>
        {isExpanded && (
          <StyledLink to="/">
            <HeaderLogo src="/logo.png" alt="Logo Image" />
          </StyledLink>
        )}

        <Button
          borderRadius="rounded"
          type="button"
          onClick={handleToggleExpanded}
        >
          <HeaderIcon />
        </Button>
      </Header>

      <NavigationContainer>
        {menuItems.map((item, key) => (
          <StyledLink key={key} to={item.url}>
            <NavigationItem $isActive={pathname === item.url}>
              <NavigationItemIcon>{item.icon}</NavigationItemIcon>
              <NavigationItemLabel>{item.label}</NavigationItemLabel>
            </NavigationItem>
          </StyledLink>
        ))}
      </NavigationContainer>

      <Footer>
        <StyledLink to="/perfil">
          <User $isActive={pathname === '/account'}>
            <UserAvatar>{auth.user?.name.slice(0, 2)}</UserAvatar>
            <UserName>{auth.user?.name}</UserName>
          </User>
        </StyledLink>
      </Footer>
    </Container>
  );
}
