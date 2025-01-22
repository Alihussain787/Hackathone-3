"use client"
import { client } from "../../../sanity/lib/client";
import { useEffect, useState } from "react";



export const householdFetcher = () => {
    const [category, setCategory] = useState([]);
    console.log(category);

    useEffect(() => {
        const fetchData = async () => {
                try{
                    const response = await client.fetch(`
                     *[_type == 'product'][category == 'household']{
                        _id,
                        title,
                        price,
                        "productImage":productImage.asset->url,
                        description,
                        isNew,
                        tags[],
                        _type
                    }
                    `);
                    setCategory(await response)
                }catch(error){
                    console.error("Error in fetching products", error);
                }
        }
        fetchData();
    }, [])
    return category;
}

export const clothFetcher = () => {
    const [category, setCategory] = useState([]);
    console.log(category);

    useEffect(() => {
        const fetchData = async () => {
                try{
                    const response = await client.fetch(`
                     *[_type == 'product'][category == 'cloths']{
                        _id,
                        title,
                        price,
                        "productImage":productImage.asset->url,
                        description,
                        isNew,
                        tags[],
                        _type
                    }
                    `);
                    setCategory(await response)
                }catch(error){
                    console.error("Error in fetching products", error);
                }
        }
        fetchData();
    }, [])
    return category;
}