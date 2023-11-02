import Link from "next/link"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const animeTop = await response.json()

  return (
    <>
    <section>
      <Header title="Top Anime" hreflink="/populer" linktitle="Lihat Semua"/>
      <AnimeList api={animeTop}/>
    </section>
    </>
  )
}

export default Page