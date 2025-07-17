import React from 'react'
function Hero2({heroName}){
    if(heroName==='joker'){
        throw new Error('Not a hero')
    }
    return(
        <div>
             {heroName}
        </div>
    )
}
export default Hero2  