 import React,{Component} from 'react'
 class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            ParentName:"parent"
        }
    }
    greetParrent(){
        alert(`Hello ${this.state.ParentName}`)
    }
    render(){
        return(
            <div>
                   
            </div>
        )
    }
 }