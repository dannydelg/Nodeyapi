import { Schema, model} from 'mongoose';


const videoSchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: true,
    },
    url:{
        type: String,
        trim: true,
        require: true,
        unique: true

    },
    description: {
        type: String,
        trim: true,
        required: true,
    }
},{
        timestamps: true
});

export default model('Video', videoSchema);