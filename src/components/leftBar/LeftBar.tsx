import { ChromePicker } from 'react-color';
import { IRgba } from '../../App';
import './leftBar.sass';
import widthArrow from "../../assets/width-arrow.svg"
import ColorGrid from '../colorGrid/ColorGrid';
import { useState } from 'react';
import UtilsBar from '../utilsBar/UtilsBar';

const LeftBar = ({ pencilColor, pencilWidth }: any) => {

    const [pencilWidthInPixels, setPencilWidthInPixels] = useState("1")

    // the IRgba type will only pick
    // rgba "objects", so no strings
    // like "black" or "red"
    const defaultColors: IRgba[] = [
        { r: 0, g: 0, b: 0, a: 1 },       // black
        { r: 206, g: 206, b: 206, a: 1 }, // white
        { r: 255, g: 255, b: 255, a: 1 }, // blue
        { r: 2, g: 245, b: 0, a: 1 },     // green
        { r: 50, g: 205, b: 50, a: 1 },   // limegreen
        { r: 255, g: 250, b: 46, a: 1 },  // yellow
        { r: 255, g: 0, b: 0, a: 1 },     // red
        { r: 255, g: 128, b: 0, a: 1 },   // orange
        { r: 189, g: 103, b: 0, a: 1 },   // brown
        { r: 249, g: 131, b: 255, a: 1 }  // pink
    ];

    return (
        <div id='leftbar-container'>
            <ChromePicker
                color={pencilColor[0]}
                onChange={e => { pencilColor[1](e.rgb) }}
            />
            <div id='pencil-width-container'>
                <div id='pedro'>
                    <span>{pencilWidthInPixels}</span>
                </div>
                <img
                    src={widthArrow}
                    alt="width-arrow"
                    width={25}
                    height={25}
                />
                <input
                    type="range"
                    value={pencilWidth[0]}
                    min={1}
                    max={300}
                    onChange={e => {
                        pencilWidth[1](e.currentTarget.value)
                        setPencilWidthInPixels(e.currentTarget.value)
                    }}
                />
            </div>
            <ColorGrid
                colors={defaultColors}
                setColor={pencilColor[1]}
            />
            <UtilsBar />
        </div>
    )
}

export default LeftBar