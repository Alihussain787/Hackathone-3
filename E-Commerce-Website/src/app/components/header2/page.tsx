"use client"
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";

const header2 = () => {

    const [display, setDisplay] = useState(false);

    return(
        <div>
        <header className="w-full max-w-[1439px] flex flex-col gap-[16px] max-md:w-full max-md:max-w-3xl max-md:gap-0">
            <div className="w-full max-w-[1439px] bg-[#23856D] flex items-center justify-center">
            <div className="w-full max-w-[1050px] text-white flex justify-between py-[10px] max-[920px]:hidden">
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
                              <FaSquareInstagram/>
                            </li>
                            <li className="cursor-pointer">
                                <FaYoutube/>
                            </li>
                            <li className="cursor-pointer">
                               <FaFacebook/>
                            </li>
                            <li className="cursor-pointer">
                                <FaTwitter />
                            </li>
                            
                        </ul>
                    </div>
                </div>
                </div>
                <div className="w-full bg-[#FFFFFF] flex items-center justify-center py-[12px] max-md:bg-white">
                <nav className="w-full max-w-[1050px] flex justify-between gap-28 max-md:w-full max-md:h-[40px] max-md:max-w-3xl max-md:px-6">
                    <div className="text-[24px] cursor-pointer max-md:absolute">
                        <Link href="/"><h3 className="font-bold max-md:font-bold max-md:text-[24px]">Bandage</h3></Link>
                    </div>
                    <div className="w-full bg-white flex justify-between gap-[32px]">
                        <div className="flex items-center gap-2 max-md:gap-[30px] max-md:flex-col max-md:bg-white max-md:absolute max-md:top-14 max-md:left-[-24px] max-md:w-full max-md:py-20 max-md:text-center">
                            <Link href="/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0]">Home</Link>
                            
                            <div className="relative text-#737373] font-bold text-[14px] p-[10px] cursor-pointer"> 
                                <div className="flex items-center justify-between gap-2">
                                    <Link href={"/components/shop"} className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0]">Shop</Link>
                                    <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}><Image className="cursor-pointer" src={"/icons/arrow-down.svg"} 
                                        alt={"icon"} 
                                        width={"10"} 
                                        height={"10"}/></button>
                                </div>  
                               
                                <ul style={{ display: display ? "block" : "none" }} className="absolute bg-white py-2 -left-2 rounded">
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
                        <div className="flex flex-col items-center gap-[20px] md:hidden">
                            <div className="text-[#23A6F0] font-bold flex items-center gap-[5px]">
                                <FaRegUser />
                                <Link href={"#"}>Login / Register</Link>
                           </div>
                                <FiSearch />

                            <div className="flex gap-2 text-[#23A6F0]">
                                 <BsCart />
                                1
                            </div>
                            <div className="flex gap-2 text-[#23A6F0]">
                                <CiHeart/>
                                1
                            </div>
                        </div>
                        </div>
                        <div className="flex items-center gap-[20px] max-md:hidden">
        
                            <div className="flex gap-2 text-[#23A6F0]">
                                <FiSearch className="hover:cursor-pointer text-[20px]"/>
                            </div>
                            <div className="flex gap-2 text-[#23A6F0]">
                                 <BsCart className="hover:cursor-pointer text-[20px]"/>
                                1
                            </div>
                            <div className="flex gap-2 text-[#23A6F0]">
                               <CiHeart className="hover:cursor-pointer text-[24px]"/>
                                1
                            </div>
                            <div className="text-[#23A6F0] font-bold flex items-center gap-[5px]">
                                <FaRegUser className="hover:cursor-pointer text-[18px]"/>
                                <Link href={"#"}>Login / Register</Link>
                           </div>
                        </div>
                    </div>
                    <div className="md:hidden w-full flex items-center justify-end gap-4">
                        <Link href={"#"} className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer">
                            <Image src={"/icons/R3.svg"} 
                                alt={"icon"} 
                                width={"24"} 
                                height={"24"}/>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
        </div>
    )
}
export default header2;