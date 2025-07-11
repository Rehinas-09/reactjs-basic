import React from 'react';
function Fc(){
    function clickHandler(){
        console.log("function clicked")
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>   
    )
}
export default Fc;  