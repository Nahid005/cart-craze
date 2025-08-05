import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

import { signupformSchema } from "@/utility/Validation"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "@/context/AuthContextProvider"


function SignupForm() {

    const {signup, isLoading} = useContext(AuthContext);

    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(signupformSchema),
        defaultValues: {
            email: "",
            password: "",
            confirm_password: ""
        },
    })
    
    // 2. Define a submit handler.
    function onSubmit({email, password}) {
        signup({email, password})
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md flex  flex-col gap-6 bg-stone-50 p-8 rounded-lg shadow-md">
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="example@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="Confirm password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>

                <Button className="cursor-pointer" type="submit" disabled={isLoading}>{isLoading ? "Loadding.." : "Sign up"}</Button>
                <p>If you have an account please <strong><Link to="/sign-in">Signin</Link></strong></p>
            </form>
        </Form>
    )
}

export default SignupForm;