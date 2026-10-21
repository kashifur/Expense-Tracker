
import './App.css'
import Expense from './Expensetracker';
import History from './paymentHistory';
import { useState,useEffect} from "react";
import Form from "./form"; 
function App() {

  const [transactions, setTransactions] = useState(() => {        
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];});

    useEffect(() => {
        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );
    }, [transactions]);


function deleteTransaction(indexToDelete) {
    setTransactions((prevTransactions) =>
        prevTransactions.filter(
            (_, index) => index !== indexToDelete
        )
    );
}


    function addTransaction(newTransaction) {
        setTransactions([...transactions, newTransaction]);
    }

    return (
        <div>
          
           <Expense transactions={transactions}/>
            <History transactions={transactions} onDelete={deleteTransaction}/>
            <br></br>
             <Form form={addTransaction} />

        </div>
    );
}

/*overview :- 
form se value aakr addtransition me set ho rha and and addtransiction value ko usestate transiction me bhej de rha hai and hm us transiction ko payment history  ko pass kr  rhe  hai jo ki use dispaly kra rha hai
 

*/
export default App
