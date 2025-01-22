
import Link from "next/link"
import Image from "next/image"

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

 
export default function ProductList({products, addToCart}:{products:ProductType[], addToCart:(product:ProductType)=>void}){
    return (
        
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 sm:px-10 md:px-10 lg:px-0 gap-2">
                     {
                         products.map((product, index) => (
                             <div key={index} className="border rounded">
                                 <Link href={`/components/${product?._id}`}>
                                     <div className="flex flex-col gap-2 h-[400px] rounded">
                                         <div className="bg-[#f9f9f9] w-full h-[250px] flex items-center justify-center">
                                             <Image src={product.productImage} 
                                                 alt={"image"} 
                                                width={"239"} 
                                                height={"300"} className="w-full h-50 max-h-[250px] rounded"/>
                                        </div>
                                         <div className="flex flex-col gap-4 p-2">
                                             <p className="text-[16px] font-bold text-[#252B42]">{product.title}</p>
                                             <p className="text-[14px] font-bold text-[#737373] line-clamp-2">{product.description}</p>
                                             <p className="text-[16px] font-bold text-[#BDBDBD]"><span className="text-[#23856D]">$ {product.price}</span></p>  
                                         </div>
                                     </div>
                                 </Link>
                                <div className="flex gap-2 justify-between">
                                    <button onClick={() => addToCart(product)} className="w-full bg-[#23A6F0] hover:bg-blue-500 text-white py-2 rounded text-sm text-center">Add to Cart</button>
                                    <Link href={`/components/${product._id}`} className="w-full bg-[#23A6F0] hover:bg-blue-500 text-white py-2 rounded text-sm text-center">Explore</Link>
                                 </div>  
                             </div>
                         ))
                     }
                 </div>
            
    )
}

