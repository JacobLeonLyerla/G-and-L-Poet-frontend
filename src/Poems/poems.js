
import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, } from 'reactstrap';

const Poems = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
      
          <CardText>Some quick Poems text to build on the card title and make up the bulk of the card's content.</CardText>
  
        </CardBody>
      </Card>
    </div>
  );
};

export default Poems;