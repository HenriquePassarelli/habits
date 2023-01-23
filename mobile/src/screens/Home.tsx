import { ScrollView, Text, View } from 'react-native'

import { generateDatesFormBeginning } from '../utils/generate-dates-form-beginning'

import HabitDay, { DAY_SIZE } from '../components/HabitDay'
import Header from '../components/Header'

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const datesFromYearStart = generateDatesFormBeginning()
const minimumSummaryDatesSize = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYearStart.length

const Home = () => {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      <View className="flex-row mt-6 mb-2 ">
        {weekDays.map((weekDays, idx) => (
          <Text
            key={`${weekDays}_${idx}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE, height: DAY_SIZE }}
          >
            {weekDays}
          </Text>
        ))}
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map((date) => (
            <HabitDay key={date.toISOString()} />
          ))}
          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, idx) => (
              <View
                key={idx}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
