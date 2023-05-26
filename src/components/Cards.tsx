'use client'

import { api } from "../services/api";
import { useEffect } from "react";

export default function Card () {
    async function getData() {
        try {
            const response = await api.get('/');
            console.log(response.data[1].name.common)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    },[]);

    return(
        <div>
            hello world
        </div>
    )
};
