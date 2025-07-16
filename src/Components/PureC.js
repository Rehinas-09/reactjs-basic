 import React, { PureComponent } from 'react'
 class PureC extends  PureComponent{
    render(){
        console.log("pure component render")
        return(
            <div>
               pure Component {this.props.name}

            </div>
        )     
    } 
 }
 export default PureC                                                                          