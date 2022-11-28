import { useEffect, useState } from "react";
import "./app.sass";
import LeftBar from './components/leftBar/LeftBar';

interface IPoint {
  x: number;
  y: number
};

interface ILine {
  lastPosition: IPoint;
  position: IPoint
};

interface IPencil {
  isActive: boolean;
  isMoving: boolean;
  position: IPoint;
  lastPosition: null | IPoint
};

export interface IRgba {
  r: number
  g: number
  b: number
  a: number
};

const App = () => {

  const pencil: IPencil = {
    isActive: false,
    isMoving: false,
    position: { x: 0, y: 0 },
    lastPosition: null
  };

  const [pencilColor, setPencilColor] = useState<IRgba>({ r: 0, g: 0, b: 0, a: 1 });
  const [pencilWidth, setPencilWidth] = useState<number>(1);

  useEffect(() => {

    const canvas: any = document.getElementById("canvas");
    const ctx = canvas?.getContext("2d");

    const drawLine = (line: ILine) => {

      const { r, g, b, a } = pencilColor!;

      ctx!.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
      ctx.lineWidth = pencilWidth;
      ctx.beginPath();
      ctx.moveTo(line.lastPosition.x, line.lastPosition.y);
      ctx.lineTo(line.position.x, line.position.y);
      ctx.stroke();

    }

    const handleDraw = () => {

      if (pencil.isActive && pencil.isMoving && pencil.lastPosition) {
        drawLine({
          position: pencil.position,
          lastPosition: pencil.lastPosition
        });
      };

      pencil.isMoving = false;

      pencil.lastPosition = {
        x: pencil.position.x,
        y: pencil.position.y
      };

      setTimeout(handleDraw, 1);

    };

    handleDraw();

  }, [pencilColor, pencilWidth]);

  return (
    <div className="App">
      <LeftBar
        pencilColor={[pencilColor, setPencilColor]}
        pencilWidth={[pencilWidth, setPencilWidth]}
      />
      <div id="canvas-container">
        <canvas
          id="canvas"
          width={900}
          height={700}
          onMouseDown={() => pencil.isActive = true}
          onMouseUp={() => pencil.isActive = false}
          onMouseMove={(e) => {
            pencil.position.x = e.clientX - e.currentTarget.getBoundingClientRect().x
            pencil.position.y = e.clientY - e.currentTarget.getBoundingClientRect().y
            pencil.isMoving = true
          }}
        />
      </div>
    </div>
  );
};

export default App;
