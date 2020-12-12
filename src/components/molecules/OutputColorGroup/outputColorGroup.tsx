import * as React from 'react';

import { Container } from './outputColorGroup.styles';
import { CodeTextField } from "@components/atoms/CodeTextField/codeTextField";
import { SolidColorPreview } from "@components/atoms/SolidColorPreview/solidColorPreview";

interface OutputColorGroupProps {
  currentValue: string;
  onChangeValue: Function;
}

export const OutputColorGroup = React.memo((props: OutputColorGroupProps) => {
  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeValue(event.target.value);
  };

  return (
    <Container>
      <CodeTextField onChange={onChangeValue} editable currentValue={props.currentValue} />
      <SolidColorPreview color={props.currentValue} />
    </Container>
  );
});
