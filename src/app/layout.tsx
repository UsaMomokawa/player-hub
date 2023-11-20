import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import { twMerge } from "tailwind-merge"
import "@/styles/globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
})

export const metadata: Metadata = {
  title: "ぷれはぶβ",
  description:
    "ぷれはぶβでは、あなたが作った探索者のプロフィールをひとつのページにまとめて、みんなにシェアできます。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={twMerge(notoSansJP.variable, "font-sans")}>
        {children}
      </body>
    </html>
  )
}
