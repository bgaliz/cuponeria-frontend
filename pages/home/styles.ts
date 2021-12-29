import styled from 'styled-components';

import { Container } from '../../styles/global.style';

export const HomeWrapper = styled.div`
    display: flex;
`

export const Products = styled(Container)`
  width: 100%;
  height: 100%;
  
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  object-fit: cover;

  justify-items: center;
  align-items: center;
`