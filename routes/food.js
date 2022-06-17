'use strict'

const { foodInterface } = require('../models/index')
const express = require('express')
const { FoodModel } = require('../models/index')
const router = express.Router()

router.post('/food', async(request, response) => {
  const food = request.body
  try {
    const newFood = await foodInterface.create(food)
    response.status(200).send(newFood)
  } catch(err) {
    response.status(404).send('Could not create food object')
  }
})

router.get('/food/:id', async(request, response) => {
  const id = request.params.id
  try {
    const selectedFood = await foodInterface.findOne(id)
    response.status(200).send(selectedFood)
  } catch(err) {
    response.status(404).send(`Could not find food with id of: ${id}`)
  }
})

router.get('/food/', async(request, response) => {
  try {
    const allFoods = await foodInterface.findAll({})
    response.status(200).send(allFoods)
  } catch(err) {
    response.status(404).send('Could not find foods')
  }
})

router.put('/food/:id', async(request, response) => {
  const id = request.params.id
  const updatedFood = request.body
  try {
    const selectedFood = await foodInterface.update(id, updatedFood)
    response.status(200).send(selectedFood)
  } catch(err) {
    response.status(404).send(`Could not update food with id of: ${id}`)
  }
})

router.delete('/food/:id', async(request, response) => {
  const id = request.params.id
  try {
    await foodInterface.delete(id)
    response.status(200).send(null)
  } catch(err) {
    response.status(404).send(`Could not delete food item with id ${id}`)
  }
})

module.exports = router;
