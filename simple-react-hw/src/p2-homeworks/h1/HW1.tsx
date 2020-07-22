import React from "react";
import Message from "./Message";
import AlternativeMessage from './AlternativeMessage';

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Eugen",
    message: "Hello my dear friend",
    time: "22:00",
};

const altText = ["H", "e", "l", "l", "o"];

function HW1() {
    return (
        <div>
            <hr />
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            < hr />
            <AlternativeMessage chars={altText} />
            <hr />
        </div>
    );
}

export default HW1;
