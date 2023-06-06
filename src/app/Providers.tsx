'use client';
import React from "react";
import {ThemeProvider} from 'next-themes';
import CountryProvider from "@/context/CountryContext";
 const Providers = ({children}: {children: React.ReactNode}) => {
    return(
        <CountryProvider>
            <ThemeProvider enableSystem={true} attribute="class"> 
                {children} 
            </ThemeProvider>
        </CountryProvider>
    )
};

export default Providers;