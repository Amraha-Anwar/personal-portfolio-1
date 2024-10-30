import Link from "next/link"
import Image from "next/image"
import Work from "@/components/layout/Work"

function Contact(){
    return(
        <>
        <div className="max-w-screen-2xl mx-auto lg:bg-pink-50 lg:py-9">
        <div className=" bg-white lg:border lg:border-teal-700 p-6 lg:container lg:w-[40rem] lg:h-[40rem] lg:rounded-md lg:shadow-lg lg:shadow-pink-300">
            <h2 className="text-xl text-teal-800 sm:text-2xl md:text-3xl lg:text-5xl lg:ml-10 font-bold mb-6 lg:mb-16 text-center font-serif pt-20 lg:pt-8">Contact Me</h2>
            <form action="#">
                <div className="mb-4 lg:mb-8 sm:mx-20 md:mx-32 lg:mx-16">
                    <label className="block text-black text-sm lg:text-lg font-bold mb-2">Name</label>
                    <input type="text" name="name" required 
                        className="shadow appearance-none border rounded w-full py-4 px-3 text-black leading-tight focus:outline-none focus:ring focus:ring-teal-700" placeholder="Your Name"/>
                </div>
                <div className="mb-4 lg:mb-8 sm:mx-20 md:mx-32 lg:mx-16">
                    <label className="block text-black text-sm lg:text-lg font-bold mb-2">Email</label>
                    <input type="email" name="email" required
                    className="shadow appearance-none boder rounded w-full py-4 px-3 text-black leading-tight focus:outline-none focus:ring focus:ring-teal-700" placeholder="Your Email"/>
                </div>
                <div className="mb-4 lg:mb-2 sm:mx-20 md:mx-32 lg:mx-16">
                    <label className="block text-black text-sm lg:text-lg font-bold mb-2">Message</label>
                    <textarea name="message" flex-rows="4" required
                    className="shadow appearance-none border rounded w-full py-6 px-3 text-black leading-tight focus:outline-none focus:ring focus:ring-teal-700" placeholder="Send me a Message"></textarea>
                </div>
                <div className="flex items-center justify-between sm:ml-20 md:ml-32 lg:ml-16">
                    <button type="submit"
                    className="bg-black text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
        </div>

        <Work/>
        <div className="max-w-screen-2xl mx-auto bg-pink-50 -mt-10 pb-40">
            <h1 className="text-xl md:text-2xl font-semibold ml-5 md:ml-10 xl:ml-20 xl:mt-10 mb-12">Or Connect with me on</h1>
            <div className="flex mx-12 sm:mx-28 sm:gap-x-7 md:gap-x-10 lg:mx-60 lg:gap-x-12 xl:mx-80 xl:gap-x-20">
                    <Link href="https://www.linkedin.com/in/amraha-anwar-45bb342b3/" target="main">
                        <Image 
                        className="mb-3 mt-7 w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 xl:w-52 xl:h-52" 
                        src="/images/linkedin.png" 
                        alt="LinkedIn logo" 
                        width={200} 
                        height={200}/>
                    </Link>

                    <Link href="https://www.instagram.com/amrahaanwar/?hl=en" target="main">
                        <Image 
                        className=" w-20 h-14 mt-7 xl:mt-9 sm:w-32 sm:h-24 md:w-40 md:h-28 md:mt-9 xl:w-64 xl:h-48" 
                        src="/images/insta.png" 
                        alt="Instagram logo" 
                        width={200} 
                        height={200}/>
                    </Link>

                    <Link href="https://github.com/Amraha-Anwar" target="main">
                        <Image 
                        className="w-16 h-16 mt-6 sm:w-24 sm:h-24 md:w-32 md:h-32 xl:w-60 xl:h-52" 
                        src="/images/github.png" 
                        alt="Github logo" 
                        width={200} 
                        height={200}/>
                    </Link>
            </div>
        </div>
        </>
    )
}
export default Contact