import {z} from "zod";

export const signupformSchema = z.object({
    email: z.string().min(1, {message: "Email is required"}).email({message: "Invalid email address"}),
    password: z.string().min(8, {message: "password must be at last 8 characters"}),
    confirm_password: z.string(),
}).refine((data) => data.password === data.confirm_password, {
    message: "Your password mismatch",
    path: ["confirm_password"] })