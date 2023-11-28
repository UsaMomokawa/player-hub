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
  return vc ? `https://${vc}` : "http://localhost:3000"
}

export async function fetchCharacters(): Promise<Character[]> {
  try {
    const baseUrl = getBaseUrl()
    console.log('baseUrl:', baseUrl)
    const res = await fetch(baseUrl + "/characters.json")
    const data = await res.json()
    console.log('1!!', data)
    return data.characters
  } catch (e) {
    console.info(e)
    return []
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
