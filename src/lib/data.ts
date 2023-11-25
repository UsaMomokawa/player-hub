interface Character {
  id: string,
  name: string,
  furigana?: string,
  age?: number,
  birthday?: {
    month: number,
    day: number,
  },
  height?: number,
  memo?: string,
  scenarios?: string[],
}

export async function characters(): Promise<Character[]> {
  const res = await fetch('/characters.json');
  const data = await res.json();
  return data.characters;
}

export async function character(id: string): Promise<Character | undefined> {
  const cs = await characters();
  return cs.find((c) => c.id === id);
}
