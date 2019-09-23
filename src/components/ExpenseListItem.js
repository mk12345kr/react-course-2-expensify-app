import React from "react"
import { Link} from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
const ExpenseListItem=({ id, description, amount, createdAt})=>(
    <Link className="list-item" to={`/edit/${id}`}>
    <div>
    <h3 className="list-item__title">{description}</h3>
    <span className="list-item__sub-title">{moment(createdAt).format("MMMM Do, YYYY")}</span>
    </div>
    <div>
    <h3 className="list-item__data">{numeral(amount/100).format("$0,0.00")}</h3>
    </div>
    </Link>
   
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