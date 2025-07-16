
import React, { Component } from 'react'
import Cc from './Cc'
class Pc extends Component{
    constructor(props){
        super(props)
        this.state={
            parentName:'parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(child){
        alert(`Hello ${this.state.parentName} from ${child}`)
    }  
    render(){
        return(    
            <div>
                 <Cc greetHnadler greetHandler={this.greetParent}/>
            </div>
        )       
    }  
}
export default Pc        