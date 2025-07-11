// import React,{Component,PureComponent} from 'react'
// import PureCom from './PureCom'
// import RegComp from './RegComp'
// import MemoComponent from './MemoComponent'
// class Omp extends PureComponent{
//     constructor(props){
//         super(props)
//         this.state={     
//             name:"rehinas", 
//         }
//     }
//    componentDidMount(){                                    
//        setInterval(()=>{    
//         this.setState({
//         name:"Ajmal" })        
//        },2000)  
//    }  
//     render(){                                                          
//         console.log(`**********Parent Component*************`)
//         return(                                
//             <div>           
//                   Parent Component
//                   {/* <RegComp name={this.state.name}></RegComp> */}
//                   {/* <PureCom name={this.state.name}></PureCom>
//                   <RegComp name={this.state.name}/> */}
//                   <MemoComponent name={this.state.name}></MemoComponent>
//             </div>
//         )
//     }     
// }        
// export default Omp;    
import React, { useState } from "react";
import MemoComponent from "./MemoComponent";
function Omp(){
    const[count,setCount]=useState(0)
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Click{count}</button>
            <MemoComponent name="Rehi"/>   
        </div>
    )
}
export default Omp;                                                                                  