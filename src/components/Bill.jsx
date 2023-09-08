const arr = [5,10,15,25,50];

export default function Bill({bill, onBillChange, tip, onTipChange, percentTip, onPercentTipChange, people, onPeopleChange}) {

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