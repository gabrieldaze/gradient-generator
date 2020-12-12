
import * as React from 'react';

import { Container } from './root.styles';
import { CodeTextField } from "@components/atoms/CodeTextField/codeTextField";
import { DialogBox } from "@components/organisms/DialogBox/dialogBox";
import { GradientPreview } from "@components/atoms/GradientPreview/gradientPreview";
import { ColorDialogBox } from "@components/organisms/ColorDialogBox/colorDialogBox";

export const RootApplication = () => {
  const [gradient, setGradient] = React.useState<string>('linear-gradient(to right, #fff, #f90)');

  const onChangeGradient = (gradientCode: string) => {
    setGradient(gradientCode);
  }

  return (
    <Container>
      <DialogBox>
        <GradientPreview color={gradient} />
        <CodeTextField editable={false} currentValue={gradient} />
        <ColorDialogBox onChangeGradient={onChangeGradient} />
      </DialogBox>
    </Container>
  );
};

