import Image from "next/image";
import DarkMode from '../../public/icons8-dark-96.png';
import LightMode from '../../public/icons8-sun-50.png';

export default function Header() {
    return(
        <div className=" bg-slate-700 text-white flex justify-between h-16 items-center">
            <h2 className="ml-6 text-xl font-bold"> Where in the world?</h2>
            <div className="mr-6 flex items-center">
                <Image
                src={DarkMode}
                alt="dark"
                width={30}
                height={30}
                />
                <span className="ml-2"> Dark mode</span>
            </div>
        </div>
    )
}