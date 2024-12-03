"use client";

import { signIn } from "next-auth/react";

const Login = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false, // No redirigir automáticamente
        });

        if (res?.error) {
            console.error("Error:", res.error);
        } else if (res?.ok) {
            console.log("Login exitoso");
            window.location.href = "/dashboard"; // Redirige manualmente
        }
    };

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input name="email" type="email" required />
                </label>
                <label>
                    Password:
                    <input name="password" type="password" required />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login