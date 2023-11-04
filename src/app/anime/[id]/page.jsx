import { getAnimeResponse } from "@/app/libs/api-libs"
import VideoPlayer from "@/components/utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({params:{id}}) => {

    const anime = await getAnimeResponse(`anime/${id}`)

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-color-primary text-2xl font-semibold">{anime.data.title} - {anime.data.year}</h3>
            </div>
            <div className="text-color-primary pt-4 px-4 flex gap-4">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Peringkat</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Skor</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Anggota</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Episode</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>
            <div className="p-4 flex md:flex-nowrap flex-wrap text-justify text-color-primary gap-4">
                <Image src={anime.data.images.webp.image_url} width={250} height={250} alt={anime.data.images.jpg.image_url} className="w-full rounded object-cover"/>
                <div className="flex flex-col">
                    <h3 className="text-xl pb-2">Synopsis</h3>
                    <p>{anime.data.synopsis}</p>
                </div>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default Page