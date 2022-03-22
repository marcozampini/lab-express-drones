const express = require('express')
const router = express.Router()

const droneModel = require('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
  try {
    const drones = await droneModel.find()
    res.render('drones/list', { drones })
  } catch (error) {
    console.log(error)
  }
})

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
})

router.post('/drones/create', async (req, res, next) => {
  try {
    await droneModel.create(req.body)
    res.redirect('/drones')
  } catch (error) {
    console.log(error)
    res.redirect('/drones/create')
  }
})

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
})

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
})

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
})

module.exports = router
