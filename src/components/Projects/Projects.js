import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle scn className="heading">
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map((p) => (
        <BlogCard key={p.id}>
          <Img src={p.image} />
          <HeaderThree title>{p.title}</HeaderThree>
          <Hr />
          <TitleContent></TitleContent>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
