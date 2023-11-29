"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useRouter } from "next/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <>
      <Header
        hasBackButton={true}
        onBackClick={() => {
          router.push("/")
        }}
      />
      <main>
        <div className="min-h-screen w-full">{children}</div>
      </main>
      <Footer />
    </>
  )
}
