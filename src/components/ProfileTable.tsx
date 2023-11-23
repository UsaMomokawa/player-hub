import "@/styles/ProfileTable.css"

interface ProfileTableProps {
  age?: number
  height?: number
  birthday?: { month: number; day: number }
  custom?: Record<string, string>[]
}

export const Table = ({
  age,
  height,
  birthday,
  custom,
  ...props
}: ProfileTableProps) => {
  return (
    <div className="mx-auto my-8 px-4 py-5" {...props}>
      {age && (
        <div className="profile-row">
          <div className="profile-title">
            <p>年齢</p>
          </div>
          <div className="profile-content">
            <p>{age}</p>
          </div>
        </div>
      )}
      {height && (
        <div className="profile-row">
          <div className="profile-title">
            <p>身長</p>
          </div>
          <div className="profile-content">
            <p>{height}cm</p>
          </div>
        </div>
      )}
      {birthday && (
        <div className="profile-row">
          <div className="profile-title">
            <p>誕生日</p>
          </div>
          <div className="profile-content">
            <p>
              {birthday.month}/{birthday.day}
            </p>
          </div>
        </div>
      )}

      {custom?.map(({ key, value }) => (
        <div className="profile-row">
          <div className="profile-title">
            <p>{key}</p>
          </div>
          <div className="profile-content">
            <p>{value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
