import Image from "next/image";
import SearchDark from '../../public/search-dark.png';
import SearchLight from '../../public/search-white.png';

export default function SearchBar() {
    return(
        <div className='flex justify-between p-12'>
            <div className="flex gap-3 items-center">
                <Image
                src={SearchDark}
                alt="search-dark"
                width={20}
                height={20}
                className="ml-4 absolute"
                />
                <input type="text" placeholder='Search for a country...'
                className='w-72 h-12 p-6 pl-12 text-white bg-slate-400 placeholder:text-white'
                />
            </div>
            <select className='' name="Filter by region" id="">
                <option selected> Filter by Region </option>
                <option> África </option>
                <option> America </option>
                <option> Asia </option>
                <option> Europe </option>
                <option> Oceania </option>
            </select>
  
       </div>
    )

}