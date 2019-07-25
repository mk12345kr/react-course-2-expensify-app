import React from "react";
import ExpenseForm from "./ExpenseForm";
import {addExpense} from "../actions/expenses";
import { connect } from "react-redux";
// const AddExpensePage=(props)=>(
//     <div>
//     <ExpenseForm onSubmit={(expense)=>{
//         props.dispatch(addExpense(expense));
//         props.history.push("/")
//     }} />
//     </div>
// );
// export default connect()(AddExpensePage);
export class AddExpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.addExpense(expense);
        this.props.history.push("/");
    };
    render(){
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
              onSubmit={this.onSubmit}
            />
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
    addExpense:(expense)=>dispatch(addExpense(expense))
});
export default connect(undefined,mapDispatchToProps)(AddExpensePage);