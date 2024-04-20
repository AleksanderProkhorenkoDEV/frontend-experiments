import { registerUser } from "../../../../lib/ServerAction/actions"

const RegisterForm = ( ) => {


    return(
        <form action={registerUser}>
            <label htmlFor="">Display name</label>
            <input type="text" name="display_name"/>
            <label htmlFor="">name*</label>
            <input type="text" name="name"  />
            <label htmlFor="">email*</label>
            <input type="email" name="email"  />
            <label htmlFor="">password*</label>
            <input type="password" name="password" />
            <label htmlFor="">password confirmation*</label>
            <input type="password" name="password_confirmation" />
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm