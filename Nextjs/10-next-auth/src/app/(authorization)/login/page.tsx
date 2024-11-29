"use server"

import { login } from "@/lib/server-action/index"

const LoginPage = () => {
    return (
        <>
            <h1>Este es el form de login</h1>
            <form method="POST" action={login}>
                <label id="email">
                    email:
                    <input type="email" name="email" id="email" />
                </label>
                <label id="password">
                    password:
                    <input type="password" name="password" id="password" />
                </label>
                <button type="submit">send</button>
            </form>
        </>
    )
}

export default LoginPage