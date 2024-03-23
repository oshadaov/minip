import "./NavigationBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function NavigationBar() {
  return (
    <>
      <div className="pic">
        <img src="src\pictures\VirtualLab Logo.png" width="120px" height="120px"></img>

        <div className="nav-links">
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

export default NavigationBar;
