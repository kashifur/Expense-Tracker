
import "./Expensetracker.css";

export default function Expense({ transactions }) {

    const income = transactions
        .filter((transaction) => transaction.Amount > 0)
        .reduce((total, transaction) => total + transaction.Amount, 0);

    const expense = transactions
        .filter((transaction) => transaction.Amount < 0)
        .reduce((total, transaction) => total + Math.abs(transaction.Amount), 0);

    const balance = income - expense;

    return (
        <div style={{ backgroundColor: "whitesmoke" }} className="expense-wrapper">
            <h2 className="expense-title"><b>Expense Tracker</b></h2>

            <div className="balance">
                <h4 className="H4"><b>CURRENT BALANCE</b></h4>
                <h2>₹{balance.toLocaleString("en-IN")}</h2>
            </div>

            <div className="container">
                <div className="box1">
                    <h5>INCOME</h5>
                    <p style={{ color: "green" }}>
                        ₹{income.toLocaleString("en-IN")}
                    </p>
                </div>

                <div className="box2">
                    <h5>EXPENSE</h5>
                    <p style={{ color: "red" }}>
                        ₹{expense.toLocaleString("en-IN")}
                    </p>
                </div>
            </div>
        </div>
    );
}




