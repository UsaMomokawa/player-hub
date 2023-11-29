'use client';

import { getCharacters, getCharacterImage, Character } from "@/app/data"
import { useAsyncList } from "@react-stately/data"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  // Spinner,
} from "@nextui-org/react"

// interface SortDescriptor {
//   column: string
//   direction: "asc" | "desc"
// }

export default function Page() {
  const characters: Character[] = getCharacters()
  const columns = [
    { key: "name", label: "名前" },
    { key: "age", label: "年齢(歳)" },
    { key: "height", label: "身長(cm)" },
  ]

  return (
    <div className="p-32">
      <Table>
        <TableHeader>
          {columns.map(({ key, label }) => (
            <TableColumn key={key}>{label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {characters.map((character) => (
            <TableRow key={character.id}>
              {(columnKey) => <TableCell>{getKeyValue(character, columnKey)}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
