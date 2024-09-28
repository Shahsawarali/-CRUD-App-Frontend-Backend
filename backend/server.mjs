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

app.get('/users', (req, res) => {
    res.status(200).json({
        message: 'Fetched all users', data:users})
})


app.post('/users', (req, res) => {
    const body = req.body
    const newItem = {
        id:users.length + 1,
        ...body
    }
    users.push(newItem)
    res.status(201).json({
        message: 'Created new user', data:newItem
    })
})



app.put('/users/:id', (req, res) => {
    const id  = parseInt(req.params.id)
    const body = req.body
    const index = users.findIndex(item => item.id === id)
    if (index !== -1) {
        const updatedUser = {
            ...users[index],
            ...body
        }
        users[index] = updatedUser
        res.status(200).json({
            message: 'Updated user', data:updatedUser
        })

    }
    else {
        res.status(404).json({
            message: 'User not found'
        })
    }


})

app.delete('/users/:id', (req, res) => {
    const id  = parseInt(req.params.id)
    const index = users.findIndex(item => item.id === id)
    if (index !== -1) {
        const deletedUser = users.splice(index, 1)
        res.status(200).json({
            message: 'Deleted user', data:deletedUser
        })
    }
    else {
        res.status(404).json({
            message: 'User not found'
        })
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})