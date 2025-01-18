import Header from "../components/header3/page";
import Footer from "../components/footer2/page";
import Image from "next/image";
import Link from "next/link";
const AboutPage = () => {
    return(
        <div>
        <Header />
        <section className="w-full max-w-[1439px] flex items-center justify-center max-md:mt-[505px]">
        <div className="w-[1044px] flex justify-between max-md:flex-col">
            <div className="text-black flex flex-col gap-[35px] justify-center">
                <div className="flex flex-col gap-[35px] max-md:items-center">
                    <p className="text-[16px] font-bold text-[#252B42]">ABOUT COMPANY</p>
                    <h1 className="text-[58px] font-bold">ABOUT US</h1> 
                    <p className="text-[20px] text-[#737373] max-md:w-[350px] max-md:text-center">We know how large objects will act, but things on a small scale</p>  
                </div>
                <div className="w-[195px] flex items-center justify-center rounded text-[14px] bg-[#23A6F0] text-white font-bold flex items-center gap-[5px] max-md:ml-[30%]">
                    <Link href={"#"} className="flex gap-2 py-4 px-4 text-center">Become a member</Link>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <Image src={"image/about-img.svg"} 
                    alt={"image"} 
                        width={"387"} 
                        height={"440"}/>
            </div>
        </div>
        </section>
        <section className="w-full max-w-[1439px] bg-white flex flex-col items-center justify-center">
            <div className="w-full max-w-[1050px] flex items-center justify-center max-md:flex-col">
                <div className="flex flex-col gap-4 py-10 max-md:items-center max-md:justify-center">
                    <p className="text-[14px] text-[#E74040]">Problems trying</p>
                    <h3 className="text-[24px] font-bold text-[#252B42] max-md:w-[400px] max-md:text-center">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                </div>
                <p className="text-[14px] text-[#737373] max-md:w-[400px] max-md:text-center">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="w-full max-w-[1050px] flex gap-12 items-center justify-center max-md:flex-col">
                <div className="p-12">
                    <h1 className="text-[58px] font-bold text-[#252B42]">15K</h1>
                    <p className="text-[#737373] text-[14px]">Happy Customers</p>
                </div>
                <div className="p-12">
                    <h1 className="text-[58px] font-bold text-[#252B42]">150K</h1>
                    <p className="text-[#737373] text-[14px]">Monthly Visitors</p>
                </div>
                <div className="p-12">
                    <h1 className="text-[58px] font-bold text-[#252B42]">15</h1>
                    <p className="text-[#737373] text-[14px]">Countries  Worldwide</p>
                </div>
                <div className="p-12">
                    <h1 className="text-[58px] font-bold text-[#252B42]">100+</h1>
                    <p className="text-[#737373] text-[14px]">Top Partners</p>
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1439px] bg-white py-10 flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl">
            <div className="w-[1050px] flex items-center justify-center flex-col gap-10">
                <div className="w-full flex flex-col items-center justify-center max-md:px-6 max-md:text-center">
                    <h1 className="text-[40px] text-[#252B42] font-bold">Meet Our Team</h1>
                    <p className="text-[14px] text-[#737373] w-[414px] text-center">Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="flex gap-4 max-md:flex-col">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/media.svg"} 
                            alt={"image"} 
                            width={"316"} 
                            height={"231"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
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
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/media2.svg"} 
                            alt={"image"} 
                            width={"316"} 
                            height={"231"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
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
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={"image/media3.svg"} 
                            alt={"image"} 
                            width={"316"} 
                            height={"231"}/>
                        <p className="text-[16px] font-bold text-[#252B42]">Graphic Design</p>
                        <p className="text-[14px] font-bold text-[#737373]">Graphic Design</p>
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
            </div>
        </section>

        <section className="w-full max-w-[1439px] bg-[#FAFAFA] py-[50px] flex flex-col items-center justify-center gap-14 max-md:w-full max-md:max-w-3xl">
            <div className="w-full flex flex-col gap-4 items-center justify-center max-md:px-6 max-md:text-center">
                    <h1 className="text-[40px] text-[#252B42] font-bold">Big Companies Are Here</h1>
                    <p className="text-[14px] text-[#737373] w-[414px] text-center">Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
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

        <section className="w-full max-w-[1439px] flex items-center justify-center">
        <div className="w-full flex bg-[#2A7CC7] justify-between max-md:flex-col max-md:gap-10">
            <div className="text-white flex flex-col gap-[20px] justify-center max-md:w-full max-md:max-w-3xl">
                <div className="pl-[200px] flex flex-col gap-[35px] max-md:w-full max-md:max-w-3xl max-md:gap-[24px] max-md:pl-[10px] max-md:p-20 max-md:items-center">
                    <p className="text-[16px] font-bold text-white">WORK WITH US</p>
                    <h1 className="text-[40px] font-bold">Now Let’s grow Yours</h1> 
                    <p className="text-[14px] text-white max-md:text-center">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>  
                </div>
                <div className="ml-[200px] w-[130px] flex items-center justify-center rounded text-[14px] border border-white text-white font-bold flex items-center gap-[5px] max-md:ml-[35%] max-md:mb-20">
                    <Link href={"#"} className="flex gap-2 py-4 px-4 text-center">Button</Link>
                </div>
            </div>
            <div className="max-md:hidden">
                <Image src={"image/background-img.svg"} 
                            alt={"image"} 
                            width={"590"} 
                            height={"640"}/>
                
                </div>
            </div>
        </section>

            <Footer />
        </div>
    )
}
export default AboutPage;
