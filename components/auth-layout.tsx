import type React from "react"
import Image from "next/image"
import Link from "next/link"

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/images/background.jpeg"
          alt="Wine being poured into a glass"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="ViniTrack Pro"
                width={300}
                height={100}
                className="mx-auto"
                style={{ background: "transparent" }}
              />
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
