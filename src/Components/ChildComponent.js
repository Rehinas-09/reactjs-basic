// import React from "react";
// function ChildComponent(props){
//     return(
//         <div>
//             <button onClick={()=>props.greetHandler('child')}>greetParent</button>
//         </div>   
//     )                        
// }
// export default ChildComponent;           
// import React from 'react';
// function ChildComponent(props){
//     return(
//         <div>
//             <button onClick={props.toggle}>Toggle Visibility</button>
//         </div>
//     )
// }    
// export default ChildComponent; 
//example 3
// import React,{useSate} from 'react'
// function ChildComponent(props){
//     const[input,setInput]=useSate('');
//     const handleChange=(e)=>{       
//         setInput(e.target.value);
//         props.onInputChange(e.target.value)
//     }

//     return(
//         <input type="text" value={input} onChange={handleChange}></input>
//     )
//                         
// export default ChildComponent;                                                         
                                                                           