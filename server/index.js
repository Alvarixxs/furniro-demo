const express = require('express')
const app = express()

const { PORT } = require('./util/config')
const { connectToDatabase } = require('./util/db')

const productsRouter = require('./controllers/products')
const productsInfoRouter = require('./controllers/productsInfo')
const contactsRouter = require('./controllers/contacts')
const newslettersRouter = require('./controllers/newsletters')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

const middleware = require('./util/middleware')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/products', productsRouter)
app.use('/api/productsInfo', productsInfoRouter)
app.use('/api/contact', contactsRouter)
app.use('/api/newsletter', newslettersRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(express.static(__dirname + '/public'));

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()