import { twMerge } from "tailwind-merge"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer>
      <div
        className={twMerge(
          "flex flex-col w-full py-8 justify-center gap-4",
          "bg-warm-50 text-stone-500 text-center",
        )}
      >
        <Link href="/">
          <p>ホーム</p>
        </Link>
        <Link href="/sort">
          <p>探索者ソート</p>
        </Link>
      </div>
    </footer>
  )
}
