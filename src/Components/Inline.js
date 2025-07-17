// import React from 'react'
// const heading={
//     fontSize:'72px',
//     color:'blue'
// }
// function Inline(){
//     return(
//         <div>
//             <h1 style={heading}>Inline</h1>
//         </div>
//     )
// }
// export default Inline        
//inline css
import React, { useState } from 'react'
function Inline(){
    const[isActive,setIsActive]=useState(false)
    const boxStyle={
        backgroundColor:isActive?'orange':'gray',
        padding:'20px',
        color:'white',
        textAlign:'center',
        borderRadius:'8px',                                                                                     
        cursor:'pointer'               
    };        
    return(
        <div style={boxStyle} onClick={()=>setIsActive(!isActive)}>
            {isActive?'Active Box':'Inactive Box'}
         
        </div>
 
    )
}                                         
export default Inline;  