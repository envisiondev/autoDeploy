const { exec } = require('child_process')
const express = require('express')
const app = express()

app.post('/', (_, res) => {
  exec(`cd "${process.argv.slice(2)}" && git pull && pm2 restart 0`)
  res.sendStatus(200)
})

const port = process.env.PORT || 5028
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
