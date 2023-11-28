interface Character {
  id: string
  name: string
  furigana?: string
  age?: number
  birthday?: {
    month: number
    day: number
  }
  height?: number
  memo?: string
  scenarios?: string[]
}

function getBaseUrl(): string {
  const vc = process.env.VERCEL_URL
  console.log("VERCEL_URL", vc)
  return vc ? `https://${vc}` : "http://localhost:3000"
}

export async function fetchCharacters(): Promise<Character[]> {
  try {
    const baseUrl = getBaseUrl()
    const res = await fetch(baseUrl + "/characters.json")
    const data = await res.json()
    return data.characters
  } catch (e) {
    console.error(e)
    throw e
  }
}

export async function fetchCharacterById(
  id: string,
): Promise<Character | undefined> {
  const characters = await fetchCharacters()
  return characters.find((c) => c.id === id)
}

export function getCharacterImage(id: string): string {
  return `/portraits/${id}.png`
}
