import Image from "next/image"

interface DisplayProps {
  imgSrc: string
}

export const Display = ({ imgSrc = "" }: DisplayProps) => {
  return (
    <>
      <div className="relative overflow-hidden h-96 w-64 bg-warm-50">
        <div className="z-50 bottom-12 absolute px-6 bg-stone-200 text-center">
          <p className="text-xs leading-4">ひすい れむ</p>
          <p className="font-semibold text-lg leading-none">翡翠 玲夢</p>
        </div>
        <div className="z-30 right-0 bottom-0 absolute h-full max-w-fit flex">
          <Image
            src={imgSrc}
            width={0}
            height={0}
            alt="bio portrait"
            style={{ width: "100%" }}
            className="object-cover"
          />
        </div>
        <div className="z-10 -left-40 -top-12 absolute opacity-25 flex">
          <Image
            src={imgSrc}
            width={0}
            height={0}
            alt="bio portrait focused"
            style={{ width: "100%" }}
            className="object-fill"
          />
        </div>
      </div>
    </>
  )
}
