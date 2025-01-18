import React from "react";
import Image from "next/image";
import Link from "next/link";

const header2 = () => {
    return(
        <div>
        <header className="w-full max-w-[1439px] flex items-center justify-center flex-col gap-[16px] max-md:w-full max-md:max-w-3xl max-md:gap-0">
                <div className="w-full max-w-[1050px] bg-[#FFFFFF] flex items-center py-[12px] max-md:bg-white max-md:py-[24px]">
                <nav className="w-full max-w-[1050px] flex justify-between gap-28 max-md:w-full max-md:max-w-3xl max-md:px-6">
                    <div className="text-[24px] cursor-pointer">
                        <Link href="/"><h3 className="font-bold max-md:font-bold max-md:text-[24px]">Bandage</h3></Link>
                    </div>
                    <div className="w-full bg-white flex justify-between gap-[32px] max-md:absolute">
                        <div className="flex items-center gap-2 max-md:gap-[30px] max-md:flex-col max-md:bg-white max-md:absolute max-md:top-14 max-md:left-[-24px] max-md:w-full max-md:py-20 max-md:text-center">
                            <Link href="/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0]">Home</Link>
                            <Link href="/shop/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0]">Products</Link>
                            <Link href="/pricing/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0]">Pricing</Link>
                            <Link href="/contact/" className="text-[#737373] font-bold text-[14px] p-[10px] cursor-pointer max-md:text-[30px] hover:text-[#23A6F0]">Contact</Link>
                        </div>
                        <div className="text-[14px] flex items-center gap-[20px] max-md:hidden">
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
                    <div className="md:hidden w-full flex items-center justify-end gap-4">
                        <Link href={"#"}>
                            <Image src={"/icons/R1.svg"} 
                                alt={"icon"} 
                                width={"24"} 
                                height={"24"}/>
                        </Link>
                        <Link href={"#"}>
                            <Image src={"/icons/R2.svg"} 
                                alt={"icon"} 
                                width={"24"} 
                                height={"24"}/>
                        </Link>
                        <Link href={"#"}>
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