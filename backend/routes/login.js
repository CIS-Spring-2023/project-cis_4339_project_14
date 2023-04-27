const bcrypt = require('bcrypt');
const { users } = require('../models/models');
const express = require('express')
const router = express.Router()
const org = process.env.ORG

// backend router that gets username and password as parameters
router.get('/:username/:password', async(req,res) => {
    const username = req.params.username
    const password = req.params.password
    // check if user is in database
    users.findOne({username: username}, async (error, data) => {
        if (error) {
          return next(error)
        }else { // compares passwords
          const result = await bcrypt.compare(password, data.password);

          if(!data || !result){
            res.json({"result": false})
          }
          else{
            res.json({"result": true})
          }

        }
      })

})


module.exports = router