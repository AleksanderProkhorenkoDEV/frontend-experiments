'use client'

import { createUser } from "@/services"
import { useActionState } from "react"

export interface FormState {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        password_confirmation?: string[];
    };
}

const initialState: FormState = {
    errors: {}
};

export const CreateForm = () => {
    const [state, formAction, pending] = useActionState(createUser, initialState)

    return <form
        action={formAction}
        className="bg-white-400/20 border border-gray-400/40 shadow-lg flex flex-col gap-4 rounded-lg w-[500px] h-fit m-auto p-4 mt-8"
    >
        <section className="w-full flex flex-col items-center">
            <h1 className="font-bold text-2xl">Create your Acount</h1>
            <p className="">This form create your user with a server action, validate your data when is send</p>
        </section>
        <label htmlFor="name" className="flex flex-col gap-2">
            Enter your name
            <input type="text" max={254} inputMode="text" id="name" name="name" placeholder="Enter a valid name" className="border border-gray-400/40 rounded-lg p-2" />
            <p aria-live="polite" className="text-red-400">{state?.errors?.name}</p>
        </label>
        <label htmlFor="email" className="flex flex-col gap-2">
            Enter your email
            <input type="email" max={254} inputMode="email" id="email" name="email" placeholder="Enter a valid email: example@gmail.es" className="border border-gray-400/40 rounded-lg p-2" />
            <p aria-live="polite" className="text-red-400">{state?.errors?.email}</p>
        </label>
        <label htmlFor="password" className="flex flex-col gap-2">
            Enter a password
            <input type="password" max={254} inputMode="text" id="password" name="password" placeholder="Enter a valid password" className="border border-gray-400/40 rounded-lg p-2" />
            <p aria-live="polite" className="text-red-400">{state?.errors?.password}</p>
        </label>
        <label htmlFor="password_confirmation" className="flex flex-col gap-2">
            Confirm your password
            <input type="password" max={254} inputMode="text" id="password_confirmation" name="password_confirmation" placeholder="Repeat the password" className="border border-gray-400/40 rounded-lg p-2" />
            <p aria-live="polite" className="text-red-400">{state?.errors?.password_confirmation}</p>
        </label>

        <button
            className="text-black bg-blue-200 hover:bg-blue-400 ease-in-out duration-300 p-2 rounded-lg uppercase font-bold pointer shadow-mg cursor-pointer tracking-wider"
            disabled={pending}
        >
            {pending ? 'loading...' : 'Sign In'}
        </button>
    </form>
}