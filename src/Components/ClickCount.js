import React,{Component} from 'react'
// import updatedComp from './WithCount'
import WithCount from './WithCount';
class ClickCount extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         count:0
    //     }
    // }
    // handleCount=()=>{
    //     this.setState((prev)=>{
    //         return{count:prev.count+1}
    //     })
    // }
    render(){
        const {count,handleCount}=this.props
        // const {count}=this.state
        return <button onClick={handleCount}>{this.props.name}Clicked {count} times</button>
    }  
}             
export default WithCount(ClickCount,2);                                             