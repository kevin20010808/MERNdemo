require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
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

//connect db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, ()=> {
            console.log('connect to mongodb and listening on port', process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })


