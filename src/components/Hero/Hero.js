import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Johnny Knoxville. <br />
        Welcome to jackass
      </SectionTitle>
      <SectionText>Welcome to paradise sweet carolina</SectionText>
      <Button onClick={() => (window.location = 'http://google.com')}>
        Get In Touch
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
