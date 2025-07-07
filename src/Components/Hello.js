import React from "react";
const Hello=()=>{
    // return(
    //     <div className='dummyClass>
    //         <h1>Hello,Rehinas</h1>
    //     </div>
    // )
    // return React.createElement('div',{id:"hello",className:"dummy-class"},React.createElement('h1',null,"hello Rehinas"))
    return(
        // <div>
        //     <h1>Hello,Rehi!</h1>
        //     <p>Welcome to JSX world!</p>
        // </div>
        React.createElement('div',null,React.createElement('h1',null,'Hello, Rehi!')
        ,React.createElement('p',null,'Welcome to JSX world!'))                        
                             
    )   
                            


}


export default  Hello;   