import Image from "next/image";
export default function Card () {
    return(
        <div className="flexflex-col bg-white w-1/4 h-1/2">
            <Image
            // src={countryFlag}
            alt='german'
            width={320}
            height={300} 
            />
            <span> test </span>
            <div className="flex flex-col">
                <span> Population </span>
                <span> Region </span>
                <span> Capital:</span>
            </div>
        </div>
    )
};
