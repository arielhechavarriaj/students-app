// @ts-ignore
import Link from "next/Link";
import RemoveBtn from "@/app/components/removeBtn";
import {HiPencilAlt} from "react-icons/hi";
import {router} from "next/client";
import {RiDeleteBin6Fill} from "react-icons/ri";
import {AiOutlineDelete, AiOutlineEdit, AiOutlineUserAdd} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import Input
    from "@react-buddy/ide-toolbox/dist/previews/tools-panel/props-edit-table/table-items/table-item/table-item-control/input";
import {CiEdit} from "react-icons/ci";
import {LiaUserEditSolid} from "react-icons/lia";
import EditBtn from "@/app/components/editBtn";

export default function StudentsList() {
    let data: any[] = [{
        id: 0,
        first_name: 'joe',
        last_name: 'frext',
        email: 'joeFrext@gmail.comjoeFrext@gmail.com',
        age: '25',
        grade: '1st',
    },];


    // @ts-ignore
    return (<section className={'container-table'}>
            <div className={'menu'}>

                <p>Manage Students</p>

                <div className={'button-container'}>
                    <button className={'delete-button'}>
                        <AiOutlineDelete size={24} />
                        Delete</button>

                    <button className={'add-button'}
                    >
                        <AiOutlineUserAdd size={24}/>
                        Add New Student
                    </button>
                </div>
            </div>

            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Grade</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {data.map((student) => (<tr key={student.id}>
                        <td>{student.first_name}</td>
                        <td>{student.last_name}</td>
                        <td>{student.email}</td>
                        <td>{student.age}</td>
                        <td>{student.grade}</td>
                        <td>
                            <div className={'button-actions'}>
                                <RemoveBtn/>
                            <EditBtn/>
                            </div>
                        </td>
                    </tr>))}
                </tbody>
            </table>

        </section>

    )
}