import {FaHome} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaBook} from "react-icons/fa";
import HomeButton from "./HomeButton.component.jsx"
import SearchButton from "./SearchButton.component.jsx";
function Navigation() {

    return(
    <div className="flex flex-col w-fit m-2 gap-1">
        <div className = "bg-backgroundAccent text-gray-200 rounded-md p-3 flex flex-col gap-5">
            <HomeButton />
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
