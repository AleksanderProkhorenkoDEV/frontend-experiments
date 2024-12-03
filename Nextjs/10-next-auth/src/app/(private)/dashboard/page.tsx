import { getServerSession } from "next-auth/next"
import { config } from "../../../auth"

const Dashboard = async () => {
    const session = await getServerSession(config)
    console.log('DASHBOARD sesion', session)
    return (
        <div>
            <h1>This is a private page</h1>

            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    )
}

export default Dashboard
