'use strict'

const { clothesInterface } = require('../models/index')
const express = require('express')
const router = express.Router()

router.post('/clothes', async(request, response) => {
  const clothes = request.body
  try {
    const newClothes = await clothesInterface.create(clothes)
    response.status(200).send(newClothes)
  } catch(err) {
    response.status(404).send('Could not create clothes object')
  }
})

router.get('/clothes/:id', async(request, response) => {
  const id = request.params.id
  try {
    const selectedClothes = await clothesInterface.findOne(id)
    response.status(200).send(selectedClothes)
  } catch(err) {
    response.status(404).send(`Could not find clothes with id of: ${id}`)
  }
})

router.get('/clothes', async(request, response) => {
  try {
    const allClothes = await clothesInterface.findAll({})
    response.status(200).send(allClothes)
  } catch(err) {
    response.status(404).send('Could not find clothes')
  }
})

router.put('/clothes/:id', async(request, response) => {
  const id = request.params.id
  const newProperties = request.body
  try {
    const updatedClothes = await clothesInterface.update(id, newProperties)
    response.status(200).send(updatedClothes)
  } catch(err) {
    response.status(404).send(`Could not update clothes with id of: ${id}`)
  }
})

router.delete('/clothes/:id', async(request, response) => {
  const id = request.params.id
  try {
    await clothesInterface.delete(id)
    response.status(200).send(null)
  } catch(err) {
    response.status(404).send(`Could not delete clothes item with id ${id}`)
  }
})

module.exports = router;
