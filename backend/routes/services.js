const express = require('express')
const router = express.Router()

const org = process.env.ORG

const { services } = require('../models/models')


router.get('/all', (req, res, next) => {
    services
      .find({ org: org }, (error, data) => {
        if (error) {
          return next(error)
        } else {
          return res.json(data)
        }
      })
  })


router.post('/add',(req,res, next) =>{
  const newService = req.body
  newService.org = org
  newService.status = false

  services.create(newService, (error, data) => {
    if (error) {
      console.log(error)
      return next(error)
    } else {
      console.log("Success")
      res.json(data)
    }
  })
})

module.exports = router