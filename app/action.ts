"use server";

import axios from "axios";
import { redirect } from "next/navigation";

export const getData = async (url: string) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};

export const sendRegion = (name: string) => {
    if (!name) return;

    redirect(`/region?name=${name}`);
};
