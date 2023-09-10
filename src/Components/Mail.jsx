import React from 'react';
import "./Mail.css";
import {IconButton} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorIcon from "@mui/icons-material/Error";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PrintIcon from "@mui/icons-material/Print";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

import {useNavigate} from "react-router-dom";


const Mail = ()=>{
    const navigate = useNavigate();


    return(
        <div className="mail">
            <div className="mail_tools">
                <div className="mailTool_Left">
                    <IconButton onClick={()=>navigate('/')}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>
                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <EmailIcon/>
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon/>
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="mailTool_Right">
                    <IconButton>
                        <UnfoldMoreIcon/>
                    </IconButton>
                    <IconButton>
                        <PrintIcon/>
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="mail_body">
                <div className="mailBody_head">
                    <h2>Subject</h2>
                    <LabelImportantIcon className="mail_important"/>
                    <p>Title</p>
                    <p className="mail_time">10 pm</p>
                </div>

                <div className="mail_message">
                    This is a message for Testing
                </div>
            </div>
        </div>
    )
}

export default  Mail;