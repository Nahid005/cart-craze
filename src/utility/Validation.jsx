import {z} from "zod";

export const signupFormSchema = z.object({
    username: z.string().min(3).max(50)
})