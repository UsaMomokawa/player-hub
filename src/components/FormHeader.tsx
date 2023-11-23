import { Button } from "./Button"
import { BackButton } from "./BackButton"

interface HeaderProps {
  onSaveClick?: () => void
  onBackClick?: () => void
}

export const FormHeader = ({ onSaveClick, onBackClick }: HeaderProps) => {
  return (
    <header>
      <div className="sticky flex p-6 gap-4 lg:gap-8 items-center bg-white">
        <BackButton onClick={onBackClick} />
        <Button label="保存する" primary={true} onClick={onSaveClick} />
      </div>
    </header>
  )
}
