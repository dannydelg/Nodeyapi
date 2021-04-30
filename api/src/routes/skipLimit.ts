import { Schema, model} from 'mongoose';


const skipLimit = new Schema({

    skip: {
        type: String,
        trim: true,
  
    },
    limit:{
        type: String,
        trim: true,
   
    },

})

export default model('SkipVideo', skipLimit);