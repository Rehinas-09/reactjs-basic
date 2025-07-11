// import React,{Component} from 'react'
// class UserGreeting extends Component{
//     constructor(props){
//         super(props)

//         this.state={
//            isLoggedIn:true
//         }
//     }
//     render(){
//         // if(this.state.isLoggedIn){
//         //     return(
//         //         <div>
//         //             Welcome Rehinas
//         //         </div>
//         //     ) 
//         // } else{
//         //     return(
//         //         <div>    
//         //             Welcome Guest
//         //         </div>
//         //     )
//         // }             
//         // return(
//         //     <div>
//         //       <div>Welcome Rehinas</div> 
//         //       <div>Welcome Guest</div>    
//         //     </div>    
//         // )
//         // let message
//         // if(this.state.isLoggedIn){
//         //     message=<div>Welcomre Rehinas</div>
//         // }
//         // else{
//         //     message=<div>Welcome Guest</div>
//         // }
//         // return(
//         //     <div>
//         //         {message}
//         //     </div>
//         // )
//         // return(
//         //     this.state.isLoggedIn?
//         //     <div>Welcome Rehinas</div>:
//         //     <div>
//         //         Welcome Guest
//         //     </div>   
//         // )
//         return( 
//         this.state.isLoggedIn && <div>Welcome Rehinas</div>
//         )
//     }  
// }     
// export default UserGreeting
// function  UserGreeting(props){
//     if(props.isLogedIn){
//         return<h1>Welcome back!</h1>;
//     }
//     else{
//         return<h1>Please sign in.</h1>
//     }
// }
// export default UserGreeting 
// function UserGreeting(props){
//     return(
//         <h1>
//             {props.isLoggedIn?"Wlcome back!":"plase loggin"}
//         </h1>
//     )
// }
// export default UserGreeting;
// function UserGreeting(props){
//     return(
//         <div>
//             <h1>DashBoard</h1>
//             {
//                 props.isLoggedIn && <p>You have new message</p>
//             }
//         </div>
//     )
// }
// export default UserGreeting 
// function UserGreeting(props){
//     let message;
//     if(props.isOnline){
//         message=<p>User is Online</p>
//     }
//     else{
//         message=<p>User is offline</p>
//     }
//     return(
//         <div>
//             {message}
//         </div>
//     )
// }
// export default UserGreeting;
// function Sytatus(props){
//     return(
//         <div>
//             {
//                 (()=>{
//                     if(props.score>80)return<p>Excellent</p>;
//                      if(props.score>50) return<p>Good</p>;
//                      return<p>Needs Improvement</p>
//                 })
//             }
//         </div>
//     )
// }
// import React,{useState} from 'react';
// function UserGreeting(){
//     const [isLoggedIn,setIsLoggedIn]=useState(false)
//     return(
//         <div>
//             <h2>{isLoggedIn ? "Welcome back!":"Please login"}</h2>
//             <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
//                 {isLoggedIn?"LogOut":"Login"}
//             </button>
//         </div>
//     )                                                       
// }
// export default UserGreeting;    
// const array1=[1,4,9,16];
// const map1=array1.map((x)=>x*2) 
// console.log(map1)
            