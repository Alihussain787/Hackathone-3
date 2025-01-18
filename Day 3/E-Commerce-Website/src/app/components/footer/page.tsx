import React from "react";
import Image from "next/image";

const footer = () => {
    return(
        <div>
            <footer className="w-full max-w-[1439px] bg-white flex items-center justify-center mt-[80px] max-md:w-full ">
                <div className="w-full flex flex-col gap-[80px] max-md:w-full max-md:justify-start ">
                    <div className="w-full bg-[#FAFAFA] flex items-center justify-center py-10 max-md:w-full max-md:flex-col ">
                        <div className="w-full max-w-[1050px] flex justify-between items-center max-md:flex-col">
                            <h1 className="text-24px text-[#252B42] font-bold max-md:px-10">Bandage</h1>
                            <ul className="flex gap-[12px] px-10">
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/icons/fb.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"icons/ins.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className="rounded-tl-[25%] rounded-br-[25%]"src={"/icons/tw.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <div className="w-[1050px] flex max-md:flex-col">
                        <div className="w-[250px] flex flex-col gap-[20px] max-md:w-full">
                            <h3 className="text-[16px] font-bold max-md:text-center">Company Info</h3>
                            <ul className="max-md:text-center text-[14px] text-bold text-[#737373]">
                                <li className="py-[8px]">About Us</li>
                                <li className="py-[8px]">Carrier</li>
                                <li className="py-[8px]">We are hiring</li>
                                <li className="py-[8px]">Blog</li>
                            </ul>
                        </div>
                        <div className="w-[250px] flex flex-col gap-[20px] max-md:w-full max-md:max-w-3xl">
                            <h3 className="text-[16px] font-bold max-md:text-center">Legal</h3>
                            <ul className="max-md:text-center text-[14px] text-bold text-[#737373]">
                                <li className="py-[8px]">About Us</li>
                                <li className="py-[8px]">Carrier</li>
                                <li className="py-[8px]">We are hiring</li>
                                <li className="py-[8px]">Blog</li>
                            </ul>
                        </div>
                        <div className="w-[250px] flex flex-col gap-[20px] max-md:w-full max-md:max-w-3xl">
                            <h3 className="text-[16px] font-bold max-md:text-center">Features</h3>
                            <ul className="max-md:text-center text-[14px] text-bold text-[#737373]">
                                <li className="py-[8px]">Business Marketing</li>
                                <li className="py-[8px]">User Analytic</li>
                                <li className="py-[8px]">Live Chat</li>
                                <li className="py-[8px]">Unlimited Support</li>
                            </ul>
                        </div>
                        <div className="w-[250px] flex flex-col gap-[20px] max-md:w-full max-md:max-w-3xl">
                            <h3 className="text-[16px] font-bold max-md:text-center">Resources</h3>
                            <ul className="max-md:text-center text-[14px] text-bold text-[#737373]">
                                <li className="py-[8px]">IOS & Android</li>
                                <li className="py-[8px]">Watch a Demo</li>
                                <li className="py-[8px]">Customers</li>
                                <li className="py-[8px]">API</li>
                            </ul>
                        </div>
                        <div className="w-[350px] flex flex-col gap-[20px] max-md:w-full max-md:max-w-3xl">
                            <h3 className="text-[16px] font-bold max-md:text-center">Company Info</h3>
                            <ul className="max-md:text-center text-[14px] text-bold text-[#737373]">
                                <li>
                                    <div className="flex flex-col gap-[5px] max-md:my-2">
                                        <div className="flex max-md:px-10">
                                            <input type="text" placeholder="Enter your email" className="w-full border rounded-l text-[#737373] p-[12px] bg-[#F9F9F9] outline-0 max-md:w-full max-md:max-w-3xl"/>
                                            <button className="text-white p-[12px] bg-[#23A6F0] rounded-r border-0 outline-0">Subscribe</button>
                                        </div>
                                        <p className="text-[12px] max-md:text-center">Lore imp sum dolor Amit</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="w-full bg-[#FAFAFA] flex items-center justify-center py-4 max-md:w-full">
                        <div className="w-full max-w-[1050px] flex justify-start items-center max-md:justify-center">
                            <p className="text-[#737373] text-[14px] max-md:text-center">Made With Love By Finland All Right Reserved </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default footer;