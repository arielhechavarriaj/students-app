import connectMongoDB from "../../../../../libs/mongodb";
import Student from "../../../../../models/student";
import {NextResponse} from "next/server";

export async function PUT(request, {params}) {
    const {id} = params;
    const {
        newFirst_name: first_name, newLast_name: last_name, newEmail: email, newAge: age, newGrade: grade
    } = await request.json();
    await connectMongoDB();
    await Student.findByIdAndUpdate(id, {first_name, last_name, email, age, grade})
    return NextResponse.json({message: "Student Update"}, {status: 200})
}
export async function GET(request, {params}) {
    const { id } = params;
    await connectMongoDB();
  const student= await Student.findOne({_id:id})
    return NextResponse.json({student}, {status: 200})
}
