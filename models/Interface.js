'use strict'

class interfaceModel {
  constructor(model) {
    this.model = model
  }

  async create(json) {
    try {
      return await this.model.create(json)
    } catch(err) {
      console.error(err)
      return err
    }
  }

  async findOne(id) {
    try {
      return await this.model.findOne({where: { id: id }})
    } catch(err) {
      console.error(err)
      return err
    }
  }

  async findAll() {
    try {
      return await this.model.findAll({})
    } catch(err) {
      console.error(err)
      return err
    }
  }

  async update(id, updatedProperties) {
    try {
      const itemToUpdate = await this.model.findOne({where: { id: id }})
      const updatedItem = await itemToUpdate.update(updatedProperties)
      updatedItem.save()
      return updatedItem
    } catch(err) {
      console.error(err)
      return err
    }
  }

  async delete(id) {
    try {
      return await this.model.destroy({where: { id: id }})
    } catch(err) {
      console.error(err)
      return err
    }
  }
}

module.exports = interfaceModel
