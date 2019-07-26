// // import "./utils.js"
// // import subtract, { square, add} from "./utils.js"
// // console.log("app.js is running");
// // console.log(square(4));
// // console.log(add(125,2));
// // console.log(subtract(100,81));


// import isSenior, {isAdult, canDrink} from "./person.js"
// console.log(isAdult(15));
// console.log(canDrink(25));
// console.log(isSenior(62));

// import validator from "validator"
// console.log(validator.isEmail("test@gmail.com"));
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store=configureStore();

console.log("test");

// store.dispatch(addExpense({ description:"water bill", amount:4500}));
// store.dispatch(addExpense({description:"gas bill", createdAt:1000}));
// store.dispatch(addExpense({description:"rent",amount:109500}));
// store.dispatch(setTextFilter("water"));

// const state=store.getState();
// const visibleExpenses=getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
const jsx=(
    <Provider store={store}>
    <AppRouter />
    </Provider>
)
ReactDOM.render(jsx,document.getElementById("app"));
// const template=<p>ThIS IS JSX FROM WEBPACK</p>
// ReactDOM.render(template,document.getElementById("app"));
