import styled from 'styled-components';
import { rem } from '../../utils/mixins';

export const Tittle = styled.h3`
  margin: 0;

  &:last-of-type {
    > button {
      border-bottom: 1px solid lightgray;
    }
  }

  button {
    position: relative;
    margin: 0;
    padding-top: ${rem(20)};
    padding-bottom: ${rem(20)};
    padding-left: ${rem(16)};
    padding-right: ${rem(16)};
    background-color: transparent;
    border: 1px solid lightgray;
    border-bottom: 0;
    font-size: ${rem(12)};
    line-height: ${rem(12)};
    color: black;
    cursor: pointer;
    appearance: none;
    border-radius: 0;
    display: flex;
    width: 100%;

    &:focus,
    &:hover {
      background-color: lightgray;
    }

    &::before {
      content: "+";
      position: absolute;
      top: 50%;
      right: ${rem(16)};
      margin-top: ${rem(-8)};
    }

    &[aria-expanded="true"] {
      border-bottom: 1px solid lightgray;

      &::before {
        content: "-";
      }
    }
  }
`;

export const Panel = styled.div`
  padding-right: ${rem(16)};
  padding-left: ${rem(16)};
  background-color: white;
  color: black;
  transition: all .3s;

    > div {
      padding-top: ${rem(16)};
      padding-bottom: ${rem(16)};
    }
`;
