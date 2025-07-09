import React,{Component} from "react";
class ClassClick extends Component{
    clickeHandler(){
        console.log("button cliked")
    }
    render(){
        return(
           <div>
               <button onClick={this.clickeHandler}>Click Me</button>
           </div> 
        )
    }   
}                                                                                                                                 
export default ClassClick;                                                                                        