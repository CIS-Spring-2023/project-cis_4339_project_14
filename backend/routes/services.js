const express = require('express')
const router = express.Router()

const org = process.env.ORG

const { services } = require('../models/models')

router.get('/test', (req,res) =>{
  getListOfActiveServiceNames();
})

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


router.get('/active', (req, res) => {
  const dbQuery = { org: org }
  const activeServices = []

  services.find(dbQuery, (error, data) => {
    if (error) {
      console.log(error)
      return next(error)
    } else {
      data.forEach(service => {
        if (service.status === true) {
          activeServices.push(service.name)
        }
      })
      console.log(activeServices)
      return res.json(activeServices)
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


router.put('/update/:id', (req, res, next) => {
  services.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// function getListOfActiveServiceNames() {
//   const dbQuery = { org: org}
//   const activeServices = []
//   services.find(dbQuery, (error, data) => {
//     if (error) {
//       console.log(error)
//       return activeServices
//     } else {
//       data.forEach(service => {
//         if (service.status === true) {
//           activeServices.push(service.name)
//         }
//       })
//       console.log(activeServices)
//     }
//   })

//   return activeServices
// }

module.exports = router