import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (  
        <>
        <div className="footerl">
            <div className="fcontent">
                <div className="footcontent">
                    <p>... ........................................................</p>
                    <p>... ........................................................</p>
                    <p>... ........................................................</p>
                    <p>... ........................................................</p>
                    <p>... ........................................................</p>
                </div>
                <div className="socialmedia">
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebook} className=' text-3xl' /></li>
                        <li><FontAwesomeIcon icon={faTwitter}  className=' text-3xl' /></li>
                        <li><FontAwesomeIcon icon={faInstagram}  className=' text-3xl'/></li>
                        <li><FontAwesomeIcon icon={faInstagram}  className=' text-3xl'/></li>
                    </ul>
                </div>
               
            </div>  


            <div className="fcontent">
                <h1>Support</h1>
                <p>Help</p>
                <p>Review</p>
            </div>
            <div className="fcontent">
            <h1>Support</h1>
                <p>Help</p>
                <p>Review</p>
            </div>
            <div className="fcontent">
            <h1>Support</h1>
                <p>Help</p>
                <p>Review</p>
                <p>Review</p>
            </div>

            
                
      
        </div>
        </>
    );
}

export default Footer;