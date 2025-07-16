import React,{Component} from 'react'
import UpdatedComponent from './withCounter'
import withCounter from './withCounter'
class HoverCounter extends Component{
    //  constructor(props){
    //     super(props)
    //     this.state={
    //          count:0 
    //     }
    // }
    // incrementCount=()=>{
    //       this.setState(prevState=>{           
    //         return {count:prevState.count+1}https://www.youtube.com/watch?v=l8V59zIdBXU&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=35&pp=iAQB0gcJCc0JAYcqIYzv     
    // //       })   
    // }  
    render(){
        const {count,incrementCount}=this.props
        return(
           <div>
               <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
           </div>   
        )
    }                                                                  
}
export default withCounter(HoverCounter)   