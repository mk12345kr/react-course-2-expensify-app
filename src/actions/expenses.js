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
export const startEditExpense=(id,updates)=>{
    return (dispatch)=>{
        return database.ref(`expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id,updates));
        });
    };
};
// REMOVE_EXPENSE

export const removeExpense=({id}={})=>{
    return{
        type:"REMOVE_EXPENSES",
        id
    }
}
export const startRemoveExpense=({id}={})=>{
    return (dispatch)=>{
        return database.ref(`expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}))
        });
    };
};
export const setExpenses=(expenses)=>({
    type:"SET_EXPENSES",
    expenses
});
export const startSetExpenses=()=>{
    return (dispatch)=>{
       return database.ref("expenses").once("value").then((snapShot)=>{
            const expenses=[]
            snapShot.forEach((childSnapshot)=>{
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                });
            })
            dispatch(setExpenses(expenses));
        })
    }
}