"use client"
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 flex-col">
                <FileSearch size={32} className="text-color-accent"/> 
                <h3 className="text-2xl text-color-accent font-bold">NOT FOUND</h3>
                <Link href="/" className="underline text-color-primary hover:text-color-accent transition-all">Kembali</Link>
            </div>
        </div>
    )
}

export default Page