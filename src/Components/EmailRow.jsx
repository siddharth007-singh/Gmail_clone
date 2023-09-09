import React from 'react';
import "./EmailRow.css";
import {Checkbox, IconButton} from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";

const EmailRow = ({id, title, subject, desc, time}) => {
    return (
        <div className="emailRow">
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
                <h4>{subject} <span className="emailList_desc">{desc}</span></h4>
            </div>
            <div className="emailRow_description"></div>
        </div>
    )
}

export default EmailRow