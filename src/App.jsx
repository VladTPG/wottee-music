import {Routes, Route,} from "react-router-dom";
import Navigation from "./components/Navigation.component.jsx"
import Authentication from "./components/Authentication.component.jsx"
import {useEffect, useContext,} from "react";
import {UserContext} from "./contexts/UserContext.jsx";

function App() {
    const {currentUser,setCurrentUser} = useContext(UserContext)
    const localUser= localStorage.getItem("user")


    useEffect(()=>{
        if(localUser)
        {
            setCurrentUser(JSON.parse(localUser))
        }
        else if (!localUser && currentUser){
            localStorage.setItem("user",currentUser===null ? "" : JSON.stringify(currentUser))
            setCurrentUser(JSON.parse(localStorage.getItem("user")))
            console.log(currentUser)
        }

    },[])


    return (
        <Routes>
            <Route path="/" element={currentUser ? <Navigation/> : <Authentication/>} >

            </Route>
        </Routes>
    );
}

export default App;
