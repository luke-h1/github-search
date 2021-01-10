import styled from 'styled-components';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const HeaderWrap = styled.header`
  min-width: 100vw;
  padding: 1.2rem;
  background: #dae2df;
`;

export const AboutLink = styled(Link)`
  ${HeaderLink};
  
`;

export const Title = styled.h2`
  font-weight: 700;
  text-align: center;
`;

export const Icon = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem 0 0 1rem;
`;

export const GithubIcon = styled(FiGithub)`
  color: #000;
  font-size: 25px;
`;
