"use client"

import AnimeList from "@/components/AnimeList"
import HeaderBanner from "@/components/utilities/HeaderBanner"
import PaginationPage from "@/components/utilities/PaginationPage"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "../../libs/api-libs"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {
        
        const data = await getAnimeResponse("top/anime", `page=${page}`)

        setTopAnime(data)
    }

    useEffect(() => {
        fetchData()
    },[page])

    return (
        <>
            <HeaderBanner title={`Top Anime #${page}`}/>
            <AnimeList api={topAnime}/>
            <PaginationPage page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}

export default Page