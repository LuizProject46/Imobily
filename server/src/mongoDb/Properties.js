const {Schema,model} = require('mongoose')

const PropertiesModel = new Schema({
    name:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sellType :{
        type: String,
        required: true
    },
    images: [{
        type: Object,
        required: true
    }],
    likes: {
        type: Number,

    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    seller:{
        type: Object,
        //ref: 'User',
        required: true
    },
    location: {
        type: Object,
        required: true

    },
    created_at:{
        type: Date,
        default: Date.now,
        
    }


})


module.exports = model('Properties',PropertiesModel)