import Link from "next/link"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

interface CardProps {
  href: string
  imgSrc: string
  label: string
  onClick?: () => void
}

export const Card = ({ href, imgSrc = "", label, ...props }: CardProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex flex-col justify-end items-center rounded-lg",
        "drop-shadow-sm",
      )}
      {...props}
    >
      <div
        className={twMerge(
          "relative overflow-hidden h-48 w-36 xl:h-56 xl:w-44 rounded-lg",
          "border-2 border-b-0 border-stone-200",
          "bg-warm-50",
        )}
      >
        <div className="h-full w-full absolute"></div>
        <Image
          src={imgSrc}
          width={250}
          height={250}
          priority={true}
          alt="portrait"
          style={{ width: "100%" }}
          className="object-cover"
        />
      </div>
      <span
        className={twMerge(
          "absolute text-center py-3 w-36 xl:w-44 rounded-b-lg",
          "border-2 border-t-0 border-stone-200",
          "text-stone-800",
          "bg-white",
        )}
      >
        {label}
      </span>
    </Link>
  )
}
