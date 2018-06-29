// import dependencies
import React from 'react';
// import components
import Poems from './poems'

// set up statless component
const PoemComponents =()=>{
    
let poems =[];
for (let i = 0; i < 4; i++) {
poems.push(<Poems key={i}/>)
}

   return(
    
    //render components
<div>{poems}</div>
) 
}
export default PoemComponents
// export component