"use server"

export const login = async (params: any) => {

    const res = await signIn("credentials", {
        redirect: false,  // Evitar la redirección automática
        ...params
    })

    console.log(res);

    // if (res?.error) {
    //     console.error("Error al iniciar sesión:", res.error)
    // } else {
    //     // Redirigir a la página deseada después de un inicio de sesión exitoso
    //     window.location.href = "/dashboard"
    // }
}