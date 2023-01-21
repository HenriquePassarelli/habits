import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const titles = ['drink 2 liters of water', 'Workout', 'Sleep at least 7h']
const DAY_MILLS = 86400000 // one day  in milliseconds

const weekDays = [
  { week_day: 1 },
  { week_day: 2 },
  { week_day: 3 },
  { week_day: 4 },
  { week_day: 5 },
  { week_day: 6 },
]


async function main() {  
  await prisma.habitsWeekDays.deleteMany()
  await prisma.dayHabit.deleteMany()
  await prisma.day.deleteMany()
  await prisma.habit.deleteMany()

  const habitPromises = titles.map((titles, idx) => prisma.habit.create({
    data: {
      title: titles,
      created_at: new Date(1674268224922 - DAY_MILLS * (idx + 1)),
      weekDays: { // also feeding the related table
        create: weekDays.sort(() => Math.random() - 0.5).splice(0, idx + 1)
      }
    }
  }))

  const habits = await Promise.all(habitPromises)


  const dayPromises = habits.map((habit, idx) => prisma.day.create({
    data: {
      date: new Date(1674268224922 + DAY_MILLS * (idx + 1)),
      dayHabits: {
        create: {
          habit_id: habit.id,
        }
      }
    }
  }))

  await Promise.all(dayPromises)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })