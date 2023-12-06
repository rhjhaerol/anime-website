"use client";

import { useState } from "react";

const CollectionButton = ({
    anime_mal_id,
    user_email,
    anime_image,
    anime_title,
}) => {
    const [isCreated, setIsCreated] = useState(false);

    const handlerButton = async (ev) => {
        ev.preventDefault();
        setIsCreated(false);
        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify({
                anime_mal_id,
                user_email,
                anime_image,
                anime_title,
            }),
        });
        const collection = await response.json();
        if (collection.isCreated) {
            setIsCreated(true);
        }
        return;
    };

    return (
        <>
            {isCreated ? (
                <p className="text-color-primary">Berhasil ditambahkan</p>
            ) : (
                <button
                    onClick={handlerButton}
                    className="bg-color-accent px-2 py-1 my-2 rounded-md"
                >
                    Add to Collection
                </button>
            )}
        </>
    );
};

export default CollectionButton;
