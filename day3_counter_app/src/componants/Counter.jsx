import { useState } from "react";
import "./Counter.css"
export function Counter() {
    const [counter, setCounter] = useState(0);
    const handleChange = (value) => {
        setCounter(counter + value);
    }
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={() => handleChange(1)
            } >Add</button>


            <button onClick={
                () => {
                    if (counter > 0) {
                        handleChange(-1)
                    }
                }
            } >Sub</button>

            <button onClick={() => {
                setCounter(counter * 2)
            }} >Double</button>

            <button onClick={() => {
                setCounter(counter / 2)
            }} >Half</button>
        </>

    )
}