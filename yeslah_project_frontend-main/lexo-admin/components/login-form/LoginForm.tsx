"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Loader2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 3000)
  }

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-lg bg-white/30 dark:bg-gray-800/30"
  >
    <div className="space-y-2 text-center">
      <h1 className="text-3xl font-bold text-black dark:text-gray-100">Welcome back</h1>
      <p className="text-black dark:text-gray-300">
        Enter your email to sign in to your account
      </p>
    </div>
    <form onSubmit={onSubmit} className="space-y-6 mt-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-black dark:text-gray-200">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            required
            type="email"
            disabled={isLoading}
            className="bg-white/50 dark:bg-gray-700/50 border-transparent focus:border-white dark:focus:border-gray-300"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-black dark:text-gray-200">Password</Label>
          <Input
            id="password"
            required
            type="password"
            disabled={isLoading}
            className="bg-white/50 dark:bg-gray-700/50 border-transparent focus:border-white dark:focus:border-gray-300"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none text-white dark:text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-sm text-blue-300 hover:text-blue-200 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Forgot password?
          </a>
        </div>
      </div>
      <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700" type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
    <div className="mt-6 text-center text-sm text-white dark:text-gray-300">
      Dont have an account?{" "}
      <a
        href="#"
        className="text-blue-300 hover:text-blue-200 dark:text-blue-400 dark:hover:text-blue-300"
      >
        Sign up
      </a>
    </div>
  </motion.div>
  )
}

