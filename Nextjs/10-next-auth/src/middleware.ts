// middleware.ts
import { withAuth } from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: "/login",  // Página personalizada de inicio de sesión
    },
    // Aquí puedes configurar qué rutas proteger
    matcher: ["/dashboard"],  // Solo la ruta "/dashboard" estará protegida
})
