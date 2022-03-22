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

router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const drone = await droneModel.findById(req.params.id)
    res.render('drones/update-form', { drone })
  } catch {
    next()
  }
})

router.post('/drones/:id/edit', async (req, res, next) => {
  try {
    const drone = await droneModel.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/drones')
  } catch {
    res.redirect(`drones/${req.params.id}/edit`)
  }
})

router.post('/drones/:id/delete', async (req, res, next) => {
  try {
    const drone = await droneModel.findByIdAndDelete(req.params.id)
    res.redirect('/drones')
  } catch {
    res.redirect('/drones')
  }
})

module.exports = router
