 import React from 'react'
 function Cc(props){
    return(
        <div>
              <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )    
 } 
 export default Cc                             