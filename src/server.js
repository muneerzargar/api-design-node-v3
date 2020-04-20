import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { connect } from './utils/db'
import { itemRouter } from './resources/item/item.router'

export const app = express()

// const log = (req, res, next) => {
//   console.log(req.body)
//   next()
// }

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/api/item', itemRouter)

// app.get('/', (req, res) => {
//   console.log('get request')
//   res.send({ message: 'hello express' })
// })

// app.post('/', (req, res) => {
//   console.log(req.body)
//   res.send(req.body)
// })
export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
