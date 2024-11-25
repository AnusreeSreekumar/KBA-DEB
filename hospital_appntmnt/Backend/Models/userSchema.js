import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    dbFirstName : {type : String, required : true},
    dbLastName : {type : String, required : true},
    dbAge : {type : String, required : true},
    dbEmail : {type : String, required : true, unique : true},
    dbPassword : {type : String, required : true},
    dbRole : {type : String, required : true}
})

const user = mongoose.model('UserDetails', userSchema)

export {user}