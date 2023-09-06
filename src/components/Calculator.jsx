import { useState, useEffect } from "react";

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
    </div>
  )
}


function Bill({bill, onBillChange, tip, onTipChange, percentTip, onPercentTipChange, people, onPeopleChange}) {
    const arr = [5,10,15,25,50];


    return(
        <div className="bill">
            <div className="bill-amount">
                <label>Bill</label>
                <input type="number" placeholder="0" value={bill} onChange={onBillChange}/>
            </div>
            <div className="tip">
                <p>Select Tip %</p>
                <div className="tip-button">
                {arr.map(item => 
                    <Button onClick={onTipChange} key={item} disabled={percentTip !== ""}>{item}</Button>)
                }
                <input type="text" placeholder="Custom" value={percentTip} onChange={onPercentTipChange} disabled={tip !== ""}/>
                </div>
            </div>
            <div className="people">
                <label>Number of People</label>
                <input type="text" placeholder="0" value={people} onChange={onPeopleChange}/>
            </div>
        </div>
    );
    
}

function Button({ children, onClick, disabled }){
    return <button onClick={() => onClick(children)} disabled={disabled}>{children}%</button>;
}


function Display({tipAmount, personAmount, onReset}){
    return(
        <div className="display">
            <div className="amounts">
            <div className="amount">
                <p><span>Tip Amount</span><br />/ person</p>
                <p>${tipAmount}</p>
            </div>
            <div className="amount">
                <p><span>Total</span><br />/ person</p>
                <p>${personAmount}</p>
            </div>

            </div>
            <button onClick={onReset} disabled={tipAmount === "0.00" && personAmount === "0.00"}>RESET</button>
        </div>
    );
}

