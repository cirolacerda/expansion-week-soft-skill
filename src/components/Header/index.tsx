import React from 'react';
import { Container, LogoContent, TextContent } from './styles';

import Logo from '../../assets/network.svg';

const Header: React.FC = () => (
  <>
    <header>
      <p>Open Mentor</p>
    </header>
    <LogoContent>
      <div className="title">
        <h1>COMUNICAÇÃO</h1>
        <p>A Soft Skill que todos os desenvolvedores devem ter! </p>
        <button type="button">Quero me comunicar</button>
        <img src={Logo} alt="Open Mentor" />
      </div>
    </LogoContent>
  </>
);

export default Header;
