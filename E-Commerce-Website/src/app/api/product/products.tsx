
import { client } from "../../../sanity/lib/client";

interface ProductType {
    _id: string,
    title: string,
    price: number,
    productImage: string
    description: string,
    isNew: boolean,
    tags: [],
    _type: string,
    category: string
}

export const productFetcher = async () => {
         
    const quesry = (`
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
    }`)
    const products:ProductType[] = await client.fetch(quesry);
    return products;          
}