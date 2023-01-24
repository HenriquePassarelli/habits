import { FormEvent, useState } from 'react'
import { X, Check } from 'phosphor-react'

const WEEK_DAYS_NAME = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

type Props = {
  closeNewHabit: () => void
}

const NewHabit = ({ closeNewHabit }: Props) => {
  const [weekDays, setWeekDays] = useState<number[]>([])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    closeNewHabit()
  }

  const handleWeekDays = (value: number): void => {
    if (weekDays.includes(value)) {
      const filteredData = weekDays.filter((days) => days !== value)
      return setWeekDays(filteredData)
    }
    setWeekDays((prev) => [...prev, value])
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-screen h-screen absolute flex items-center justify-center  backdrop-opacity-20 bg-black/50 "
    >
      <div className="w-[419px] h-[624px] absolute bg-zinc-900 flex flex-col justify-between px-9 py-10 rounded-lg">
        <section className="relative">
          <X size={20} className="absolute right-0 top-[-15px] cursor-pointer" onClick={closeNewHabit} />
          <h1 className="text-4xl font-bold mb-6">New Habit</h1>
        </section>
        <section className="w-full h-[calc(100%-64px)] flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <label htmlFor="habit" className="font-bold">
              What&apos;s the habit?
            </label>
            <input
              type="text"
              id="habit"
              className="w-full h-12 bg-zinc-800 border-none rounded-md px-4 outline-none"
              placeholder="Workout, drink water, etc..."
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold">What&apos;s the habit?</span>
            <ul className="flex flex-col gap-2">
              {WEEK_DAYS_NAME.map((label, idx) => (
                <li
                  key={`${label}_${idx}`}
                  className="flex flex-row gap-3 items-center cursor-pointer"
                  onClick={() => handleWeekDays(idx)}
                >
                  {weekDays.includes(idx) ? (
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <Check size={20} weight="bold" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg" />
                  )}
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <button
          type="submit"
          className="w-full h-12 bg-green-600 rounded-lg flex flex-row items-center justify-center gap-3 font-semibold hover:bg-green-700"
        >
          <Check size={20} weight="bold" />
          Confirm
        </button>
      </div>
    </form>
  )
}

export default NewHabit
