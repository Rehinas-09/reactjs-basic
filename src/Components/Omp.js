import React,{Component,PureComponent} from 'react'
import PureCom from './PureCom'
import RegComp from './RegComp'
class Omp extends PureComponent{
    constructor(props){
        super(props)
        this.state={     
            name:"rehinas", 
        }
    }
   componentDidMount(){                                    
       setInterval(()=>{    
        this.setState({
        name:"Ajmal" })        
       },2000)  
   } 
    render(){                                                          
        console.log(`**********Parent Component*************`)
        return(                                
            <div>           
                  Parent Component
                  {/* <RegComp name={this.state.name}></RegComp> */}
                  <PureCom name={this.state.name}></PureCom>
                  <RegComp name={this.state.name}/>
            </div>
        )
    }
}
export default Omp;