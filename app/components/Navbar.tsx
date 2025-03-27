import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold hover:text-green-200">
        MyApp
      </Link>

      {/* Navigation Links */}
      <div className="space-x-4">
        <Link href="/" className="hover:text-green-200">
          Home
        </Link>
        <Link href="/about" className="hover:text-green-200">
          About
        </Link>
        <Link href="/dashboard" className="hover:text-green-200">
          Dashboard
        </Link>
      </div>

      {/* Auth Section */}
      <div>
        {/* When User is Signed Out */}
        <SignedOut>
          <SignInButton>
            <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-green-100">
              Sign In
            </button>
          </SignInButton>

          <SignUpButton>
            <button className="bg-white text-green-600 px-4 py-2 rounded ml-2 hover:bg-green-100">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        {/* When User is Signed In */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
