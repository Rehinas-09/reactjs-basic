import React,{Component} from 'react'
class Counter3 extends Component{
        constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    incrementCount=()=>{
        this.setState((prev)=>{   
            return{count:prev.count+1}
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
export default Counter3                   