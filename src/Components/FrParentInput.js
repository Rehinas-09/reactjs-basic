// import React, {Component}from 'react'
// import FrInput from './FrInput';
// class FrParentInput extends Component{
//     constructor(props){
//         super(props)
//         this.inputRef=React.createRef()
//     }
//     clickHandler=()=>{
//         this.inputRef.current.focus()
//     }
//     render(){
//         return(
//             <div>  
//                 <FrInput ref={this.inputRef}/>

//                 <button onClick={this.clickHandler}>Focus Input</button>
//             </div>  
//         )
//     }  
// } 
// export default FrParentInput;   
// import React, {useRef} from 'react';
// import FrInput from './FrInput';
// function FrParentInput(){
//     const inputRef=useRef(null);
//     const focusInput=()=>{
//         inputRef.current.focus();
//     }
//     return(
//         <div>
//             <FrInput ref={inputRef} placeholder="Enter text Here"/>
//             <button onClick={focusInput}>Focus Input</button>
//         </div>
//     )
// } 
// export default FrParentInput; 
// import React from 'react'; 
import React, { useRef } from 'react';
import FrInput from './FrInput';

function FrParentInput() {
  const btnRef = useRef();

  const handleClick = () => {
    btnRef.current.style.backgroundColor = 'green';
    btnRef.current.innerText = 'Clicked!';
  };

  return (
    <div>
      <FrInput ref={btnRef} />
      <button onClick={handleClick}>Change Button Style</button>
    </div>
  );
}

export default FrParentInput;

    