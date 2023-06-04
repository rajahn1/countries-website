export default function CountryInformation({ flag, countryName, nativeName, population, region, subregion, capital, area, currencies, languages, borders }) {
    const natimeNameValues = Object.values(nativeName);
    const currenciesValues = Object.values(currencies);
    const languagesValues = Object.values(languages);
    return (
        <div className="flex flex-row">
            <div className="container-left">
                <img src={flag} alt="flag" />
            </div>
            <div className="flex flex-row gap-10 container-right">
                <div className="flex flex-col">
                    <h2>
                        {countryName}
                    </h2>
                    <span>Native Name: {natimeNameValues.map((item, index) => (
                        <span 
                        key={index}
                        >
                            {item.official}
                        </span>
                    ))} 
                    </span>
                    <span> Population: {population}</span>
                    <span> Region: {region}</span>
                    <span> Sub Region: {subregion}</span>
                    <span> Capital: {capital}</span>
                    <div>
                        <span> Border Countries:</span>
                        {borders && borders.map(border => (
                            <button>{border}</button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <span> Area: {area}</span>
                    <span> Currencies: {currenciesValues.map((item, index) => (
                        <span key={index}>{item.name}, symbol: {item.symbol}</span>
                    ))} </span>
                    <span> Languages: {languagesValues.map((item,index) => (
                        <span key={index}> {item} </span>
                    ))} </span>
                </div>
            </div>
        </div>
    )    
}