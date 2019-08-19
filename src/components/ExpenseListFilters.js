import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
export class ExpenseListFilters extends React.Component{
    state={
        calendarFocused:null
    }
    onDatesChange=({startDate, endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}))
    }
    onTextChange=(e)=>{
        this.props.setTextFilter(e.target.value);
    }
    onSortChange=(e)=>{
        e.target.value==="date"?this.props.sortByDate():
        this.props.sortByAmount();
       // props.dispatch(e.target.value==="date"?sortByDate():sortByAmount());
    }
    render(){
        return (
            <div>
            <input type="text" value={ this.props.filters.text} onChange={ this.onTextChange}/>
            <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
             startDate={this.props.filters.startDate}
             endDate={this.props.filters.endDate}
             onDatesChange={this.onDatesChange}
             focusedInput={this.state.calendarFocused}
             onFocusChange={this.onFocusChange}
             showClearDates={true}
             numberOfMonths={1}
             isOutsideRange={()=>false}
            />
            </div>

        )
    }
}
const mapStateToProps=(state)=>{
    return{
        filters:state.filters
    }
}

const mapDispatchToProps=(dispatch)=>({
    setTextFilter:(text)=>dispatch(setTextFilter(text)),
    sortByDate:()=>dispatch(sortByDate()),
    sortByAmount:()=>dispatch(sortByAmount()),
    setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
    setEndDate:(endDate)=>dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);




// previous code
// import React from "react";
// import { connect } from "react-redux";
// import { DateRangePicker } from "react-dates";
// import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
// class ExpenseListFilters extends React.Component{
//     state={
//         calendarFocused:null
//     }
//     onDatesChange=({startDate, endDate})=>{
//         this.props.dispatch(setStartDate(startDate));
//         this.props.dispatch(setEndDate(endDate));
//     }
//     onFocusChange=(calendarFocused)=>{
//         this.setState(()=>({calendarFocused}))
//     }
//     render(){
//         return (
//             <div>
//             <input type="text" value={ this.props.filters.text} onChange={(e)=>{
//                this.props.dispatch(setTextFilter(e.target.value));
//             } }/>
//             <select value={this.props.filters.sortBy} onChange={(e)=>{
//                 e.target.value==="date"?this.props.dispatch(sortByDate()):
//                 this.props.dispatch(sortByAmount());
//                // props.dispatch(e.target.value==="date"?sortByDate():sortByAmount());
//             }}>
//             <option value="date">Date</option>
//             <option value="amount">Amount</option>
//             </select>
//             <DateRangePicker 
//              startDate={this.props.filters.startDate}
//              endDate={this.props.filters.endDate}
//              onDatesChange={this.onDatesChange}
//              focusedInput={this.state.calendarFocused}
//              onFocusChange={this.onFocusChange}
//              showClearDates={true}
//              numberOfMonths={1}
//              isOutsideRange={()=>false}
//             />
//             </div>

//         )
//     }
// }
// const mapStateToProps=(state)=>{
//     return{
//         filters:state.filters
//     }
// }

// export default connect(mapStateToProps)(ExpenseListFilters);