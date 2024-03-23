import './Home.css'
import Button from 'react-bootstrap/Button';

function Home() {
    return ( 
        <>
            <div className="containerH">
                <div className="leftcontent">
                    <div className="picture">
                        
                    </div>
                </div>
                <div className="rightcontent">
                    <h1>A way to go more by</h1>
                    <h1>diving into the </h1>
                    <h1>experimental world.....</h1>
                    <h2>"A way to go more by diving into the </h2>
                    <h2>experimental world"</h2>
                    <Button id='signbtn' as="input" type="submit" value="Sign Up" />
                </div>

            </div>
        </>
     );
}

export default Home;