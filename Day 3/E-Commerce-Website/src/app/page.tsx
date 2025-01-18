"use client"
import Header from "./components/header/page";
import Header3 from "./components/header3/page";
import Footer from "./components/footer/page";
import Image from "next/image";
import Link from "next/link";
import { productFetcher } from "./api/product/products"
import { categoryFetcher } from "./api/category/categories";

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


const mainPage = () => {

    const productList:ProductType[] = productFetcher();
    // const category:ProductType[] = categoryFetcher();
    return(
    <div>
        <div className="max-md:hidden">
            <Header/>
        </div>
        <div className="md:hidden">
            <Header3 />
        </div>
        <section id="backImg" className="w-full max-w-[1439px] h-[716px] flex items-center justify-center max-md:w-full max-md:flex-col max-md:mt-[505px]">
            <div className="text-white w-[1044px] h-[651px] flex flex-col gap-[35px] justify-center max-md:px-6 max-md:w-full max-md:py-[100px] max-md:gap-[24px] max-md:items-center">
                <div className="w-[580px] flex flex-col gap-[35px] max-md:w-full max-md:max-w-3xl max-md:gap-[24px] max-md:text-center">
                    <p className="text-[16px] font-bold">SUMMER 2020</p>
                    <h1 className="text-[56px] font-bold">NEW COLLECTION</h1> 
                    <p className="text-[20px] text-[#FAFAFA]">We know how large objects will act, 
                    but things on a small scale.</p>  
                </div>
                <button className="w-[221px] h-[62px] bg-[#2DC071] text-white font-bold text-[24px] rounded-[5px]">Shop Now</button>
            </div>
        </section>
        <section className="full max-w-[1439px] bg-[#FAFAFA] flex flex-col items-center justify-center gap-[64px] py-[64px] max-md:w-full">
            <div className="w-[1050px] flex flex-col gap-10">
                <div className="w-full flex flex-col items-center justify-center max-md:text-center">
                    <h1 className="text-[24px] text-[#252B42] font-bold">EDITOR’S PICK</h1>
                    <p className="text-[14px] text-[#737373]">Problems trying to resolve the conflict between</p>
                </div>
                <div className="flex gap-8 max-md:hidden">
                    <Image src={"image/editor-1.svg"} 
                        alt={"image"} 
                        width={"510"} 
                        height={"500"}/>
                     <Image src={"image/editor-2.svg"} 
                        alt={"image"} 
                        width={"240"} 
                        height={"500"}/>
                    <div className="flex flex-col gap-4">
                        <Image src={"image/editor-3.svg"} 
                            alt={"image"} 
                            width={"240"} 
                            height={"242"}/>
                        <Image src={"image/editor-4.svg"} 
                            alt={"image"} 
                            width={"240"} 
                            height={"242"}/>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex flex-col gap-8">
                    <Image src={"image/new-img.svg"} 
                        alt={"image"} 
                        width={"324"} 
                        height={"500"}/>
                     <Image src={"image/editor-2.svg"} 
                        alt={"image"} 
                        width={"324"} 
                        height={"500"}/>
                    <Image src={"image/editor-3.svg"} 
                            alt={"image"} 
                            width={"324"} 
                            height={"242"}/>
                    <Image src={"image/editor-4.svg"} 
                            alt={"image"} 
                            width={"324"} 
                            height={"242"}/>
                </div>
        </section>
        <section className="w-full max-w-[1439px] bg-white flex flex-col items-center justify-center py-10 max-md:w-full">
            <div className="w-[1050px] flex flex-col gap-10">
                <div className="w-full flex flex-col items-center justify-center max-md:px-6 max-md:text-center">
                    <p className="text-[20px] text-[#737373]">Featured Products</p>
                    <h1 className="text-[24px] text-[#252B42] font-bold">BESTSELLER PRODUCTS</h1>
                    <p className="text-[14px] text-[#737373]">Problems trying to resolve the conflict between </p>
                </div>
                <div className="fp">
                {
                        productList.map((product, index) => (
                            <div key={index}>
                                <Link href="/shopnow/">
                                    <div className="border flex flex-col gap-2 h-[450px] rounded">
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
                                            
                                            <div className="flex justify-between  gap-2">
                                                <button className="w-1/2 bg-[#23A6F0] hover:bg-blue-500 text-white py-2 rounded text-sm text-center">Add to Cart</button>
                                                <Link href={"#"} className="w-1/2 bg-[#23A6F0] hover:bg-blue-500 text-white py-2 rounded text-sm text-center">Explore</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

        <section className="w-full bg-[#23856D] pt-20 max-w-[1439px] px-[150px] flex items-center justify-center max-md:w-full max-md:px-0 max-md:flex-col">
            <div className="text-white w-1/2 flex flex-col gap-[35px] justify-center max-md:w-full max-md:items-center max-md:justify-center">
                <div className="w-[580px] pr-[100px] flex flex-col gap-[35px] max-md:w-full max-md:items-center max-md:pr-0">
                    <p className="text-[16px] font-bold max-md:">SUMMER 2020</p>
                    <h1 className="text-[56px] font-bold max-md:text-[40px]">Vita Classic Product</h1> 
                    <p className="text-[20px] text-[#FAFAFA] max-md:text-center max-md:w-[350px]">We know how large objects will act, We know how are objects will act, We know</p>  
                </div>
                <div className="flex items-center gap-6 max-md:flex-col">
                    <p className="text-[24px] font-bold">$16.48</p>
                    <button className="w-[221px] h-[62px] bg-[#2DC071] text-white font-bold text-[24px] rounded-[5px]">Shop Now</button>
                </div>
            </div>
            <div className="w-1/2 h-full flex items-end justify-end max-md:mt-10">
                <Image src={"image/hero-3.svg"} 
                    alt={"image"} 
                    width={"443"} 
                    height={"685"}/>
            </div>
        </section>

        <section className="w-full max-w-[1439px] px-[100px] bg-white h-[682px] flex items-center justify-center max-md:w-full max-md:flex-col">
            
            <div className="w-1/2 h-full max-md:hidden">
                <Image src={"image/hero-4.svg"} 
                    alt={"image"} 
                    width={"632"} 
                    height={"491"}/>
            </div>
            
            <div className="w-1/2 pr-[100px] flex flex-col justify-center gap-8 max-md:px-6 max-md:w-full max-md:max-w-3xl max-md:py-[100px] max-md:gap-[24px]">
                <div className="w-[580px] pl-[50px] flex flex-col gap-6 max-md:w-full max-md:items-center">
                    <p className="text-[16px] font-bold text-[#BDBDBD]">SUMMER 2020</p>
                    <h1 className="w-[375px] text-[40px] font-bold max-md:text-center">Part of the Neural Universe</h1> 
                    <p className="text-[20px] text-[#737373] max-md:text-center">We know how large objects will act, We know how are objects will act, We know</p>  
                </div>
                <div className="pl-[50px] flex items-center gap-2 max-md:flex-col max-md:gap-4">
                    <button className="w-[221px] h-[62px] bg-[#2DC071] text-white font-bold text-[24px] rounded-[5px] max-md:bg-[#23A6F0]">Buy Now</button>
                    <button className="w-[221px] h-[62px] bg-white text-[#2DC071] border border-[#2DC071] font-bold text-[24px] rounded-[5px] max-md:text-[#23A6F0] max-md:border-[#23A6F0]">Read More</button>
                </div>
            </div>
            <div className="w-1/2 h-full md:hidden">
                <Image src={"image/hero-4.svg"} 
                    alt={"image"} 
                    width={"632"} 
                    height={"491"}/>
            </div>
        </section>

        <section className="w-full pt-[100px] max-w-[1439px] bg-white flex flex-col items-center justify-center max-md:w-full">
            <div className="w-[1050px] flex flex-col gap-10">
                <div className="w-full flex flex-col items-center justify-center max-md:px-6 max-md:text-center">
                    <p className="text-[14px] text-[#23A6F0]">Practice Advice</p>
                    <h1 className="text-[40px] text-[#252B42] font-bold">Featured Posts</h1>
                    <p className="text-[14px] text-[#737373] text-center">Problems trying to resolve the conflict between 
                        <br/>the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
                <div className="fp2 flex items-center justify-center gap-4 max-md:flex-col">
                    <div className="flex flex-col w-[348px] gap-4 border border-b-[3px]">
                        <Image src={"image/fp-img-1.svg"} 
                            alt={"image"} 
                            width={"348"} 
                            height={"300"}/>
                        <div className="p-[25px] flex flex-col gap-4">
                            <div className="flex gap-4">
                                <small className="text-[#8EC2F2]">Google</small>
                                <small className="text-[#737373]">Trendding</small>
                                <small className="text-[#737373]">New</small>
                            </div>
                            <h2 className="text-[20px] text-[3252B42]">Loudest à la Madison #1 (L'integral)</h2>
                            <p className="text-[14px] text-[#737373]">We focus on ergonomics and meeting 
                                you where you work. It's only a 
                                keystroke away.</p>
                            <div className="flex justify-between">
                                <p className="text-[12px] text-[#737373] flex gap-2">
                                    <Image src={"icons/clock.svg"} 
                                        alt={"image"} 
                                        width={"13"} 
                                        height={"13"}/>
                                    
                                    22 April 2021
                                </p>
                                <p className="text-[12px] text-[#737373] flex gap-2">
                                    <Image src={"icons/comments-icon.svg"} 
                                        alt={"image"} 
                                        width={"13"} 
                                        height={"13"}/>
                                    
                                    10 comments
                                </p>
                            </div>
                            <div className="flex gap-2 text-[#737373]">
                                <Link href="">Learn More</Link>
                                <Image src={"icons/arrow-right.svg"} 
                                        alt={"image"} 
                                        width={"9"} 
                                        height={"16"}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[348px] gap-4 border border-b-[3px]">
                        <Image src={"image/fp-img-2.svg"} 
                            alt={"image"} 
                            width={"348"} 
                            height={"300"}/>
                        <div className="p-[25px] flex flex-col gap-4">
                            <div className="flex gap-4">
                                <small className="text-[#8EC2F2]">Google</small>
                                <small className="text-[#737373]">Trendding</small>
                                <small className="text-[#737373]">New</small>
                            </div>
                            <h2 className="text-[20px] text-[3252B42]">Loudest à la Madison #1 (L'integral)</h2>
                            <p className="text-[14px] text-[#737373]">We focus on ergonomics and meeting 
                                you where you work. It's only a 
                                keystroke away.</p>
                            <div className="flex justify-between">
                                <p className="text-[12px] text-[#737373] flex gap-2">
                                    <Image src={"icons/clock.svg"} 
                                        alt={"image"} 
                                        width={"13"} 
                                        height={"13"}/>
                                    
                                    22 April 2021
                                </p>
                                <p className="text-[12px] text-[#737373] flex gap-2">
                                    <Image src={"icons/comments-icon.svg"} 
                                        alt={"image"} 
                                        width={"13"} 
                                        height={"13"}/>
                                    
                                    10 comments
                                </p>
                            </div>
                            <div className="flex gap-2 text-[#737373]">
                                <Link href="">Learn More</Link>
                                <Image src={"icons/arrow-right.svg"} 
                                        alt={"image"} 
                                        width={"9"} 
                                        height={"16"}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[348px] gap-4 border border-b-[3px]">
                        <Image src={"image/fp-img-3.svg"} 
                            alt={"image"} 
                            width={"348"} 
                            height={"300"}/>
                        <div className="p-[25px] flex flex-col gap-4">
                            <div className="flex gap-4">
                                <small className="text-[#8EC2F2]">Google</small>
                                <small className="text-[#737373]">Trendding</small>
                                <small className="text-[#737373]">New</small>
                            </div>
                            <h2 className="text-[20px] text-[3252B42]">Loudest à la Madison #1 (L'integral)</h2>
                            <p className="text-[14px] text-[#737373]">We focus on ergonomics and meeting 
                                you where you work. It's only a 
                                keystroke away.</p>
                            <div className="flex justify-between">
                                <p className="text-[12px] text-[#737373] flex gap-2">
                                    <Image src={"icons/clock.svg"} 
                                        alt={"image"} 
                                        width={"13"} 
                                        height={"13"}/>
                                    
                                    22 April 2021
                                </p>
                                <p className="text-[12px] text-[#737373] flex gap-2">
                                    <Image src={"icons/comments-icon.svg"} 
                                        alt={"image"} 
                                        width={"13"} 
                                        height={"13"}/>
                                    
                                    10 comments
                                </p>
                            </div>
                            <div className="flex gap-2 text-[#737373]">
                                <Link href="">Learn More</Link>
                                <Image src={"icons/arrow-right.svg"} 
                                        alt={"image"} 
                                        width={"9"} 
                                        height={"16"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
    )
}
export default mainPage;