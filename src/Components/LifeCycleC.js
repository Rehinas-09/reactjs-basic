import React, { Component } from 'react'
class LifeCycleC extends Component{
    constructor(props){
        super(props)
        this.state={count:0}
        console.log(`1 constructor`)
    }
    static getDerivedStateFromProps(props,state){
        console.log('2.Component derived State from props')
        return null;
    }
    componentDidMount(){
        console.log('4 componentDid Mount')
    }
    render(){
        console.log(`3 render`)
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}increment></button>
            </div>
        )
    }  
       
}
export default LifeCycleC;   
                                                      