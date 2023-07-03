import mongoose,{Schema} from "mongoose";


const studentSchema = new Schema(
    {
        first_name:String,
        last_name:String,
        email:String,
        age:Number,
        grade:Number
    },{
        timestamps:true
    });

    const Student= mongoose.models.Student || mongoose.model("Student",studentSchema);

export default Student;
