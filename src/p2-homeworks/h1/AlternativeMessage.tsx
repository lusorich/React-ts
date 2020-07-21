import React from "react";

type WordsType = Array<string>;

type PropsType = {
    words: Array<WordsType>
}

function AlternativeMessage(props: PropsType) {
    return (
        <div>
            {props.words.map((word, i) => {
                return (<span key={i}>{word}{" "}</span>)
            })}
        </div>
    );
}

export default AlternativeMessage;
