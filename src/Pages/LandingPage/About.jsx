import './About.css'
function About() {
    return (
        <>
        <div className="containerA">
            <div className="heade"></div>
            <div className="bigbox">
            
              <div className="minibox">
                 <div className="partA">
                <img src='src\pictures\graduation-hat-02.svg' className='minipics'></img>
                 </div>
                <div className="partB">
                    <p>100+</p>
                    <p>Practicles</p>
                </div>
              </div>
              <div className="minibox">
                <div className="partA">
                <img src='src\pictures\graduation-hat-02.svg' className='minipics'></img>
                </div>
                <div className="partB">
                    <p id='po'>AI</p>
                    <p >Assistance</p>
                </div>
            </div>
            <div className="minibox">
                <div className="partA">
                <img src='src\pictures\graduation-hat-02.svg' className='minipics'></img>

                </div>
                <div className="partB">
                    <p>Self</p>
                    <p>Evaluation</p>
                </div>
            </div>
            </div>
          <div className="AU">
            <h1>About Us</h1>
            <div className="under"></div>
          </div>
          <div className="contentBox">
            <p>We are a team who was struggled at our A/Ls and trying to assist our </p>
            <p>fellow sisters and brothers in order to study the practicals effectively </p>
            <p>using a virtual lab system. </p>
            <p>Here, A text to Image model, AI chat-bot and NLP are being implemented </p>
            <p>to make you all aware of the experimental lessons .</p>
          </div>

        </div>
        </>
      );
}

export default About;