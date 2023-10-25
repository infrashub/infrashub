import React from "react"
import Navbar from "./components/Navbar"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mt-16">
        {children}
      </main>
    </>
  )
}

export default Layout
