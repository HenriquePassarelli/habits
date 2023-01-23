import { Dimensions, TouchableOpacity } from 'react-native'

const WEEKS_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = Dimensions.get('screen').width / WEEKS_DAYS - (SCREEN_HORIZONTAL_PADDING + 5)

const HabitDay = () => {
  return (
    <TouchableOpacity
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
    />
  )
}

export default HabitDay
