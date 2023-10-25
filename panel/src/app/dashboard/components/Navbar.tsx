import { NavigationMenuDemo } from "./NavigationMenu"
import Profile from "./Profile"

const Navbar = () => {
  return (
    <header className="fixed top-0 bg-background w-full border-b py-3 px-5 flex justify-between items-center">
      <span className="font-bold text-lg">
        <span className="text-orange-600">Infras</span>
        hub
      </span>
      <NavigationMenuDemo />
      <Profile />
    </header>
  )
}

export default Navbar
