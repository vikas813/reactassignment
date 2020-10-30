import React, {useState} from  "react";
function Asdf(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <h1>click the button{count} times</h1>
            <button onClick={()=>setCount(count+1)}>clicked </button>
           
        </div>);            
    }
export default Asdf;