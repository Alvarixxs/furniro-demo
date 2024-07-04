const express = require('express')
const app = express()

const { PORT } = require('./util/config')
const { connectToDatabase } = require('./util/db')

const productsRouter = require('./controllers/products')
const productsInfoRouter = require('./controllers/productsInfo')
const contactsRouter = require('./controllers/contacts')

const middleware = require('./util/middleware')

app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/products', productsRouter)
app.use('/api/productsInfo', productsInfoRouter)
app.use('/api/contacts', contactsRouter)

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