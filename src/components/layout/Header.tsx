import Image from "next/image"

function Header(){
    return(
        <>
        <header className="max-w-screen-2xl mx-auto bg-pink-50">
            <div className="max-w-screen-2xl mx-auto h-[40rem] flex flex-col md:flex md:flex-row">
                <div className="mt-0 pt-10 md:pt-20 ml-5 sm:ml-10 lg:mr-44">
                <h3 className="text-teal-950 font-serif font-bold text-lg">Hello!</h3>
                <h1 className="text-teal-700 font-serif font-extrabold text-3xl md:text-5xl lg:text-7xl">{`I'm Amraha Anwar`}</h1>
                    <p className="text-black text-lg font-bold font-serif md:text-2xl mb-6">A Front-End Developer.</p>
                    <p className="text-black text-sm md:text-lg lg:mt-11"> {`I'm here to make the digital world a little more beautiful and functional.`} </p>
                    <p className="text-black text-sm md:text-lg mt-4">{`Let's turn your ideas into digital reality!`}</p>
                </div>
                <div className="lg:hidden sm:ml-72 mt-5 md:ml-[-10px]  md:mt-14 mx-9 ">
                        <Image className="w-[250px] h-[280px] rounded-full" src="/images/profile.png" alt="profile picture" width={400} height={400}/>
                    </div>

                <div className="hidden lg:block mt-20 mr-5 xl:mt-10 xl:mr-10">
                        <Image className="rounded-full" src="/images/profile.png" alt="profile picture" width={600} height={520}/>
                </div>

            </div>
        </header>
        </>
    )
}
export default Header
