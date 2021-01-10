import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TiTickOutline } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

export const SingleUserWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    background: #EEE5E9;
    max-width: 1000px;
    margin: 0 auto;
`;

export const List = styled.ul`
    list-style-type: none;
    margin-left: 20px;
    font-size: 18px;
    li { 
        margin: 15px 0 15px 0;
    }
`;

export const StyleP = styled.p`
    font-size: 18px;
    text-align: left;
    font-weight: 700;
`;

export const ContainerWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    margin-left: 1rem;  
`;

export const ExtLink = styled.a`
    text-align: left;
    color: #000;
    margin-left: 1rem;
    color: blue;
`;

export const SingleLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin: 1.5rem;
  padding-bottom: 1rem;
  font-size: 20px;
`;

export const Tick = styled(TiTickOutline)`
    font-size: 20px;
    color: #000;
`;

export const Cross = styled(ImCross)`
    font-size: 20px;
    color: #000;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CenterWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Badge = styled.div``;
