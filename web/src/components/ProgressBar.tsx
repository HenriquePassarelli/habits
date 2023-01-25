type Props = {
  value: number
}

const ProgressBar = ({ value }: Props): JSX.Element => {
  return (
    <div className="w-full h-3 min-h-[0.75rem] bg-zinc-700 rounded-lg">
      <div className="h-full bg-violet-600 rounded-lg  " style={{ width: `${value}%`, transition: 'width 1s' }} />
    </div>
  )
}

export default ProgressBar
