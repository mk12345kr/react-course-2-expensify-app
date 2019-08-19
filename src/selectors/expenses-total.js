// export default (expenses)=>{
//     const getExpenseTotal=(expenses)=>{
//         return 
//         expenses?expenses.map((expense)=>expense.amount).
//         reduce(accumulator,currentValue):
//         0
//     }
// }



// export default (expenses)=>{
//         return expenses.length?expenses.map((expense)=>expense.amount).
//         reduce((accumulator,currentValue)=>accumulator+currentValue): 0
// }
export default (expenses)=>{
        return expenses
             .map((expense)=>expense.amount)
             .reduce((sum,value)=>sum+value,0);
        };