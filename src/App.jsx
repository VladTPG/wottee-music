import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation.component.jsx"
import Authentication from "./components/Authentication.component.jsx"
import {useEffect, useState} from "react";

function App() {
    const [currentUser,setCurrentUser] = useState(null)
    useEffect(()=>{
        setCurrentUser(JSON.parse(localStorage.getItem("user")))
    },[])
    return (
        <Routes>
            <Route path="/" element={currentUser ? <Navigation/> : <Authentication/>} >

            </Route>
        </Routes>
    );
}

export default App;
