"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";

const header = () => {

    const [display, setDisplay] = useState(false);

    return(
        <div>
        <header className="w-full flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl max-md:gap-0">
            <div className="w-full bg-[#252B42] flex items-center justify-center px-10">
            <div className="w-full max-w-[1439px] bg-[#252B42] flex items-center justify-center">
                <div className="w-full text-white flex justify-between py-[10px] max-[920px]:hidden">
                    <div className="flex gap-[10px] font-bold">
                        <div className="flex gap-[5px] py-[10px] ">
                            <Image src={"/icons/phone.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            <p className="max-lg:text-[14px]">+92 3122963060</p>
                        </div>
                        <div className="flex gap-[5px] p-[10px]">
                        <Image src={"/icons/mail.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            <p className="max-lg:text-[14px]">alihussainsoomro93@gmail.com</p>
                        </div>
                    </div>
                    <div className="font-bold flex items-center">
                        <p className="max-lg:text-[14px]">Follow Us  and get a chance to win 80% off</p>
                    </div>
                    <div className="flex gap-2 font-bold items-center">
                        <p className="max-lg:text-[14px]">Follow us : </p>
                        <ul className="flex items-center justify-center gap-[12px]">
                            <li className="cursor-pointer">
                                <FaSquareInstagram/>
                            </li>
                            <li className="cursor-pointer">
                               <FaYoutube/>
                            </li>
                            <li className="cursor-pointer">
                               <FaFacebook/>
                            </li>
                            <li className="cursor-pointer">
                               <FaTwitter/>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <div className="w-full bg-[#FFFFFF] flex items-center justify-center py-[12px] px-[38px] max-md:bg-white max-md:py-[24px]">
                <nav className="w-full max-w-[1439px] flex justify-between gap-28 max-md:w-full max-md:max-w-3xl max-md:px-6">
                    <div className="text-[24px] flex items-center cursor-pointer">
                        <Link href="/"><h3 className="font-bold max-md:font-bold max-md:text-[24px] text-[#737373]">Bandage</h3></Link>
                    </div>
                    <div className="w-full bg-white flex justify-between gap-[32px] max-[920px]:hidden">
                        <div className="flex items-center gap-2s">
                            <Link href="/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0]">Home</Link>  
                            <div className="relative text-#737373] font-bold text-[14px] p-[10px] cursor-pointer"> 
                                <div className="flex items-center justify-center">
                                    <Link href={"/components/shop"} className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0]">Shop</Link>
                                    <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
                                        <RiArrowDownSLine className="text-[#737373] font-bold text-[24px] hover:text-[#23A6F0]"/>
                                    </button>
                                </div>  
                               
                                <ul style={{ display: display ? "block" : "none" }} className="absolute bg-white py-2 -left-4 rounded">
                                    <li className="hover:text-[#23A6F0] py-2">
                                        <Link href={"/components/cloths"} className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0] px-[26px]">Cloths</Link>
                                    </li>
                                    <li className="hover:text-[#23A6F0] py-2">
                                        <Link href={"/components/electronics"} className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0] px-[26px]">Electronics</Link>
                                    </li>
                                    <li className="hover:text-[#23A6F0] py-2">
                                        <Link href={"/components/groceries"} className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0] px-[26px]">Groceries</Link>
                                    </li>
                                    <li className="hover:text-[#23A6F0]">
                                        <Link href={"/components/household"} className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0] px-[26px]">Household</Link>
                                    </li>
                                </ul>
                            </div>
                               
                               
                           
                            <Link href="/components/about/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0]">About</Link>
                            <Link href="/components/team/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0]">Blog</Link>
                            <Link href="/components/contact/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0]">Contact</Link>
                            <Link href="/components/pages/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0]">Pages</Link>
                        </div>
                        <div className="flex items-center gap-[20px] hover:">
                           
                            <div className="flex gap-2 text-[#23A6F0]">
                                <FiSearch className="text-[20px] hover:cursor-pointer"/> 
                            </div>
                           
                            <div className="flex gap-2 text-[#23A6F0]">
                                <BsCart className="text-[20px] hover:cursor-pointer"/>
                                1
                            </div>
                            <div className="flex gap-2 text-[#23A6F0]">
                                <CiHeart className="text-[24px] hover:cursor-pointer"/>
                                1
                            </div>
                            <div className="text-[#23A6F0] font-bold flex items-center gap-[5px]">
                                <FaRegUser className="text-[20px]"/>
                                <Link href={"#"}>Login / Register</Link>
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