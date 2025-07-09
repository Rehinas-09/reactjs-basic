// import React, { Component } from 'react'
// class RegComp extends Component{
//     render(){
//         console.log(`****** regular Component render******`)
//         return(
//             <div>
//                 Regular Component   {this.props.name}            
//             </div>
//         )
//     }
// }
// export default RegComp
import React,{Component} from "react"
class RegComp extends Component{
    render(){
        console.log('RegularComponenet Render')
        return <h2>Regular Component:{this.props.name}</h2>
    }
}
export default RegComp 