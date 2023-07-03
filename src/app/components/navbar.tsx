// @ts-ignore
import  Link from "next/Link";

import {FcHome} from "react-icons/fc";
import {RxPerson} from "react-icons/rx";
import {BiTask} from "react-icons/bi";
import {BsGithub} from "react-icons/bs";
import {AiTwotoneHome} from "react-icons/ai";
import {inspect} from "util";


export default function Navbar() {
    return ( <div className={'navBar'} >
           <span>
               <Link href="/" style={{textDecoration:'none'}} >
                      <AiTwotoneHome size={24} color={'#375280'} />
                   </Link>
           </span>
            <span>
            {/*<Link href="/about/me" style={{textDecoration:'none', paddingLeft:10+'px'}} ><RxPerson size={24} color={'#375280'}/></Link>*/}
            {/*<Link href="/about/task" style={{textDecoration:'none',  paddingLeft:10+'px'}} ><BiTask size={24} color={'#375280'}/></Link>*/}
            <Link target={'_blank'} href="https://github.com/leiraStudio/students-app" style={{textDecoration:'none', paddingLeft:10+'px'}} ><BsGithub size={24} color={'#375280'}/></Link>
            </span>
    </div>

    )
}