// import React,{Component} from 'react'
// class Welcome extends Component{
//        render(){
//         return <h1>Class Component</h1>
//        }
// }
// export default Welcome;
import React,{Component} from 'react'
class Welcome extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={count:0}
    // }
    // increment=()=>{
    //     this.setState({count:this.state.count+1})
    // }
    render(){
        return(
            // <div>
            //     <p>Count:{this.state.count}</p>
            //     <button onClick={this.increment}>Increment</button>
            // </div>
            // <h1>Welcome {this.props.name} a.k.a {this.props.heroName} </h1>
            <div>
                <h2>Hello,{this.props.name}</h2>
                <p>Age:{this.props.age}</p>
            </div>
        )
    }      

}    
export default Welcome;                                              