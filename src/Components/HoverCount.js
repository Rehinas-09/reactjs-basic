import React,{Component} from 'react'
import WithCount from './WithCount';
class HoverCount extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         count:0
    //     } 
    // }
    // handleCount=()=>{
    //        this.setState((prev)=>{
    //         return {count:prev.count+1} 
    //        })    
    // }
    render(){
        const {count,handleCount}=this.props
        return(
            <div>
              <h2 onMouseOver={handleCount}>Hovered {count} times</h2>
            </div>
        )                        
    }      
}   
export default WithCount(HoverCount,5);                           