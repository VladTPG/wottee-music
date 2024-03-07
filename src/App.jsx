import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation.component.jsx"
import Authentication from "./components/Authentication.component.jsx"
import {UserContext} from "./contexts/UserContext.jsx";
import {useContext, useEffect} from "react";

function App() {
    const {currentUser,setCurrentUser} = useContext(UserContext)

    useEffect(()=>{
        const localUser = localStorage.getItem("user")
        console.log(localUser)
        console.log(currentUser)
        if(!localUser)
        {
            localStorage.setItem("user",JSON.stringify(currentUser))
        }
        else if(localUser&&!currentUser)
        {
            setCurrentUser(JSON.parse(localUser))
        }

    },[currentUser])

    return (
        <Routes>
            <Route path="/" element={currentUser ? <Navigation/> : <Authentication/>} >

            </Route>
        </Routes>
    );
}

export default App;
