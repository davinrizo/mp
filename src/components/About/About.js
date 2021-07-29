import React, { useState, useRef, useEffect } from 'react';

// import {
// } from './AboutStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import styled from 'styled-components';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const StyledAboutSection = styled.section`
  margin: auto;
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  p {
    max-width: 800px;
    font-size: 25px;
    line-height: 30px;
    font-weight: 300;
    padding-bottom: 3.6rem;

    @media ${(props) => props.theme.breakpoints.md} {
      max-width: 670px;
      font-size: 20px;
      line-height: 32px;
      padding-bottom: 24px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 16px;
      line-height: 24px;
      padding-bottom: 16px;
    }
  }
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 300px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: #616161;
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 400px;
  @media ${(props) => props.theme.breakpoints.md} {
    margin: 50px auto 0;
    width: 70%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 50px auto 0;
    padding-right: 16px;
    width: 100%;
  }
  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: 5%;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const skills = [
    'JavaScript (ES6+) || expert',
    'React',
    'Eleventy',
    'Vue',
    'Node.js',
    'WordPress',
  ];
  return (
    <StyledAboutSection id="about">
      <SectionTitle scn className="heading">
        About me
      </SectionTitle>

      <div className="inner">
        <StyledText>
          <div>
            <p>kembur macan</p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img
              className="img"
              src="images/123.jpeg"
              width={300}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="a"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
