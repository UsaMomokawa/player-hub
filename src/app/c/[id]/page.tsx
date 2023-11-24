import { Metadata } from "next"
import { Table } from "@/components/ProfileTable"
import { List } from "@/components/List"
import { Display } from "@/components/Display"

export const metadata: Metadata = {
  title: "翡翠 玲夢 | ぷれはぶβ",
}

export default function Page() {
  return (
    <>
      <div className="checker-pattern">
        <Display imgSrc="/sample.png" />
      </div>
      <div className="max-w-xl mx-auto px-6 sm:px-24">
        <div className="w-full my-10 mt-12 xl:my-16 xl:mt-16">
          <p>
            頑固で勝ち気な性格の考古学者。
            運動はあまり得意ではなく、疲れやすい体質。
            規則正しい生活を好み、夜更かしはせず22時に眠る。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 xl:gap-16 xl:mt-16">
          <div>
            <Table age={20} height={153} birthday={{ month: 2, day: 11 }} />
          </div>
          <div>
            <List
              label="通過シナリオ"
              values={["hoge", "fuga", "piyo", "hogehoge"]}
            />
          </div>
        </div>
        <div className="pb-24" />
      </div>
    </>
  )
}
