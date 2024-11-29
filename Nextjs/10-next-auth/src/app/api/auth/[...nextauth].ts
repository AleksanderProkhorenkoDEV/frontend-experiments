import { config } from "@/auth"
import NextAuth from "next-auth"



export default NextAuth(config)  // Aquí usamos las opciones de configuración exportadas
