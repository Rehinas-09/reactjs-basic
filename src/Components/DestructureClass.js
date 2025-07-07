// import React,{Component} from "react";
// class DestructureClass extends Component{
//     render(){
//         const {name,age}=this.props
//         // const {state1,state2}=this.state;
//         return(
//             <div>
//                 welcome {name} you are {age} old;
//             </div> 
//         )
//     }
// }
// export default DestructureClass ;   
import React,{Component} from 'react'
class DestructureClass extends Component{
    render(){
        const {name,age}=this.props;
        return(
            <div>
                <h1>Hello{name}</h1>
                <p>you are {age}years old.</p>
            </div>
        )                                             
    }
}    
export default DestructureClass                         