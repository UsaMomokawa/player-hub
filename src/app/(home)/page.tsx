import { getCharacters, getCharacterImage } from "@/app/data"
import { Card } from "@/components/Card"

export default function Page() {
  const characters = getCharacters()

  return (
    <>
      <div className="xl:checker-pattern">
        <div className="max-w-xl mx-auto px-6 sm:px-24">
          <div className="grid grid-cols-2 gap-6 xl:gap-12 py-10 pt-12 xl:py-16 xl:pt-16">
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
      </div>
    </>
  )
}
