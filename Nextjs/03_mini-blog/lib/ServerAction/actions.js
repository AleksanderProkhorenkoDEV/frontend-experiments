"use server"

import { editAuthor } from "../Request/MaintRequest"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const editUser = async (formData) => {

    const requestBody = {
        name: formData.get('author'),
        surnames: formData.get('surnames')
    };
    const data = await editAuthor('authors/edit', requestBody, formData.get('id'));
    if (data == 200) {
        revalidatePath(`/authors/single/${formData.get('id')}`)
        revalidatePath(`/authors/edit/${formData.get('id')}`)
        revalidatePath('/authors')
        redirect(`../single/${formData.get('id')}`)
    }

}