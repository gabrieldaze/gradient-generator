import * as React from 'react';

import { Container } from './gradientPreview.styles';

interface GradientPreviewProps {
  color: string;
}

export const GradientPreview = React.memo((props: GradientPreviewProps) => {
  return <Container color={props.color} />
});
