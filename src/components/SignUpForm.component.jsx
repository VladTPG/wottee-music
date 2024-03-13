import Button from "./Button.component.jsx";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import {signInUserWithEmailAndPassword, signInUserWithFacebook} from "../utils/firebase.js";
import FormInput from "./FormInput.component.jsx";
import {signInUserWithGoogle} from "../utils/firebase";
const SignUpForm = (props) => {
    const { setSignUp } = props;
    const defaultSignUpDetails = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword:""
    };
    const [passwordMismatchError, setPasswordMismatchError] = useState(false);

    const [signUpDetails, setSignUpDetails] = useState(defaultSignUpDetails);
    const { setCurrentUser } = useContext(UserContext);

   const handleSubmit = async (event) => {
            event.preventDefault();

            // Check if passwords match
            if (signUpDetails.password !== signUpDetails.confirmPassword) {
                // Set password mismatch error state
                setPasswordMismatchError(true);
                return;
            } else {
                // Reset password mismatch error state
                setPasswordMismatchError(false);
            }

            // try {
            //     // Call your function for signing up the user with email and password
            //     await signInUserWithEmailAndPassword(signUpDetails.email, signUpDetails.password);
            //     // Optionally, you can update user profile with display name
            //     await firebase.auth().currentUser.updateProfile({
            //         displayName: signUpDetails.displayName
            //     });
            //     // Update your UserContext or perform any other necessary actions
            //     setCurrentUser(firebase.auth().currentUser);
            // } catch (error) {
            //     // Handle signup error
            //     console.error("Error signing up:", error);
            // }
        };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignUpDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const signUpForm = [
        {
            name: "displayName",
            label: "Display Name",
            required: true,
            htmlFor: "displayName",
            type: "text"
        },
        {
            name: "email",
            label: "Email",
            required: true,
            htmlFor: "email",
            type: "email"
        },
        {
            name: "password",
            label: "Password",
            required: true,
            htmlFor: "password",
            type: "password"
        },
        {
            name: "confirmPassword",
            label: "Confirm Password",
            required: true,
            htmlFor: "confirmPassword",
            type: "password"
        }
    ];


    return (
        <div className="bg-backgroundAccent p-20 text-md font-bold rounded-2xl flex flex-col gap-6 my-5">
            <div className="flex items-center text-xl gap-3 font-bold">
                SIGN UP TO
                <img src="/src/assets/wottee-music-high-resolution-logo-transparent.png" className="w-[14rem]" alt="logo" />
            </div>
            <p className="text-center">Sign up with:</p>
            <Button buttonType={"google"} onClick={async () => {
                const user = await signInUserWithGoogle()
                setCurrentUser(user)
                localStorage.setItem("user", JSON.stringify(user))
            }}>
                Sign up with Google
            </Button>
            <Button buttonType={"facebook"} onClick={async () =>{
                const user = await signInUserWithFacebook()
                setCurrentUser(user)
                localStorage.setItem("user", JSON.stringify(user))

            }}>
                Sign up with Facebook
            </Button>
            <div className="h-[0.1rem] w-[100%] bg-gray-400"></div>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                {signUpForm.map((field) => (
                    <FormInput key={field.name} field={field} value={signUpDetails} onChange={handleChange}/>
                ))}

                {passwordMismatchError && <p className="text-red-500">Passwords do not match</p>}

                <button type="submit" className='my-5 bg-pink-700 p-5 rounded-2xl hover:cursor-pointer'>
                    Sign up
                </button>
            </form>
            <p className="text-center">Already have an account?
                <button onClick={()=>{
                    setSignUp(false);
                }}>
                    <a href="#" className="text-pink-700">&nbsp;Log In</a>
                </button>

            </p>
        </div>
    );
};

export default SignUpForm;
