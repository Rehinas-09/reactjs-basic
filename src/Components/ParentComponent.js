// import React,{Component} from 'react'
// import ChildComponent from './ChildComponent'
// class ParentComponent extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             parentName:'Parent'
//         }
//         this.greetParent=this.greetParent.bind(this)
//     }
//     greetParent(childName){
//         alert(`Hello ${this.state.parentName} form ${childName}   `)
//     }
//     render(){
//         return(
//             <div>
//                  <ChildComponent greetHandler={this.greetParent}/>
//             </div>
//         )
//     }
// }         
// export default ParentComponent;                         
// import React,{Component, isValidElement} from 'react';
// import ChildComponent from './ChildComponent';
// class ParentComponent extends Component{
//     constructor(props){
//         super(props);
//         this.state={isVisible:false};
//     }
//     toggleVisibility=()=>{
//         this.setState({isVisible:!this.state.isVisible})
//     }
                    
//     render(){
//         return(
//             <div>
//                 <ChildComponent toggle={this.toggleVisibility}/>
//                 {this.state.isVisible&&<p>Hello! you can see me now</p>}
//             </div>
//         ) 
//     }
// }
// export default ParentComponent;
import React,{Component} from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component{
     handleInput=(value)=>{
        alert(`input recieved from child:${value}`)
     }

    render(){
        return(
            <div>
             <ChildComponent onInputChange={this.handleInput}/>
            </div>
        )        
    }      
}
export default ParentComponent;
