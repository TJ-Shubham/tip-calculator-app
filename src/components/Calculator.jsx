import { useState, useEffect } from "react";
import Bill from "./Bill";
import Display from "./Display";

export default function Calculator() {
    const[bill, setBill] = useState('');
    const[tip, setTip] = useState('');
    const[percentTip, setPercentTip] = useState('');
    const[people, setPeople] = useState('');
    const[tipAmount, setTipAmount] = useState("0.00");
    const[personAmount, setPersonAmount] = useState("0.00");
    

    function handleBillChange(e){
        const value = e.target.value;
        if (!isNaN(value) && value !== "") {
            setBill(Number(value));
        } else {
            setBill("");
        }
    }

    function handleTipSelect(e){
        setTip(Number(e));
        setPercentTip("");
    }

    function handleSelectPeople(e){
        setPeople(Number(e.target.value))
    }

    function handlePercentTip(e){
        setPercentTip(Number(e.target.value));
        setTip("");
    }

    function handleReset() {
        setBill("");
        setTip("");
        setPercentTip("");
        setPeople("");
        setTipAmount("0.00");
        setPersonAmount("0.00");      
    }

    useEffect(() => {
        if (bill && people) {
            const tipValue = tip || percentTip;
            const tipAmt = ((bill * tipValue) / 100) / people;
            const totalAmt = bill / people + tipAmt;
            setTipAmount(tipAmt.toFixed(2));
            setPersonAmount(totalAmt.toFixed(2));
        } else {
            setTipAmount("0.00");
            setPersonAmount("0.00");
        }
    }, [bill, tip, percentTip, people]);

  return (
    <div className="calculator">
        <Bill 
            bill={bill} 
            onBillChange={handleBillChange} 
            tip={tip} 
            onTipChange={handleTipSelect}
            percentTip={percentTip}
            onPercentTipChange = {handlePercentTip}
            people={people}
            onPeopleChange={handleSelectPeople}
        />
        <Display 
            tipAmount={tipAmount}
            personAmount={personAmount}
            onReset={handleReset}
        />
        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a href="https://github.com/TJ-Shubham"> Shubham</a>.
        </div>
    </div>
  )
}







