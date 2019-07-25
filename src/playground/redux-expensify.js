import { createStore, combineReducers } from "redux";
import uuid from "uuid";
const addExpense=(
    {description="", 
     note="",
     amount=0,
     createdAt=0
    }={}
    )=>({
        type:"ADD_EXPENSES",
    expenses:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
const editExpense=(id,updates)=>{
    return{
        type:"EDIT_EXPENSES",
        id,
        updates
    }
}
const removeExpense=({id}={})=>{
    return{
        type:"REMOVE_EXPENSES",
        id
    }
}
const setTextFilter=(text="")=>{
    return{
        type:"SET_TEXT_FILTER",
        text
    }
}
const sortByAmount=()=>{
    return{
        type:"SORT_BY_AMOUNT"

    }
}
const sortByDate=()=>{
    return{
        type:"SORT_BY_DATE"

    }
}
const setStartDate=(startDate)=>{
    return{
        type:"SET_START_DATE",
        startDate
    }
}
const setEndDate=(endDate)=>{
    return{
        type:"SET_END_DATE",
        endDate
    }
}
const expensesReducerDefaultState=[];
const expensesReducer=(state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case "ADD_EXPENSES":
        return [...state,action.expenses];
        case "EDIT_EXPENSES":
        return state.map((expenses)=>{
            if(expenses.id==action.id){
                return{
                    ...expenses,
                    ...action.updates
                }
            }
            else{
                return expenses;
            }
        })
        case "REMOVE_EXPENSES":
        return state.filter(({id})=>id!==action.id);
        default:
          return state;
    }
}
const filtersReducerDefaultState={
    text:"",
    sortBy:"date",
    startDate:undefined,
    endDate:undefined
}
const filtersReducer=(state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case "SET_TEXT_FILTER":
        return{
            ...state,
            text:action.text
        }
        case "SORT_BY_AMOUNT":
        return {
            ...state,
            sortBy:"amount"
        }
        case "SORT_BY_DATE":
        return {
            ...state,
            sortBy:"date"
        }
        case "SET_START_DATE":
        return{
            ...state,
            startDate:action.startDate
        }
        case "SET_END_DATE":
        return{
            ...state,
            endDate:action.endDate
        }
        default:
        return state;
    }
}
const getVisibleExpenses=(expenses, { text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=="number"||expense.createdAt>=startDate;
        const endDateMatch=typeof endDate!=="number"||expense.createdAt<=endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b)=>{
        if(sortBy==="date"){
            return a.createdAt < b.createdAt?1:-1
        }
        else if(sortBy==="amount"){
            return a.amount < b.amount?1:-1
        }
    });
   
}
const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);
store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})


const expenseOne=store.dispatch(addExpense({ description:"rent",amount:100,createdAt:-21000}));
const expenseTwo=store.dispatch(addExpense({ description:"coffee",amount:300,createdAt:-1000}));
//console.log(expenseOne.expenses.id);
// store.dispatch(removeExpense({id:expenseOne.expenses.id}))
// store.dispatch(editExpense(expenseTwo.expenses.id,{amount:500}));
//store.dispatch(setTextFilter("e"));
// store.dispatch(setTextFilter());
 //store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// const user={
//     name:"jen",
//     age:24
// };
// console.log({
//     age:27,
//     ...user,
//     location:"Philadelphia"
// });

const demoState={
    expenses:[
        {
            id:"peiwioiroi",
            description:"January Rent",
            note:"This was the final payment for that address",
            amount:54500,
            createdAt:0
        }
    ],
    filters:{
        text:"rent",
        sortBy:"amount",
        startDate:undefined,
        endDate:undefined
    }
};