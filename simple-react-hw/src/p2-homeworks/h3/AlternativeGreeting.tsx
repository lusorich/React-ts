import React from "react";
import { PurchasesType } from "./HW3";
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Greeting.module.css';

type AlternativeGreetingProps = {
    purchases: Array<PurchasesType>
    plusCount: (id: string) => void
}

const AlternativeGreeting: React.FC<AlternativeGreetingProps> = ({purchases, plusCount}) => {
    return (
        <div>
            <ul>
                {
                    //Вот еще момент, который не очень понял) .map возвращает новый массив
                    //т.е. функция onAddCountCB, будет грубо говоря в одной из ячеек
                    // скажем тип ["const onAddCountCB = () => { plusCount(elem._id) };", "<li></li>"]
                    // как реакт блин понимает что это функция, как он парсит все это, можно где-то почитать про эту штуку, а то 
                    // беглым взглядом не нашел ответ? Ты в сообщениях также сказал что функции не являются разрешенными
                    // поэтому не очень понимаю что тут с функцией происходит)
                    purchases.map(elem => {
                        const onAddCountCB = () => { plusCount(elem._id) };
                        return (
                            <li key={elem._id}>
                                <span>{elem.name}</span>
                                <span className={s.countNumber}>{elem.count}</span>
                                <SuperButton onClick={onAddCountCB}>+</SuperButton>
                            </li>)
                    })
                }
            </ul>

        </div>
    );
}

export default AlternativeGreeting;
