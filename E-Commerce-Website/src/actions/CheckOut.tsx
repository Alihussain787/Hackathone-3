import { client } from "@/sanity/lib/client";

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

interface Customer {
  name: string;
  phone: string;
  email: string;
}

const createCustomer = async (customerInfo: Customer) => {
  try {
    const customerObject = {
      _type: "customer",
      name: customerInfo.name,
      email: customerInfo.email,
      phone: customerInfo.phone,
    };
    const response = await client.create(customerObject);
    console.log("User created in Sanity:", response);
    return response;
  } catch (error) {
    console.error("Error creating user in Sanity:", error);
    throw error;
  }
};

const createOrder = async (cartData: Product[], customerId: string) => {
  try {
    const orderObject = {
      _type: "order",
      customer: {
        _type: "reference",
        _ref: customerId,
      },
      items: cartData.map((item: Product) => ({
        _type: "item",
        _id: item._id,
        product_title: item.title,
        product_price: item.price,
        product_description: item.description,
        quantity: 1, // Adjust quantity based on cart logic
      })),
      order_date: new Date().toISOString(),
    };
    const response = await client.create(orderObject);
    console.log("Order created in Sanity:", response);
    return response;
  } catch (error) {
    console.error("Error creating order in Sanity:", error);
    throw error;
  }
};

export default async function CheckOut(cartData: Product[], customerInformation: Customer) {
  try {
    // Create customer in Sanity
    const customer = await createCustomer(customerInformation);

    // Create order in Sanity
    const order = await createOrder(cartData, customer._id);

    console.log("Checkout completed successfully");
    return {
      success: true,
      message: "Checkout completed successfully",
      orderId: order._id,
    };
  } catch (error) {
    console.error("Error during checkout process:", error);
    return {
      success: false,
      message: "An error occurred during checkout. Please try again.",
    };
  }
}
