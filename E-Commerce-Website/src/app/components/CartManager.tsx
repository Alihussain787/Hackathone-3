"use client"
import Image from "next/image";
import React from "react";
import { useState } from "react";
import ProductList from "./ProductList"

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



const CartManager = ({products}:{products:ProductType[]}) => {

    const [showForm, setShowForm] = useState(false);
    const [cart, setCart] = useState<ProductType[]>([])

    const handleAddToCart = (product:ProductType) => 
    {
        setCart((prevProduct)=>[...prevProduct, product])
    } 

    const handleRemoveFromCart = (product_id:string) => 
    {
        const newData = cart.filter((item)=>
        {
            return item._id != product_id
        })
        setCart(newData)
    }

    return (
        <>
            <ProductList products={products} addToCart={handleAddToCart}/>

            <div className="w-full rounded px-10 lg:px-0">
                <div className="border-b bg-[#23A6F0] flex justify-between p-2">
                    <h3 className="w-1/4 text-center">Product Name</h3>
                    <h3 className="w-1/4 text-center">Price</h3>
                    <h3 className="w-1/4 text-center">Quantity</h3>
                    <h3 className="w-1/4 text-center">Action</h3>
                </div>
          
                {
                cart.map((item:ProductType) => {
                    return (
                        

                        <div key={item._id} className="border-b text-black flex items-center justify-between p-2 rounded">
                            <p className="w-1/4 text-center">{item.title}</p>
                            <p className="w-1/4 text-center">${item.price}</p>
                            <p className="w-1/4 text-center"><span>1</span></p>
                            <p className="w-1/4 text-center">
                                <button onClick={() => handleRemoveFromCart(item._id)} className="text-white p-[5px] rounded bg-red-500">Remove</button>
                            </p>
                            
                        </div>
                    )
                })
                }
                <button onClick={() => setShowForm(true)} className="w-full bg-[#23A6F0] hover:bg-blue-500 text-white py-2 text-sm text-center">Check Out</button>
              </div>


        {showForm &&
            <div className="w-full border flex flex-col gap-2 py-4 px-2">
                <h1>Customer Information</h1>
                <div>
                    <label>Name</label>
                    <br />
                    <input type="text" required className="border w-full p-2 outline-0"/>
                </div>
                <div>
                    <label>Email</label>
                    <br />
                    <input type="email" required className="border w-full p-2 outline-0"/>
                </div>
                <div>
                    <label>Phone</label>
                    <br />
                    <input type="number" required className="border w-full p-2 outline-0"/>
                </div>
                <button className="w-full bg-[#23A6F0] hover:bg-blue-500 text-white py-2 text-sm text-center">Submit Order</button>
            </div>
        }
           
        </>
    )
}
export default CartManager;