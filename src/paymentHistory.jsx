


export default function History({transactions,onDelete}){




    return (


   

   <div className="history">
    <br></br>
    <h3 className="H33"><i>History</i></h3>
    <div className="transaction">
    <ul className="list">
        {transactions.map((transaction, index) => (
                    <li
                        key={index}
                        className={
                            transaction.Amount >= 0 ? "plus" : "minus"
                        }
                    >
                        <span style={{color:"brown"}}><b>{transaction.Description}</b></span>
<br />
                            <small style={{color:"green"}}>
                               <b> {transaction.date || "Date unavailable"}</b>
                            </small>
                        <span style={{color:"black"}}><b>
                            {transaction.Amount >= 0 ? "+" : "−"} ₹
                            {Math.abs(transaction.Amount)}</b>
                        </span>

                        <button
                            type="button"
                            className="delete-button"
                            onClick={() => onDelete(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
    </ul>
    </div>
</div>


    )
}