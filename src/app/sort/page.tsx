"use client"
import React from "react"
import { getCharacters } from "@/app/data"
import { useAsyncList } from "@react-stately/data"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from "@nextui-org/react"
import { Container } from "@/components/Container"

export default function Page() {
  const [isLoading, setIsLoading] = React.useState(true)

  let list = useAsyncList({
    async load() {
      const characters = await getCharacters()
      setIsLoading(false)
      return {
        items: characters,
      }
    },

    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let key = sortDescriptor.column
          let first = a[key as keyof typeof a]
          let second = b[key as keyof typeof b]

          // 値が設定されていない場合は並び順を後ろにする
          if (first === undefined) {
            return 1
          }
          if (second === undefined) {
            return -1
          }

          let cmp = 0
          if (first < second) {
            cmp = -1
          } else if (first > second) {
            cmp = 1
          }
          if (sortDescriptor.direction === "descending") {
            cmp *= -1
          }
          return cmp
        }),
      }
    },
  })

  return (
    <Container className="max-w-3xl">
      <div className="pt-12 pb-24">
        <Table
          sortDescriptor={list.sortDescriptor}
          onSortChange={list.sort}
          aria-label="探索者ソート"
          aria-sort="ascending"
        >
          <TableHeader>
            <TableColumn key="name">名前</TableColumn>
            <TableColumn allowsSorting key="age">
              年齢(歳)
            </TableColumn>
            <TableColumn allowsSorting key="height">
              身長(cm)
            </TableColumn>
          </TableHeader>
          <TableBody
            items={list.items}
            isLoading={isLoading}
            loadingContent={<Spinner label="読み込み中..." />}
          >
            {(item) => (
              <TableRow key={item.name}>
                {(column) => <TableCell>{getKeyValue(item, column)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Container>
  )
}
