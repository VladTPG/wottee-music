
import SignInForm from "./SignInForm.component.jsx";
import {useState} from "react";
import SignUpForm from "./SignUpForm.component.jsx"
const Authentication = () => {

    const [signUp, setSignUp] = useState(false);

    return (
        <div className="text-white bg-sign-in-background bg-no-repeat bg-cover flex justify-center items-center min-h-screen">
            {signUp ? <SignUpForm setSignUp = {setSignUp}></SignUpForm> : <SignInForm setSignUp = {setSignUp}></SignInForm>}
        </div>
    );
};

export default Authentication;
