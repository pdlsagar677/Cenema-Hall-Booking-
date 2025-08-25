import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Search, TicketPlus } from "lucide-react"
import { useClerk, useUser, UserButton } from "@clerk/clerk-react"

const Navbar = () => {
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate(); // ✅ FIXED

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-primary">
        <Link to="/">MyCinema</Link>
      </div>

      {/* Center Navigation */}
      <div className="hidden md:flex gap-6 text-lg">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/movies" className="hover:text-primary">Movies</Link>
        <Link to="/theaters" className="hover:text-primary">Theaters</Link>
        <Link to="/releases" className="hover:text-primary">Releases</Link>
        <Link to="/favourite" className="hover:text-primary">Favourites</Link>
      </div>

      {/* Right side: Search + Login */}
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="flex items-center bg-gray-800 rounded-lg px-3 py-1">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm px-2 text-white placeholder-gray-400"
          />
        </div>

        {/* Login / User button */}
        {!user ? (
          <button
            onClick={() => openSignIn()}
            className="bg-primary px-4 py-2 rounded-xl hover:bg-primary-dull transition"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/mybookings")} // ✅ FIXED
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>
    </nav>
  )
}

export default Navbar
