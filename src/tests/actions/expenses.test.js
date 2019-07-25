import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
test("Should setup remove expense action object", ()=>{
    const action=removeExpense({ id:"123abc" });
    expect(action).toEqual({
        type:"REMOVE_EXPENSES",
        id:"123abc"
    });
});
test("Should setup edit expense action object",()=>{
    const action=editExpense("123abc",{note:"New note value"});
    expect(action).toEqual({
       type:"EDIT_EXPENSES",
       id:"123abc",
       updates:{note:"New note value" }
    });
});
test("Should setup add expense action object with provided values", ()=>{
    const expenseDate={
        description:"Rent",
        amount:109500,
        createdAt:1000,
        note:"This was last month rent"
    }
    const action=addExpense(expenseDate);
    expect(action).toEqual({
        type:"ADD_EXPENSES",
        expense:{
            ...expenseDate,
            id:expect.any(String)
        }
    });
});
test("Should setup add expense action object with default values",()=>{
    const action=addExpense();
    expect(action).toEqual({
        type:"ADD_EXPENSES",
        expense:{
            description:"",
            amount:0,
            createdAt:0,
            note:"",
            id:expect.any(String)
        }
    })
})