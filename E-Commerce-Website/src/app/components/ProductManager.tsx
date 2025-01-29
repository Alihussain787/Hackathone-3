'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

const ProductManager = ({ productList }: { productList: Product[] }) => {
  const products: Product[] = productList;
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productList);
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
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

  const handleFilter = () => {
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;

    const filtered = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
      const matchesPrice = product.price >= min && product.price <= max;
      return matchesSearch && matchesPrice;
    });

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    handleFilter();
  }, [search, minPrice, maxPrice]);

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

  return (
    <div>
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded">
          {notification}
        </div>
      )}

      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-[1050px] bg-white flex flex-col items-center justify-center gap-2 pb-10 max-md:w-full max-md:max-w-3xl">
          <div className="w-full">
            <input
              type="text"
              placeholder="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 border rounded outline-0"
            />
          </div>
          <div className="w-full flex justify-between items-center max-lg:flex-col gap-6">
            <h6 className="text-[14px] text-[#737373] font-bold">Showing {filteredProducts.length} results</h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full p-2 border rounded outline-0"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full p-2 border rounded outline-0"
              />
            </div>
            <button className="bg-[#23A6F0] w-[94px] p-2 text-white">Filter</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="border rounded">
              <Link href={`/components/${product?._id}`}>
                <div className="flex flex-col gap-2 h-[400px] rounded">
                  <div className="bg-[#f9f9f9] w-full h-[250px] flex items-center justify-center">
                    <Image
                      src={product.productImage}
                      alt="image"
                      width={239}
                      height={300}
                      className="w-full h-50 max-h-[250px] rounded"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-2">
                    <p className="text-[16px] font-bold text-[#252B42]">{product.title}</p>
                    <p className="text-[14px] font-bold text-[#737373] line-clamp-2">{product.description}</p>
                    <p className="text-[16px] font-bold text-[#BDBDBD]">
                      <span className="text-[#23856D]">$ {product.price}</span>
                    </p>
                  </div>
                </div>
              </Link>
              <div className="flex gap-2 justify-between">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-[#23A6F0] hover:bg-blue-500 text-white py-2 rounded text-sm text-center"
                >
                  Add to Cart
                </button>
                <Link
                  href={`/components/${product._id}`}
                  className="w-full bg-[#23A6F0] hover:bg-blue-500 text-white py-2 rounded text-sm text-center"
                >
                  Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No products match your criteria.</p>
        )}
      </div>
      <div className="mt-6">{renderCartItems()}</div>
    </div>
  );
};

export default ProductManager;
