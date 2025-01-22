import Header from "../header3/page";
import Footer from "../footer2/page";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
    return(
        <div>
            <section className="w-full max-w-[1439px] bg-[#FAFAFA]">
                <Header />
            <div className="w-full max-w-[1439px] flex items-center justify-center">
                <div className="w-full max-w-[1050px] py-20 bg-white flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <h5 className="text-[#737373] font-bold text-[16px]">WHAT WE DO</h5>
                        <h1 className="text-[58px] font-bold text-[#252B42] max-md:text-[40px] max-md:w-[316px] max-md:text-center">Innovation tailored for you</h1>
                        <div className="flex items-center justify-center gap-2s">
                        <Link href="/" className="p-[10px] cursor-pointer">Home</Link>
                        <span>
                            <Image src={"/icons/arrow-right-2.svg"} 
                                alt={"icon"} 
                                width={"9"} 
                                height={"16"}/>
                        </span>
                        <Link href="/pricing/" className="p-[10px] cursor-pointer text-[#BDBDBD]">Team</Link>
                    </div>
                </div>
            </div>
        </div>
                
        </section>

        <section className="w-full max-w-[1439px] bg-white py-10 flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl">
            <div className="w-full flex items-center justify-center gap-[10px] max-md:flex-col">
                <div>
                    <Image src={"image/gallery-img1.svg"} 
                        alt={"image"} 
                        width={"700"} 
                        height={"530"}/>
                </div>
                <div className="team-gallery">
                    <Image src={"image/gallery-img2.svg"} 
                        alt={"image"} 
                        width={"361"} 
                        height={"260"}/>
                    <Image src={"image/gallery-img3.svg"} 
                        alt={"image"} 
                        width={"361"} 
                        height={"260"}/>
                    <Image src={"image/gallery-img4.svg"} 
                        alt={"image"} 
                        width={"361"} 
                        height={"260"}/>
                    <Image src={"image/gallery-img5.svg"} 
                        alt={"image"} 
                        width={"361"} 
                        height={"260"}/>
                </div>
            </div>
        </section>
       
        <section className="w-full max-w-[1439px] bg-white py-10 flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl">
            <div className="w-[1050px] flex items-center justify-center flex-col gap-10">
                <div className="w-full py-16 flex flex-col items-center justify-center max-md:px-6 max-md:text-center">
                    <h1 className="text-[40px] text-[#252B42] font-bold">Meet Our Team</h1>
                </div>
                <div className="team-container">
                    <div className="flex flex-col gap-4 items-center pb-20">
                        <Image src={"image/team1.svg"} 
                            alt={"image"} 
                            width={"316"} 
                            height={"231"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Username</p>
                        <p className="text-[14px] font-bold text-[#737373]">Profession</p>
                        <ul className="flex gap-[12px] px-10">
                            <li className="cursor-pointer">
                                <Image src={"/icons/fb.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"icons/ins.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"/icons/tw.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>  
                        </ul>
                    </div>     
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/team2.svg"} 
                            alt={"image"} 
                            width={"316"} 
                            height={"231"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <ul className="flex gap-[12px] px-10">
                            <li className="cursor-pointer">
                                <Image src={"/icons/fb.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"icons/ins.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"/icons/tw.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>  
                        </ul>
                    </div>    
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/team3.svg"} 
                            alt={"image"} 
                            width={"316"} 
                            height={"231"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <ul className="flex gap-[12px] px-10">
                            <li className="cursor-pointer">
                                <Image src={"/icons/fb.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"icons/ins.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"/icons/tw.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>  
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/team4.svg"} 
                            alt={"image"} 
                            width={"316"} 
                            height={"231"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <ul className="flex gap-[12px] px-10">
                            <li className="cursor-pointer">
                                <Image src={"/icons/fb.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"icons/ins.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"/icons/tw.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>  
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/team5.svg"} 
                            alt={"image"} 
                            width={"316"} 
                            height={"231"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <ul className="flex gap-[12px] px-10">
                            <li className="cursor-pointer">
                                <Image src={"/icons/fb.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"icons/ins.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"/icons/tw.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>  
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/team6.svg"} 
                            alt={"image"} 
                            width={"316"} 
                            height={"231"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <ul className="flex gap-[12px] px-10">
                            <li className="cursor-pointer">
                                <Image src={"/icons/fb.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"icons/ins.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"/icons/tw.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>  
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/team7.svg"} 
                            alt={"image"} 
                            width={"316"} 
                            height={"231"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <ul className="flex gap-[12px] px-10">
                            <li className="cursor-pointer">
                                <Image src={"/icons/fb.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"icons/ins.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"/icons/tw.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>  
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/team8.svg"} 
                            alt={"image"} 
                            width={"316"} 
                            height={"231"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <ul className="flex gap-[12px] px-10">
                            <li className="cursor-pointer">
                                <Image src={"/icons/fb.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"icons/ins.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"/icons/tw.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>  
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/team9.svg"} 
                            alt={"image"} 
                            width={"316"} 
                            height={"231"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
                        <ul className="flex gap-[12px] px-10">
                            <li className="cursor-pointer">
                                <Image src={"/icons/fb.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"icons/ins.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image src={"/icons/tw.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                            </li>  
                        </ul>
                    </div>         
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1439px] flex items-center justify-center">
            <div className="w-full max-w-[1050px] py-16 flex gap-8 flex-col items-center justify-center">
                <div className="w-full flex flex-col gap-6 items-center justify-center max-md:px-6 max-md:text-center">
                    <h1 className="text-[40px] text-[#252B42] font-bold">Start your 14 days free trial</h1>
                    <p className="text-[14px] text-[#737373] w-[414px] text-center">Met minim Mollie non desert Alamo est sit cliquey dolor 
                    do met sent. RELIT official consequent.</p>
                    <div className="w-[195px] justify-center rounded text-[14px] bg-[#23A6F0] text-white font-bold flex items-center gap-[5px]">
                        <Link href={"#"} className="flex gap-2 py-4 px-4 text-center">Try it free now</Link>
                    </div>
                    <ul className="flex gap-[12px] px-10">
                            <li className="cursor-pointer">
                                <Image className=""src={"/icons/tw.svg"} 
                                alt={"icon"} 
                                width={"30"} 
                                height={"24"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className=""src={"icons/fb2.svg"} 
                                alt={"icon"} 
                                width={"30"} 
                                height={"24"}/>
                            </li>
                            <li className="cursor-pointer">
                                <Image className=""src={"/icons/inst.svg"} 
                                alt={"icon"} 
                                width={"30"} 
                                height={"24"}/>
                            </li> 
                            <li className="cursor-pointer">
                                <Image className=""src={"/icons/in.svg"} 
                                alt={"icon"} 
                                width={"30"} 
                                height={"24"}/>
                            </li> 

                        </ul>
                </div>

            </div>
        </section>

        <Footer />
        </div>
    )
}

export default Team;