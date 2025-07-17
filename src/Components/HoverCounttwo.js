import React,{Component} from 'react'
class Hovercounttwo extends Component{
    render(){
        const {count,incrementCount}=this.props  
        return(
            <div>
          <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
            </div>
        )          
    }
}
export default Hovercounttwo                      