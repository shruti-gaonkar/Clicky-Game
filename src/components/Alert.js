import React from "react";
import { Alert } from 'react-bootstrap';

function AlertMsg(props) {
    return (<Alert variant={props.isShow} className="text-center">
        {props.message}
    </Alert>);
}

export default AlertMsg;