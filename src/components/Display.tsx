import { twMerge } from "tailwind-merge"
import Image from "next/image"
import "@/styles/SlideInAnimation.css"
import "@/styles/FadeInAnimation.css"

interface DisplayProps {
  name: string
  furigana?: string
  imgSrc: string
}

export const Display = ({ name, furigana, imgSrc = "" }: DisplayProps) => {
  return (
    <>
      <div className="mx-auto relative overflow-hidden h-96 w-auto max-w-sm bg-warm-50">
        <div
          className={twMerge(
            "z-50 bottom-12 absolute px-6 py-1",
            "drop-shadow-md shadow-stone-400 bg-stone-700 text-warm-50 tracking-wide",
            "slide-in",
          )}
        >
          <p className="text-xs leading-4">{furigana}</p>
          <p className="font-semibold text-xl leading-none">{name}</p>
        </div>
        <div className="z-40 right-4 bottom-0 absolute h-full max-w-fit flex">
          <Image
            src={imgSrc}
            priority={true}
            quality={100}
            width={1000}
            height={1000}
            alt="bio portrait"
            style={{ width: "100%" }}
            className="object-cover fade-in-slow"
          />
        </div>
        <div className="z-10 -left-40 -top-12 absolute opacity-25 flex">
          <Image
            src={imgSrc}
            priority={true}
            quality={100}
            width={1000}
            height={1000}
            alt="bio portrait focused"
            className="object-fill fade-in"
          />
        </div>
      </div>
    </>
  )
}
