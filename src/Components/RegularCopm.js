import React, { Component } from 'react'
class RegularComp extends Component{
    render(){
        console.log('***Regular Component render***')
        return(
            <div>
                Regular Coponent {this.props.name}
            </div>

        )
    }
}
export default RegularComp;