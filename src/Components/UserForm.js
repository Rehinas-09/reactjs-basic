import React ,{Component} from "react";
class UserForm extends Component{
    constructor(props){
        super(props)
    this.state={
        name:'',
        email:''
    }
}
handleNameChange=(event)=>{
    this.setState({name:event.target.value})          
};
handleEmailChange=(event)=>{
      this.setState({email:event.target.value})   
} 
handleSubmit=(event)=>{
    event.preventDefault();
    alert(`Submitted Name:${this.state.name}\n Submitted Email:${this.state.email}`)
}           
    render(){
        return(
            <div>                                                                                                                    
               <h2>UserForm</h2>        
               <form onSubmit={this.handleSubmit}>
                 <div>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>           
                 </div>
                 <div>
                    <label>Email:</label>
                    <input type="email" value={this.state.email} onChange={this.handleEmailChange}></input>
                 </div>
                 <button type="submit">Submit</button>
               </form>
               <h3>Preview</h3>
               <p>Name:{this.state.name}</p>
               <p>Email:{this.state.email}</p>
            </div>
        )
    }
}

export default UserForm