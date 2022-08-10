import './App.css';
import React, { useState } from "react";

const colours = ['purple', 'silver', 'red', 'brown', 'yellow'];

export function App(props) {
    const [selectedColourIndex, setColourIndex] = useState(0);

    const nextColour = () => {
        const newColourIndex = selectedColourIndex + 1;
        if (colours[newColourIndex]) 
            setColourIndex(newColourIndex);
        else
            setColourIndex(0);
    }

    return (
              <div className='button'>
              <button type="button" style={{backgroundColor: colours[selectedColourIndex]}}
            onClick={nextColour}>Change color</button>
            </div>
            );
}
export default App;
