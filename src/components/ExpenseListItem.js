import React from "react"
import { Link} from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
const ExpenseListItem=({ id, description, amount, createdAt})=>(
    <div>
    <Link to={`/edit/${id}`}>
    <h3>{description}</h3>
    </Link>
    <p>
    {numeral(amount/100).format("$0,0.00")}
     - 
    {moment(createdAt).format("MMMM Do, YYYY")}
    </p>
    
    </div>
)
export default ExpenseListItem


// import React from "react"
// import { connect } from "react-redux";
// import { Link} from "react-router-dom";
// import {removeExpense} from "../actions/expenses";
// const ExpenseListItem=({dispatch, id, description, amount, createdAt})=>(
//     <div>
//     <Link to={`/edit/${id}`}>
//     <h3>{description}</h3>
//     </Link>
//     <p>{amount} - {createdAt}</p>
    
//     </div>
// )
// export default connect()(ExpenseListItem);