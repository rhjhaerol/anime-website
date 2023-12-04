import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({
        where: { user_email: user?.email },
    });
    console.log(collection);

    return (
        <section className="px-4 mt-4">
            <Header title={"My Collection"} />
            <div className="px-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
                {collection.map((collect, index) => {
                    return (
                        <Link
                        key={index}
                            href={`/anime/${collect.anime_mal_id}`}
                            className="relative border-2 border-color-accent"
                        >
                            <Image
                                src={""}
                                alt="..."
                                width={350}
                                height={350}
                                className="w-full"
                            />
                            <div className="absolute flex items-center justify-center bottom-0 bg-color-accent w-full h-16">
                                <h2 className="text-lg font-semibold">
                                    {collect.anime_mal_id}
                                </h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Page;
