import NavigationBar from "../Components/NavigationBar";
import Home from "./LandingPage/Home";
import About from "./LandingPage/About";
import Why from "./LandingPage/Why";
import Footer from "../Components/Footer";
import SignUp from "./SignUp";
import SubjectNavigation from "./SubjectNavigation";



function LandingPage() {
    return ( 
        <>
         <div>
               {/*<NavigationBar/> 
               <Home/>
               <About/> 
               <Why/> 
               <Footer/>  
               <SignUp/>  */}
               <SubjectNavigation/>


        </div>
        
        
        </>

        
     );
}

export default LandingPage;