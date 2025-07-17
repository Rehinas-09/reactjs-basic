import Recat,{Component} from'react'
class Form2 extends Component{
    constructor(props){
        super(props)
        this.state={
            username:' ',
            comments:'',
            topic:'react'
        }
        // this.handleUserNameChange=this.handleUserNameChange.bind(this)
    } 
    handleUserNameChange=(event)=>{
          this.setState({
            username:event.target.value
          })
    } 
    // handleUserNameChange(event){
    //     this.setState({
    //         username:event.target.value
    //     })
    // }
    handleComments=(event)=>{
       this.setState({
            comments:event.target.value
       })
    }
    handleSelect=(event)=>{
        this.setState({
            topic:event.target.value

        })
    }
    handleSubmit=(event)=>{
     alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
     event.preventDefault()
    }
    render(){ 
        const{username,comments,topic}=this.state
        return(
            <form onSubmit={this.handleSubmit}>
           <div>
            <label>UserName</label>
            <input type='text' value={username} onChange={this.handleUserNameChange}/>
           </div>
           <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.handleComments}></textarea>
           </div>
           <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleSelect}>
             <option value='react'>React</option>
             <option value='angular'>Angular</option>
             <option value='vue'>Vue</option> 
            </select>                
           </div>    
           <button type="submit">Submit</button>        
                                                               
           </form>   
        )             
    }          
}      
export default Form2     
        