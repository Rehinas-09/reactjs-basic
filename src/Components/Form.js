// import React,{Component} from 'react'
// class Form extends Component{
//       constructor(props){
//         super(props)
//         this.state={
//             username:' ',
//             comments:' ',
//             topic:'React'
//         }
//       }
//       handleChange=(event)=>{
//          this.setState({    
//             username:event.target.value,
//          }) 

//       }
//       handleCommentsChange=(event)=>{
//         this.setState({
//            comments:event.target.value,
//         })
//     }
//     handleTopicChange=event=>{
//         this.setState({
//             topic:event.target.value         
//         })
//     }
//     handleSubmit=event=>{
//         alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
//         event.preventDefault()
//     }          
//     render(){     
//         const {username,comments,topic}=this.state
//         return(        
//             <form onSubmit={this.handleSubmit}> 
//                 <div>      
//                     <label>User Name</label>
//                     <input type="text" value={username} onChange={this.handleChange}></input>   
//                 </div><br></br>    
//                 <div>
//                     <label>Comments</label>
//                     <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
//                 </div>
//                 <div>
//                     <label>Topic</label>    
//                     <select value={topic} onChange={this.handleTopicChange}>
//                         <option value="react">React</option>
//                         <option value="agular">Angular</option>
//                         <option value="vue">Vue</option>
//                     </select>
//                 </div> 
//                 <button type='submit'>submit</button>

//             </form>             
//         )   
//     }
// }
// export default Form
import React, { useState } from 'react'
function Form(){
    const [name,setName]=useState(' ')
    function handleChange(event){
        setName(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault();
        alert(`Submitted Name:${name}`)
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} placeholder='Enter name'></input>
            <button type='submit'>submit</button>
        </form>         
     )   
                                                        
                  
}
export default Form;        
               