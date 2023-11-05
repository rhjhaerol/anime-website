"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const HandleSearch = (event) => {
        const keyword = searchRef.current.value
        if (!keyword || keyword.trim() == "") return

        if (event.key === "Enter" || event.type === "click") {
             event.preventDefault()

            router.push(`/search/${keyword}`)
        }  
    }
    return (
        <div className="relative">
            <input 
                placeholder="Cari Anime..." 
                className="p-2 rounded w-full" 
                ref={searchRef}
                onKeyDown={HandleSearch}
            />
            <button className="absolute top-1 end-2" onClick={HandleSearch}>
                <MagnifyingGlass size={32} />
            </button>  
        </div>
    )
}

export default InputSearch
