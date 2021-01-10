import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TiTickOutline } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

export const SingleLink = styled(Link)`
  text-decoration: none;
  color: #000;
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
