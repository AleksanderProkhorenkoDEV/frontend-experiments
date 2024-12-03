import { config } from "@/auth"
import { getServerSession } from "next-auth"


const Sesion = async () => {
    const session = await getServerSession(config)
    return (
        <div>
            <h1>This is a public page</h1>

            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    )
}

export default Sesion

