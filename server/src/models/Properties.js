
const PropertiesModel = require('../mongoDb/Properties') 
class Properties {
    async getAll(){
        try{
            let response = await PropertiesModel.find();

            return {error:false, message: 'Success!',response}
        }catch(e){
            return {error:true, message: 'error to find places!'}
        }
        
    }
    async search(text){
        try {
            let response = await PropertiesModel.find({
            $or:[
                {name :{
                    $regex: `^${text}$`,
                    $options: 'i'
                }},
                {category :{
                    $regex: `^${text}$`,
                    $options: 'i'
                }},
                {sellType :{
                    $regex: `^${text}$`,
                    $options: 'i'
                }},{
                    description: {
                        $regex: `${text}`,
                        $options: 'i'
                    }
                }
            ]
            
                
            
           
            })
            return {error:false, message: 'Success!',response}
        }catch(e){
            console.log(e)
            return {error:true, message: 'Is not found!'}
        }
    }
    async new(name,description,category,sellType,images,likes,tags,seller,location){
        
        try{
           let response = await PropertiesModel.create({
                name,
                description,
                category,
                sellType,
                images,
                likes,
                tags,
                seller,
                location
            })
           
            if(response){
                return {error: false,message: 'Success!',status: 200,response}
            }else{
                return {error: true}
            }
        }catch(e){
            return {error: true,message: 'Error to try create Properties'}
        }

    }
    async update(_id,name,description,category,sellType){
        try{
            
            let response = await PropertiesModel.findOne({_id})
            if(response){
                response = await PropertiesModel.updateOne({
                    _id
                 },{
                      name,
                      description,
                      category,
                      sellType,
                  
                  })
                 
                 
                return {error: false,message: 'Success!',status: 200}
                  
            }else{
                return {error: true,message: 'Error to update!'}
            }
           
         }catch(e){
             console.log(e)
             return {error: true,message: 'Error to try update Property'}
         }
    }
    async delete(_id){
        try{
            let response = await PropertiesModel.findOne({_id})
            if(response){
                response = await PropertiesModel.deleteOne({
                    _id
                 })
                 
                  if(response){
                      return {error: false,message: 'Success!',status: 200}
                  }
            }else{
                return {error: true, message: 'Error to delete!'}
            }
            
         }catch(e){
             console.log(e)
             return {error: true,message: 'Error to try delete Property'}
         }
    }
}


module.exports = new Properties()