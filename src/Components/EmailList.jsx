import React from 'react';
import "./EmailList.css";
import {Checkbox, IconButton} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleIcon from "@mui/icons-material/People";

import {EmailRow, Section} from './index';

const EmailList = ()=>{
    return(
        <div className="emailList">
            <div className="emailList_setting">
                <div className="emailList_settingLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList_settingRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="emailList-section">
                <Section Icon={InboxIcon} title="Primary" cole="red" selected/>
                <Section Icon={PeopleIcon} title="Social" cole="#1A73E8"/>
                <Section Icon={LocalOfferIcon} title="Promotions" cole="green"/>
            </div>

            <div className="emailList_list">
                <EmailRow
                    title="Testing title"
                    subject="This is Testing the subject"
                    desc="Hey Fellow Peopls how are you"
                    time="10pm"
                />
            </div>

        </div>
    )
}

export default  EmailList;