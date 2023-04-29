const express = require('express')
const router = express.Router()

const org = process.env.ORG

const { services } = require('../models/models')

// Test route and should be ignored
router.get('/test', (req,res) =>{
  getListOfActiveServiceNames();
})


// Route to get list of all services from the services collection from MongoDB
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

// Route to get a list of only active services. This route is used for the event creation page where the user only needs to see active services
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


// POST route to allow the insertion of a new service to MongoDB collection
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



// PUT route to update a service with a given ID and update properties: name, company, description, and/or status
router.put('/update', (req, res, next) => {
  services.findByIdAndUpdate(req.body.data._id , { "name": req.body.data.name , "company": req.body.data.company, "description": req.body.data.description, "status": req.body.data.status} , (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
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