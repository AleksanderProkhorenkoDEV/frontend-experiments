# 📝 Formulario con Validación en Server Action (Next.js + Zod)

Este proyecto incluye una página en Next.js (`page.tsx`) con un formulario controlado y validado usando **Server Actions** y la librería de validación **Zod**. La lógica de validación se realiza completamente del lado del servidor para garantizar mayor seguridad y consistencia.

## 🚀 Tecnologías utilizadas

- [Next.js 15](https://nextjs.org/)
- Server Actions
- [Zod](https://zod.dev/)
- TypeScript

## 📄 Estructura del Formulario

El formulario contiene **4 campos** obligatorios:

1. `name` - Nombre del usuario
2. `email` - Correo electrónico
3. `password` - Contraseña
4. `password_confirmation` - Confirmación de la contraseña

## ✅ Validaciones

Las validaciones se implementan con Zod en el archivo `server action`:

```ts
const schema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(3).regex(/[A-Za-z][1-9]/g),
  password_confirmation: z.string().min(3).regex(/[A-Za-z][1-9]/g),
}).refine((data) => {
  data.password === data.password_confirmation
}, {
  message: "Password don't match",
});


🧪 Cómo probar
Clona el repositorio.

Asegúrate de tener Next.js configurado.

Ejecuta el proyecto con pnpm dev o npm run dev.

Abre el navegador en http://localhost:3000.