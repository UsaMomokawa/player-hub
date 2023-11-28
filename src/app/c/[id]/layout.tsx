import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div className="min-h-screen w-full">{children}</div>
      </main>
      <Footer />
    </>
  )
}
