// import React from 'react'
// import axios from 'axios'
// class Get extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             posts:[],
//             error:' '
//         }
//     }
//     componentDidMount(){
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(response=>{
//             this.setSate({post:response.data})
//         })
//         .catch(error=>{
//             this.setState({error:'somethong went wrong'})
//         })
//     }
//     render(){
//         return(
//            <div>
//             <h2>Posts</h2>
//             {error &&<p>error</p>}
//            </div>

//         )
//     }
// }
// export default Get