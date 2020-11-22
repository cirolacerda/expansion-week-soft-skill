import React from 'react';
import { HeaderContent, InforBar, LogoContent } from './styles';

import LogoMentor from '../../assets/mentorslogo.png';

import Logo from '../../assets/network.svg';
import IconUser from '../../assets/user.svg';
import IconLocation from '../../assets/location.svg';
import IconServer from '../../assets/server.svg';

const Header: React.FC = () => (
  <>
    <HeaderContent>
      <header>
        <img src={LogoMentor} alt="Open Mentor" />
        <strong>Open Mentor</strong>
      </header>
    </HeaderContent>
    <LogoContent>
      <div className="title">
        <h1>Comunicação é o diferencial</h1>
        <p>
          A Soft Skill que todos os desenvolvedores precisam ter para alcançar
          as melhores oportunidades!
        </p>
        <button type="button">Quero dominar a comunicação</button>
      </div>
      <img src={Logo} alt="Comunicação" />
    </LogoContent>

    <InforBar>
      <ul>
        <li>
          <img src={IconUser} alt="Devs" />
          <strong>+100K</strong>
          <span>Desenvolvedores</span>
        </li>

        <li>
          <img src={IconLocation} alt="Paises" />
          <strong>+10K</strong>
          <span>Países</span>
        </li>

        <li>
          <img src={IconServer} alt="Empresas" />
          <strong>+30K</strong>
          <span>Empresas</span>
        </li>
      </ul>
    </InforBar>
  </>
);

export default Header;
