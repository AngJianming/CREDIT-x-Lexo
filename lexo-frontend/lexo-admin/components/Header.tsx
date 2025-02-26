import React from 'react'
import { BiShield } from 'react-icons/bi'
import Link from 'next/link'
const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BiShield className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Lexo</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/auth/sign-in">
            Login
          </Link>
        </nav>
      </header>
  )
}

export default Header
