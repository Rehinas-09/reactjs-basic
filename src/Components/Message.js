import React,{Component} from 'react'
import Welcome from './Welcome'
class Message extends Component{
    constructor(){
        super() 
        this.state={
            message:'welcome visitor'
        }   
    }
    changeMessage(){
        this.setState({
            message:'Thank you for subscibing'
        })
    }  
    render(){
        return(
            <div>
                 <h1>{this.state.message}</h1>
                 <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
                         )                                                                                                                                                                                                                                                                                     
    }                                                   
}                                                                                               
export default Message                    
                       