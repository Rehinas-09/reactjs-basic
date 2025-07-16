import React, { Component } from 'react'
import LFb from './LFb'
class LfA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"rehinas"
        }
        console.log('lifeCycleA constructor ')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle A getDerivedStatefromProps')
        return null; 
    }
    componentDidMount(){
        console.log('Life cycle A Component Did mount')
    }
    shouldComponentUpdate(){
        console.log('Sholud Component Update method')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
       console.log("Life cycle A getSnapShotBefore Update")
    }
    render(){
        console.log('LifeCycleA render')
        return(
            <div>
                   LifeCycle A   
                   <LFb/> 
            </div>                 
        )            
    } 
} //update Life Cycle
export default LfA