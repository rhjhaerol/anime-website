import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"

const Page = async() => {
    const user = await authUserSession()

    return (
        <div className="text-color-primary">
            <h1>Dashboard</h1>
            <h3>Welcome, {user?.name} </h3>
            <Image src={user?.image} width={250} height={250}/>
        </div>
    )
}

export default Page