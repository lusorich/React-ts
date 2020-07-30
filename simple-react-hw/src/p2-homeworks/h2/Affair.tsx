import React from "react";
import { AffairType } from "./HW2";
import s from "./Affairs.module.css";


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => { props.deleteAffairCallback(props.affair._id) };// need to fix

    return (
        <div className={s.task}>
            <span className={props.affair.priority === "high" ? `${s.task__title} ${s.task__title_high}` :
                props.affair.priority === "middle" ? `${s.task__title} ${s.task__title_middle}` :
                    props.affair.priority === "low" ? `${s.task__title} ${s.task__title_low}` :
                        `${s.task__title}`}>
                {props.affair.name}
            </span>
            <button className={s.task__btn} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
