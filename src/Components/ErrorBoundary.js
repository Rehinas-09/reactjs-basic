// import React,{Component} from 'react'
// class ErrorBoundary extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             hasError:false
//         }   
//     }

//     static getDerivedStateFromError(error){    
//         return{
//             hasError:true
//         }                                                
//     }
//     component
//     render(){  
//      if(this.state.hasError){
//         return <h1>Something went wrong</h1>
//      }
//      return this.props.childern 
//     }   
// } 
// export default ErrorBoundary;                             
import React,{Component} from 'react'          
class ErrorBoundary extends Component{
    state={hasError:false,error:null}
    static getDerivedStateFromError(error){  
        return{hasError:true,error};
    }
   componentDidCatch(error,info){
    console.log('Boindry catch an error')
   }
   render(){
    if(this.state.hasError){
        return<h2>Something went wrong:{this.state.error}</h2>
    }
    return this.props.Children;
   }
}
    
export default ErrorBoundary;      