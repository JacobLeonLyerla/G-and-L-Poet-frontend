// import dependencies
import React from 'react';
import {Col} from 'reactstrap';
// import components
import Poems from './poems'

// set up statless component
const PoemComponents =()=>{
    
let poems =[];
for (let i = 0; i < 10; i++) {
poems.push(<Poems key={i}/>)
}

   return(
    
    //render components
    <Col sm="9" md="9" lg="8">
  {poems}
    </Col>

) 
}
export default PoemComponents
// export component