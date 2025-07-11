import React, { Component } from 'react'
class Ec extends Component{
    btnClick(){
        console.log('button clicked')
    }

    render(){
        return(
            <button onClick={this.btnClick}>Click</button>
        )
    }
}       
export default Ec;                            