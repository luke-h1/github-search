/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Button = styled.button`
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
