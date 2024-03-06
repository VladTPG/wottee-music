import {FaSearch} from "react-icons/fa";

function SearchButton(){
    return (
        <div className="flex items-center gap-5">
            <FaSearch className="fill-gray-200 stroke-backgroundAccent stroke-[2rem] text-[2rem]"/>
            <p className="font-bold">
                Search
            </p>
        </div>
    )
}

export default SearchButton