require('dotenv').config()

const express = require('express')
const workoutRouters = require('./routers/workouts')

const app = express()

//middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.get('/',(req, res)=>{
    res.json({mssg:'Welcome to the app'})
})

app.use('/api/workouts',workoutRouters)

//listen for requests
app.listen(process.env.PORT, ()=> {
    console.log('listening on port', process.env.PORT)
})

