import HabitDay from './HabitDay'

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const SummaryTable = () => {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, idx) => (
          <div
            key={idx + weekDay}
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
          >
            {weekDay}
          </div>
        ))}
      </div>
      <div className="grid gr grid-rows-3 grid-flow-col gap-3">
        <HabitDay />
      </div>
    </div>
  )
}

export default SummaryTable
