import React,{Component} from 'react'
class User2 extends Component{
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
               {this.props.render(false)}
            </div>        
        )  
    }                                     
}     
export default User2                                       