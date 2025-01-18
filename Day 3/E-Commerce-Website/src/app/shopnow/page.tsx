import Header from "../components/header2/page";
import Footer from "../components/footer2/page";
import Image from "next/image";
import Link from "next/link";
const Shop = () => {
    return(
        <div>
            <Header />
            <div className="w-full max-w-[1439px] bg-[#FAFAFA] flex items-center justify-center py-10 max-md:w-full max-md:max-w-3xl max-md:mt-[870px]">
                <div className="w-[1050px] flex items-center justify-start gap-2 max-md:justify-center">
                    <Link href="/" className="p-[10px] cursor-pointer">Home</Link>
                        <span>
                            <Image src={"/icons/arrow-right-2.svg"} 
                                alt={"icon"} 
                                width={"9"} 
                                height={"16"}/>
                        </span>
                    <Link href="/about/" className="p-[10px] cursor-pointer text-[#BDBDBD]">Shop</Link>
                </div>
            </div>
        <section className="w-full max-w-[1439px] bg-[#FAFAFA] py-2 flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl">
            <div className="w-full max-w-[1050px] flex gap-10 pb-[40px] max-md:flex-col">
                <div className="w-1/2 flex flex-col gap max-md:gap-2">
                    <div className="spc-img w-[506px] h-[450px] p-10 flex justify-between">
                        <Image src={"/icons/carousel-control-prev.svg"} 
                            alt={"icon"} 
                            width={"23"} 
                            height={"44"}/>
                        <Image src={"/icons/carousel-control-next.svg"} 
                            alt={"icon"} 
                            width={"23"} 
                            height={"44"}/>
                    </div>
                    <div className="flex gap-2">
                        <Image src={"/image/spc-2.svg"} 
                            alt={"icon"} 
                            width={"100"} 
                            height={"75"}/>
                        <Image src={"/image/spc-3.svg"} 
                            alt={"icon"} 
                            width={"100"} 
                            height={"75"}/>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-6 p-6 max-md:w-full">
                    <h4 className="text-[20px] text-[#252B42]">Floating Phone</h4>
                    <div className="flex gap-2">
                        <Image src={"/icons/5-stars.svg"} 
                            alt={"icon"} 
                            width={"130"} 
                            height={"22"}/>
                         <p className="text-[14px] text-[#737373]">10 Reviews</p>
                    </div>
                    <h4 className="text-[24px] text-[#252B42]">$1,139.33</h4>
                    <h6 className="text-[#737373] text-[14px] font-bold">Availability  : <span className="text-[14px] font-bold text-[#23A6F0]">In Stock </span></h6>
                    <p className="text-[14px] text-[#737373] border-b pb-6">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>

                    <Image src={"/icons/product-colors.svg"} 
                            alt={"icon"} 
                            width={"150"} 
                            height={"30"}/>
                    <div className="flex gap-2 mt-4">
                        <h6 className="w-[148px] text-white bg-[#23A6F0] font-bold text-[14px] py-[10px] px-[20px]">Select Options</h6>
                        
                        <div className="flex gap-2">
                            <Image src={"/icons/like.svg"} 
                                alt={"icon"} 
                                width={"40"} 
                                height={"40"}/>
                            <Image src={"/icons/basket.svg"} 
                                alt={"icon"} 
                                width={"40"} 
                                height={"40"}/>
                            <Image src={"/icons/more.svg"} 
                                alt={"icon"} 
                                width={"40"} 
                                height={"40"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full max-w-[1439px] bg-white py-2 flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl">
            <div className="w-[1050px] flex items-center gap-20">
                <div className="w-[1050px] py-10 flex items-center justify-center gap-6 border-b">
                    <p className="text-[14px] text-[#737373] font-semibold">Description</p>   
                    <p className="text-[14px] text-[#737373] font-semibold">Additional Information</p>
                    <p className="text-[14px] text-[#737373] font-semibold">Reviews (0)</p>
                </div>
            </div>
            <div className="w-[1050px] py-10 flex items-center justify-center gap-12 max-md:flex-col">
                    <div className="w-1/3"><Image src={"/image/bsp-9.svg"} 
                                alt={"icon"} 
                                width={"316"} 
                                height={"372"}/></div>
                    <div className="w-1/3 flex flex-col gap-6">
                        <h1 className="text-black text-[24px] font-bold">the quick fox jumps over </h1>
                        <p className="text-[14px] text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                        <p className="text-[14px] text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                        <p className="text-[14px] text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>   
                    </div>
                    <div className="w-1/3 flex flex-col gap-12">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-black text-[24px] font-bold">the quick fox jumps over </h1>
                            <div className="flex flex-col gap-2">
                                <p className="text-[14px] flex gap-4 text-[#737373]">
                                <Image src={"/icons/arrow-right-2.svg"} 
                                    alt={"icon"} 
                                    width={"9"} 
                                    height={"16"}/>
                                    the quick fox jumps over the lazy dog 
                                </p>
                                <p className="text-[14px] flex gap-4 text-[#737373]">
                                <Image src={"/icons/arrow-right-2.svg"} 
                                    alt={"icon"} 
                                    width={"9"} 
                                    height={"16"}/>
                                    the quick fox jumps over the lazy dog 
                                </p>
                                <p className="text-[14px] flex gap-4 text-[#737373]">
                                <Image src={"/icons/arrow-right-2.svg"} 
                                    alt={"icon"} 
                                    width={"9"} 
                                    height={"16"}/>
                                    the quick fox jumps over the lazy dog 
                                </p>
                                <p className="text-[14px] flex gap-4 text-[#737373]">
                                <Image src={"/icons/arrow-right-2.svg"} 
                                    alt={"icon"} 
                                    width={"9"} 
                                    height={"16"}/>
                                    the quick fox jumps over the lazy dog 
                                </p>
                                
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-6">
                            <h1 className="text-black text-[24px] font-bold">the quick fox jumps over </h1>
                            <div className="flex flex-col gap-2">
                            <p className="text-[14px] flex gap-4 text-[#737373]">
                                <Image src={"/icons/arrow-right-2.svg"} 
                                    alt={"icon"} 
                                    width={"9"} 
                                    height={"16"}/>
                                    the quick fox jumps over the lazy dog 
                                </p>
                                <p className="text-[14px] flex gap-4 text-[#737373]">
                                <Image src={"/icons/arrow-right-2.svg"} 
                                    alt={"icon"} 
                                    width={"9"} 
                                    height={"16"}/>
                                    the quick fox jumps over the lazy dog 
                                </p>
                                <p className="text-[14px] flex gap-4 text-[#737373]">
                                <Image src={"/icons/arrow-right-2.svg"} 
                                    alt={"icon"} 
                                    width={"9"} 
                                    height={"16"}/>
                                    the quick fox jumps over the lazy dog 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

        <section className="w-full bg-[#FAFAFA] max-w-[1439px] pb-[100px] flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl">
            <div className="w-[1050px] flex flex-col gap-6 max-md:max-w-3xl">
                <div className="py-6 border-b max-md:py-0 max-md:pt-6 max-md:border-b-0">
                     <h1 className="text-[24] font-bold max-md:text-center">BESTSELLER PRODUCTS</h1>
                </div>
                <div className="fp3">
                    <div className="flex bg-white flex-col gap-6 items-center">
                        <Image src={"image/bsp-1.svg"} 
                            alt={"image"} 
                            width={"255"} 
                            height={"280"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">English Department</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                    </div>
                    <div className="flex bg-white flex-col gap-4 items-center">
                        <Image src={"image/bsp-2.svg"} 
                            alt={"image"} 
                            width={"255"} 
                            height={"280"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">English Department</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                    </div>
                    <div className="flex bg-white flex-col gap-4 items-center">
                        <Image src={"image/bsp-3.svg"} 
                            alt={"image"} 
                            width={"255"} 
                            height={"280"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">English Department</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                    </div>
                    <div className="flex bg-white flex-col gap-4 items-center">
                        <Image src={"image/bsp-4.svg"} 
                            alt={"image"} 
                            width={"255"} 
                            height={"280"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">English Department</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                    </div>
                    <div className="flex bg-white flex-col gap-4 items-center">
                        <Image src={"image/bsp-5.svg"} 
                            alt={"image"} 
                            width={"255"} 
                            height={"280"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">English Department</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                    </div>
                    <div className="flex bg-white flex-col gap-4 items-center">
                        <Image src={"image/bsp-6.svg"} 
                            alt={"image"} 
                            width={"255"} 
                            height={"280"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">English Department</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                    </div>
                    <div className="flex bg-white flex-col gap-4 items-center">
                        <Image src={"image/bsp-7.svg"} 
                            alt={"image"} 
                            width={"255"} 
                            height={"280"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">English Department</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                    </div>
                    <div className="flex bg-white flex-col gap-4 items-center">
                        <Image src={"image/bsp-8.svg"} 
                            alt={"image"} 
                            width={"255"} 
                            height={"280"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">English Department</p>
                        <p className="text-[14px] font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full max-w-[1439px] bg-[#FAFAFA] py-[50px] flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl">
            <div className="w-[1050px] flex items-center gap-20 max-md:flex-col">
                <Image src={"/icons/brand-logo-1.svg"} 
                    alt={"icon"} 
                    width={"103"} 
                    height={"34"}/>
                <Image src={"/icons/brand-logo-2.svg"} 
                    alt={"icon"} 
                    width={"103"} 
                    height={"34"}/>
                <Image src={"/icons/brand-logo-3.svg"} 
                    alt={"icon"} 
                    width={"103"} 
                    height={"34"}/>
                <Image src={"/icons/brand-logo-4.svg"} 
                    alt={"icon"} 
                    width={"103"} 
                    height={"34"}/>
                <Image src={"/icons/brand-logo-5.svg"} 
                    alt={"icon"} 
                    width={"103"} 
                    height={"34"}/>
                <Image src={"/icons/brand-logo-6.svg"} 
                    alt={"icon"} 
                    width={"103"} 
                    height={"34"}/>
            </div>
        </section>



            <Footer />
        </div>
    )
}
export default Shop;
