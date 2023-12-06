import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";

const page = async () => {
    const user = await authUserSession();
    const comments = await prisma.comment.findMany({
        where: { user_email: user?.email },
    });
    return (
        <section className="px-4 mt-4">
        <Header title={"My Comment"} />
        <div className="p-4 gap-4 flex flex-col items-center justify-center">
            {comments.map((comment) => {
                return (
                    <div key={comment.id} className="bg-color-primary px-4 py-2 w-1/2">
                        <Link
                            href={`/anime/${comment.anime_mal_id}`}
                        >
                            <p className="font-semibold">{comment.anime_title}</p>
                            <p>{comment.comment}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
            </section>
    );
};

export default page;
