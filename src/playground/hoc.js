import React from "react";
import ReactDOM from "react-dom";
const Info=(props)=>(
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
);
const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAdmin && <p>This is private info. Please don't share</p>}
        <WrappedComponent {...props} />
        </div>
    )
}
const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuhtenticated ?
            (<WrappedComponent { ...props }/>):
            (<p>Please login to view the info</p>)}
        </div>
    )
}
const AdminInfo= withAdminWarning(Info);
                //(props)=>(
    //     <div>
    //     <p>This is private info. Please don't share!</p>
    //     <Info {...props} />  // {info:"There are the details"}
    //     </div>
    // )
                    
 const AuthInfo=requireAuthentication(Info);               
//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuhtenticated={false} info="There are the details" />, document.getElementById("app"));