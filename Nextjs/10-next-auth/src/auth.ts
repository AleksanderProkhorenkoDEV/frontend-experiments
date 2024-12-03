import type {
    GetServerSidePropsContext,
    NextApiRequest,
    NextApiResponse,
} from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)

                console.log('REQUEST', req)

                const res = await fetch("http://localhost:81/api/v1/login", {
                    method: 'POST',
                    body: JSON.stringify({ email: req?.email, password: req?.password }),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
                console.log('USUARIO DESPUES DEL FECTH', user);

                // If no error and we have user data, return it
                if (res.ok && user) {
                    console.log("entro aqui y devolvio el user");
                    return user.user
                }
                console.log('Se ejecuto despues del if')
                // Return null if user data could not be retrieved
                return null
            }
        }),

    ],
    // rest of your config
    pages: {
        signIn: '/auth/login'
    },
    callbacks: {

        async jwt({ token, user }) {
            console.log('DENTRO DE jwt: token', token);
            console.log('DENTRO DE jwt: user', user);
            if (user) {
                token.id = user.id; // Agrega el ID del usuario
                token.email = user.email; // Agrega el email del usuario
            }
            return token; // Retorna el token actualizado
        },
        async session({ session, token }) {
            console.log('DENTRO DE SESSION: SESSION', session);
            console.log('DENTRO DE SESSION: TOKEN', session);
            if (token) {
                session.user = { name: token?.name, email: token?.email }; // Copia los datos del token a la sesión
            }
            return session; // Retorna la sesión actualizada
        },
    }
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(
    ...args:
        | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
        | [NextApiRequest, NextApiResponse]
        | []
) {
    return getServerSession(...args, config)
}