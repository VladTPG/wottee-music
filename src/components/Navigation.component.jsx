import {FaHome} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaBook} from "react-icons/fa";
import HomeButton from "./HomeButton.component.jsx"
import SearchButton from "./SearchButton.component.jsx";
import {db,app} from "../utils/firebase.js"
import {collection,addDoc, getDocs,doc} from "firebase/firestore"
import {useContext} from "react";
import {UserContext} from "../contexts/UserContext.jsx";
function Navigation() {
    const handleClick = async () => {
        const collectionRef = collection(db, "users")
        addDoc(collectionRef, {
            name: "Gica hagi",
            parola: "123depulasamaiei"
        }).then((resp) => {
            // console.log(resp.)
        }).catch((err) => {
            console.log(err)
        })
        const snapshot = await getDocs(collectionRef);
        snapshot.forEach((doc)=>{
            console.log(doc.id," => ",doc.data());
        })
    }
    const {setCurrentUser} = useContext(UserContext)
    return(
    <div className="flex flex-col w-fit m-2 gap-1">
        <div className = "bg-backgroundAccent text-gray-200 rounded-md p-3 flex flex-col gap-5">
            <HomeButton onClick={
                ()=>{
                    return null
                }
            }/>
            <SearchButton/>
        </div>
        <div className = "bg-backgroundAccent text-gray-200 rounded-md p-3 flex flex-col gap-5">
            <FaHome className="fill-gray-200 text-[2rem]"/>
            <FaSearch className="fill-gray-200 stroke-backgroundAccent stroke-[2rem] text-[2rem]"/>
            <FaBook className="fill-gray-200 stroke-backgroundAccent stroke-[2rem] text-[2rem]"/>
        </div>
    </div>)
}

export default Navigation
