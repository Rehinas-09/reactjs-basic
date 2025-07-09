import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
class LifeCycle extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Rehinas"
        }
        console.log(`Life cycle A constructor`)
    }
    changeState=()=>{
        this.setState=({
            name:"ajmal"
        })
    }
    static getDerivedStateFromProps(){
        console.log(`LifeCycleA getDerivedStateFromProps`)
        return null
    }
    componentDidMount(){
        console.log(`LifeCycleA componentDidMount`)  
    }                     
    shouldComponentUpdate(){
        console.log(`lifeCycleA shouldComponentUpdate`)   
        return true;
    } 
    getSnapshotBeforeUpdate(prevProps,prevState){   
        console.log(`LifeCycleA getSnapShotBeforUpdate`)
        return null
    }    
    componentDidUpdate(){
        console.log('LifecycleA componentDidupdate')
    }     
    render(){           
        console.log(`LifeCycle A render`)      
        return <div>LifeCycle A
            <button onClick={this.changeState}>change State</button>
            <LifeCycleB/>
        </div>
    }
}
export default LifeCycle;                                                                   