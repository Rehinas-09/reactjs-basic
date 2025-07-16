   import React, { useContext } from 'react'
   const userContext=React.createContext()    
   const userProvider=userContext.Provider;
   const userConsumer=useContext.Consumer    
   export {userProvider,userConsumer}                                                                                   