import {client} from "../../../sanity/lib/client";
import Header from "../header2/page";
import Header3 from "../header3/page"
import Footer from "../footer2/page";
import Image from "next/image";
import Link from "next/link";
import CartManager from "../CartManager";

import { RiArrowRightSLine } from "react-icons/ri";

interface ProductType 
    {
        _id: string,
        title: string,
        price: number,
        productImage: string
        description: string,
        isNew: boolean,
        tags: [],
        _type: string,
        category: string,
        stock: number
    }; 

    const ShopNowPage = async ({ params }: { params: { shopnow: string } }) => {
      const { shopnow } = params;
      if (!shopnow) {
        return <p>Error: "shopnow" parameter not found!</p>;
      }

    const response = await client.fetch(`*[_type == "product"][_id == "${shopnow}"]
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

    const data:ProductType[] = await response;

    return(
        <div>
           <div className="max-lg:hidden">
                <Header/>
            </div>
            <div className="lg:hidden">
                <Header3 />
            </div>

            <div className="w-full max-w-[1439px] bg-[#FAFAFA] flex items-center justify-center py-10 max-md:w-full max-md:max-w-3xl px-10">
                <div className="w-full max-w-[1050px] flex items-center justify-start gap-2 max-lg:justify-center">
                    <Link href="/" className="py-[10px] cursor-pointer">Home</Link>
                    <RiArrowRightSLine className="text-[#BDBDBD] text-[24px] font-bold"/>
                    <Link href="#" className="py-[10px] cursor-pointer text-[#BDBDBD]">Shopnow</Link>
                </div>
            </div>

        <section className="w-full max-w-[1439px] bg-[#FAFAFA] flex flex-col items-center justify-center px-10">
            {
                data.map((product, index) => (
                    <div key={index} className="w-full max-w-[1050px]">
                        <div className="w-full max-w-[1050px] flex gap-10 pb-[40px] max-lg:flex-col">
                        <div className="w-1/2 flex flex-col gap max-md:gap-2 max-lg:w-full">
                            <div className="w-full flex items-center justify-center">
                                <Image src={product.productImage} 
                                    alt={"icon"} 
                                    width={"506"} 
                                    height={"450"} className="w-full"/>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-6 max-lg:w-full">
                            <h4 className="text-[20px] text-[#252B42]">{product.title}</h4>
                            <div className="flex gap-2">
                                <Image src={"/icons/5-stars.svg"} 
                                    alt={"icon"} 
                                    width={"130"} 
                                    height={"22"}/>
                                <p className="text-[14px] text-[#737373]">10 Reviews</p>
                            </div>
                            <h4 className="text-[24px] text-[#252B42]">${product.price}</h4>
                            <h6 className="text-[#737373] text-[14px] font-bold">Available Stock  : <span className="text-[14px] font-bold text-[#23A6F0]">{product.stock}</span></h6>
                            <p className="text-[14px] text-[#737373] border-b pb-6">
                                {product.description}
                            </p>

                            <Image src={"/icons/product-colors.svg"} 
                                alt={"icon"} 
                                width={"150"} 
                                height={"30"}/>
                            <CartManager products={product} />
                        </div>
                        </div>
                    </div>
                    ))
            }
        </section>
        

        <section className="w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-[1439px] bg-[#FAFAFA] py-[50px] flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl px-10">
                    <div className="w-full max-w-[1050px] flex items-center justify-between max-md:flex-col gap-10">
                        <Image src={"/icons/brand-logo-1.svg"} 
                            alt={"icon"} 
                            width={"103"} 
                            height={"34"} className="w-full max-w-[90px]"/>
                        <Image src={"/icons/brand-logo-2.svg"} 
                            alt={"icon"} 
                            width={"103"} 
                            height={"34"} className="w-full max-w-[90px]"/>
                        <Image src={"/icons/brand-logo-3.svg"} 
                            alt={"icon"} 
                            width={"103"} 
                            height={"34"} className="w-full max-w-[90px]"/>
                        <Image src={"/icons/brand-logo-4.svg"} 
                            alt={"icon"} 
                            width={"103"} 
                            height={"34"} className="w-full max-w-[90px]"/>
                        <Image src={"/icons/brand-logo-5.svg"} 
                            alt={"icon"} 
                            width={"103"} 
                            height={"34"} className="w-full max-w-[50px]"/>
                        <Image src={"/icons/brand-logo-6.svg"} 
                            alt={"icon"} 
                            width={"103"} 
                            height={"34"} className="w-full max-w-[50px]"/>
                    </div>
            </div>
        </section>
        <Footer />
    </div>
    )
}
export default ShopNowPage;
