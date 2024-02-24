
import {useEffect} from "react"
import {getAllExpences} from "../services/expense"
import {ExpenseItemsLister} from "./ExpenseItemsLister"
import { useState } from "react"

import{ Container} from "react-bootstrap"
import{ExpenseCreator} from "./ExpenseCreator"
import { ExpenseSummary } from "./ExpenseSummary"

const ExpenseTrackerApp = ( ) => {

    const [expenseItems, setExpenseItems]=useState([]);
useEffect(  () =>{

    const getAllExpenseInvoker = async ()=>{
        const response = await getAllExpences();
        console.log("Expense Items");
        console.log(JSON.stringify(response));

        setExpenseItems(response);

    }
    getAllExpenseInvoker();
},[])



    return(
        <Container>
            <div className="App-header">Expense Items</div>
            <ExpenseCreator expenseItems= {expenseItems}></ExpenseCreator>
            <hr/>
            <ExpenseItemsLister expenseItems={expenseItems}></ExpenseItemsLister>
            <ExpenseSummary expenseItems={expenseItems}></ExpenseSummary>

        </Container>
    )
}
export {ExpenseTrackerApp} 
