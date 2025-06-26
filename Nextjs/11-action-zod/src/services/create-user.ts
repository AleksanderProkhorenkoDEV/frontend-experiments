"use server"

import { FormState } from '@/components/create-form';
import { z } from 'zod'

const schema = z.object({
    name: z.string({
        required_error: "The name is required"
    }).min(3).max(50),
    email: z.string({
        required_error: "The email is required"
    }).email(),
    password: z.string({
        required_error: "The password is required"
    }).min(3).regex(/[A-Za-z][1-9]/g),
    password_confirmation: z.string({
        required_error: "The name is required"
    }).min(3).regex(/[A-Za-z][1-9]/g),

}).refine((data) => {
    data.password === data.password_confirmation
}, {
    message: "Password don't match",
});

export const createUser = async (prevState: FormState | undefined, formData: FormData): Promise<FormState> => {
    const rawData = Object.fromEntries(formData);

    const result = schema.safeParse(rawData);

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        };
    }

    return { errors: undefined };
}