import React from 'react'
function Column(){
    const items=[]
    return(
        <>
            {/* {
                items.map(item=>{
                    <React.Fragment key={item.id}>
                      <h1>Title</h1>
                      <p>{item.title}</p>
                     </React.Fragment>   
                }) */}
               {/* {
                items.map(item=>(
                    <React.Fragment >   

                    </React.Fragment>
                ))
               }  */}
            <th>
                Name   
            </th>
            <td>
                Rehinas
            </td>       
        </>
    )
      
}
export default Column;                                                                                           