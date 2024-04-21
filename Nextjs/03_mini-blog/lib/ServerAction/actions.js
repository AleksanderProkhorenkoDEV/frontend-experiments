"use server"

import { editAuthor, register, login } from "../Request/MaintRequest"
import { setCookie, getCookie } from 'cookies-next';
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { cookies } from 'next/headers';

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


export const registerUser = async (formData) => {
    const requestBody = {
        display_name: formData.get("display_name"),
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation")
    }
    const response = await register('auth/register', requestBody)
    const result = await response.json()
    const user = result.usuario
    console.log('result', result);
    console.log('user', user);
}



export const loginUser = async (formData) => {
    const requestBody = {
        email: formData.get("email"),
        password: formData.get("password")
    }
    const response = await login('auth/login', requestBody)
    const result = await response.json()
    console.log('result token', result.token);
    setCookie('token_user', `${result.token}`, { cookies })
    const cookie = getCookie('token_user', { cookies });
}