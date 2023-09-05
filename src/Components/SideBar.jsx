import React from "react";
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {SideBarOption} from './index';
import InboxIcon from '@mui/icons-material/Inbox';

const SideBar = ()=>{
    return(
        <div className=" flex flex-row w-80 px-3 p-4">
            <Button className="border-amber-300"><AddIcon/>COMPOSE</Button>
            <SideBarOption Icon={InboxIcon} tile="Inbox" number={54}/>
        </div>
    )
}

export default SideBar;