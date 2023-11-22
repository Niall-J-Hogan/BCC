import { useMediaQuery } from "@chakra-ui/react";

interface IUseGetIsDevice {
  isMobile: boolean;
  isIpad: boolean;
  isIpadHorizontal: boolean;
}

export const UseGetIsDevice = (): IUseGetIsDevice => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isIpad] = useMediaQuery("(max-width: 1024px)");
  const [isIpadHorizontal] = useMediaQuery("(max-width: 1366px)");
  return { isMobile, isIpad, isIpadHorizontal };
};
