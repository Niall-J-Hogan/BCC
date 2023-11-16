import { useEffect, useRef, useState } from "react";
import Menu from "../Menu";
import { VStack } from "@chakra-ui/react";

export const DrawingApp = () => {
  const canvasRef = useRef(null);
  const ctxRef: any = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);
  const [drawingHistory, setDrawingHistory] = useState([]);

  // Initialization when the component
  // mounts for the first time
  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);

  const startDrawing = (e: any) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const undoDrawing = () => {
    setDrawingHistory((prevHistory) => prevHistory.slice(0, -1));

    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawingHistory.forEach(({ color, opacity, width, path }) => {
      ctx.strokeStyle = color;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = width;
      ctx.stroke(path);
    });
  };

  const draw = (e: any) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    ctxRef.current.stroke();
  };

  return (
    <VStack>
      <Menu
        setLineColor={setLineColor}
        setLineWidth={setLineWidth}
        setLineOpacity={setLineOpacity}
      />
      <VStack
        border={"solid 2px black"}
        width={"auto"}
        backgroundImage={"/torso.png"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={`705px`}
          height={`675px`}
        />
      </VStack>
    </VStack>
  );
};
