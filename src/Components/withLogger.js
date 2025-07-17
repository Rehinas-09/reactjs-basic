import React from 'react'
function withLogger(WrappedComponent){
    return function EnhancedCompnent(props){
        console.log("props",props)
    }
}
function Hello(props){
     return <h1>Hello, {props.name}</h1>
}
const HelloWithLogger=withLogger(Hello)
                   