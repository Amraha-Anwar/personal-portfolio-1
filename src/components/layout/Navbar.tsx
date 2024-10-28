import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function Navbar(){
    return(
        <>
       <nav 
       className="max-w-screen-2xl mx-auto flex justify-between py-3 px-4 bg-pink-200 text-black h-24">
        <div>
            <h1 className="font-extrabold text-7xl pl-6 font-serif text-pink-900">A<sub className="text-2xl">A_.</sub></h1>
        </div>
        <ul className="hidden md:block">
            <li className="space-x-10 mr-10 mt-5 font-bold">
                <Link href="/" className="text-pink-900 border border-pink-800 rounded-md text-xl p-2 hover:text-pink-200 hover:bg-pink-900">Home</Link>
                <Link href="/about" className="text-pink-900 border border-pink-800 rounded-md text-xl p-2 hover:text-pink-200 hover:bg-pink-900">About</Link>
                <Link href="/contact" className="text-pink-900 border border-pink-800 rounded-md text-xl p-2 hover:text-pink-200 hover:bg-pink-900">Contact</Link>
            </li>
        </ul>
        
        <Sheet>
            <SheetTrigger className="md:hidden">
                <Menu className="text-black"/>
            </SheetTrigger>
                <SheetContent className="text-black bg-pink-200">
                <ul>
            <li className="font-bold flex flex-col text-center pt-20">
                <Link href="/" className="border text-pink-200 bg-pink-900 border-black rounded-lg p-2 mb-10 w-16">Home</Link>
                <Link href="/about" className="border text-pink-200 bg-pink-900 border-black rounded-lg p-2 mb-10 w-20">About</Link>
                <Link href="/contact" className="border text-pink-200 bg-pink-900 border-black rounded-lg p-2 w-24">Contact</Link>
            </li>
        </ul>
                </SheetContent>
        </Sheet>
       </nav>
        </>
    )
}