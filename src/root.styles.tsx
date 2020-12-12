
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
  justify-items: center;
  flex-direction: column;
`;

export const ColorDialogContainer = styled.div`
  width: 380px;
  height: auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 5px;
  box-sizing: border-box;
  padding: 12px;
`;
