export default function Display({tipAmount, personAmount, onReset}){
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