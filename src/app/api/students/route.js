import connectMongoDB from "../../../../libs/mongodb";
import Student from "../../../../models/student";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {first_name, last_name, email, age, grade} = await request.json();
    await connectMongoDB();
    await Student.create({first_name, last_name, email, age, grade});
    return NextResponse.json({
        message: "Student Created"
    }, {status: 201})

}
export async function GET(request) {
   await connectMongoDB();
   const students= await Student.find();
    return NextResponse.json(students)

}
export async function DELETE(request) {

   const id= request.nextUrl.searchParams.get("id");
   console.log("el id",id)
    await connectMongoDB();
 await Student.findByIdAndDelete(id);
    return NextResponse.json({message:"Student Delete"},{status:200})

}
