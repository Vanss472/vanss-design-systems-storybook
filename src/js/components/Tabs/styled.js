import styled, { css } from 'styled-components'
import { rem } from '../../utils/mixins';

export const TabGroup = styled.div`
  position: relative;
  display: flex;
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};
`;

export const Tab = styled.button`
  border: 0;
  display: block;
  font-size: ${rem(16)};
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  padding-top: ${rem(12)};
  padding-bottom: ${rem(12)};
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};

  ${({ active }) =>
    active && css`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  `}
`;

export const SlidingBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: ${(props) => props.theme.colors.text};
  pointer-events: none;
  transition: width .3s ease, left .3s ease;
`;

export const TabPanel = styled.div`
  display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
  padding-left: ${rem(20)};
  padding-right: ${rem(20)};
`;