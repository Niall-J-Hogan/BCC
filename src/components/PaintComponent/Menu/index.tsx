import { FormLabel, HStack, Input } from "@chakra-ui/react";
import React from "react";

interface IMenu {
  setLineColor: (data: string) => void;
  setLineWidth: (data: number) => void;
  setLineOpacity: (data: number) => void;
}

const Menu = ({ setLineColor, setLineWidth, setLineOpacity }: IMenu) => {
  return (
    <HStack className="Menu">
      <FormLabel>Brush Color </FormLabel>
      <Input
        type="color"
        onChange={(e) => {
          setLineColor(e.target.value);
        }}
      />
      <FormLabel>Brush Width </FormLabel>
      <Input
        type="range"
        min="3"
        max="20"
        onChange={(e) => {
          setLineWidth(+e.target.value);
        }}
      />
      <FormLabel>Brush Opacity</FormLabel>
      <Input
        type="range"
        min="1"
        max="100"
        onChange={(e) => {
          setLineOpacity(+e.target.value / 100);
        }}
      />
    </HStack>
  );
};

export default Menu;
