import React, { Component } from 'react'
class LFb extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"rehinas"
        }
        console.log('lifeCycleB constructor ')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle B getDerivedStatefromProps')
        return null;
    }
    componentDidMount(){
        console.log('Life cycle B Component Did mount')
    }
    render(){
        console.log('LifeCycleB render')
        return(
            <div>
                   LifeCycle B     
            </div>
        )
    }
}
export default LFb