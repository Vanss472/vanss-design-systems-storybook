import styled from 'styled-components'

export const TabPanel = styled.div`
  display: ${({ isSelected }) => (isSelected ? 'block' : 'none')}
`;