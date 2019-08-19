import React from "react";
import {connect} from "react-redux";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";
// export class ExpensesSummary extends React.Component{
//      expenseCount=this.props.expenses.length;
//      expensesTotal=numeral(selectExpensesTotal(this.props.expenses)/100).format("$0,0.00");
//     render(){
//         return(
//             <div>
//             Viewing {this.expenseCount} {this.expenseCount===1?"expense":"expenses"}  totalling {this.expensesTotal}
//             </div>
//         )
//     }
// }
// const ExpensesSummary=(props)=>(
//    <div>Viewing {props.expenses.length} expenses totalling
//     {numeral(selectExpensesTotal(props.expenses)/100).format("$0,0.00")}</div>
// )
// const mapStateToProps=(state)=>{
//     return{
//         expenses:selectExpenses(state.expenses, state.filters)
//     };

// }
export const ExpensesSummary=({expenseCount, expensesTotal})=>{
    const expenseWord=expenseCount===1?"expense":"expenses";
    const formattedExpensesTotal=numeral(expensesTotal/100).format("$0,0.00");
    return(
        <div>
        <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps=(state)=>{
    const visibleExpenses=selectExpenses(state.expenses, state.filters);
    return{
        expenseCount:visibleExpenses.length,
        expensesTotal:selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);