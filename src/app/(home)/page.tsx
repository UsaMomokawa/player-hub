import { getCharacters, getCharacterImage } from "@/app/data"
import { Card } from "@/components/Card"
import { Container } from "@/components/Container"

export default async function Page() {
  const characters = await getCharacters()

  return (
    <>
      <div className="xl:checker-pattern">
        <Container>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 max-sm:gap-2 xl:gap-12 py-10 pt-12 xl:py-16 xl:pt-16">
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
        </Container>
      </div>
    </>
  )
}
