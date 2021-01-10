import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TiTickOutline } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

export const SingleUserWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 30vh;
    background: #878C8F;
    max-width: 100vw;
    margin: 0 auto;
`;

export const CardWrapContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin: 0 auto;
    color: #fff;
    background: #000; 
`;

export const FlexWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const List = styled.ul`
    list-style-type: none;
    margin-left: 20px;
    font-size: 18px;
    li { 
        margin: 15px 0 15px 0;
    }
`;

export const ListItem = styled.li`
    text-align: center;
    
`;

export const StyleP = styled.p`
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 1px;
`;

export const ContainerWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    margin-left: 1rem;  
`;

export const ExtLink = styled.a`
    color: #fff;
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    margin-bottom: 2rem;
    &:hover { 
        text-decoration: underline;
    }
`;

export const SingleLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 1.5rem;
  padding-bottom: 1rem;
  font-size: 20px;
  &:hover { 
      text-decoration: underline;
  }
`;

export const Tick = styled(TiTickOutline)`
    font-size: 45px;
    color: green;
    margin: 1rem 0 1rem 0;
`;

export const Cross = styled(ImCross)`
    font-size: 45px;
    color: red;
    margin: 1rem 0 1rem 0;
`;

export const CardGrid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 

`;

export const CenterWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Badge = styled.p`
  display: inline-block;
  font-size: 1.8rem;
  padding: 0.2rem 0.7rem;
  text-align: center;
  margin: 0.3rem;
  color: #fff;
  border-radius: 5px;
`;

export const SubTitle = styled.h1`
    color: #fff;
    margin: 2rem;
    text-decoration: underline;
`;
