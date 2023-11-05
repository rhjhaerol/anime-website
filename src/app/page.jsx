import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeNested, getAnimeResponse } from "../libs/api-libs"

const Page = async () => {
  
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getAnimeNested("recommendations/anime", "entry")
  recommendedAnime = {data: recommendedAnime.slice(0,8)}
  console.log(recommendedAnime)

  return (
    <>
      <section>
        <Header title="Top Anime" hreflink="/populer" linktitle="Lihat Semua"/>
        <AnimeList api={topAnime}/>
      </section>
      <section className="pt-4">
        <Header title="Rekomendasi"/>
        <AnimeList api={recommendedAnime}/>
      </section>
    </>
  )
}

export default Page