import React, {useEffect, useState} from 'react';
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
import {fStore} from "./firebase";
import {collection, getDocs} from 'firebase/firestore';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectedMail} from "../features/mailSlice";



const EmailList = ({id, head, sub, msg})=>{

    const [email, setEmail] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const connection = collection(fStore, "emails");

    useEffect(() => {
        const getData = async ()=>{
            const dbValue = await getDocs(connection);
            setEmail(dbValue.docs.map(doc=>({...doc.data(), id:doc.id})))
        }
        getData();
    }, [connection]);

    //id, head, sub, msg are payload here in selectmsg;
    const OpenMail =()=>{
        dispatch(
            selectedMail({
                id,
                head,
                sub,
                msg,
            })
        )
        navigate('/mail');
    }
    return(
        <div className="emailList" onClick={OpenMail}>
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
                {email.map(val=>(
                    <EmailRow key={val.id}
                        title={val.head}
                        subject={val.sub}
                        desc={val.msg}
                        time={val.timestamp}
                    />
                ))}
            </div>

        </div>
    )
}

export default  EmailList;