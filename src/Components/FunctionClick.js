import React from "react";
const FunctioClick=()=>{
    function clickHandler(){
        console.log("button clicked")
    }
    return(
        <div>
       <button onClick={clickHandler}>Click</button>
        </div>
    )
}  
export default FunctioClick;                                                                                                                                                                                                                                                                                                                                                                                                                                         