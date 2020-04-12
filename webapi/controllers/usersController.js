// SIDAN ANVÄNDS EJ

const route = require('express').Router()
const userModel = require('../models/user/userModel')

route.post('/register', userModel.registerUser)
route.post('/login', userModel.loginUser)

module.exports = route

//Authorize Guard
//const auth = require('../guards/authorize')

//route.get('/:id', auth.verifyToken, userModel.getUser)

// route.get('/', userModel.getUsers)

// route.put('/manage/', userModel.updateUser)

// route.get('/:id', userModel.getUser)
// route.put('/:id', userModel.updateUser)
// route.patch('/:id', userModel.updateUser)
// route.delete('/:id', userModel.deleteUser)


