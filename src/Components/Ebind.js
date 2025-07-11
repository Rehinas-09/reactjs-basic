import React,{Component} from 'react'
class Ebind extends Component{
    constructor(){
     super()
     this.state={
        message:"hello"
     }
    //  this.clickHandler=this.clickHandler.bind(this)
    }  
    clickHandler=()=>{
        this.setState({
            message:"Bye"    
        })
        console.log(this)
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */} 
                <button onClick={this.clickHandler} >clicked</button>
            </div>  
        )  
    }              
}             
export default Ebind;