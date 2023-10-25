import type { Metadata } from "next"
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import Providers from "./providers"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { cn } from "@/lib/utils"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers session={session}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
