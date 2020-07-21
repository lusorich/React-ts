import React from "react";
import Message from "./Message";
import AlternativeMessage from './AlternativeMessage';

function HW1() {
    const messageData = {
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Eugen",
        message: "Hello my dear friend",
        time: "22:00",
    };
    const altText = [["Can", "We", "Stay", "Together"], ["Can", "We", "Stay", "Together", "Episode", "2"]];
    return (
        <div>
            <hr />
            homeworks 1
            <Message avatar={messageData.avatar} name={messageData.name} message={messageData.message} time={messageData.time} />
            < hr />
            <AlternativeMessage words={altText}/>
            <hr />
        </div>
    );
}

export default HW1;
