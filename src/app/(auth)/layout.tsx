import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { Poppins } from 'next/font/google';
import Image from "next/image"

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
})

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center ">
          <div className="flex items-center gap-4">
            <Image src="/logo.svg" alt="logo" height={40} width={40} />
            <h1 className={cn("text-4xl font-bold text-[#203557]", font.className)}>Jura</h1>
          </div>
          <Button variant="secondary">
            Sign Up
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  )
}

