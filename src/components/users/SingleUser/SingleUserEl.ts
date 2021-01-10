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
    background: #EEE5E9;
    max-width: 1000px;
    margin: 0 auto;
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
    color: #000;
    margin-left: 1rem;
    color: blue;
    font-size: 20px;
    margin-bottom: 1rem;
`;

export const SingleLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin: 1.5rem;
  padding-bottom: 1rem;
  font-size: 20px;
`;

export const Tick = styled(TiTickOutline)`
    font-size: 45px;
    color: green;
`;

export const Cross = styled(ImCross)`
    font-size: 20px;
    color: #000;
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
  color: #333;
  border-radius: 5px;
`;
