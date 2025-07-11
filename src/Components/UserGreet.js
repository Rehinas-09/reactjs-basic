import React, { Component } from 'react'
class UserGreet extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true
        }
    }
    render(){
        return this.state.isLoggedIn && <div>Welcome</div> 
    //        if(this.state.isLoggedIn){
    //         return(
    //            <div>   
    //              welcome to ooty
    //            </div>
    //         )
    // }              
    // else{
    //     return(
    //         <div>Go back and login first</div>
    //     ) 
    // }
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome to kerala</div>
    // }
    // else{
    //     message=<div>Go back and take the pass and come back</div>
    // }
    // return <div>{message}</div>  
    // return(
    //     this.state.isLoggedIn? <div>Welcome welcome</div>:<div>You chose wrong way dear!</div>
    // )               
    
}     
}  
export default UserGreet;   