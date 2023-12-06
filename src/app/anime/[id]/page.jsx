import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`);
    const user = await authUserSession();
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id },
    });

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-color-primary text-2xl font-semibold">
                    {anime.data.title} - {anime.data.year}
                </h3>
                {!collection && user && (
                    <CollectionButton
                        anime_mal_id={id}
                        user_email={user?.email}
                        anime_image={anime.data.images.webp.image_url}
                        anime_title={anime.data.title}
                    />
                )}
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
            <div className="p-4 flex md:flex-nowrap flex-wrap text-justify  text-color-primary gap-4">
                <Image
                    src={anime.data.images.webp.image_url}
                    width={250}
                    height={250}
                    alt={anime.data.images.jpg.image_url}
                    className="w-full rounded object-cover"
                />
                <div className="flex flex-col">
                    <h3 className="text-xl pb-2">Synopsis</h3>
                    <p>{anime.data.synopsis}</p>
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-xl text-color-primary">Komentar</h2>
                <CommentBox anime_mal_id={id} />
                {user && (
                    <CommentInput
                        anime_mal_id={id}
                        user_email={user?.email}
                        username={user?.name}
                        anime_title={anime.data.title}
                    />
                )}
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </>
    );
};

export default Page;
