import { loginUser } from "../../../../lib/ServerAction/actions"

const LoginForm = () => {
    return (
        <>
            <form action={loginUser}>
                <label htmlFor="">email*</label>
                <input type="email" name="email" />
                <label htmlFor="">password</label>
                <input type="password" name="password" />
                <button type="submit">login</button>
            </form>
        </>
    )
}

export default LoginForm