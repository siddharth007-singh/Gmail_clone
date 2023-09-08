import React from "react";
import AddIcon from '@mui/icons-material/Add';
import {SideBarOption} from './index';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from "@mui/icons-material/Label";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";

const SideBar = ()=>{
    return(
        <div className=" flex flex-row w-80 px-3 p-4">
           <div className="flex-col">
               <div className="bg-gray-700 px-3 py-3 rounded-md text-white cursor-pointer text-center"><AddIcon/> COMPOSE</div>
               <SideBarOption Icon={InboxIcon} tile="Inbox"/>
               <SideBarOption Icon={StarIcon} tile="Started" />
               <SideBarOption Icon={LabelImportantIcon} tile="Important" />
               <SideBarOption Icon={NearMeIcon} tile="Sent" />
               <SideBarOption Icon={NoteIcon} tile="Draft"/>
           </div>
        </div>
    )
}

export default SideBar;