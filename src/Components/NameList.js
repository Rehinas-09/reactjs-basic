// import React from 'react'
// function NameList(){
//     const names=["aparna",'anisha','rehinas']
//     const nameList=names.map(name=><h2>{name}</h2>)
//     return(
//         <div>
//           {/* <h2>{names[0]}</h2>
//           <h2>{names[1]}</h2>
//           <h2>{names[2]}</h2> */}
//           {/* {
//             names.map((x)=><h2>{x}</h2>)      
//           } */}
//           {nameList}
//         </div>                                       
//     )
// }
// export default NameList;
// import React from 'react'
// import Person from './Person';
// function NameList(){
//       const person=[
//         {
//             id:1,
//             name:'rehinas',
//             age:'24',
//             skill:'js'
//         },
//         {
//             id:2,
//             name:'aparna',
//             age:24,
//             skill:'dot net'
//         },
//         {
//             id:3,
//             name:'anisha',
//             age:25,
//             skill:'dot net'     
//         }
//       ]
//       const personList=person.map(person=><Person person={person}/>)

//     return(
//         <div>     
//         {personList}                
//         </div>     
//     )

// }
// export default NameList;
// import React from 'react'
// function NameList(){
//     const fruits=['Apple','Banana','Orange']
//     return(
//         <div>
//             <h2>Fruit List</h2>
//             <ul>
//                 {fruits.map((item,index)=>(<li key={index}>{item}</li>))}
//             </ul>
//         </div>
//     )
// }
// export default NameList;
// import React from 'react'
// function NameList(){
//     const user=[
//         {id:1,name:'John',age:25},
//         {id:2, name:'Alice',age:30},
//         {id:3,name:'Bob',age:22}

//     ];
//     return(
//         <div>
//             <h2>User info</h2>
//             <ul>
//                 {user.map((user)=>(<li key={user.id}>{user.name}-{user.age} years old</li>))}
//             </ul>   
//         </div>
//     )
// }       
// export default NameList;
import React from 'react'
import Person from './Person';
function NameList(){
    const person=[
        {id:1,name:'bruce',age:30,skill:'React'},
        {id:2,name:'clarck',age:25,skill:'Angular'},
         {id:3,name:'Dianan',age:28,skill:'Vue'}
    ]
    const personList=person.map(person=>(<Person key={person.id} person={person}/>))
    return <div>{personList}</div>
}
export default NameList;        