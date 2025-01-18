import Header from "../components/header3/page";
import Footer from "../components/footer2/page";
import Image from "next/image";
import Link from "next/link";

const Pricing = () => {
    return(
        <div>
            <section className="w-full max-w-[1439px] bg-[#FAFAFA]">
                <Header />
            <div className="w-full max-w-[1439px] flex items-center justify-center max-md:mt-[505px]">
                <div className="w-full max-w-[1050px] py-20 bg-white flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <h5 className="text-[#737373] font-bold text-[16px]">PRICING</h5>
                        <h1 className="text-[58px] font-bold text-[#252B42]">Simple Pricing</h1>
                        <div className="flex items-center justify-center gap-2s">
                        <Link href="/" className="p-[10px] cursor-pointer">Home</Link>
                        <span>
                            <Image src={"/icons/arrow-right-2.svg"} 
                                alt={"icon"} 
                                width={"9"} 
                                height={"16"}/>
                        </span>
                        <Link href="/pricing/" className="p-[10px] cursor-pointer text-[#BDBDBD]">Pricing</Link>
                    </div>
                </div>
            </div>
        </div>
                
        </section>

        <section className="w-full max-w-[1439px] bg-[#FAFAFA] py-[50px] flex flex-col items-center justify-center gap-14 max-md:w-full max-md:max-w-3xl">
            <div className="w-full flex flex-col gap-4 items-center justify-center max-md:px-6 max-md:text-center">
                    <h1 className="text-[40px] text-[#252B42] font-bold">Pricing</h1>
                    <p className="text-[14px] text-[#737373] w-[414px] text-center">Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="w-[1050px] flex items-center justify-center gap-20">
                <Image src={"/image/switch.svg"} 
                    alt={"icon"} 
                    width={"311"} 
                    height={"44"}/>
                
            </div>
        </section>

        <section className="w-full max-w-[1439px] flex items-center justify-center">
            <div className="w-full max-w-[985px] flex items-center justify-center max-md:flex-col max-md:gap-6 max-md:bg-[#FAFAFA]">
                <div className="h-[350px] pt-10 pb-2 px-4 border border-[#23A6F0] rounded flex flex-col gap-6 items-center justify-center">
                    <h3 className="text-[#252B42] text-[24] font-bold">FREE</h3>
                    <h5 className="text-[#737373] w-[160px] text-center">Organize across all 
                    apps by hand</h5>
                    
                    <Image src={"/image/price.svg"} 
                    alt={"icon"} 
                    width={"114"} 
                    height={"56"}/>

                    <h6 className="flex gap-2"><Image src={"/image/check-c.svg"} 
                    alt={"icon"} 
                    width={"32"} 
                    height={"32"}/> Unlimited product updates</h6>
                </div>
            
                <div className="bg-[#252B42] h-[400px] pt-10 pb-2 px-4 border border-[#23A6F0] rounded flex flex-col gap-6 items-center justify-center">
                    <h3 className="text-white text-[24] font-bold">STANDARD</h3>
                    <h5 className="text-white w-[160px] text-center">Organize across all 
                    apps by hand</h5>
                    
                    <Image src={"/image/price.svg"} 
                    alt={"icon"} 
                    width={"114"} 
                    height={"56"}/>

                    <h6 className="flex gap-2 text-white"><Image src={"/image/check-c.svg"} 
                    alt={"icon"} 
                    width={"32"} 
                    height={"32"}/> Unlimited product updates</h6>

                    <h6 className="flex gap-2 text-white"><Image src={"/image/check-c.svg"} 
                    alt={"icon"} 
                    width={"32"} 
                    height={"32"}/> Unlimited product updates</h6>
                </div>
        
     
                <div className="h-[350px] pt-10 pb-2 px-4 border border-[#23A6F0] rounded flex flex-col gap-6 items-center justify-center">
                    <h3 className="text-[#252B42] text-[24] font-bold">PREMIUM</h3>
                    <h5 className="text-[#737373] w-[160px] text-center">Organize across all 
                    apps by hand</h5>
                    
                    <Image src={"/image/price.svg"} 
                    alt={"icon"} 
                    width={"114"} 
                    height={"56"}/>

                    <h6 className="flex gap-2"><Image src={"/image/check-c.svg"} 
                    alt={"icon"} 
                    width={"32"} 
                    height={"32"}/> Unlimited product updates</h6>
                </div>
            </div>
        </section>

        <section className="mt-[-50px] relative z-10 w-full max-w-[1439px] bg-[#FAFAFA] py-[50px] flex flex-col items-center justify-center gap-8 max-md:w-full max-md:max-w-3xl max-md:mt-0">
            <h4 className="text-[#252B42] text-[20px]">Trusted By Over 4000 Big Companies</h4>
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
            <div className="w-full max-w-[1050px] py-16 flex gap-8 flex-col items-center justify-center">
                <div className="w-full flex flex-col gap-4 items-center justify-center max-md:px-6 max-md:text-center">
                    <h1 className="text-[40px] text-[#252B42] font-bold">Pricing</h1>
                    <p className="text-[14px] text-[#737373] w-[414px] text-center">Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="pricing-box w-full max-w-[1050px]">
                    <div className="flex gap-2">
                        <div>
                            <Image className="mt-[5px]" src={"/icons/vector-arrow.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                        </div>
                        <div>
                            <h1 className="text-[16px] font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h1>
                            <p className="text-[#737373] text-[14px]">Met minim Mollie non desert Alamo est sit cliquey 
                                dolor do met sent. RELIT official consequent door ENIM 
                                RELIT Mollie. Excitation venial consequent sent 
                                nostrum met.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <Image className="mt-[5px]" src={"/icons/vector-arrow.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                        </div>
                        <div>
                            <h1 className="text-[16px] font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h1>
                            <p className="text-[#737373] text-[14px]">Met minim Mollie non desert Alamo est sit cliquey 
                                dolor do met sent. RELIT official consequent door ENIM 
                                RELIT Mollie. Excitation venial consequent sent 
                                nostrum met.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <Image className="mt-[5px]" src={"/icons/vector-arrow.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                        </div>
                        <div>
                            <h1 className="text-[16px] font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h1>
                            <p className="text-[#737373] text-[14px]">Met minim Mollie non desert Alamo est sit cliquey 
                                dolor do met sent. RELIT official consequent door ENIM 
                                RELIT Mollie. Excitation venial consequent sent 
                                nostrum met.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <Image className="mt-[5px]" src={"/icons/vector-arrow.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                        </div>
                        <div>
                            <h1 className="text-[16px] font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h1>
                            <p className="text-[#737373] text-[14px]">Met minim Mollie non desert Alamo est sit cliquey 
                                dolor do met sent. RELIT official consequent door ENIM 
                                RELIT Mollie. Excitation venial consequent sent 
                                nostrum met.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <Image className="mt-[5px]" src={"/icons/vector-arrow.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                        </div>
                        <div>
                            <h1 className="text-[16px] font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h1>
                            <p className="text-[#737373] text-[14px]">Met minim Mollie non desert Alamo est sit cliquey 
                                dolor do met sent. RELIT official consequent door ENIM 
                                RELIT Mollie. Excitation venial consequent sent 
                                nostrum met.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <Image className="mt-[5px]" src={"/icons/vector-arrow.svg"} 
                                alt={"icon"} 
                                width={"16"} 
                                height={"16"}/>
                        </div>
                        <div>
                            <h1 className="text-[16px] font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h1>
                            <p className="text-[#737373] text-[14px]">Met minim Mollie non desert Alamo est sit cliquey 
                                dolor do met sent. RELIT official consequent door ENIM 
                                RELIT Mollie. Excitation venial consequent sent 
                                nostrum met.
                            </p>
                        </div>
                    </div>
                </div>
                <h4>Haven’t got your answer? Contact our support</h4>    
            </div>
        </section>

        <section className="w-full max-w-[1439px] flex items-center justify-center">
            <div className="w-full max-w-[1050px] py-16 flex gap-8 flex-col items-center justify-center">
                <div className="w-full flex flex-col gap-6 items-center justify-center max-md:px-6 max-md:text-center">
                    <h1 className="text-[40px] text-[#252B42] font-bold">Start your 14 days free trial</h1>
                    <p className="text-[14px] text-[#737373] w-[414px] text-center">Met minim Mollie non desert Alamo est sit cliquey dolor 
                    do met sent. RELIT official consequent.</p>
                    <div className="w-[195px] flex items-center justify-center rounded text-[14px] bg-[#23A6F0] text-white font-bold flex items-center gap-[5px]">
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

export default Pricing;