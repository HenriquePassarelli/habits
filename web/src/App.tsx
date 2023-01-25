import { useState } from 'react'
import HabitInfo from './components/HabitInfo'
import Header from './components/Header'
import NewHabit from './components/NewHabit'
import SummaryTable from './components/SummaryTable'
import './styles/global.css'

const App = () => {
  const [isOpenNewHabit, setIsOpenNewHabit] = useState(false)
  return (
    <div className="w-screen h-screen flex justify-center items-center relative select-none">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header openNewHabit={() => setIsOpenNewHabit(true)} />
        <SummaryTable />
      </div>
      <HabitInfo />
      {isOpenNewHabit && <NewHabit closeNewHabit={() => setIsOpenNewHabit(false)} />}
    </div>
  )
}

export default App
