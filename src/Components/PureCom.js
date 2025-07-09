// import React,{PureComponent} from 'react'
// class PureCom extends PureComponent {
//     render(){
//         console.log(`******pure component render*****`)
//         return(
//             <div>
//               Pure Component {this.props.name}
//             </div>
//         )                        
//     }
// }
// export default PureCom          
import React, { PureComponent } from 'react'
class Purecomp extends PureComponent{
    render(){
        console.log('PureComponent Render')
        return <h2>Pure Component:{this.props.name}</h2>
    }
} 
export default Purecomp;  