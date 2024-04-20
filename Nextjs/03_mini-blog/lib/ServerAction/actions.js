"use server"

import { editAuthor, register } from "../Request/MaintRequest"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const editUser = async (formData) => {

    const requestBody = {
        name:       formData.get('author'),
        surnames:   formData.get('surnames')
    };
    const data = await editAuthor('authors/edit', requestBody, formData.get('id'));
    if (data == 200) {
        revalidatePath(`/authors/single/${formData.get('id')}`)
        revalidatePath(`/authors/edit/${formData.get('id')}`)
        revalidatePath('/authors')
        redirect(`../single/${formData.get('id')}`)
    }

}


export const registerUser = async (formData) => {
    const requestBody = {
        display_name:           formData.get("display_name"),
        name:                   formData.get("name"),
        email:                  formData.get("email"),
        password:               formData.get("password"),
        password_confirmation:  formData.get("password_confirmation")
    }
    const response = await register('auth/register', requestBody)
    const result = await response.json()
    const user = result.usuario
    console.log('result',result);
    console.log('user', user);
}