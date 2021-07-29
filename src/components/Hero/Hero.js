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
        Hi, I'm Davin. <br />
        Welcome to my portfolio.
      </SectionTitle>
      <SectionText>
        Freelance full stack developer and also a teacher.
      </SectionText>
      <Button onClick={() => (window.location = 'http://google.com')}>
        Get In Touch
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
