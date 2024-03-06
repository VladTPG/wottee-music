import {FaHome} from "react-icons/fa";

function HomeButton(){
    return (
        <div className="flex items-center gap-5">
            <FaHome className="fill-gray-200 text-[2rem]"/>
            <p className="font-bold">
                Home
            </p>
        </div>
    )
}

export default HomeButton