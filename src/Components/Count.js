import React,{Component} from 'react';
class Count extends Component{
    constructor(props){
       super(props)
       this.state={
        count:0
       }
    }
    increment=()=>{
        this.setState({count:this.state.count+1},()=>{
            console.log('Update Count',this.state.count)
        })
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
   render(){
    return(
        <div>
             <h1>count{this.state.count}</h1>
             <button onClick={this.increment}>Increment</button>
             <button onClick={this.decrement}>Decrement</button>
        </div>
    )      
   }
}                               
export default Count;     