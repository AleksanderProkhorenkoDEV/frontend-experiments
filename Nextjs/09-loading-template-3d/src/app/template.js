import { Suspense } from "react"
import Loading from "./Loading"

export default function Template({ children }) {
    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
}