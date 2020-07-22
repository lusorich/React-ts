import React from "react";

type WordsType = Array<string>;

type PropsType = {
    chars: WordsType
}

function AlternativeMessage(props: PropsType) {
    return (
        <div>
            {props.chars.map((char, i) => {
                return (<span key={i}>{char}</span>)
            })}
        </div>
    );
}

export default AlternativeMessage;
