import React from "react";
import Image from "next/image";
import Link from "next/link";

const header = () => {
    return(
        <div>
        <header className="w-full max-w-[1439px] flex flex-col gap-[16px] max-md:w-full max-md:max-w-3xl max-md:gap-0">
            <div className="w-full max-w-[1439px] bg-[#252B42] flex items-center justify-center">
                <div className="w-full text-white flex justify-between py-[10px] px-[38px] max-md:hidden">
                    <div className="flex gap-[10px] font-bold">
                        <div className="flex gap-[5px] py-[10px] ">
                            <Image src={"/icons/phone.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            <p className="max-lg:text-[14px]">(225) 555-0118</p>
                        </div>
                        <div className="flex gap-[5px] p-[10px]">
                        <Image src={"/icons/mail.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            <p className="max-lg:text-[14px]">michelle.rivera@example.com</p>
                        </div>
                    </div>
                    <div className="font-bold flex items-center">
                        <p className="max-lg:text-[14px]">Follow Us  and get a chance to win 80% off</p>
                    </div>
                    <div className="flex gap-2 font-bold items-center">
                        <p className="max-lg:text-[14px]">Follow us : </p>
                        <ul className="flex items-center justify-center gap-[12px]">
                            <li className="cursor-pointer">
                                <Image src={"icons/insta.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"/icons/youtube.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"/icons/facebook.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"/icons/twitter.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                </div>
                <div className="w-full bg-[#FFFFFF] flex items-center py-[12px] px-[38px] max-md:bg-white max-md:py-[24px]">
                <nav className="w-full flex justify-between gap-28 max-md:w-full max-md:max-w-3xl max-md:px-6">
                    <div className="text-[24px] cursor-pointer">
                        <Link href="/"><h3 className="font-bold max-md:font-bold max-md:text-[24px]">Bandage</h3></Link>
                    </div>
                    <div className="w-full bg-white flex justify-between gap-[32px] max-md:hidden">
                        <div className="flex items-center gap-2s">
                            <Link href="/" className="text-#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0]">Home</Link>
                            <div className="flex">
                                <Link href="/shop/" className="text-#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0]">Shop</Link>
                                <Image className="cursor-pointer" src={"/icons/arrow-down.svg"} 
                                    alt={"icon"} 
                                    width={"10"} 
                                    height={"10"}/>
                            </div>
                            <Link href="/about/" className="text-#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0]">About</Link>
                            <Link href="/team/" className="text-#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0]">Blog</Link>
                            <Link href="/contact/" className="text-#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0]">Contact</Link>
                            <Link href="/pages/" className="text-#737373] font-bold text-[14px] p-[10px] cursor-pointer hover:text-[#23A6F0]">Pages</Link>
                        </div>
                        <div className="flex items-center gap-[20px]">
                           <div className="text-[#23A6F0] font-bold flex items-center gap-[5px]">
                                <Image src={"/icons/man.svg"} 
                                    alt={"icon"} 
                                    width={"12"} 
                                    height={"12"}/>
                                <Link href={"#"}>Login / Register</Link>
                           </div>
                           <Image className="cursor-pointer" src={"/icons/search.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            <div className="flex gap-2 text-[#23A6F0]">
                                 <Image className="cursor-pointer" src={"/icons/cart.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                                1
                            </div>
                            <div className="flex gap-2 text-[#23A6F0]">
                                <Image className="cursor-pointer" src={"/icons/heart.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                                1
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        </div>
    )
}
export default header;