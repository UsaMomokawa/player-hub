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
        <Link href="/home">
          <p>ホーム</p>
        </Link>
        <Link href="/about">
          <p>使い方</p>
        </Link>
        <Link href="https://github.com/UsaMomokawa/player-hub">
          <p>GitHub</p>
        </Link>
      </div>
    </footer>
  )
}
