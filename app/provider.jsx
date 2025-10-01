import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

<provider></provider>
function provider({
    children,
    ...props
}) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange

            {...props}>
            <div>{children}</div>
        </NextThemesProvider>
    )
}

export default provider