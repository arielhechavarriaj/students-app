import {BsSave} from "react-icons/bs";
import {BiSave} from "react-icons/bi";

export default function addStudent() {
    return (
<div className={'container-form'}>

    <form action="" >
        <p>Add a new Student!</p>
        <input type="text" placeholder={'Name'}/>
        <input type="text" placeholder={'Last Name'}/>
        <input type="email" placeholder={'Last Name'}/>
        <input type="number" min={1} placeholder={'Age'}/>
        <input type="number" min={1 }  max={12} placeholder={'Grade'}/>
        <button className={'button-save'}> <BiSave size={32}/></button>

    </form>

</div>


    )

}