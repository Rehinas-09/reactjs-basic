// import React from 'react'
// // function FrInput(){
//     // return(
//     //     <div>  
//     //         <input type="text"></input>
  
//     //     </div>
//     // )
//     const FrInput=React.forwardRef((props,ref)=>{
//          return(
//             <div>
//                 <input type="text" ref={ref}/>
//             </div>  
//          )
//     })               
       
// // }
// export default FrInput; 
// import React,{forwardRef} from 'react'
// const FrInput=forwardRef((props,ref)=>{
//     return <input ref={ref} {...props}/>
// })
// export default FrInput;
import React,{forwardRef} from 'react';
const FrInput=forwardRef((props,ref)=>{
    return <button ref={ref}{...props}>Click Me</button>
})
export default FrInput;                                                                                        