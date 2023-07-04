

import RemoveBtn from "@/app/components/removeBtn";
import {HiPencilAlt} from "react-icons/hi";
import {router} from "next/client";
import {RiDeleteBin6Fill} from "react-icons/ri";
import {AiOutlineDelete, AiOutlineEdit, AiOutlineUserAdd} from "react-icons/ai";
import {BsDice1, BsGithub, BsSearch} from "react-icons/bs";
import Input
    from "@react-buddy/ide-toolbox/dist/previews/tools-panel/props-edit-table/table-items/table-item/table-item-control/input";
import {CiEdit} from "react-icons/ci";
import {LiaUserEditSolid} from "react-icons/lia";
import EditBtn from "@/app/components/editBtn";
import {BiEdit, BiEditAlt} from "react-icons/bi";
import {FaUserEdit} from "react-icons/fa";
import {MdGroupRemove} from "react-icons/md";
import editStudent from "@/app/students/editStudent/[id]/page";
import Link from "next/link";

const getStudents = async () => {
    try {
       const res= await fetch('http://localhost:3000/api/students',{
            cache:"no-store"
        })

        if(!res.ok){
throw  new Error('Failed to load students')
        }
        return res.json();
    }
    catch (e) {
        console.log("Error loading Students!",e);
    }



}


export default async function StudentsList() {
const students  = await getStudents();

    return (

        <section className={'container-table'}>
            <div className={'menu'}>

                <p>Manage Students</p>

                <div className={'button-container'}>
                    <button className={'delete-button'}>
                        <MdGroupRemove size={24} style={{marginRight:5+'px'}} />
                        Delete</button>

                    <Link className={'add-button'}
                          href={'/students/addStudent'}
                    >
                        <AiOutlineUserAdd size={24}/>
                        Add New Student
                    </Link>
                </div>
            </div>

            <table>
                <thead>
                <tr>
                    <th><input name="select_all" value="1" type="checkbox"/></th>

                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Grade</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>


              {students.map((student:any) => <tr key={student.id}>
                    <th><input name="select_" value="1" type="checkbox" checked={student.selected}/></th>

                        <td>{student.first_name}</td>
                        <td>{student.last_name}</td>
                        <td>{student.email}</td>
                        <td>{student.age}</td>
                        <td>{student.grade}</td>
                        <td>
                            <div className={'button-actions'}>
                                <RemoveBtn id={student._id} />

                                <Link href={`/students/editStudent/${student._id}`} style={{textDecoration:'none', paddingTop:5+'px'}} ><FaUserEdit size={24} color={'#375280'}/></Link>

                            </div>
                        </td>
                    </tr>) }

                </tbody>
            </table>

        </section>

    )
}