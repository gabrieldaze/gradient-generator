import * as React from 'react';

import { Container, ColorListContainer } from './colorDialogBox.styles';
import { ButtonGroup } from "@components/molecules/ButtonGroup/buttonGroup";
import { OutputColorGroup } from "@components/molecules/OutputColorGroup/outputColorGroup";
import { CodeTextField } from "@components/atoms/CodeTextField/codeTextField";

interface ColorItem {
  readonly key: string;
  colorValue: string;
}

interface ColorDialogBoxProps {
  readonly onChangeGradient: Function;
}

export const ColorDialogBox = React.memo((props: ColorDialogBoxProps) => {
  const [colorList, setColorList] = React.useState<ColorItem[]>([]);
  const [gradientDirection, setGradientDirection] = React.useState<string>('to right');

  const onAddColor = () => {
    const currentList: ColorItem[] = [...colorList];
    const keyValue: string = new Date().getTime().toString();
    const newColor: ColorItem = { key: keyValue, colorValue: '#240497' };
    currentList.push(newColor);
    setColorList(currentList);
  };

  const onClearColor = () => {
    const currentList: ColorItem[] = [];
    setColorList(currentList);
  };

  const onChangeColor = (list: ColorItem[], key: string, value: string) => {
    const currentColorIndex: number = list.findIndex((item: ColorItem) => item.key === key);
    const currentList: ColorItem[] = [...list];
    currentList[currentColorIndex].colorValue = value;
    setColorList(currentList);
  };

  const onChangeDirection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGradientDirection(event.target.value);
  }

  const generateGradient = (direction: string, list: ColorItem[]) => {
    const colorSequence = list.map((item: ColorItem) => item.colorValue).join(', ');
    const gradient = `linear-gradient(${direction}, ${colorSequence})`;
    return gradient;
  }

  React.useEffect(() => {
    const cssCode = generateGradient(gradientDirection, colorList);
    props.onChangeGradient(cssCode);
  }, [colorList, gradientDirection])

  const renderColorList = (list: ColorItem[]) => {
    if (!list || list.length < 1) return null;
    return list.map((item) => {
      return (
        <OutputColorGroup
          key={item.key}
          currentValue={item.colorValue}
          onChangeValue={(colorValue: string) => {onChangeColor(list, item.key, colorValue)}}
        />
      );
    });
  }

  return (
    <Container>
      <ButtonGroup onAdd={onAddColor} onClear={onClearColor} />
      <CodeTextField editable currentValue={gradientDirection} onChange={onChangeDirection} />
      <ColorListContainer>
        {renderColorList(colorList)}
      </ColorListContainer>
    </Container>
  );
});
