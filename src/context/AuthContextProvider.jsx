import { auth } from "@/service/firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    const [user, setUser] = useState();
    const [isLoading, setIsloading] = useState(false)

    async function signup({email, password}) {
        try {
            setIsloading(true)

            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            if(userCredentials.user) {
                toast.success("The user successfully created")
            }
            setUser(userCredentials.user);
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsloading(false)
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(!user) {
                toast.error("The user could not find")
            }

            setUser(user)
        })

        return () => unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={{signup, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;