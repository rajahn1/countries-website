'use client';

export default function SpecificCountry() {
    const dataJSON = localStorage.getItem('selectedCountryData');
    const selectedCountryData = JSON.parse(dataJSON);

    return (
    <div>
        <button> back </button>
        <div>
            <div className="container-left">
                <img src={selectedCountryData[0].flags.png} alt="flag" />
            </div>
            <div className="container-right">
                <h2>{selectedCountryData[0].name.common}</h2>
                <div>
                    <span>Native Name:</span>
                    <span>{selectedCountryData[0].population}</span>
                    <span>{selectedCountryData[0].region}</span>
                    <span>{selectedCountryData[0].subregion}</span>
                    <span>{selectedCountryData[0].capital}</span>
                </div>
                <div>
                    <span>Top Level Domain:</span>
                    <span>Currencies:</span>
                    <span>Languaages:</span>
                </div>
                <div>
                    <span>Border Countries:</span>
                    <button>France</button>
                    <button>Germany</button>
                    <button>Netherlands</button>
                </div>
            </div>
        </div>
    </div>
    )
}