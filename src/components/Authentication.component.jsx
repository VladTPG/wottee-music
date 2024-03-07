import {useState} from "react";
import {useContext} from "react";
import {signInUserWithEmailAndPassword} from "../utils/firebase.js";
import {UserContext} from "../contexts/UserContext.jsx";

const Authentication = () => {
    const [logInDetails, setLogInDetails] = useState({
        email: "",
        password:"",
    })
    const {email,password} = logInDetails
    const {currentUser,setCurrentUser} = useContext(UserContext)


    return (
        <div className="text-white bg-sign-in-background bg-no-repeat bg-cover flex justify-center items-center min-h-screen">
            <div className="bg-backgroundAccent p-10 text-md font-bold rounded-2xl flex flex-col gap-6 my-5">
                <div className="flex items-center text-xl gap-3 font-bold">LOG IN TO
                    <img src="/src/assets/wottee-music-high-resolution-logo-transparent.png" className="w-[14rem]" alt="logo"/>
                </div>
                <p className="text-center">Sign in with:</p>
                <button className="flex items-center gap-5 border-2 p-3 mx-5 rounded-3xl hover:text-black hover:bg-white">
                    <img src="/src/assets/Google_Icons-09-512.webp" className="w-10" alt=""/>
                    Continue with Google
                </button>
                <button className="flex items-center gap-5 border-2 p-3 mx-5 rounded-3xl hover:text-black hover:bg-white">
                    <img src="/src/assets/Facebook_logo.png" className="w-7 m-2" alt=""/>
                    Continue with Facebook
                </button>
                <div className="h-[0.1rem] w-[100%] bg-gray-400"></div>
                <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5">
                        <label htmlFor="signInEmail">Email</label>
                        <input type="email" id="signInEmail" className="bg-backgroundAccent border-2 rounded-xl p-2" onChange={
                            (event)=>{
                                setLogInDetails({
                                    ...logInDetails,
                                    email:event.target.value,
                                })
                            }
                        }/>
                    </div>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="signInPassword">Password</label>
                        <input type="password" id="signInPassword" className="bg-backgroundAccent border-2 rounded-xl p-2" onChange={
                            (event)=>{
                                setLogInDetails({
                                    ...logInDetails,
                                    password: event.target.value,
                                })
                            }
                        }/>
                    </div>
                    <button type="submit" className='my-5 bg-pink-700 p-5 rounded-2xl hover:cursor-pointer' onClick={async () => {
                        const {user} = signInUserWithEmailAndPassword(email, password)
                        await user.reload()
                        setCurrentUser(user)
                        console.log(user)
                    }
                    }>
                        Sign in
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Authentication