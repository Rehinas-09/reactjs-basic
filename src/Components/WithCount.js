import React from 'react';
const  WithCount=(WrappedComponent,incrementNumber)=>{

      class newComponent extends React.Component{
          constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handleCount=()=>{
        this.setState((prev)=>{
            return{count:prev.count+incrementNumber}
        })     
    }
    render(){
        return <WrappedComponent count={this.state.count} handleCount={this.handleCount}
        {...this.props}/>
    }                             
      }     
      return newComponent;                                        
}
export default WithCount;                                                                                              