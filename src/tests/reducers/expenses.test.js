import expensesReducer from "../../reducers/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";
test("should set default state",()=>{
    const state=expensesReducer(undefined,{type:"@@INIT"});
    expect(state).toEqual([]);
});
test("should remove expense by id",()=>{
    const action={
        type:"REMOVE_EXPENSES",
        id:expenses[1].id
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})
test("should remove expense if id is not found",()=>{
    const action={
        type:"REMOVE_EXPENSES",
        id:-1
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});
test("should add an expense",()=>{
    const action={
        type:"ADD_EXPENSES",
        expense:{
            id:"4",
            description:"filter",
            note:"",
            amount:560,
            createdAt:moment(0).add(8,"days").valueOf()
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,action.expense]);
})
test("should edit an expense",()=>{
    const action={
        type:"EDIT_EXPENSES",
        id:expenses[1].id,
        updates:{
            amount:19500
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state[1].amount).toBe(19500);
})
test("should not edit an expense if id is not found",()=>{
    const action={
        type:"EDIT_EXPENSES",
        id:"-1",
        updates:{
            description:"editing",
            note:"",
            amount:5600,
            createdAt:moment(0).add(4,"days").valueOf()
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})
test("should set expenses",()=>{
    const action={
        type:"SET_EXPENSES",
        expenses:[expenses[1]]
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1]])
});