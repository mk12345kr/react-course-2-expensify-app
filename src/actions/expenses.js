import uuid from "uuid";
import database from "../firebase/firebase";


//named export
// ADD_EXPENSE

export const addExpense=(expense)=>({
        type:"ADD_EXPENSES",
         expense
         });

export const startAddExpense=(expenseData={})=>{
    return (dispatch)=>{
        const {
            description="", 
            note="",
            amount=0,
            createdAt=0
        } = expenseData ;
        const expense={ description, note, amount, createdAt }

       return database.ref("expenses").push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        });
    };
};

// EDIT_EXPENSE

export const editExpense=(id,updates)=>{
    return{
        type:"EDIT_EXPENSES",
        id,
        updates
    }
}
// REMOVE_EXPENSE

export const removeExpense=({id}={})=>{
    return{
        type:"REMOVE_EXPENSES",
        id
    }
}