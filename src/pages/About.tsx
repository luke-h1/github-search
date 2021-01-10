/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const AboutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 50vh;
`;

const AboutDesc = styled.div`
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
  width: 800px;
  margin: 0 auto;
`;

const AboutContent = styled.p`
  font-size: 22px;
  color: #000;
`;

const List = styled.ul`
  list-style-type: none;
`;

const Item = styled.li`
  margin: 3rem 0 3rem 0;
`;

const Title = styled.h1`
  text-align: center;
  color: #000;
`;

const SocialLinks = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const About = () => {
  return (
    <AboutWrap>
      <h1>About this site </h1>
      <AboutDesc>
        <AboutContent>
          <List>
            <Title>Frontend:</Title>
            <Item>
              React application which utilises React Hooks & Context to fetch and display results about github users
            </Item>
            <Title>Backend:</Title>
            <Item>
              Utilizes Node JS, Express, Babel & jest to run an express server in order to hide sensitive github API keys + secrets. This server makes calls to the github API and returns that to the React frontend to consume
            </Item>
          </List>
          <SocialLinks />
        </AboutContent>
      </AboutDesc>
    </AboutWrap>
  );
};
export default About;
