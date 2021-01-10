import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    font-weight: 400;
    text-align: center;
`;

export const UserLink = styled(Link)`
    color: #000;
    text-decoration: none;
`;
