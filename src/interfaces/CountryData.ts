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