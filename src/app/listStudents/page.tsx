// @ts-ignore
import Link from "next/Link";


const getUserData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();
}
const getTodosData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return res.json();
}

export default async function ListStudents() {
    const [students, todos] = await Promise.all([getUserData(), getTodosData()]);

    return (

        <div> {students.map((students: any) => {
                return <p> {students.name}</p>;
            })}
            <div>   {todos.map((t: any) => {
                return <p> {t.title}</p>;
            })}
            </div>
        </div>


)
}