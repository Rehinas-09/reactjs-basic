import React from 'react'
const withCounter=WrappedComponent=>{
   class NewComponent extends React.Component{
        constructor(props){      
        super(props)
        this.state={
             count:0 
        }
    }
    incrementCount=()=>{
          this.setState(prevState=>{
            return {count:prevState.count+1}
          })
    }  
     render(){
        return <WrappedComponent  count={this.state.count}  incrementCount={this.incrementCount}   />
     }  
   }           
   return NewComponent;                     
}            
export default withCounter                                           