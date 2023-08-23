export interface CountryI {
    name:         Name;
    currencies:   Currencies;
    capital:      string[];
    region:       string;
    subregion:    string;
    languages:    Languages;
    area:         number;
    population:   number;
    flags:        Flags;
    borders:      string[];
};

export interface HomeCountries {
    name:         Name;   
    population:   number; 
    flags:        Flags;
    capital:      string[];
    region:       string;
}
export interface Currencies {
    [key:string]: Currencie;
}
export interface Currencie {
    name:   string;
    symbol: string;
}
export interface Flags {
    png: string;
    svg: string;
    alt: string;
}
export interface Languages {
    [key:string]: string;
}
export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
   official: string,
   common: string;
}
export interface Translation {
    official: string;
    common:   string;
}

export interface CountryContextProps {
    country: string;
    setCountry: (value: string) => void;
    countries: HomeCountries[];
    setCountries: (value: HomeCountries[]) => void;
  }
  export interface CardProps extends HomeCountries {
    handleOnClick: () => void;
  }

  export interface APIError {
    message: string;
    code: number;
    status: string;
}

export interface HomeCountriesProps {
    name:         Name;   
    population:   number; 
    flags:        Flags;
    capital:      string[];
    region:       string;
    handleOpenLoading: () => void;
}

