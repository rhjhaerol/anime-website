import Link from "next/link"
import InputSearch from "./InputSearch"
import ActionButton from "./ActionButton"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex flex-col md:flex-row justify-between md:items-center p-4">
                <Link href="/" className=" font-bold text-white text-2xl">Neko Anime🐈‍⬛</Link>
                <InputSearch/>
                <ActionButton/>
            </div>
        </header>
    )
}

export default Navbar