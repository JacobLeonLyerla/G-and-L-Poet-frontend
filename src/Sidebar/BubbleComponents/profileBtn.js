import React from 'react';
import {Link} from'react-router-dom';
const ProfileBtn =()=>{
    return(
        <Link to ={'/profile'} className="bubble-container user-icon" style={{ textDecoration: 'none', color:"white" }}>
        <i class="fas fa-user-alt" />
      </Link>
    )
}
export default ProfileBtn