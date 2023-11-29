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
            "z-50 absolute bottom-12 px-6 py-1 pb-2",
            "drop-shadow-md shadow-stone-400 bg-stone-700 text-warm-50 tracking-wide",
            "slide-in",
          )}
        >
          <p className="text-xs leading-4">{furigana}</p>
          <p className="font-semibold text-xl leading-none">{name}</p>
        </div>
        <div className="z-40 absolute h-full w-fit right-0 xl:right-4 top-4 xl:top-2 flex">
          <Image
            src={imgSrc}
            priority={true}
            quality={100}
            width={1000}
            height={1000}
            alt="bio portrait"
            style={{ width: "100%", height: "100%" }}
            className="object-contain aspect-auto fade-in-slow"
          />
        </div>
        <div className="z-0 absolute -left-40 -top-12 opacity-25 flex">
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
