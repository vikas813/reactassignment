import React from "react";
const EventSandler=()=>{
    const[input,setInput]=React.useState("Clickme");
    let bg = red; 
    const Clickme=()=>{
        

        setInput(red);
        }

    return(
        <div style={{backgroundColor:'orange'}}>
            <h1>Our Button</h1>
            <button onClick={Clickme}>{input}</button>
            </div>
    )
}
export default EventSandler;