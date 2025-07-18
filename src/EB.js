import React,{Component} from 'react'
class EB extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return{hasError:true};
    }
    componentDidCatch(error,info){
        console.error("Error caught by Error Boundary",error,info)
    }
     render(){
        if(this.state.hasError){
            return <h2>Something went wrong</h2>
        }
        return this.props.children;
     }

}
export default EB;