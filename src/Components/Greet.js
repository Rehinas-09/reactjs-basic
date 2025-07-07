import React, { useState } from "react";
function Greet(props){
    // const [count,setCount]=useState(0)
    // function increment(){
    //     setCount(count+1)
    // }
    
    // return(
    //     <div>
    //     <h1>Hello rehinas</h1>
    //     <p>Count:{count}</p>
    //     <button onClick={increment}>Increment</button>
    //     </div>
    // )
    return(
        <div>
            {/* <h1>Hello,{props.name} a.k.a {props.heroName}</h1> 
            {props.children}                                    */}
            {/* <p>Welcome to React!</p> */}
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
             <p>Is Student:{props.isStudent ? "YES" :"No"}</p>
        </div>
    )   
}                                         
// const Greet=()=><h1>Hello Rehinas</h1>                 
 export default Greet;     
                                                  