"use client"

import {BsSave} from "react-icons/bs";
import {BiSave} from "react-icons/bi";
import {useState} from "react";
import {useRouter} from "next/navigation";


export default function addStudent() {
const [first_name,setFirstName]=useState("")
const [last_name,setLastName]=useState("")
const [email,setEmail]=useState("")
const [age,setAge]=useState("")
const [grade,setGrade]=useState("")

    const router= useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if(!first_name || !last_name || !email || !age || !grade){
        alert("The form is not complete");
        return;
    }
    try {
       const res= await fetch('http://localhost:3000/api/students',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({first_name , last_name , email , age , grade})
        });
        if (res.ok){
            router.push("/")
        }
        else{
            throw new Error("Failed to create a Student")
        }
    }
    catch (e) {
        console.log(e)
    }


  }
    return (
<div className={'container-form'}>

    <form onSubmit={handleSubmit}>
        <p>Add a new Student!</p>
        <input type="text"
               onChange={(e)=>
                   setFirstName(e.target.value)
               }
               value={first_name}
               placeholder={'Name'}/>
        <input type="text"
               onChange={(e)=>
                   setLastName(e.target.value)
               }
               value={last_name}
               placeholder={'Last Name'}/>
        <input type="email"
               onChange={(e)=>
                   setEmail(e.target.value)
               }
               value={email}

               placeholder={'Email'}/>
        <input type="number"

               onChange={(e)=>
                   setAge(e.target.value)
               }
               value={age}
               min={1} placeholder={'Age'}/>
        <input type="number"
               onChange={(e)=>
                   setGrade(e.target.value)
               }
               value={grade}
               min={1 }  max={12} placeholder={'Grade'}/>
        <button type={"submit"} className={'button-save'}> <BiSave size={32}/></button>

    </form>

</div>


    )

}