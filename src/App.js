// import logo from './logo.svg';
import './App.css';
import ChildComponent from './Components/ChildComponent';

// import ClassClick from './Components/ClassClick';
import Destructure from './Components/Destructure';
import DestructureClass from './Components/DestructureClass';
import EventBind from './Components/EventBind';
import FunctioClick from './Components/FunctionClick';
import Inline from './Components/Inline';
import NameList from './Components/NameList';
import ParentComponent from './Components/ParentComponent';
import StyleSheet from './Components/StyleSheet';
import UserForm from './Components/UserForm';
import UserGreeting from './Components/UserGreeting';
import UserForm2 from './UserForm2';
import './Components/AppStyel.css'
import styles from'./Components/AppStyle.module.css'
import Form from './Components/Form';
import LifeCycle from './Components/LifeCycleA';
import LifeCycleC from './Components/LifeCycleC';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureCom from './Components/PureCom';
import Omp from './Components/Omp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FrParentInput from './Components/FrParentInput';
import Fc from './Components/Fc';
import Ec from './Components/Ec';
import Ebind from './Components/Ebind';
import Pc from './Components/Pc';
import UserGreet from './Components/UserGreet';
import ListRender from './Components/ListRender';
import Style from './Components/Style';
import InlineStyle from './Components/InlineStyle';
import './regular.css'
import Styles from './module.module.css';
import Form2 from './Components/Form2';
import LfA from './Components/LfA';
import Fragment from './Components/Fragment';
import Table2 from './Components/Table2';
import { PureComponent, useState } from 'react';
import ParentComp from './Components/ParentComp';
import Refs from './Components/Refs';
import PortalDemo from './Components/PortalDemo';
import Modal from './Components/Model';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounter2 from './Components/ClickCounter2';
import HoverCounter2 from './Components/HoverCounter2';
import User from './Components/User';
import Counter2 from './Components/Counter2';
import ComponentF from './Components/ComponentF';
import Portal from './Components/Portal';
 
function App() {
  const [open,setOpen]=useState(false)
  return ( 
       
     <div>
      {/* <button onClick={()=>setOpen(true)}>Open model</button>
      <Modal isOpen={open} onClose={()=>setOpen(false)}>  
      <h1>Hello from a portal</h1>   
      </Modal>    */}
      {/* <h1 className='error'>Error</h1>    
      <h1 className={styles.success}>Success</h1>   */}   
       {/* <UserForm/> */}
       {/* <UserForm2/> */}
       {/* <Destructure name="Rehinas" age="24"/>
       <DestructureClass name="rehinas" age={24}/>
       <DestructureClass name="ajmal" age={25}/> */}
       {/* <FunctioClick/> */}
       {/* <ClassClick/> */}
       {/* <EventBind/>  */}
       {/* <ParentComponent/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
        {/* <StyleSheet />       */}
        {/* <Inline/>   */}
        {/* <Form/> */}
        {/* <LifeCycle/>  */}
        {/* <LifeCycleC/> */}
        {/* <FragmentDemo/>  */}
        {/* <Table/> */}
        {/* <Omp/> */}
        {/* <RefsDemo/>              */}
        {/* <FocusInput/> */}
        {/* <FrParentInput/> */}
        {/* <Fc/> */}
      {/* <Ec/> */}
      {/* <Ebind/> */}
      {/* <Pc/> */}
      {/* <UserGreet/> */}  
      {/* <ListRender/> */}           
      {/* <Style primary={true} />              */}
      {/* <InlineStyle/> */}  {/* <LfA/>
      {/* <h1 className='error'>Error</h1>
       <h1 className={Styles.success}>Success</h1>  */}
       {/* <Form2/> */}
       {/* <LfA/> */}
     {/* <Fragment/>    */}       
     {/* <Table2/> */}
      {/* <ParentComp/> */}
      {/* <Refs/> */}
      {/* <PortalDemo/>  */}          
      {/* <ErrorBoundary>         */}
     {/* <ErrorBoundary>
      <Hero heroName='Batman'/>
      </ErrorBoundary> 
      <ErrorBoundary>   
      <Hero heroName="superman "/>
      </ErrorBoundary>         
      <ErrorBoundary>
      <Hero heroName='joker'/>   
      {/* </ErrorBoundary>         */}
      {/* </ErrorBoundary> */} 
      {/* <ClickCounter name="Rehinas"/> 
      <HoverCounter/>              */}
      {/* <ClickCounter2/>                                    
      <HoverCounter2/>
      <User render={(isLoggedIn)=>isLoggedIn?'rehinas':'user no logged in'}/>      */}
      {/* <Counter2 render={(count,incrementCount)=> <ClickCounter2 count={count} incrementCount={incrementCount}></ClickCounter2>}/>
      <Counter2 render={(count,incrementCount)=> <HoverCounter2 count={count}  incrementCount={incrementCount}></HoverCounter2>}/> */}
      <Portal/>
             
    </div>                                                                                                                                                    
  );                                                                                                                                                                    
}                                                                                                                                                                                                                                                          b
                                                            
export default App;                                              