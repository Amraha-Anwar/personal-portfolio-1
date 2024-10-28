import Image from "next/image"
import Header from "../components/layout/Header"
import Work from "../components/layout/Work"
import { CircleArrowDown } from "lucide-react"

function HomePage(){
    return(
        <>
        <Header/>
        <main className="max-w-screen-2xl mx-auto bg-pink-300 h-[30rem]">
            <div>
                <h1 className="text-center text-black text-5xl font-bold pt-40">Work</h1>
                <hr className="my-10 border-t-2 border-black w-1/2 mx-auto" />
                <p className="text-center text-black md:mx-32 xl:mx-96">{`Check out some selected projects I've worked on, which have helped me 
                shape and improve my design process.`}</p>
                <CircleArrowDown className="text-black mx-auto mt-12 md:mt-16" />
            </div>
        </main>

        <div className="max-w-screen-2xl mx-auto pt-20 flex-col bg-pink-100 h-[80rem] sm:h-[100rem] xl:h-[140rem]">
            {/* haven and hues (default setting) */}
            <div className="sm:hidden container mx-auto h-[127px] w-[270px] shadow-lg shadow-zinc-900">
                    <Image src="/images/haven&hues.png" alt="project 1" width={360} height={300}/>
                    <h2 className="font-bold text-black text-left mt-6 font-serif">Haven & Hues</h2>
                    <p className="text-sm mt-6">Haven & Hues is a thoughtfully designed e-commerce platform specializing in stylish and curated home decor items. In this project, I utilized <b>HTML, CSS,</b>and <b>TypeScript</b>, along with design frameworks like <b>Tailwind CSS and Nextjs.</b></p>
            </div>

             {/* hijab co. (default settings) */}
             <div className="sm:hidden container mx-auto h-[127px] w-[270px] shadow-lg shadow-zinc-900 mt-72">
                    <Image src="/images/hijab.png" alt="project 2" width={360} height={300}/>
                    <h2 className="font-bold text-black text-left mt-6 font-serif">Hijab Co.</h2>
                    <p className="text-sm mt-6">Hijab Co. is a meticulously crafted e-commerce website for modest fashion, built to deliver a seamless and elegant user experience. Developed with HTML, Tailwind CSS, and Next.js, this project showcases my commitment to <b>pixel-perfect design</b> and attention to detail. </p>
                    </div>

            {/* npm (default settings) */}
            <div className="sm:hidden container mx-auto h-[150px] w-[270px] shadow-lg shadow-zinc-900 mt-72">
                    <Image src="/images/npm.png" alt="project 2" width={360} height={300}/>
                    <h2 className="font-bold text-black text-left mt-6 font-serif">NPM</h2>
                    <p className="text-sm mt-6">These projects demonstrate my skills in <b>TypeScript</b> showcasing strong typing, modular code, and a focus on performance.</p>
                    </div>

            {/* haven and hues (sm,md, lg setting) */}
            <div className="hidden sm:block xl:hidden container mx-auto h-[250px] xl:h-[250px] w-[530px] shadow-lg shadow-zinc-900">
                    <Image src="/images/haven&hues.png" alt="project 1" width={530} height={350}/>
                    <h2 className="font-bold text-3xl text-black text-left mt-6 font-serif">Haven & Hues</h2>
                    <p className="text-sm mt-6">Haven & Hues is a thoughtfully designed e-commerce platform specializing in stylish and curated home decor items. In this project, I utilized <b>HTML, CSS </b>and <b>TypeScript</b>, along with design frameworks like <b>Tailwind CSS and Nextjs.</b></p>
            </div>

            {/* hijab co. (sm,md,lg  setting) */}
            <div className="hidden sm:block xl:hidden container mx-auto h-[250px]  lg:mt-64 xl:h-[250px] w-[530px] shadow-lg shadow-zinc-900 mt-60">
                    <Image src="/images/hijab.png" alt="project 2" width={530} height={350}/>
                    <h2 className="font-bold text-3xl text-black text-left mt-6 font-serif">Hijab Co.</h2>
                    <p className="text-sm mt-6">Hijab Co. is a meticulously crafted e-commerce website for modest fashion, built to deliver a seamless and elegant user experience. Developed with HTML, Tailwind CSS, and Next.js, this project showcases my commitment to <b>pixel-perfect design</b> and attention to detail. </p>
                    </div>

            {/* npm (sm,md, lg setting) */}
            <div className="hidden sm:block xl:hidden container mx-auto h-[295px] lg:mt-[16rem] xl:mt-[250px] w-[530px] shadow-lg shadow-zinc-900 mt-60">
                    <Image src="/images/npm.png" alt="project 2" width={530} height={350}/>
                    <h2 className="font-bold text-3xl text-black text-left mt-6 font-serif">NPM</h2>
                    <p className="text-sm mt-6">These projects demonstrate my skills in <b>TypeScript</b> showcasing strong typing, modular code, and a focus on performance.</p>
                    </div>

            {/* haven & hues (xl setting) */}
            <div className="hidden xl:block container mx-auto h-[30rem] w-[70rem] shadow-lg shadow-zinc-900">
                    <Image className="w-[70rem] h-[30rem]" src="/images/haven&hues.png" alt="project 1" width={550} height={400}/>
                    <h2 className="font-bold text-5xl text-black text-left mt-6 font-serif">Haven & Hues</h2>
                    <p className="text-lg mt-6">Haven & Hues is a thoughtfully designed e-commerce platform specializing in stylish and curated home decor items. In this project, I utilized <b>HTML, CSS </b>and <b>TypeScript</b>, along with design frameworks like <b>Tailwind CSS and Nextjs.</b></p>
            </div>

            {/* hijab co. (xl setting) */}
            <div className="hidden xl:block container mx-auto h-[30rem] w-[70rem] shadow-lg shadow-zinc-900 mt-60">
                    <Image className="w-[70rem] h-[30rem]" src="/images/figma.png" alt="project 1" width={550} height={400}/>
                    <h2 className="font-bold text-5xl text-black text-left mt-6 font-serif">Hijab Co.</h2>
                    <p className="text-lg mt-6">Hijab Co. is a meticulously crafted e-commerce website for modest fashion, built to deliver a seamless and elegant user experience. Developed with HTML, Tailwind CSS, and Next.js, this project showcases my commitment to <b>pixel-perfect design</b> and attention to detail. </p>
            </div>
             {/* npm. (xl setting) */}
             <div className="hidden xl:block container mx-auto h-[30rem] w-[70rem] shadow-lg shadow-zinc-900 mt-60">
             <Image className="w-[70rem] h-[30rem]" src="/images/npm.png" alt="project 1" width={550} height={400}/>
             <h2 className="font-bold text-5xl text-black text-left mt-6 font-serif">NPM</h2>
                    <p className="text-lg mt-6">These projects demonstrate my skills in <b>TypeScript</b> showcasing strong typing, modular code, and a focus on performance.These projects demonstrate my skills in TypeScript, showcasing strong typing, modular code, and a focus on performance. </p>
            </div>

        </div>
        <Work/>
        </>
    )
}
export default HomePage