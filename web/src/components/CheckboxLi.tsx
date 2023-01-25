import { Check } from 'phosphor-react'

type Props = {
  checked: boolean
  label: string
  onClick: () => void
}

const CheckboxLi = ({ checked, label, onClick }: Props): JSX.Element => {
  return (
    <li className="flex flex-row gap-3 items-center cursor-pointer" onClick={onClick}>
      {checked ? (
        <div className="w-8 h-8 min-w-[2rem] bg-green-500 rounded-lg flex items-center justify-center">
          <Check size={20} weight="bold" />
        </div>
      ) : (
        <div className="w-8 h-8 min-w-[2rem] bg-zinc-900 border-2 border-zinc-800 rounded-lg" />
      )}
      <span className="truncate">{label}</span>
    </li>
  )
}

export default CheckboxLi
