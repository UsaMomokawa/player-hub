import { CharacterSortTable } from "@/components/CharacterSortTable"
import { Container } from "@/components/Container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "探索者ソート",
  description: "年齢や身長の順番で探索者を並び替えることができます",
}

export default function Page() {
  return (
    <Container className="max-w-3xl">
      <div className="pt-12 pb-24">
        <CharacterSortTable />
      </div>
    </Container>
  )
}
