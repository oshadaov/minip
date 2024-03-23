import CreateAccountForm from "../Components/CreateAccountForm";
import './SignUp.css';
import SignRightSide from "../Components/SignRightSide";

function SignUp() {
    return ( 
        <>

        
      <div className="contSign">

      <CreateAccountForm></CreateAccountForm> 
          <SignRightSide></SignRightSide> 
       </div>
       
        </>
     );
}

export default SignUp;