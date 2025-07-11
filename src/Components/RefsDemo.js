// import React, { Component } from 'react';
//  class RefsDemo extends Component{
//     constructor(props){
//         super(props)
//         this.inputRef=React.createRef()//first approach
//         this.cbRef=null //creat property
//         this.setCbRef=element=>{
//             this.cbRef=element
//         }
//     }
//     componentDidMount(){
//         if(this.cbRef){
//             this.cbRef.focus()
//         }
//         // this.inputRef.current.focus()
//         // console.log(this.inputRef)
//     }
//     clickHandler=()=>{
//         alert(this.inputRef.current.value)
//     }
//     render(){
//         return(
//             <div>
//                 <input type="text" ref={this.inputRef}/> 
//                 <input type="text" ref={this.setCbRef}/>   
//                 <button onClick={this.clickHandler}>Click</button>
//             </div>
//         ) 
//     }  
//  }
//  export default RefsDemo
//refs is used for access directly into DOM
// import React,{Component} from 'react'
// class RefsDemo extends Component{
//     constructor(props){
//         super(props) 
//         this.inputRef=React.createRef() //first method //this is crreating a reference using createRef
//         //second method is creating by using callback; 
//         this.cbRef=null;//create a property
//         this.setCbRef=(element)=>{//then create a method in DOM element passed as parameter
//             this.cbRef=element
//         }


//     }
//     componentDidMount(){ 
//            if(this.cbRef){
//             this.cbRef.focus()//second method
//            }

//         // this.inputRef.current.focus() 
//         // console.log(this.inputRef)

//     } 
//     clickHandler=()=>{
//         alert(this.inputRef.current.value)
//     }
//     render(){
//         return(   
//             <div>  
//                <input type="text" ref={this.inputRef}/>  
//                 <input type="text" ref={this.setCbRef}/>  
//                <button onClick={this.clickHandler} >Click</button>
//             </div>
//         )      
//     } 
// }   
// export default RefsDemo;
// import React,{useRef} from 'react';
// function RefsDemo(){
//     const inputRef=useRef(null);
//     function handleClick(){
//         inputRef.current.focus()
//     }

//     return(
//         <div>
//             <input type="text" ref={inputRef}/>
//             <button onClick={handleClick}>Focus Input</button>
//         </div> 
//     )
// }
// export default RefsDemo;
//inputRef.current gives you access to the actual DOM
// import React,{Component} from 'react';
// class RefsDemo extends Component{
//     constructor(props){
//         super(props)
//         this.inputRef=React.createRef(); //Creatinf ref
//     }
//     componentDidMount(){
//         this.inputRef.current.focus();//focus after did Mount

//     }
//     render(){
//         return(
//             <input type='text' ref={this.inputRef}></input>
//         )
//     }
// }
// export default RefsDemo;
import React,{useRef} from "react";
function RefsDemo(){
    const inputRef=useRef(null);
    function showValue(){
        alert(inputRef.current.value)
    }
    return(
        <div>
            <input ref={inputRef} tyep="text" placeholder="Enter your Hobbies"/>
            <button onClick={showValue}>Show Value</button>
        </div>
    )
}
export default RefsDemo