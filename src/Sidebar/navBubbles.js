// import dependencies
import React from "react";
import { Col } from "reactstrap";
// import components

// set up statless component
const Bubbles = () => {
  return (
    <Col md="2"  className="bubbles-styles sign-icon">
      <div className="bubble-container sign-in-icon">
        <i class="fas fa-sign-in-alt" />
      </div>
      <div className="bubble-container user-icon">
        <i class="fas fa-user-alt" />
      </div>
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
