import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './lib/routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

const PORT = 3333

app.listen({ port: PORT }).then(() => {
  console.log('Running on port: ' + PORT)
})
