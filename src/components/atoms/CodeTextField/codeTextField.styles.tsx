import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  padding: 0 8px;
  font-family: monospace;
  font-size: 12px;
  user-select: all;
  
  &:focus { outline: none; border: 1px solid #09f; }
`;