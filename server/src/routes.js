const express = require('express')
const router = express.Router()
const PropertiesController = require('./controllers/PropertiesController')
const UserController = require('./controllers/UserController')

//PROPERTIES ROUTES
router.get('/v1/properties',PropertiesController.getAll)
router.get('/v1/search',PropertiesController.search)
router.post('/v1/properties/new',PropertiesController.new)
router.put('/v1/property/edit/:id',PropertiesController.update)
router.post('/v1/property/delete/:id',PropertiesController.delete)


//USER ROUTES
router.post('/v1/signup',UserController.signup)
router.post('/v1/signin',UserController.signin)

module.exports = router