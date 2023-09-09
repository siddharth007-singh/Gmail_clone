import React from 'react';
import "./EmailRow.css";
import {useNavigate} from 'react-router-dom';
import {Checkbox, IconButton} from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";

const EmailRow = ({id, title, subject, desc, time}) => {

    const navigate = useNavigate();

    return (
        <div className="emailRow" onClick={()=>navigate('/mail')}>
            <div className="emailRow_option">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <div className="emailRow_title">
                {title}
            </div>
            <div className="emailRow_message">
                <h4>{subject}{" "} <span className="emailList_desc">-{desc}</span></h4>
            </div>
            <p className="emailRow_time">{time}</p>
        </div>
    )
}

export default EmailRow