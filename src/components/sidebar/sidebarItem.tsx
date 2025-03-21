import { Link } from "react-router-dom";



export default function SideBarItem({label, url, category} : {label: string; url: string; category: string}){


    return(
        <>
        <div className="w-full  rounded-sm transition duration-50 hover:text-orange-400 hover:cursor-pointer">
        <Link to={`/${category?.toLowerCase()}/${url}`}><p className="pl-6 mt-4 mb-4 text-start">{label}</p></Link>

        </div>
        <div className="ml-4 mr-7 w-[80%] h-[1px] bg-gray-200 mt-3"></div>
        </>
    )
}
