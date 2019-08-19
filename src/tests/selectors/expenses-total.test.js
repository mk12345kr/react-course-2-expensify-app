import selectExpensesTotal from "../../selectors/expenses-total.js";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses",()=>{
    const res=selectExpensesTotal([]);
    expect(res).toEqual(0);
});
test("should correctly add up single expense",()=>{
    const res=selectExpensesTotal([expenses[0]]);
    expect(res).toEqual(expenses[0].amount)
})
test("should correctly add up multiple expenses",()=>{
    const res=selectExpensesTotal(expenses);
    expect(res).toEqual(24195)
})