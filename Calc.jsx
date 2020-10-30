import React,{useState} from "react";

const Calc=()=>{
    const[input, setInput]=useState(""),
        [num1,setNum1]=useState(0),
        [num2, setNum2] = useState(0);

    const val=(event)=>{
        setInput(event.target.value);
    }
    
    const One=()=>{
        setInput(input+1);
    }
    const Two=()=>{
        setInput(input+2);
    }
    const Three=()=>{
        setInput(input+3);
    }
    const Decimal=()=>{
        setInput(input+".");
    }
    const Four=()=>{
        setInput(input+4);
    }
    const Five=()=>{
        setInput(input+5);
    }
    const Six=()=>{
        setInput(input+6);
    }
    const Add=()=>{
        setInput(num1 + num2);
    }
    const Seven=()=>{
        setInput(input+7);
    }
    const Eight=()=>{
        setInput(input+8);
    }
    const Nine=()=>{
        setInput(input+9);
    }
    const Minus=()=>{
        setInput(num1 - num2);
    }
    const Zero=()=>{
        setInput(input+0);
    }
    const Clear=()=>{
        setInput("");
    }
    const Divide=()=>{
        setInput(num1 / num2);
    }
    const Multiply=()=>{
        setInput(num1 * num2);
    }

    return(
        <div>
        <h1>Calculator</h1>
        <input type="text"
            name='input'
            value={input}
            onChange={val} />
        <br/>
        <br/>
        <button onClick={One}>1</button>
        <button onClick={Two}>2</button>
        <button onClick={Three}>3</button>
        <button onClick={Decimal}>.</button>
        <br/>
        <button onClick={Four}>4</button>
        <button onClick={Five}>5</button>
        <button onClick={Six}>6</button>
        <button onClick={Add}>+</button>
        <br/>
        <button onClick={Seven}>7</button>
        <button onClick={Eight}>8</button>
        <button onClick={Nine}>9</button>
        <button onClick={Minus}>-</button>
        <br/>
        <button onClick={Zero}>0</button>
        <button onClick={Clear}>C</button>
        <button onClick={Divide}>/</button>
        <button onClick={Multiply}>*</button>
        <br/>
        <button 
            onClick = {() => {
                setNum1(+input);
                setInput("");
            }}
        >Num1</button>

        <button 
            onClick = {() => {
                setNum2(+input);
                setInput("");
            }}
        >Num2</button>
        </div>
        );
        }
export default Calc;