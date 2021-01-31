
const UserModel = require('../mongoDb/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
class User {
    async signin(email,password){
        try{
            let response = await UserModel.findOne({email})

            if(response){
                let pass = response.password
               
                console.log(bcrypt.compareSync(password,pass))
                if(bcrypt.compareSync(password,pass)){
                    
                    let token = jwt.sign({
                        _id: response._id,
                        email: response.email,
                        time: Date.now()
                    },process.env.SECRET_JWT)

                    return {error: false,message: 'Success',token,status: 200}

                }else{
                    return {error: true, message: 'Error to authenticate,password is invalid!',status: 400}
                }
               

            }else{
                return {error:true,message: 'Error to authenticate,email is invalid!',status: 400}
            }
        }catch(e){
            return {error: true,message: 'Error to signin!',status: 500}
        }
    }
    async signup(name,email,password,phone_number,image,type,description){
        try{
            let response = await UserModel.findOne({email})
            
            if(response){
                return {error: true,message: 'Email already exist!',status: 401}
            }
          
            let pass = bcrypt.hashSync(password,10)
            if(!pass){
                return {error: true,message: 'Error to set password!',status: 500}

            }else{
                response =  await UserModel.create({
                    name,
                    email,
                    password: pass,
                    phone_number,
                    image,
                    type,
                    description
                })
    
                if(response){
    
                    let token = jwt.sign({
                        _id: response._id,
                        email: response.email,
                        time: Date.now()
                    },process.env.SECRET_JWT)
                    
                    response = {
                        response,
                        token
                    }
    
                    return {error: false,message: 'Success!',status: 200,response}
                }else{
                    return {error: true,message: 'Error to try signup',status: 500}
                }

            }  

        }catch(e){
            console.log(e)
            return {error: true,message: 'Error to try signup',status: 500}
        }
    }
    async update(){}
    async delete(){}
}


module.exports = new User()