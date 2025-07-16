import React  from "react"
import './Style.css'

function Style(props){
    let className=props.primary? 'primary':''
    return(
        <div>
         <h2 className={`${className} font-size`}>StyleSheet</h2>
        </div> 
    )
}   
export default Style                   