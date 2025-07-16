// import React from 'react'
// function ListRender(){
//     const name=['Bruice','clark','Diana']
//     const nameList=name.map((x)=>x)
//     return(
//         <div>
//            <h2>{nameList}</h2>
//         </div> 
//     )
// }           
// export default ListRender;   
import React from 'react'
import PersonRender from './PersonRenader'
function ListRender(){
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'clark',
            age:25,
            skill:'angular'
        },
        {       
            id:3, 
            name:'diana',
            age:28,                             
            skill:'vue'
        }
    ]
    const personList=persons.map(person=> {
        <PersonRender person={person}/>
    })
    return(
        <div>              
            {personList}                  
        </div>
    )   
}
export default ListRender;