import express from "express"
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

let users = [
    {
        id: 1,
        name: 'Ali khan',
        email: 'ali@example.com',
    }, {
        id: 2,
        name: 'asad',
        email: 'asad@example.com',
    }
]


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})