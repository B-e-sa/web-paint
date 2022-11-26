import { ChromePicker } from 'react-color';
import './leftBar.sass';

const LeftBar = ({ props }: any) => {
    const defaultColors = [
        "black",
        "gray",
        "white",
        "blue",
        "green",
        "limegreen",
        "yellow",
        "red",
        "orange",
        "brown"
    ];

    return (
        <>
            <div id='leftbar-container'>
                <ChromePicker
                    color={props[0]}
                    onChange={e => { props[1](e.rgb) }}
                />
                <div id='colors-grid'>
                    {defaultColors.map((item) => {
                        return (
                            <div
                                onClick={() => props[1](item)}
                                style={{ backgroundColor: item }}
                                className='color-chooser'
                            ></div>
                        )
                    })}
                </div>
                <input
                    type="range"
                    min={0}
                    max={100}
                    onChange={e => console.log(e.currentTarget.value)}
                />
            </div>
        </>
    )
}

export default LeftBar