const express = require('express')
const { 
    patchWorkout, getWorkout, getWorkouts, createWorkout, deleteWorkout 
} = require('../controllers/workoutControllers')

const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id', getWorkout)


router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', patchWorkout)


module.exports = router