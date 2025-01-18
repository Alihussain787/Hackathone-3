import Header from "../components/header3/page";
import Footer from "../components/footer2/page";
import Image from "next/image";
import Link from "next/link";
const Contact = () => {
    return(
        <div>
        <Header />
        <section className="container2 w-full max-w-[1439px] py-20 flex items-center justify-center  max-md:mt-[505px]">
        <div className="w-[1044px]">
            <div className="text-black flex flex-col gap-[35px] justify-center">
                <div className=" flex flex-col gap-[35px] max-md:items-center">
                    <p className="text-[16px] font-bold text-[#252B42]">CONTACT US</p>
                    <h1 className="text-[58px] text-[#252B42] font-bold max-md:text-[40px]">Get in touch today!</h1> 
                    <p className="text-[20px] text-[#737373] max-md:w-[350px] max-md:text-center">We know how large objects will act, but things on a small scale</p>  
                    <p className="text-[24px] font-bold text-[#252B42]">Phone : +451 215 215 </p>
                    <p className="text-[24px] font-bold text-[#252B42]">Fax : +451 215 215</p>
                </div>
                <div className="flex gap-[34px] max-md:justify-center">
                    <Image src={"icons/tw-icon.svg"} 
                        alt={"image"} 
                        width={"30"} 
                        height={"24"}/>
                    <Image src={"icons/fb-icon.svg"} 
                        alt={"image"} 
                        width={"30"} 
                        height={"24"}/>
                    <Image src={"icons/insta-icon.svg"} 
                        alt={"image"} 
                        width={"30"} 
                        height={"24"}/>
                    <Image src={"icons/li-icon.svg"} 
                        alt={"image"} 
                        width={"30"} 
                        height={"24"}/>
                </div>
            </div>
        </div>
        </section>

        <section className="w-full max-w-[1439px] flex items-center justify-center">
        <div className="w-full max-w-[1050px] py-16 flex gap-8 flex-col items-center justify-center">
            <div className="w-full flex flex-col gap-6 items-center justify-center">
                    <h4 className="text-[14px] text-[#252B42] font-bold">VISIT OUR OFFICE</h4>
                    <h1 className="text-[40px] pb-[70px] text-[#252B42] font-bold w-[531px] text-center">We help small businesses with big ideas</h1>
                <div className="w-full max-w-[985px] flex items-center justify-center max-md:flex-col">
                <div className="h-[403px] p-[80px] px-[40px] flex flex-col gap-6 items-center justify-center">
                    <Image src={"/icons/phone-icon.svg"} 
                    alt={"icon"} 
                    width={"72"} 
                    height={"72"}/>
                    <h3 className="text-[#252B42] text-[14px] font-bold">georgia.young@example.com</h3>
                    <h3 className="text-[#252B42] text-[14px] font-bold">georgia.young@ple.com</h3>
                    <h3 className="text-[#252B42] text-[16px] font-bold">Get Support</h3>

                    <button className="text-[14px] py-[15px] font-bold px-[36px] rounded-[37px] text-[#23A6F0] border border-[#23A6F0]">Submit Request</button>
                </div>
            
                <div className="h-[403px] bg-[#252B42] p-[80px] px-[40px] flex flex-col gap-6 items-center justify-center">
                    <Image src={"/icons/location-icon.svg"} 
                    alt={"icon"} 
                    width={"72"} 
                    height={"72"}/>
                    <h3 className="text-white text-[14px] font-bold">georgia.young@example.com</h3>
                    <h3 className="text-white text-[14px] font-bold">georgia.young@ple.com</h3>
                    <h3 className="text-white text-[16px] font-bold">Get Support</h3>

                    <button className="text-[14px] font-bold py-[15px] px-[36px] rounded-[37px] text-[#23A6F0] border border-[#23A6F0]">Submit Request</button>
                </div>
                <div className="h-[403px] p-[80px] px-[40px] flex flex-col gap-6 items-center justify-center">
                    <Image src={"/icons/main-icon.svg"} 
                    alt={"icon"} 
                    width={"72"} 
                    height={"72"}/>
                    <h3 className="text-[#252B42] text-[14px] font-bold">georgia.young@example.com</h3>
                    <h3 className="text-[#252B42] text-[14px] font-bold">georgia.young@ple.com</h3>
                    <h3 className="text-[#252B42] text-[16px] font-bold">Get Support</h3>

                    <button className="text-[14px] font-bold py-[15px] px-[36px] rounded-[37px] text-[#23A6F0] border border-[#23A6F0]">Submit Request</button>
                </div>
                
            </div>
            </div>

        </div>
        </section>
       
        <section className="w-full max-w-[1439px] flex items-center justify-center">
            <div className="w-full max-w-[1050px] py-16 flex gap-8 flex-col items-center justify-center">
                <div className="w-full flex flex-col gap-6 items-center justify-center max-md:px-6 max-md:text-center">
                    <Image src={"/icons/Arrow.svg"} 
                        alt={"icon"} 
                        width={"72"} 
                        height={"21"}/>  
                    <h4 className="text-[16px] text-[#252B42] font-bold">WE Can't WAIT TO MEET YOU</h4>
                    <h1 className="text-[40px] text-[#252B42] font-bold">Let’s Talk</h1>
                    <div className="w-[195px] flex items-center justify-center rounded text-[14px] bg-[#23A6F0] text-white font-bold flex items-center gap-[5px]">
                        <Link href={"#"} className="flex gap-2 py-4 px-4 text-center">Try it free now</Link>
                    </div>
                </div>

            </div>
        </section>

            <Footer />
        </div>
    )
}
export default Contact;
