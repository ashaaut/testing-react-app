import { useState } from "react"
import Output from "./Output"

const Greeting=()=>{
    const [changedText,setChangedtext]=useState(false)

    const changeTextHandler=()=>{
        setChangedtext(true)
    }
    console.log(changedText);
    return(
       <div>
            <h2>Hello world</h2>
            {!changedText && <Output>it's good to see you</Output>}
            {changedText && <Output>changed!</Output>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )
}
export default Greeting