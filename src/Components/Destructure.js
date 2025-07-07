// import React from "react";
// const Destructure=(props)=>{
//     const {name,age}=props;
//     return(
//         <div>
//             <h1>
//                hello my name is{name} and my age is {age}
//             </h1>
//         </div>
//     )

// }
// export default Destructure;            
import React from 'react';
function Destructure({name,age}){
    return(
        <div>
            <h1>Hello {name}</h1>
            <p>You are {age} years old.</p>
        </div>
    )
}  
export default Destructure;                                        