"use client"

import {BiSave} from "react-icons/bi";
import {useState} from "react";
import {useRouter} from "next/navigation";


// @ts-ignore
export default function EditStudentForm({id, first_name, last_name, email, age, grade}) {

    const [newFirst_name, setNewFirstName] = useState(first_name);
    const [newLast_name, setNewLastName] = useState(last_name);
    const [newEmail, setNewEmail] = useState(email);
    const [newAge, setNewAge] = useState(age);
    const [newGrade, setNewGrade] = useState(grade);

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/students/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({newFirst_name, newLast_name, newEmail, newAge, newGrade})
            });
            if (!res.ok) {
                throw new Error("Failed to update Student")
            } else router.push("/")


        } catch (e) {
            console.log(e)
        }


    }

    return (
        <div className={'container-form'}>
            <form onSubmit={handleSubmit}>
                <p>Update Student!</p>
                <input type="text"
                       onChange={(e) => setNewFirstName(e.target.value)}
                       value={newFirst_name}

                       placeholder={'Name'}/>
                <input type="text"

                       onChange={(e) => setNewLastName(e.target.value)}
                       value={newLast_name}
                       placeholder={'Last Name'}/>
                <input type="email"

                       onChange={(e) => setNewEmail(e.target.value)}
                       value={newEmail}

                       placeholder={'Last Name'}/>
                <input type="number"
                       onChange={(e) => setNewAge(e.target.value)}
                       value={newAge}

                       min={1} placeholder={'Age'}/>
                <input type="number"

                       onChange={(e) => setNewGrade(e.target.value)}
                       value={newGrade}


                       min={1} max={12} placeholder={'Grade'}/>
                <button type={"submit"} className={'button-save'}><BiSave size={32}/></button>

            </form>

        </div>
    )

}