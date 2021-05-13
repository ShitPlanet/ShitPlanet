const express = require('express')
const morgan = require('morgan')
const next = require('next')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

;(async () => {
  await app.prepare()
  const server = express()

  server.use(
    morgan(':date[iso] :remote-addr :method :url :status - :response-time ms')
  )

  server.get('*', (req, res) => handle(req, res))

  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()
