"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
    const [comment, setComment] = useState("");
    const [isCreated, setIsCreated] = useState(false);

    const router = useRouter()

    const handleInput = (ev) => {
        setComment(ev.target.value);
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setIsCreated(false);

        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify({
                anime_mal_id,
                user_email,
                comment,
                username,
                anime_title,
            }),
        });
        const Postcomment = await response.json();
        if (Postcomment.isCreated) {
            setIsCreated(true);
            setComment("")
            router.refresh()
        }
        return;
    };

    return (
        <div className="flex flex-col gap-4">
            {isCreated && (
                <p className="text-color-primary">postingan terkirim...</p>
            )}
            <textarea
                value={comment}
                onChange={handleInput}
                className="w-full h-36 px-4 py-2"
            />
            <button onClick={handleSubmit} className="w-32 bg-color-accent py-1">
                Komen
            </button>
        </div>
    );
};

export default CommentInput;
