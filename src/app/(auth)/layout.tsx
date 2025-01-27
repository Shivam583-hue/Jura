"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { Poppins } from 'next/font/google';
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
})

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center ">
          <div className="flex items-center gap-4">
            <Image src="/logo.svg" alt="logo" height={40} width={40} />
            <h1 className={cn("text-4xl font-bold text-[#203557]", font.className)}>Jura</h1>
          </div>
          <Button asChild variant="secondary">
            <Link href={pathname === "/sign-up" ? "/sign-in" : "/sign-up"}>
              {pathname === "/sign-up" ? <span>Log In</span> : <span>Sign Up </span>}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  )
}

