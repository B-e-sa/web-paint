import "./app.sass"
import { useEffect, useState } from "react"

interface ILine {
  lastPosition: { x: number, y: number };
  position: { x: number; y: number }
}

interface IPencil {
  isActive: boolean;
  isMoving: boolean;
  position: { x: number; y: number; };
  lastPosition: any;
}

const App = () => {

  const pencil: IPencil = {
    isActive: false,
    isMoving: false,
    position: { x: 0, y: 0 },
    lastPosition: null
  }

  const [color, setColor] = useState<string>("#000000")

  useEffect(() => {

    const canvas: any = document.getElementById("canvas")
    const ctx = canvas?.getContext("2d")

    const drawLine = (line: ILine) => {

      ctx.strokeStyle = "color"
      ctx.beginPath()
      ctx.moveTo(line.lastPosition.x, line.lastPosition.y)
      ctx.lineTo(line.position.x, line.position.y)
      ctx.stroke()

    }

    const handleDraw = () => {

      if (pencil.isActive && pencil.isMoving && pencil.lastPosition) {
        drawLine({
          position: pencil.position,
          lastPosition: pencil.lastPosition
        })
      }
      pencil.isMoving = false

      pencil.lastPosition = {
        x: pencil.position.x,
        y: pencil.position.y
      }

      setTimeout(handleDraw, 1)

    }

    handleDraw()

  }, [])

  return (
    <div className="App">
      <canvas
        id="canvas"
        width={900}
        height={700}
        onMouseDown={() => pencil.isActive = true}
        onMouseUp={() => pencil.isActive = false}
        onMouseMove={(e) => {
          pencil.position.x = e.clientX
          pencil.position.y = e.clientY
          pencil.isMoving = true
        }}
      ></canvas>
    </div>
  )
}

export default App
