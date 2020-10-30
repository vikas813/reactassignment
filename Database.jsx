import React,{useState} from "react";
function Database() {
    const [hh, setHH] = useState(0);
    const [mm, setMM] = useState(0);
    const [ss, setSS] = useState(0);
    const [idS, setIdS] = useState(null);
    const [idM, setIdM] = useState(null);
    const [idH, setIdH] = useState(null);
   

    const Start = () => {
       setIdS(setInterval(()=> {
            setSS(ss => ss + 1);
        },1000));

        setIdM(setInterval(()=>{
            setSS(0);
            setMM(mm => mm + 1);
        },60*1000));

        setIdH(setInterval(()=>{
            setMM(0);
            setHH(hh => hh + 1)
        },60*60*1000));
    }
    const Reset=()=>{
            clearInterval(idS);
            clearInterval(idM);
            clearInterval(idH);
            setSS(0);
            setMM(0);
            setHH(0);
        } 
       
    return(
        <div>
            <h1>Stopwatch</h1>
        <h1>{hh<10 ? "0"+hh : hh} : {mm<10 ? "0"+mm : mm} : {ss<10 ? "0"+ss:ss}</h1>
        <button onClick={Start}>Start</button>
        <button onClick ={Reset}>Reset</button>
        </div>);
}
export default Database;




