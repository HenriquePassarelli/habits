import { FastifyInstance } from "fastify"
import dayjs from "dayjs"
import { z } from 'zod'
import { prisma } from "./prisma"

export async function appRoutes(app: FastifyInstance) {
    app.get('/', async () => {
        const habits = await prisma.habit.findMany()
        return habits
    })

    app.post('/habits', async (req, res) => {
        const createHabitBody = z.object({
            title: z.string(),
            weekDays: z.array(z.number().min(0).max(6))
        })
        const { title, weekDays } = createHabitBody.parse(req.body)

        const today = dayjs().startOf('day').toDate()

        await prisma.habit.create({
            data: {
                title,
                created_at: today,
                weekDays: {
                    create: weekDays.map(weekDay => ({ week_day: weekDay }))
                }
            }
        })
    })
}