import React from "react";
import {
  Home,
  ShoppingCart,
  Search,
  Bell,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { logout } from "../services/auth";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const { user } = useAuth();

  return (
    <>
      {/* Top Bar */}

      <div className="bg-orange-50 border-b border-orange-100 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
          <p className="text-gray-700 font-medium">
            🚚 Free Shipping Above ₹999
          </p>

          <div className="hidden md:flex gap-6 text-gray-600">
            <span className="hover:text-orange-500 cursor-pointer">
              Become Seller
            </span>

            <span className="hover:text-orange-500 cursor-pointer">
              Help Center
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}

      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8">

          {/* Logo */}

          <Link to="/" className="shrink-0">

            <div className="flex items-center space-x-3">

              <Home className="w-8 h-8 text-orange-500" />

              <h1 className="group text-2xl font-black tracking-[0.18em] uppercase flex items-center">

                <span className="text-gray-900">ONE</span>

                <span className="bg-gradient-to-b from-orange-300 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  8
                </span>

                <span className="mx-2 text-xl">
                  🏏
                </span>

                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
                  THIRTY
                </span>

                <span className="text-gray-900 ml-1">
                  3
                </span>

              </h1>

            </div>

          </Link>

          {/* Search */}

          <div className="hidden lg:flex flex-1">

            <div className="relative w-full">

              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search Products..."
                className="w-full rounded-full border border-gray-300 bg-gray-50 pl-14 pr-5 py-3 outline-none focus:border-orange-500 focus:bg-white transition"
              />

            </div>

          </div>

          {/* Right */}

          <div className="flex items-center gap-4 ml-auto">

            <button className="hidden md:flex w-11 h-11 rounded-full border border-gray-300 items-center justify-center hover:bg-orange-50 transition">
              <Bell size={20} className="text-gray-700" />
            </button>

            <Link
              to="/cart"
              className="relative w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-orange-50 transition"
            >
              <ShoppingCart size={22} className="text-gray-700" />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/admin"
              className="px-5 py-2.5 rounded-full bg-gray-900 text-white font-semibold hover:bg-orange-500 transition"
            >
              Admin
            </Link>

            {user ? (
              <button
                onClick={logout}
                className="px-5 py-2.5 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition"
              >
                <User size={18} />
                Login
              </Link>
            )}

          </div>

        </div>

      </header>
    </>
  );
};

export default Navbar;