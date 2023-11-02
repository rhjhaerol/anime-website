import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-indigo-500">
            <div className="flex flex-col md:flex-row justify-between p-4">
                <Link href="/" className=" font-bold text-white text-2xl">Neko Anime</Link>
                <input placeholder="Cari Anime..."/>
            </div>
        </header>
    )
}

export default Navbar