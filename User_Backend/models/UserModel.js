import mongoose from 'mongoose' // step1: to load the library

const MERNUser = mongoose.Schema({ // step2: create the schema
    name: {
        type: String,
        required: true // required : true ---> this field is mandatory
    },

    email: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    }
});

export default mongoose.model('MERNUsers', MERNUser); // step3: to create the model