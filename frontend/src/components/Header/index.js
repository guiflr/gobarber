import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-purple.svg';

import Notitications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notitications />

          <Profile>
            <div>
              <strong>Guilherme Felipe</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src="" alt="" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
