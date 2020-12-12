import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 5px;
`;

export const ColorListContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: calc(36px * 5 + 5px * 5);
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 5px;
`;