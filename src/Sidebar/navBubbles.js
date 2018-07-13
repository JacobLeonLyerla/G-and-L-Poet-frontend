// import dependencies
import React from "react";
import { Col } from "reactstrap";
import Login from './BubbleComponents/login'
import Profile from './BubbleComponents/profileBtn'
// import components

// set up statless component
const Bubbles = () => {
  return (
    <Col md="2"  className="bubbles-styles sign-icon">
   <Login/>
      <Profile/>
      <div className="bubble-container plus-icon">
        <i class="fas fa-plus-square" />
      </div>
      <div className="bubble-container sort-icon">
        <i class="fas fa-sort" />
      </div>
    </Col>
  );
};

// export components
export default Bubbles;
