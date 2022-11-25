import './leftBar.sass';
import { CirclePicker, SketchPicker } from 'react-color';

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
                <SketchPicker
                    color={props[0]}
                    onChange={e => props[1](e.hex)} />
                <CirclePicker onChange={e => console.log(e.hex)} />
                {/*
                                <div id='colors-grid'>
                    {defaultColors.map((item, index) => {
                        return (
                            <div
                                className='color-chooser'
                                style={{ backgroundColor: defaultColors[index] }}
                            ></div>
                        )
                    })}
                </div>
                */}
            </div>
        </>
    )
}

export default LeftBar