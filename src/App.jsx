import { Fragment } from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import Navigation from "./components/Navigation.component.jsx"
import Authentication from "./components/Authentication.component.jsx"
import {UserContext} from "./contexts/UserContext.jsx";
import {useContext} from "react";

function App() {
    const {currentUser,setCurrentUser} = useContext(UserContext)
    return (
        <Routes>
            <Route path="/" element={currentUser ? <Navigation/> : <Authentication/>} >

            </Route>
        </Routes>
    );
}

export default App;