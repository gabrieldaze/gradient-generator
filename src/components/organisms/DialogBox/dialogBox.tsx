import * as React from 'react';

import { Container } from './dialogBox.styles';

interface DialogBoxProps {
  readonly children: any;
}

export const DialogBox = React.memo((props: DialogBoxProps) => {
  return <Container>{props.children}</Container>
});