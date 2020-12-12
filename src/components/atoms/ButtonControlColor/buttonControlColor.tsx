import * as React from 'react';

import { Container } from './buttonControlColor.styles';

interface ButtonControlColorProps {
  readonly type: 'ADD' | 'CLEAR';
  readonly onClick?: Function;
}

export const ButtonControlColor = React.memo((props: ButtonControlColorProps) => {
  const onClickDefault = () => {};

  return (
    <Container
      type={props.type}
      onClick={props.onClick || onClickDefault}
    >
      {`${props.type} COLOR`}
    </Container>
  );
});
