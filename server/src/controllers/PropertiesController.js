const Properties = require('../models/Properties')

module.exports = {
    async getAll(req,res){
        try{
            let response = await Properties.getAll();
            if(response.error){
                return res.status(500).send(response)
            }

            return res.status(200).send(response)
        }catch(e){
            return res.status(500).send({error:true,message: 'Failed to get places!'})
        }
    },
    async search(req,res){
        const{ q } = req.query
        try{
            let response = await Properties.search(q)
            if(response.error){
                return res.status(404).send(response)
            }

            return res.status(200).send(response)
        }catch(e){
            return res.status(500).send({error:true,message: 'error!'})
        }
        
    },
    async new(req,res){
        const {name,description,category,sellType,images,likes,tags,seller,location} = req.body
           
        try{
           let response = await Properties.new(name,description,category,sellType,images,likes,tags,seller,location)
           if(response.error){
               return res.status(400).send({message: response.message,status: 400})
           }

           return res.status(response.status).send(response)

        }catch(e){
            
            return res.send({message: 'error to add properties!'})
        }
        
    },
    async update(req,res){
        const {name,description,category,sellType} = req.body
        const {id} = req.params
           
        try{
           let response = await Properties.update(id,name,description,category,sellType)
           if(response.error){
               return res.status(400).send({message: response.message,status: 400})
           }

           return res.status(response.status).send(response)

        }catch(e){
            
            return res.send({message: 'error to update property!'})
        }
    },
    async delete(req,res){
        const {id} = req.params
           
        try{
           let response = await Properties.delete(id)
           if(response.error){
               return res.status(400).send({message: response.message,status: 400})
           }

           return res.status(response.status).send(response)

        }catch(e){
            
            return res.send({message: 'error to delete property!'})
        }
    }
    
}