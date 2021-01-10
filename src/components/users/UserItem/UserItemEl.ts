import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 450px;
    padding: 0.4rem;
    background: #D8E1E9;
    width: 300px;
`;

export const StyledImage = styled.img`
  width: 280px;
  background: rgba(0,0,0,0.5);
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
`;

export const Title = styled.h2`
    font-weight: 400;
    text-align: center;
`;

export const UserLink = styled(Link)`
  background: ${({ primary }) => (primary ? '#f26a2e' : '#077bf1')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-weight: ${({ bold }) => (bold ? '700' : '300')};
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: 0;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};
  &:hover {
    background: ${({ primary }) => (primary ? '#077bf1' : '#f26a2e')};
    transform: translateY(-2px);
  }
  @media (max-width: 900px) {
    /* display: none; */
  }
`;

export const BtnWrap = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const UserLinkExternal = styled.a`
  background: ${({ primary }: any) => (primary ? '#f26a2e' : '#077bf1')};
  white-space: nowrap;
  padding: ${({ big }: any) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-weight: ${({ bold }: any) => (bold ? '700' : '300')};
  font-size: ${({ big }: any) => (big ? '20px' : '16px')};
  outline: 0;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }: any) => (round ? '50px' : 'none')};
  &:hover {
    background: ${({ primary }: any) => (primary ? '#077bf1' : '#f26a2e')};
    transform: translateY(-2px);
  }
  @media (max-width: 900px) {
    /* display: none; */
  }
`;
