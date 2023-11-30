import { getCharacters, getCharacterImage } from "@/app/data"
import { Card } from "@/components/Card"
import { Container } from "@/components/Container"

export default async function Page() {
  const characters = await getCharacters()

  return (
    <>
      <div className="xl:checker-pattern">
        <Container className="max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-12 py-10 pt-12 xl:py-16 xl:pt-16">
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
