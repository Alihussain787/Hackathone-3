import Header from "../components/header2/page";
import Footer from "../components/footer2/page";
import Image from "next/image";
import Link from "next/link";
const Shop = () => {
    return(
        <div>
            <Header />
            <div className="w-full max-w-[1439px] bg-[#FAFAFA] flex items-center justify-center py-10 max-md:w-full max-md:max-w-3xl max-md:mt-[870px]">
                <div className="w-[1050px] flex items-center justify-center gap-2 max-md:justify-center">
                    <Link href="/" className="p-[10px] cursor-pointer">Home</Link>
                        <span>
                            <Image src={"/icons/arrow-right-2.svg"} 
                                alt={"icon"} 
                                width={"9"} 
                                height={"16"}/>
                        </span>
                    <Link href="/pages/" className="p-[10px] cursor-pointer text-[#BDBDBD]">Page</Link>
                </div>
            </div>
        <section className="w-full max-w-[1439px] bg-[#FAFAFA] py-2 flex flex-col items-center justify-center max-md:w-full max-md:max-w-3xl">
            <div className="w-full max-w-[1050px] flex flex-col items-center justify-center gap-10 pb-[40px] max-md:flex-col">
                <h1 className="text-[#23A6F0] text-[100px] font-bold">404</h1>   
                <p>sorry but the page that you requested doesn't exist</p> 
            </div>
        </section>
        <Footer />
        </div>
    )
}
export default Shop;
