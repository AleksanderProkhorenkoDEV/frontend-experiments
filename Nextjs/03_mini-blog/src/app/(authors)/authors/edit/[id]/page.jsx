
import { editUser } from "../../../../../../lib/ServerAction/actions"
import { getAuthor } from "../../../../../../lib/Request/MaintRequest"

const Edit = async ({ params }) => {

    let author = await getAuthor('authors/get/author', params.id)

    return (
        <form action={editUser}>
            <input type="hidden" value={author?.id} name="id" />
            <label>Name: </label>
            <input type="text" defaultValue={author?.name} name="author" />
            <label>Surnames: </label>
            <input type="text" defaultValue={author?.surnames} name="surnames" />
            <button type="submit">Edit</button>
        </form>
    )
}

export default Edit