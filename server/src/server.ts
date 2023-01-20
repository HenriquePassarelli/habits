import Fastify from "fastify"
import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client"

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)


app.get('/', async () => {
    const habits = await prisma.habit.findMany()
    return habits
})

const PORT = 3333

app.listen({ port: PORT }).then(() => { console.log("Running on port: " + PORT) })