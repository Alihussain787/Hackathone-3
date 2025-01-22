
"use client"
import React from "react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

import { openMenu } from "../../ts/script";
import { closeMenu } from "../../ts/script";


const header2 = () => {

    const [open, setOpen] = useState(true);
    const [close, setCLose] = useState(false);

    function Display(){
        setOpen(!open)
        setCLose(!close)
    }

    return(
        <div>
        <header className="w-full max-w-[1439px] flex items-center justify-center flex-col gap-[16px] max-lg:gap-0">
                <div className="w-full max-w-[1050px] max-lg:max-w-[1024px] bg-[#FFFFFF] flex items-center py-[12px] max-lg:bg-white max-lg:py-[24px] relative z-50 px-6">
                <nav className="w-full flex justify-between gap-28 max-lg:w-full  max-lg:px-6 ">
                    <div className="text-[24px] cursor-pointer">
                        <Link href="/"><h3 className="text-[#737373] font-bold max-lg:font-bold max-lg:text-[24px]">Bandage</h3></Link>
                    </div>
                    <div className="w-full bg-white flex justify-between gap-[32px] max-lg:hidden">
                        <div className="max-lg:hidden flex items-center gap-2 max-lg:gap-[30px] max-lg:flex-col max-lg:bg-whit max-lg:absolute max-lg:top-14 max-lg:left-[-24px] max-lg:w-full max-lg:py-20 max-md:text-center">
                            <Link href="/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-lg:text-[30px] hover:text-[#23A6F0]">Home</Link>
                            <Link href="/components/shop/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-lg:text-[30px] hover:text-[#23A6F0]">Products</Link>
                            <Link href="/components/pricing/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-lg:text-[30px] hover:text-[#23A6F0]">Pricing</Link>
                            <Link href="/components/contact/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-lg:text-[30px] hover:text-[#23A6F0]">Contact</Link>
                        </div>
                        <div className="text-[14px] flex items-center gap-[20px] max-lg:hidden">
                           <div className="text-[#23A6F0] font-bold flex items-center gap-[5px]">
                                <Link href={"#"}>Login</Link>
                           </div>
                           <div className="rounded text-[14px] bg-[#23A6F0] text-white font-bold flex items-center gap-[5px]">
                                <Link href={"#"} className="flex gap-2 py-2 px-4">Become a member 
                                 <Image src={"/icons/Rightarrow.svg"} 
                                    alt={"icon"} 
                                    width={"12"} 
                                    height={"10"}/>
                                </Link>
                           </div>
                        </div>
                    </div>
                    <div className="lg:hidden w-full flex items-center justify-end gap-4">
                        <button>
                            <FiSearch className="text-[20px] text-[#737373]"/>
                        </button>
                        <Link href={"#"}>
                            <BsCart className="text-[20px] text-[#737373]"/>
                        </Link>
                        <div>
                            <FaBarsStaggered className="text-[20px] text-[#737373] hover:cursor-pointer" style={{ display: open ? "block" : "none" }} onClick={() => {Display(); openMenu()}}/>
                            <FaXmark className="text-[20px] text-[#737373] hover:cursor-pointer" style={{ display: close ? "block" : "none" }} onClick={() => {Display(); closeMenu()}}/>
                        </div>
                    </div>
                    
                </nav>
            </div>
            <div id="nav_menu" className="ease-in-out w-full lg:hidden bg-white flex items-center gap-2 max-lg:gap-[30px] max-lg:flex-col absolute max-lg:top-20 max-lg:left-0 max-lg:w-full max-lg:py-20 max-md:text-center z-40 left-0 mt-[-200%] duration-500">
                <Link href="/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-lg:text-[30px] hover:text-[#23A6F0]">Home</Link>
                <Link href="/components/shop/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-lg:text-[30px] hover:text-[#23A6F0]">Products</Link>
                <Link href="/components/pricing/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-lg:text-[30px] hover:text-[#23A6F0]">Pricing</Link>
                <Link href="/components/contact/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-lg:text-[30px] hover:text-[#23A6F0]">Contact</Link>
            </div>
        </header>
        </div>
    )
}
export default header2;