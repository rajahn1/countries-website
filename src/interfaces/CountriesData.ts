export interface CountriesI {
    flags:      Flags;
    name:       Name;
    capital:    string[];
    region:     string;
    population: number;
}
export interface CardProps extends CountriesI {
    handleOnClick: () => void;
  }

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    [key:string]: Nomeclature;
}

export interface Nomeclature {
    official: string;
    common:   string;
}

export interface CountryContextProps {
    country: string;
    setCountry: (value: string) => void;
    countries: CountriesI[];
    setCountries: (value: CountriesI[]) => void;
  }

export interface APIError {
    message: string;
    code: number;
    status: string;
}
