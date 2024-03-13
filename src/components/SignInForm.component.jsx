import Button from "./Button.component.jsx";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { signInUserWithEmailAndPassword } from "../utils/firebase.js";
import FormInput from "./FormInput.component.jsx";


const SignInFormComponent = (props) => {
    const { setSignUp } = props;
    const defaultLogInDetails = {
        email: "",
        password: ""
    };
    const [logInDetails, setLogInDetails] = useState(defaultLogInDetails);
    const { setCurrentUser } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInUserWithEmailAndPassword(logInDetails.email, logInDetails.password);
            localStorage.setItem("user", JSON.stringify(user));
            setCurrentUser(user);
            setLogInDetails(defaultLogInDetails);

        } catch (error) {
            setLogInDetails(defaultLogInDetails);
            console.log(error.message);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogInDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const signInForm = [
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
        }
    ];

    return (
        <div className="bg-backgroundAccent p-20 text-md font-bold rounded-2xl flex flex-col gap-6 my-5">
            <div className="flex items-center text-xl gap-3 font-bold">
                LOG IN TO
                <img src="/src/assets/wottee-music-high-resolution-logo-transparent.png" className="w-[14rem]" alt="logo" />
            </div>
            <p className="text-center">Sign in with:</p>
            <Button buttonType={"google"}>
                Continue with Google
            </Button>
            <Button buttonType={"facebook"}>
                Continue with Facebook
            </Button>
            <div className="h-[0.1rem] w-[100%] bg-gray-400"></div>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                {signInForm.map((field) => (
                    <FormInput key={field.name} field={field} value={logInDetails} onChange={handleChange}/>
                ))}
                <button type="submit" className='my-5 bg-pink-700 p-5 rounded-2xl hover:cursor-pointer'>
                    Sign in
                </button>
            </form>
            <p className="text-center">Don&apos;t have an account?
                <button onClick={()=>{
                    setSignUp(true);
                }}>
                <a href="#" className="text-pink-700">&nbsp;Sign up</a>
                </button>

            </p>
        </div>
    );
};

export default SignInFormComponent;
