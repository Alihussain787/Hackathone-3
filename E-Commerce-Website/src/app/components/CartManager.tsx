'use client'

import { useState } from "react";
import CheckOut from '@/actions/CheckOut';

interface Product {
    _id: string;
    title: string;
    price: number;
    productImage: string;
    description: string;
    isNew: boolean;
    tags: string[];
    _type: string;
    category: string;
  }

  interface CartItem extends Product {
    quantity: number;
  }
  

const CartManager = ({products}:{products:any}) => {
    
    const [product, setProduct] = useState(products);
    console.log("This is product",product);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [showForm, setShowForm] = useState(false);
     const [notification, setNotification] = useState<string | null>(null);
      const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        phone: ''
      });


      const handleInput = (e: any) => {
        const { name, value } = e.target;
        setCustomerInfo({ ...customerInfo, [name]: value });
      };

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item._id === product._id);
          if (existingItem) {
            return prevCart.map((item) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }
          return [...prevCart, { ...product, quantity: 1 }];
        });
        setNotification('Product added to cart');
        setTimeout(() => setNotification(null), 2000);
      };
    
      const handleRemoveFromCart = (productId: string) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
      };
    
      const increaseQuantity = (productId: string) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };
    
      const decreaseQuantity = (productId: string) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item._id === productId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      };


        const handleCheckout = async () => {
          try {
            const response = await CheckOut(cart, customerInfo);
        
            if (response.success) {
              setNotification("Congratulations! Your order has been successfully submitted.");
              setCart([]);
              setCustomerInfo({ name: "", email: "", phone: "" });
              setShowForm(false);
            } else {
              setNotification("An error occurred during checkout. Please try again.");
            }
          } catch (error) {
            console.error("Checkout error:", error);
            setNotification("An unexpected error occurred. Please try again later.");
          }
        
          setTimeout(() => setNotification(null), 5000);
        };


      const renderCartItems = () => (
        <div className="w-full bg-white rounded">
          <div className="border-b bg-[#23A6F0] text-white flex justify-between p-2">
            <h3 className="w-1/4 text-center">Product Name</h3>
            <h3 className="w-1/4 text-center">Price</h3>
            <h3 className="w-1/4 text-center">Quantity</h3>
            <h3 className="w-1/4 text-center">Action</h3>
          </div>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item._id} className="border-b text-black flex items-center justify-between p-2 rounded">
                <p className="w-1/4 text-center">{item.title}</p>
                <p className="w-1/4 text-center">${item.price * item.quantity}</p>
                <p className="w-1/4 flex items-center justify-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item._id)}
                    className="px-2 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item._id)}
                    className="px-2 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </p>
                <p className="w-1/4 text-center">
                  <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="text-white p-[5px] rounded bg-red-500"
                  >
                    Remove
                  </button>
                </p>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          <button
            onClick={() => setShowForm(true)}
            className="w-full bg-[#23A6F0] hover:bg-blue-500 text-white py-2 text-sm text-center"
          >
            Check Out
          </button>
          {showForm && (
            <div className="w-full border flex flex-col gap-2 py-4 px-2">
              <h1>Customer Information</h1>
              <div>
                <label>Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInput}
                  required
                  className="border w-full p-2 outline-0"
                />
              </div>
              <div>
                <label>Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInput}
                  required
                  className="border w-full p-2 outline-0"
                />
              </div>
              <div>
                <label>Phone</label>
                <br />
                <input
                  type="number"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInput}
                  required
                  className="border w-full p-2 outline-0"
                />
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-[#23A6F0] hover:bg-blue-500 text-white py-2 text-sm text-center"
              >
                Submit Order
              </button>
            </div>
          )}
        </div>
      );
    

    return(
        <div>
            {notification && (
              <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded">
                {notification}
              </div>
            )}
            <div className="flex gap-2 mt-4">
              <button 
                onClick={() => addToCart(product)}
                className="w-[148px] text-white bg-[#23A6F0] font-bold text-[14px] py-[10px] px-[20px]">Add to cart
              </button>
            </div>
            <div className="mt-6">{renderCartItems()}</div>
        </div>
    )
    
}
export default CartManager;