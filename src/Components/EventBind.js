// import React,{Component} from 'react'
// export class EventBind extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             message:'hello'  
//         }
//         // this.clickHandler=this.clickHandler.bind(this)
//     }  
//     // clickHandler(){
//     //     this.setState({
//     //         message:"GoodBye!"
//     //     })
//     // }     
//   clickHandler=()=>{
//     this.setState({
//         message:'GoodBye.'
//     })           
//   }
//     render(){       
//         return(
//           <div>
//             <div>{this.state.message}</div>
//               {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
//               {/* <button onClick={()=>this.clickHandler()}>Click</button>     */}
//               <button onClick={this.clickHandler}>click</button>

//           </div>      
//         )
//     }                   
// }  
// export default EventBind;   
import React,{Component} from 'react'
class EventBind extends Component{
   constructor(props){
    super(props)
     this.state={
        name:'Rehinas'
     }
     this.clickHandler=this.clickHandler.bind(this)
   }
   clickHandler(){
     this.setState({
        name:'Ajmal'
     })
   }
    render(){
        return(
            <div>
                <div>{this.state.name}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }

}


   
             


export default EventBind;