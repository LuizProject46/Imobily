const User = require('../models/User')

module.exports = {
    async signup(req,res){
        const {name,email,password,phone_number,image,type,description} = req.body

        try{
            let response = await User.signup(name,email,password,phone_number,image,type,description)
            
            if(response.error){
                return res.status(response.status).send(response)
            }

            return res.status(200).send(response)
        }catch(e){
          
            return res.status(500).send({error: true,message: 'Error to try signup '})
        }
    },
    async signin(req,res){
        const {email, password} = req.body

        try{    
            let response = await User.signin(email,password)
            console.log(response)
            if(response.error){
                return res.status(response.status).send(response)
            }

            return res.status(response.status).send(response)

        }catch(e){
            console.log(e)
            return res.status(500).send({error: true,message: 'Error to try signin '})
        }
    },
    async update(){},
    async delete(){}
}