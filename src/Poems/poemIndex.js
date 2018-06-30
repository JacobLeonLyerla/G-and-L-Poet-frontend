// import dependencies
import React from 'react';
import {Col} from 'reactstrap';
// import components
import Poems from './poems'

// set up statless component
const PoemComponents =()=>{
    
let poems =[];
for (let i = 0; i < 3; i++) {
poems.push(<Poems key={i}/>)
}

   return(
    
    //render components
    <Col md="9">
  {poems}
    </Col>

) 
}
export default PoemComponents
// export component