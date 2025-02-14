import { useState } from 'react';

import useTheme from '../../../hooks/useTheme';
import useAuth from '../../../hooks/useAuth';

import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';

import { Container, Icon, LeftSide, RightSide } from './styles';

export default function Navbar() {
  const [fullScreenEnabled, setFullScreenEnabled] = useState(false);

  const { handleToggleTheme, theme } = useTheme();
  const { handleSignOut } = useAuth();

  async function handleToggleFullScreen() {
    let enabled = true;

    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      await document.exitFullscreen();
      enabled = false;
    }

    setFullScreenEnabled(enabled);
  }

  return (
    <Container>
      <LeftSide>
        <Icon onClick={handleToggleFullScreen}>
          {fullScreenEnabled ? <BiExitFullscreen /> : <BiFullscreen />}
        </Icon>
      </LeftSide>
      <RightSide>
        <Icon onClick={handleToggleTheme}>
          {theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </Icon>

        <Icon onClick={handleSignOut}>
          <TbLogout />
        </Icon>
      </RightSide>
    </Container>
  );
}
