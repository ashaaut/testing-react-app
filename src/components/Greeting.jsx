import { useState } from "react"

const Greeting=()=>{
    const [changedText,setChangedtext]=useState(false)

    const changeTextHandler=()=>{
        setChangedtext(true)
    }
    console.log(changedText);
    return(
       <div>
            <h2>Hello world</h2>
            {!changedText && <p>it's good to see you</p>}
            {changedText && <p>changed!</p>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )
}
export default Greeting