export interface Countries {
    flags:      Flags;
    name:       Name;
    capital:    string[];
    region:     string;
    population: number;
    handleOnClick: void;
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
