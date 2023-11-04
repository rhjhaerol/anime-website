import Link from "next/link"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse } from "@/app/libs/api-libs"

const Page = async ({params}) => {
    const keyword = params.keyword
    const decodedKeyword = decodeURI(keyword)

    const searchAnime = await getAnimeResponse("anime/", `q=${decodedKeyword}`)

    return (
        <>
        <section>
        <Header title={`Pencarian untuk "${decodedKeyword}"...`}/>
        <AnimeList api={searchAnime}/>
        </section>
        </>
    )
}

export default Page