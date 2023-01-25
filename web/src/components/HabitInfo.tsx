import { useMemo, useState } from 'react'
import CheckboxLi from './CheckboxLi'
import ProgressBar from './ProgressBar'

const tasksList = [
  { id: 'a', title: 'Sleep at least 7h', created_at: '2023-01-18T02:30:24.922Z' },
  { id: 's', title: 'Drink water', created_at: '2023-01-18T02:30:24.922Z' },
  { id: 'd', title: 'Workout', created_at: '2023-01-18T02:30:24.922Z' },
  { id: '02', title: 'Studies', created_at: '2023-01-18T02:30:24.922Z' },
]

const HabitInfo = (): JSX.Element => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([])

  const completeTask = (id: string) => {
    setCompletedTasks((prev) => {
      if (prev.includes(id)) {
        return prev.filter((val) => val !== id)
      }
      return [...prev, id]
    })
  }

  const progress = useMemo(() => {
    const listAmount = tasksList?.length > 0 ? tasksList?.length : 1
    const completedAmount = completedTasks.length

    return (completedAmount / listAmount) * 100
  }, [tasksList, completedTasks])

  console.log(progress)

  return (
    <div className="w-96 h-[22rem] absolute bg-zinc-900 flex flex-col justify-between gap-4 p-6 rounded-lg">
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-base text-zinc-400">Friday</span>
        <h1 className="font-bold text-3xl">03/01</h1>
      </div>
      <ProgressBar value={progress} />
      <ul className="w-full h-full overflow-auto flex flex-col gap-2">
        {tasksList.map((task, idx) => (
          <CheckboxLi
            key={`${task.id}_${idx}`}
            checked={completedTasks.includes(task.id)}
            label={'Test'}
            onClick={() => completeTask(task.id)}
          />
        ))}
      </ul>
    </div>
  )
}

export default HabitInfo
