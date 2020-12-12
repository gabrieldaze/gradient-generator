
import * as React from 'react';

import { Container, ColorDialogContainer } from './root.styles';
import { CodeTextField } from "@components/atoms/CodeTextField/codeTextField";
import { GradientPreview } from "@components/atoms/GradientPreview/gradientPreview";
import { ColorDialogBox } from "@components/organisms/ColorDialogBox/colorDialogBox";

export const RootApplication = () => {
  const [gradient, setGradient] = React.useState<string>('');

  const onChangeGradient = (gradientCode: string) => {
    setGradient(gradientCode);
  }

  return (
    <React.Profiler id="root-profiler" onRender={() => {}}>
      <Container>
        <ColorDialogContainer>
          <GradientPreview color={gradient} />
          <CodeTextField editable={false} currentValue={gradient} />
          <ColorDialogBox onChangeGradient={onChangeGradient} />
        </ColorDialogContainer>
      </Container>
    </React.Profiler>
  );
};

