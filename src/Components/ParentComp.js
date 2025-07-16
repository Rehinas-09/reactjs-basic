import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularCopm';
import PureC from './PureC';
import Memo from './Memo';
class ParentComp extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            name:'Rehinas'
        }
    }
    componentDidMount(){
        setInterval(() => {   
            this.setState({
                name:'Rehinas'
            })  
        }, 2000);
    }
    render(){
        console.log('******Parent Comp Render*******')
        return(       
            <div>
                {/* Parent   
                <RegularComp name={this.state.name}></RegularComp>https://www.youtube.com/watch?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&v=FXa9mMTKOu8
                 <PureC name={this.state.name}/> */}
                 <Memo name={this.state.name}/>
            </div>
        )   
    }   
}
export default ParentComp     