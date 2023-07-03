import EditStudentForm from "@/app/components/editStudentForm";
import './../../../styles/main.scss'

// @ts-ignore
const getStudentById= async (id)=>{
    try {
        const res= await fetch(`http://localhost:3000/api/students/${id}`,{
            cache:"no-store"
        })
        if(!res.ok){
            throw  new Error('Failed to fetch Students')
        }
        return res.json();
    }
    catch (e) {
        console.log(e)
    }
}


// @ts-ignore
export default async function editStudent({params}) {
const { id }= params;
const {student}=await getStudentById(id);
const { first_name, last_name, email, age, grade}= student;
console.log("id",id)
    return (
        <EditStudentForm  id={id} first_name={first_name}  last_name={last_name}  email={email}
        age={age}  grade={grade}  />)
}