const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({mssg:'Get all workouts'})
})

router.get('/:id', (req,res) =>{
    res.json({mssg:'GET a single workouts'})
})


router.post('/',(req,res)=>{
    res.json({mssg:'Post a new workout'})
})

router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete a new workout'})
})

router.patch('/:id',(req,res)=>{
    res.json({mssg:'Patch a new workout'})
})


module.exports = router