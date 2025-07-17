import React from 'react';
function BuggyComponent(){
    throw new Error('I crashed!')
    return(
        <div>This won't render</div>
    )
}
export default BuggyComponent;