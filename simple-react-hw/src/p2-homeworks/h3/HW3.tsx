import React, { useState } from "react";
import GreetingContainer from "./GreetingContainer";
import AlternativeGreeting from './AlternativeGreeting';
import { v1 } from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

export type PurchasesType = {
    _id: string,
    name: string,
    count: number
}

const defaultPurchases: Array<PurchasesType> = [{
    _id: v1(),
    name: "Mango",
    count: 0
}, {
    _id: v1(),
    name: "Orange",
    count: 0
}, {
    _id: v1(),
    name: "Lemon",
    count: 0
}]

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any
    const [purchases, setPurchases] = useState<Array<PurchasesType>>(defaultPurchases);

    const addUserCallback = (name: string) => { // need to fix any
        // если делаю так, то все норм, count меняется сразу после того как нажали ок в алерте
        const newUser = { _id: v1(), name: name };
        const newUsers = [newUser, ...users];

        // почему если делать так и потом передавать newUsers2 в setUsers, 
        // count не меняется сразу? Т.е. после того как вышел алерт с приветствием и нажали ок,потом надо сделать еще
        // какое-то действие и только тогда count поменяется?
        let newUsers2 = users;
        newUsers2.push({ _id: v1(), name: name });

        setUsers(newUsers); // need to fix
    }

    const plusCount = (id: string) => {
        //Вот еще вопрос, почему не срабатывает перерендер?
        //если смотреть консол лог, то count меняет значение. Но в dom это не попадает
        //И опять-таки если делать через деструктуризацию, то все поменяется сразу, но мне
        //непонятно в чем разница)
        const newPurchases = purchases;
        newPurchases.forEach((purchase) => {
            if (purchase._id === id) {
                purchase.count += 1;
            }
        })
        console.log(newPurchases);
        setPurchases([...newPurchases]);
    }

    return (
        <div>
            <hr />
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback} />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {<AlternativeGreeting purchases={purchases} plusCount={plusCount}/>}
            <hr />
        </div>
    );
}

export default HW3;
