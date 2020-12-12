import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 36px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.type === 'ADD' ? 'green' : 'darkred'};
  color: white;
  border: none;
  font-family: monospace;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;

  &:focus { outline: none; }
`;