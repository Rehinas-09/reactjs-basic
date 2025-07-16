import React, { Component } from 'react';
class LifeCycleB extends Component{
    constructor(props){
      super(props)
      this.state={
        name:"rehinas"
      }
      console.log("LifeCycleB constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log(`LifecycleB getDerivedStateFromProps`);
        return null;
    } 
    componentDidMount(){
        console.log(`LifeCYcleB componentDidMount`)
    }
    shouldComponentUpdate(){
        console.log(`LifecycleB shold ComponentUpdate`)
        return true
    }
    getSnapshotBeforeUpdate(prevProps,preState){
        console.log(`LifeCycleB getSnapShotBeforeUpdate`)
    }
    componentDidUpdate(){
        console.log(`LifeCycleB componentDidUpdate`)
    }
    render(){
        console.log(`LifecycleB render`)
        return(
            <div>
                lifecycle B
            </div>
        )
    }
    
} 
export default LifeCycleB                                               