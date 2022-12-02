import './colorGrid.sass'

const ColorGrid = ({ colors, setColor }: any) => {
    return (
        <div id="color-grid">
            {colors.map((color: any) => {
                return (
                    <div
                        onClick={() => setColor(color)}
                        style={{
                            backgroundColor:
                                `rgba(
                                ${color.r},
                                ${color.g},
                                ${color.b},
                                ${color.a}
                                )`
                        }}
                        className="color-chooser"
                    ></div>
                )
            })}
        </div>
    )
}

export default ColorGrid