import Link from 'next/link';
import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { VscSymbolNamespace } from 'react-icons/vsc';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'black',
            marginBottom: '20px',
          }}
        >
          <VscSymbolNamespace size="3rem" /> <Span> Davinrizo</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/">
        <FiGithub size="2rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/">
        <FiLinkedin size="2rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
