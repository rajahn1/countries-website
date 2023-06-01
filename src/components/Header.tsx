import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
    return(
        <div className=" bg-slate-700 text-white flex justify-between h-24 items-center">
            <h2 className="ml-24 text-2xl font-bold"> Where in the world?</h2>
            <div className="mr-6 flex items-center">
                <FaMoon />
                <span className="ml-2"> Dark mode</span>
            </div>
        </div>
    )
}