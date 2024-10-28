import Link from "next/link"
import Image from "next/image"

function Footer(){
    return(
        <>
       <footer className="bg-pink-300 h-[40rem] md:h-[25rem] mx-auto">
        <div className="pt-10">
            <h2 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-zinc-800 text-center">NEED A DEVELOPER</h2>
        </div>
        <div className="pt-8 md:flex md:flex-row md:space-x-14 lg:gap-x-20 xl:gap-x-32 mx-12 xl:mx-24">
        <div>
            <hr className="md:hidden border-t-2 border-zinc-700 w-10/12 mx-auto"/>
            <h1 className="font-bold text-xl text-center md:text-left py-4 md:pt-16">Contact</h1>
            <p className="text-center md:text-left">Feel free to get in touch with me.<br/>
            <span>Gmail:amrahaanwar@gmail.com</span></p>
            </div>
            
            <div className="pt-8">
            <hr className="md:hidden border-t-2 border-zinc-700 w-10/12 mx-auto"/>
            <h1 className="font-bold text-xl text-center md:text-left py-4 md:pt-9">Availability</h1>
            <p className="text-center md:text-left">{`I typically focus on one project at a time due to my ongoing learning journey, but I'm open to discussing new opportunities.`}</p>
            </div>

            <div className="pt-8">
            <hr className="md:hidden border-t-2 border-zinc-700 w-10/12 mx-auto"/>
            <h1 className="font-bold text-xl text-center md:text-left py-4 md:pt-8">Follow Me</h1>
                <ol className="flex-col text-center md:text-left">
                    <li><Link href="https://www.linkedin.com/in/amraha-anwar-45bb342b3/" target="main"><u>LinkedIn</u></Link></li>
                    <li><Link href="https://www.instagram.com/amrahaanwar/?hl=en" target="main"><u>Instagram</u></Link></li>
                    <li> <Link href="https://github.com/Amraha-Anwar" target="main"><u>Github</u></Link></li>
            </ol>
            </div>
            </div>
       </footer>

        </>
    )
}
export default Footer


{/* <footer className="bg-pink-800 h-[20rem]"> 
        <div className="text-center text-pink-400 text-lg pt-20">
            &copy; 2024 Amraha Anwar. All rights reserved.
        </div>
        <div className="mx-12 sm:mx-48 md:mx-80 pt-16 sm:pt-24 flex gap-x-2"> 
             */}
            {/* <Link href="https://www.linkedin.com/in/amraha-anwar-45bb342b3/" target="main">
            <Image src="/images/linkedin.png" alt="Linkedin logo" width={50} height={50}/></Link>

            <Link href="https://www.instagram.com/amrahaanwar/?hl=en" target="main">
            <Image src="/images/insta.png" alt="Instagram logo" width={70} height={70}/></Link>

            <Link href="https://github.com/Amraha-Anwar" target="main">
            <Image src="/images/github.png" alt="Github logo" width={50} height={50}/></Link> */}

            
        {/* </div>

        </footer> */}