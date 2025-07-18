import Recat,{Component} from 'react'
class MouseTracker extends Component{
    state={
        x:0,
        y:0
    }
    handleMouseMove=(e)=>{
        this.setState({x:e.clientX,y:e.clientY})
    }
    render(){
        return(
            <div style={{height:'100vh'}} onMouseMove={this.handleMouseMove}>
             {this.props.render(this.state)}
            </div>  
        )    
    }                                           
}                  
               
export default MouseTracker;                                  
                                                                               