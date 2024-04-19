import Table from "@/components/Board"
import { Suspense } from "react"
import Loading from "./loading"

const Authors = () => {
    return (
        <section>
            <h1>In this page you can see all the Authors</h1>
            <Suspense fallback={<Loading />}>
                <Table />
            </Suspense>
        </section>
    )
}

export default Authors