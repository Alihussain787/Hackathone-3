
import { client } from "../../../../sanity/lib/client";;
import Header from "../../header2/page";
import Header3 from "../../header3/page"
import Footer from "../../footer2/page";
import Image from "next/image";
import Link from "next/link";
import CartManager from "../../CartManager";

import { RiArrowRightSLine } from "react-icons/ri";

// interface ProductType {
//             _id: string,
//             title: string,
//             price: number,
//             productImage: string
//             description: string,
//             isNew: boolean,
//             tags: [],
//             _type: string,
//             category: string
// }

const productFetcher = async () => {
         
    const products = await client.fetch(`
    *[_type == 'product'][category == 'cloths']
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
    return products;          
}


const colthsPage = async () => {

    const products = await  productFetcher();
    console.log(products);

    return(
        <div>
            
            <div className="max-lg:hidden">
                <Header/>
            </div>
            <div className="lg:hidden">
                <Header3 />
            </div>
    
            <section className="w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-[1439px] bg-[#FAFAFA] flex flex-col items-center justify-center px-10">
                <div className="w-full max-w-[1050px] bg-[#FAFAFA] flex items-center justify-center py-10 max-md:w-full max-md:max-w-3xl max-md:block">
                    <div className="w-full flex items-center max-md:justify-center">
                            <h1 className="text-24px text-[#252B42] font-bold">Shop</h1>
                    </div>
                    <div className="flex items-center text-[#252B42] justify-center gap-2">
                        <Link href="/" className="p-[10px] cursor-pointer text-[#252B42] font-bold">Home</Link>
                        <RiArrowRightSLine className="text-[#BDBDBD] text-[24px] font-bold"/>
                        <Link href="/components/cloths/" className="p-[10px] cursor-pointer text-[#BDBDBD]">Cloths</Link>
                    </div>
                </div>
                <div className="w-full max-w-[1050px] flex items-center justify-center">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full max-w-[1088px] pb-[48px] gap-4 cursor-pointer">
                        <Link href="/components/shop">
                            <div id="shop-img1" className="border text-white w-full h-[223px] max-h-96 flex flex-col items-center justify-center">
                                <h1 className="text-[16px] font-bold">CLOTHS</h1>
                                <p className="text-[14px]">5 Items</p>
                            </div>
                        </Link>
                        
                        <Link href="/components/shop">
                         <div id="shop-img2" className="border text-white w-full h-[223px] max-h-96 flex flex-col items-center justify-center">
                            <h1 className="text-[16px] font-bold">CLOTHS</h1>
                            <p className="text-[14px]">5 Items</p>
                        </div>
                        </Link>
                       
                        <Link href="/components/shop">
                        <div id="shop-img3" className="border text-white w-full h-[223px] max-h-96 flex flex-col items-center justify-center">
                            <h1 className="text-[16px] font-bold">CLOTHS</h1>
                            <p className="text-[14px]">5 Items</p>
                        </div>
                        </Link>
                        
                        <Link href="/components/shop">
                        <div id="shop-img4" className="border text-white w-full h-[223px] max-h-96 flex flex-col items-center justify-center">
                            <h1 className="text-[16px] font-bold">CLOTHS</h1>
                            <p className="text-[14px]">5 Items</p>
                        </div>
                        </Link>
                        <Link href="/components/shop">
                        <div id="shop-img5" className="border text-white w-full h-[223px] max-h-96 flex flex-col items-center justify-center">
                            <h1 className="text-[16px] font-bold">CLOTHS</h1>
                            <p className="text-[14px]">5 Items</p>
                        </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
            </section>
            <section className="w-full flex items-center justify-center px-10">
            <div className="max-w-[1050px] w-full bg-white flex items-center justify-center py-10 max-md:w-full max-md:max-w-3xl">
                    <div className="w-full max-w-[1050px] flex justify-between items-center max-md:flex-col max-md:gap-6">
                        <h6 className="text-[14px] text-[#737373] font-bold">Showing all results</h6>    
                        <div className="flex items-center jusity-center gap-2">
                            <h6 className="text-[14px] text-[#737373] font-bold">Views: </h6>
                            <div className="p-[10px] rounded border border-[#ECECEC]">
                                <Image src={"/icons/icon-1.svg"} 
                                    alt={"icon"} 
                                    width={"16"} 
                                    height={"16"}/>
                            </div>
                            <div className="p-[11px] rounded border border-[#ECECEC]">
                                <Image src={"/icons/icon-2.svg"} 
                                    alt={"icon"} 
                                    width={"16"} 
                                    height={"16"}/>
                            </div>
                        </div>
                        {/* <div className="flex gap-2">
                        <div>
                            <select onChange={(e) => {fetchData(e.target.value)}} className="cursor-pointer flex items-center justify-center gap-2 border w-[141px] h-[50px] text-[#737373] outline-0">
                                <option value="all">All</option>
                                <option value="cloths">Cloths</option>
                                <option value="electronics">Electronics</option>
                                <option value="groceries">Groceries</option>
                                <option value="household">Household Items</option>
                            </select>
                        </div>
                        <button className="bg-[#23A6F0] w-[94px] h-[50px] text-white">Filter</button>
                        </div> */}
    
                        <div className="flex gap-2">
                            <div>
                                <select className="cursor-pointer flex items-center justify-center gap-2 border w-[141px] h-[50px] text-[#737373] outline-0">
                                    <option value="all">All</option>
                                    <option value="cloths">Cloths</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="groceries">Groceries</option>
                                    <option value="household">Household Items</option>
                                </select>
                            </div>
                                <button className="bg-[#23A6F0] w-[94px] h-[50px] text-white">Filter</button>
                            </div>
                        </div>
                </div>
    
            </section>
            {/* Product List */}
            <section className="w-full bg-white flex flex-col items-center justify-center py-10 max-md:w-full">
                <div className="w-full max-w-[1050px] flex flex-col gap-10">
                    <CartManager products={products} />
                    <div className="w-full flex items-center justify-center">
                        <div className="border border-[#BDBDBD] rounded w-[313px] h-[50px] flex">
                            <div className="cursor-pointer border-r w-1/4 h-full flex items-center justify-center bg-[#F3F3F3] text-[#BDBDBD] font-bold">
                                First
                            </div>
                            <div className="w-1/6 h-full border-r flex items-center justify-center text-[#23A6F0]">1</div>
                            <div className="w-1/6 h-full border-r flex items-center justify-center text-white bg-[#23A6F0]">2</div>
                            <div className="w-1/6 h-full border-r flex items-center justify-center text-[#23A6F0]">3</div>
                            <div className="cursor-pointer w-1/4 h-full- flex items-center justify-center text-[#23A6F0] font-bold">
                                Next
                            </div>
                        </div>
                    </div>
                </div>
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
export default colthsPage;
