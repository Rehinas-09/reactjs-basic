import React from "react";
const Signup=()=>{
    return(
       <div>
        <h1>Sign up page</h1>
        <label>Name:</label>
        <input type="text" />
        <label htmlFor="age">Age</label>
        <input type="number"/>
        <label htmlFor="father-name">Father Name</label>
        <input type="text"/>
        <label htmlFor="mother-name"></label>
        <input type="text" />
        <label htmlFor="User-Name">UserName</label>
        <input type="text" />
        <label>Password: </label>
        <input type="password" />
        <label>Confirm Password</label>
        <input type="Password"/>
       </div>                       
    )
}   
export default Signup;                                              