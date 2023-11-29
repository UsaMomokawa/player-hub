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
          "z-0 relative h-40 md:h-60 lg:h-72 w-full overflow-hidden rounded-lg",
          "border-2 border-stone-200",
          "bg-warm-50",
        )}
      >
        <span
          className={twMerge(
            "z-30 absolute text-center py-3 px-2 bottom-0 w-full rounded-b-lg",
            "text-stone-800 sm:text-sm md:text-base",
            "bg-white",
          )}
        >
          {label}
        </span>
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
    </Link>
  )
}
