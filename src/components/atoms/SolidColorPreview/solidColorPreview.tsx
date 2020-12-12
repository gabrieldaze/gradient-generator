import * as React from 'react';

import { Container } from './solidColorPreview.styles';

interface SolidColorPreviewProps {
  color: string | '#FFFFFF';
}

export const SolidColorPreview = React.memo((props: SolidColorPreviewProps) => {
  return <Container color={props.color} />
});
