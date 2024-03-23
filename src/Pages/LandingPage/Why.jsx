import './Why.css';
import Button from 'react-bootstrap/Button';

function Why() {
    return ( 
        <>
        <div className="containerW">
            <div className="whead">
                <h1>Why you ant to choose us?</h1>
                <div className="un"></div>
            </div>

            <div className="slidebar">
                <div className="AI">
                    <p>An AI</p>
                    <p>chat-</p>
                    <p>bot</p>               
                </div>

                <div className="AImiddle">
                <div className="middle"></div>
                <div className="middle2"></div>
                <div className="middle1">
                <div  className="bot">
                        <p>An AI chat-bot is</p>
                        <p>available to assist</p>
                        <p>you!</p>
                    </div>
                    <div className="bot">
                        <img src='src\pictures\Rectangle624.png'></img>
                    </div>
                </div>

                </div>
                
                <div className="AI1">
                    <p>An AI</p>
                    <p>chat-</p>
                    <p>bot</p>
                    
                </div>
            </div>
            <div className="last">

                <div className="getstarted">
                <Button id='getbtn' as="input" type="submit" value="Get Started Now" />

                </div>
            </div>
            <div className='end'></div>
        </div>
        </>
     );
}

export default Why;