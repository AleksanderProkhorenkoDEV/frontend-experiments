import { getAuthor } from "../../../../../../lib/Request/MaintRequest";
import Author from "@/components/Cards/Author";
import Loading from "./loading";


const { Suspense } = require("react")

const Single = async ({ params }) => {

    let data = await getAuthor('authors/get/author',params.id);

    return (
        <Suspense fallback={<Loading />}>
            <Author
                authorInfo={data}
            />
        </Suspense>
    )
}

export default Single;