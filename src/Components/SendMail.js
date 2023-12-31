import React from 'react';
import './SendMail.css';
import CloseIcon from "@mui/icons-material/Close";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {closeSendMessage} from "../features/mailSlice";
import {fStore} from './firebase';
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';


const SendMail = () => {

    const {register, handleSubmit}  = useForm();
    const dispatch = useDispatch();
    const ref = collection(fStore, 'emails');

    const onSubmit = async (formData)=>{
        console.log(formData);
        await addDoc(ref,{
            head:formData.head,
            sub:formData.sub,
            msg:formData.msg,
            timeStamp: serverTimestamp(),
        })
        dispatch(closeSendMessage());
    };

    return (
        <div className="sendmail">
            <div className="sendmail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendmail_close" onClick={()=>dispatch(closeSendMessage())}/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="To : " {...register('head',{required:true})}/>
                {/*<p>{error.head && <p className="sendmail_error">To is required</p>}</p>*/}
                <input type="text" placeholder="Subject : " {...register('sub', {required:true})}/>
                {/*<p>{error.sub && <p className="sendmail_error">Subject is required</p>}</p>*/}
                <input type="text" className="sendmail_message" placeholder="Message : " {...register('msg',{required:true})}/>
                {/*<p>{error.msg && <p className="sendmail_error">Message is required</p>}</p>*/}

                <div className="sendmail_option">
                    <Button className="sendmail_button" variant="contained" type="submit" color="primary" sx={{m:1}}>Send</Button>
                </div>
            </form>
        </div>
    );
};

export default SendMail;


