import React from 'react';
import './SendMail.css';
import CloseIcon from "@mui/icons-material/Close";
import {Button} from "@mui/material";

const SendMail = () => {
    return (
        <div className="sendmail">
            <div className="sendmail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendmail_close"/>
            </div>

            <form>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>

                <div className="sendmail_option">
                    <Button>Send</Button>
                </div>
            </form>
        </div>
    );
};

export default SendMail;
