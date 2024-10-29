import Work from "@/components/layout/Work"
import Image from "next/image"

function About(){
    return(
        <>
        <main className="max-w-screen-2xl mx-auto bg-pink-300 h-[35rem] md:h-[40rem] lg:h-[45rem]">
            <div className="sm:hidden pt-16 mx-3 ">
            <div className="container rounded-full w-[17rem] h-[28rem] border border-black shadow-lg shadow-pink-50 bg-pink-200 ">
                <h1 className=" text-center text-2xl font-bold pt-12 font-serif"><u className="underline-offset-8">ABOUT ME</u></h1> 
                <h1 className="pt-10 mx-3 my-3 text-sm text-center">{`I'm Amraha Anwar. A front-end developer with a passion for crafting interactive and visually appealing web experiences.I've dedicated myself to honing my skills in web development and Artificial Intelligence. With a focus on front-end technologies, I've built a range of projects that showcase both technical expertise and creative flair.`}</h1>
            </div>
                </div>

            {/* lg setting */}
            <div className="hidden sm:block pt-16 mx-44 md:mx-64 lg:mx-[20rem]">
            <div className="container rounded-full lg:rounded-lg w-[18rem] h-[28rem] md:w-[22rem] md:h-[32rem] lg:w-[25rem] lg:h-[35rem]  xl:w-[40rem] border border-black shadow-lg shadow-pink-50 bg-pink-200 ">
                <h1 className=" text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pt-12 lg:pt-14 font-serif"><u className="underline-offset-8">ABOUT ME</u></h1> 
                <h1 className="pt-10 md:pt-12 lg:pt-20 xl:pt-28 mx-3 xl:mx-11 my-3 text-sm md:text-lg lg:text-xl xl:text-2xl text-center">{`I'm Amraha Anwar. A front-end developer with a passion for crafting interactive and visually appealing web experiences.I've dedicated myself to honing my skills in web development and Artificial Intelligence. With a focus on front-end technologies, I've built a range of projects that showcase both technical expertise and creative flair.`}</h1>
            </div>
                </div>


        </main>
        <Work/>
        </>
    )
}
export default About