import styled from 'styled-components';
import { rem } from '../../mixins';

export const Tittle = styled.h3`
  border: 1px solid black;

  button {
    margin: 0;
    padding: 0;
    background-color: whitesmoke;
    border: 0;
    cursor: pointer;
    appearance: none;
    border-radius: 0;
    display: flex;
    width: 100%;
  }
`;

export const Panel = styled.div`
  padding-right: ${rem(20)};
  padding-left: ${rem(20)};
`;
