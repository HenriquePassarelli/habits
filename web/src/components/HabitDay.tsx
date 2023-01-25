import HabitInfo from './HabitInfo'

type HabitDayProps = {
  completed: number
}

// violet-500 / 600 / 700
const HabitDay = () => {
  return <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg relative">{/* <HabitInfo /> */}</div>
}

export default HabitDay
