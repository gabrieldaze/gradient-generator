import * as React from 'react';

import { Container } from './buttonGroup.styles';
import { ButtonControlColor } from "@components/atoms/ButtonControlColor/buttonControlColor";

interface ButtonGroupProps {
  readonly onAdd?: Function;
  readonly onClear?: Function;
}

export const ButtonGroup = React.memo((props: ButtonGroupProps) => {
  return (
    <Container>
      <ButtonControlColor type="ADD" onClick={props.onAdd} />
      <ButtonControlColor type="CLEAR" onClick={props.onClear} />
    </Container>
  );
});
