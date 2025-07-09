// import React from 'react'
// import './Mystyles.css'
// function StyleSheet(props){
//     let className=props.primary? 'primary':'';
//    return(
//     <div>
//         <h1 className={`${className} font-xl`}>Style Sheet</h1>

//     </div>
//    )
// }
// export default StyleSheet     
import React from 'react'
 import './Mystyles.css'
function StyleSheet(){
    return(
        <div className="container">
            <h1 className="title">External css Styling</h1>
            <button className="button">Click Me</button>
        </div>
    )

}  
export default StyleSheet;