import './Nav2.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function Nav2() {
    return ( 
        <>
        <div className='os'>
            
        
        <div className="nav-link">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Streams</li>
            <li>Contact Us</li>
            <li><FontAwesomeIcon icon={faUser} /></li>
          </ul>
          </div>
          </div>
        </>
     );
}

export default Nav2;