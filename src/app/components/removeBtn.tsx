"use client"
import {HiUserRemove} from "react-icons/hi";
import {useRouter} from "next/navigation";

// @ts-ignore
export default function RemoveBtn({id}) {
    const router = useRouter();
    const removeStudent = async () => {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/students?id=${id}`, {
                method: 'DELETE',
            })
            if (res.ok) {
                router.refresh();
            }
        }


    }


    return (
        <button onClick={removeStudent}>

            <HiUserRemove size={24}/>
        </button>

    )
}