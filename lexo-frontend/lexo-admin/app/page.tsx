// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, BarChart, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-5 text-center ">
              <div className="space-y-9">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Lexo
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your comprehensive Leg Exo-skeleton dashboard for data management.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="dashboard">Login</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Chatbot</h3>
                <p className="text-gray-500 dark:text-gray-400">
                An AI-powered system that allows users to interact with their data through natural language, asking questions and receiving insights or analysis results in a conversational format
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Lock className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Secure Admin Access</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Robust authentication system for administrators to manage security settings.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Comprehensive dashboards for monitoring and analyzing security events.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
