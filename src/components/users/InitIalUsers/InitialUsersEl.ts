import styled from 'styled-components';

export const Container = styled.div`
    min-height: 50vh;
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    @media(max-width: 1382px){
    grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width:1062px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width:720px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 25px;
        margin-left: 2rem;        
    }
`;
