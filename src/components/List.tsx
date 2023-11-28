import { twMerge } from "tailwind-merge"

interface ListProps {
  label: string
  values?: string[]
}

export const List = ({ label, values, ...props }: ListProps) => {
  return (
    <div className="mx-auto">
      <div
        className={twMerge(
          "px-2 py-3",
          "rounded-t-2xl border-2 border-b-0 border-stone-300",
          "bg-warm-50",
        )}
      >
        <p className="text-center">{label}</p>
      </div>
      <ul
        className={twMerge(
          "px-2 pb-3",
          "rounded-b-2xl border-2 border-t-0 border-stone-300",
        )}
      >
        {values?.map((value) => (
          <li
            key={value}
            className={twMerge("pt-3", "list-none text-center")}
            {...props}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  )
}
