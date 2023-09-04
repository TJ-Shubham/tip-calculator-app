
export default function Calculator() {
  return (
    <div className="calculator">
        <Bill />
        <Display />
    </div>
  )
}




function Bill() {
    const arr = [5,10,15,25,50];
    return(
        <div className="bill">
            <div className="bill-amount">
                <label>Bill</label>
                <input type="text" placeholder="0"/>
            </div>
            <div className="tip">
                <p>Select Tip %</p>
                <div className="tip-button">
                {arr.map(item => 
                    <Button key={item}>{item}</Button>)
                }
                <input type="text" placeholder="Custom"/>
                </div>
            </div>
            <div className="people">
                <label>Number of People</label>
                <input type="text" placeholder="0"/>
            </div>
        </div>
    );
    
}

// eslint-disable-next-line react/prop-types
function Button({ children }){
    return <button>{children}%</button>;
}


function Display(){
    return(
        <div className="display">
            <div className="amounts">
            <div className="amount">
                <p><span>Tip Amount</span><br />/ person</p>
                <p>$0.00</p>
            </div>
            <div className="amount">
                <p><span>Total</span><br />/ person</p>
                <p>$0.00</p>
            </div>

            </div>
            
            <button>RESET</button>
        </div>
    );
}

