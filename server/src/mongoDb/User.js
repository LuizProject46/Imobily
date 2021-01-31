const {Schema,model} = require('mongoose')

const UserModel = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    type :{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        
    },
    posts: [{
        type: Object,
        //ref: 'Properties'
    }]


})



module.exports = model('User',UserModel)