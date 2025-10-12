"use client";
import React, { useEffect } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Sidebar } from 'lucide-react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/AppSiderbar'
import { AppHeader } from './_components/AppHeader'
import { useUser } from '@clerk/nextjs'
import { getDoc, setDoc } from 'firebase/firestore';
function Provider({ children, ...props }) {
    const { user } = useUser();
    useEffect(() => {
        if (user) {
            CreateNewUser();
        }

    }, [user])
    const CreateNewUser = async () => {
        //If user exist
        const userRef = doc(db, "users", user?.primaryEmailAddress?.emailAddress);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            console.log('Existing User');
            return;
        } else {
            const userData = {
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress,
                createAt: new Data(),
                remainaingMsg: 20,// Only for Free users
                plan: 'Free',
                credits: 1000//Paid User
            }
            await setDoc(userRef, userData);
            console.log('New User data seved');
        }


        //if Not then insert


    }
    return (

        <NextThemesProvider {...props}
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <SidebarProvider>
                <AppSidebar />


                <div className='w-full ml-8'>
                    <AppHeader />{children}</div>
            </SidebarProvider>
        </NextThemesProvider>
    )

}
export default Provider