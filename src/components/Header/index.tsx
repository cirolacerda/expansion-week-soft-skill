import React from 'react';
import {
  HeaderContent, LogoContent,
} from './styles';

import LogoMega from '../../assets/megafone.png';

import Logo from '../../assets/network.svg';

const Header: React.FC = () => (
  <>
    <HeaderContent>
      <header>
        <img src={LogoMega} alt="Open Mentor" />
        <p>Open Mentor</p>
      </header>
    </HeaderContent>
    <LogoContent>
      <div className="title">
        <h1>Comunicação é o diferencial</h1>
        <p>A Soft Skill que todos os desenvolvedores devem ter! </p>
        <button type="button">Quero dominar a comunicação</button>
      </div>
      <img src={Logo} alt="Comunicação" />
    </LogoContent>
  </>
);

export default Header;
