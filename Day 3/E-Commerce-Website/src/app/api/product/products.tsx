"use client"
import { client } from "../../../sanity/lib/client";
import { useEffect, useState } from "react";
export const productFetcher = () => {

    const [producs, setProducts] = useState([]);

    console.log(producs);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await client.fetch(`
                 *[_type == 'product']
                {
                    _id,
                    title,
                    price,
                    "productImage":productImage.asset->url,
                    description,
                    isNew,
                    tags[],
                    _type,
                    category,   
                }
                `);
                setProducts(await response)
            }catch(error){
                console.error("Error in fetching products", error);
            }
        }
        fetchData();
    }, [])
    return producs;
}