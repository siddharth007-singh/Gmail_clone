import React from "react";
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const SideBar = ()=>{
    return(
        <div className=" flex flex-row w-80 px-3 p-4">
            <div className="rounded-full text-white px-3 py-3 cursor-pointer">Compose</div>
        </div>
    )
}

export default SideBar;