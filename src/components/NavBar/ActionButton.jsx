import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link"

const ActionButton = async() => {
    const user = await authUserSession()
    
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="pt-2">
            {
                user ? <Link href="/users/dashboard" className="py-1 mr-4">Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-color-dark text-color-accent py-1 px-12 inline-block rounded">{actionLabel}</Link>
        </div>
    )
}

export default ActionButton