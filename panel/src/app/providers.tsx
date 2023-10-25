"use client"

import { Toaster } from "@/components/ui/toaster"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const Providers: React.FC<{ children: React.ReactNode, session: Session | null }> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        themes={["light", "dark"]}
      >
        {children}
        <Toaster />
      </NextThemesProvider>
    </SessionProvider>
  )
}

export default Providers
