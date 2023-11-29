import { Metadata } from "next"
import { Table } from "@/components/ProfileTable"
import { List } from "@/components/List"
import { Display } from "@/components/Display"
import { notFound } from "next/navigation"
import { getCharacterById, getCharacterImage } from "@/app/data"

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const id = params.id
  const character = await getCharacterById(id)

  if (!character) {
    return notFound()
  }

  return {
    title: character.name,
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const character = await getCharacterById(id)

  if (!character) {
    return notFound()
  }

  return (
    <>
      <div className="checker-pattern">
        <Display
          name={character.name}
          furigana={character.furigana}
          imgSrc={getCharacterImage(id)}
        />
      </div>
      <div className="max-w-xl mx-auto px-6 sm:px-24">
        <div className="w-full my-10 mt-12 xl:my-16 xl:mt-16">
          <p>{character.memo}</p>
        </div>
        <div className="grid grid-cols-1 gap-12 xl:gap-16 xl:mt-16">
          <div>
            <Table
              age={character.age}
              height={character.height}
              birthday={character.birthday}
            />
          </div>
          <div>
            <List label="通過シナリオ" values={character.scenarios} />
          </div>
        </div>
        <div className="pb-24" />
      </div>
    </>
  )
}
