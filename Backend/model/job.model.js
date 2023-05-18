const mongoose = require('mongoose');
const {Schema , model} = mongoose;


const jobSchema = new Schema({
    title : {
        type : String,
        required : true
    } , 
    role : {
        type : String ,
        required : true
    } , 
    company : {
        type : String ,
        required : true
    } ,
    description : {
        type : String ,
        required : true
    } ,
    experience : {
        type : Number , required : true 
    } ,
    location  : {
     type : String , 
     required : true 
    },
  
   
    minSalary : {
        type : Number
    }, 
    maxSalary : {
        type : Number
    }, 
     
   
    jobType : {
        type : String,
        required : true
    },
    status : {
        type : String 
    } , 
    imageUrl : {
        type : String
    },
    skills : {
        type : [String]
    }
    
} 

)

const Job = mongoose.model("jobs" ,jobSchema );
module.exports = Job;
