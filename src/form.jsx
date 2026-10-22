import {useState} from "react";
import "./Expensetracker.css"
export default function Form({form}){
    let[input,setinput]=useState({
        Description:"",
        Amount:""
    });
let handlechange=(event)=>{
setinput({
    ...input,[event.target.name]:event.target.value
});

}


     let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(input)
         form({
        ...input,
        Amount: Number(input.Amount),
         date: new Date().toLocaleDateString("en-IN")
    });

    setinput({
        Description: "",
        Amount: ""
    });
     
    
     }
    return (
<div className="history">
<h4 style={{color:"red"}} className="add-transaction"><i>Add new transaction</i></h4>

<form onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="text" style={{color:"green"}}><b>Text</b></label>
    
<input placeholder="Enter description..." className="input1" onChange={handlechange} name="Description"  value={input.Description} required/>
</div>
<br /><br />
<div className="form-group">
  <label htmlFor="Amount"style={{color:"green"}}><b>Amount(negative=expense,positive=income)</b></label>
    
<input placeholder="Enter amount..." className="input1" name="Amount"  value={input.Amount} onChange={handlechange} required/>
</div>
<br></br>
<button className="button" type="submit">Add transaction</button>


</form>
</div>




    )
}