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
          "z-0 relative h-60 md:h-80 min-h-fit w-full overflow-hidden rounded-lg",
          "border-2 border-b-0 border-stone-200",
          "bg-warm-50",
        )}
      >
        <div className="z-10 absolute h-fit w-full"></div>
        <Image
          src={imgSrc}
          width={250}
          height={250}
          priority={true}
          alt="portrait"
          style={{ width: "100%" }}
          className="z-20 object-cover"
        />
      </div>
      <span
        className={twMerge(
          "z-30 absolute text-center py-3 w-full rounded-b-lg",
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
