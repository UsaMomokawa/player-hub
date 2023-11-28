import { fetchCharacters, getCharacterImage } from "@/app/data"
import { Card } from "@/components/Card"

export default async function Page() {
  const characters = await fetchCharacters()

  return (
    <>
      <div className="max-w-xl mx-auto px-6 sm:px-24">
        <div className="grid grid-cols-2 gap-4 my-10 mt-12 xl:my-16 xl:mt-16">
          {characters &&
            characters.map((character) => (
              <Card
                href={`/c/${character.id}`}
                key={character.id}
                label={character.name}
                imgSrc={getCharacterImage(character.id)}
              />
            ))}
        </div>
      </div>
    </>
  )
}
