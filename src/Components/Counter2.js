import React,{Component} from 'react'
class Counter2 extends Component{
       constructor(props){
        super(props)
        this.state={
            count:0
        }
     }  
      
     incrementCount=()=>{
        this.setState(prevstate=>{
            return{
                count:prevstate.count+1       
            }
        })               
     }      
    render(){
        return(
            <div>
                {this.props.render(this.state.count,this.incrementCount)}
            </div>            
        )
    }
}      
export default Counter2; 