// import dependencies
import React, { Fragment } from "react";
import {Col} from 'reactstrap'
// import components
import User from "./username";
// impost styling
// set up statless component
const Profile = () => {
  return (
    <Fragment>
<Col md="6">
      <User />
     </Col>
    </Fragment>
  );
};
export default Profile;
