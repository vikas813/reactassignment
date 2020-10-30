import React from "react";
const Todo=()=>{
    let[input,setInput]=React.useState('');
    let[data,setData]=React.useState([]);
    const val=(event)=>{
        setInput(event.target.value);
    }
    const valu=()=>{
        setData([...data, input]);
    }
    const clear=(index)=>{
        data.splice(index, 1);
        setData([...data]);
    }
    return(
        <>
        <h1>Our Todo List</h1>
        <input type="text"  placeholder="enter an item" onChange={val}/>
        <button onClick={valu}>+</button>
        {data.map((item, index) => (
            <>
                <h3>{item}</h3>
                <button
                    onClick = {clear}
                      >Delete</button>
            </>
        ))}
        
        </>
         );
} 
export default Todo;


