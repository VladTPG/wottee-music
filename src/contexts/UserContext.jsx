import {createContext, useState} from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null)
    const value = {currentUser,setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}