"use server"

import { signIn } from "next-auth/react"

export const auth_login = async (formData: any) => {
    const rawFormData = {
        email: formData.get('email'),
        password: formData.get('password'),
    }
    console.log('DATOS FORM', rawFormData)

    const res = await signIn("credentials", {
        ...rawFormData,
        redirect: false
    })

    console.log(await res)
}