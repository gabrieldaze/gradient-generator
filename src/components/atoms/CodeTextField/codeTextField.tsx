import * as React from 'react';

import { Container } from './codeTextField.styles';

interface CodeTextFieldProps {
  readonly editable: boolean;
  readonly currentValue: string;
  readonly onChange?: Function;
}
export const CodeTextField = React.memo((props: CodeTextFieldProps) => {
  if (props.editable) return <Container value={props.currentValue} onChange={props.onChange} />
  return <Container disabled value={props.currentValue} />
});
