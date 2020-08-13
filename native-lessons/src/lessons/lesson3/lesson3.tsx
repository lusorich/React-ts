// Lesson 3

// https://ru.reactjs.org/docs/handling-events.html
// https://ru.reactjs.org/docs/events.html
// https://developer.mozilla.org/ru/docs/Web/API/Event/currentTarget

import React, {useState} from 'react';
import './lesson3.css';


const Lesson3 = () => {
    const [input, setInput] = useState('');

    const clickBig = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('Big e.target: ', e.target);
        console.log('Big e.currentTarget: ', e.currentTarget);
    };
    const clickMiddle = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('Middle e.target: ', e.target);
        console.log('Middle e.currentTarget: ', e.currentTarget);
    };
    const clickSmall = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('Small e.target: ', e.target);
        console.log('Small e.currentTarget: ', e.currentTarget);
    };

    const setRandomBackground = (e: React.MouseEvent<HTMLDivElement>) => {
        const randomNumber = () => Math.floor(Math.random()*256);
        e.currentTarget.style.backgroundColor=`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    };

    const inputOnChangeEvent = (e:React.FormEvent<HTMLInputElement>) => {};

    const inputOnKeyPressEvent = (e:React.KeyboardEvent<HTMLInputElement>) => {};

    const inputOnKeyDownEvent = (e:React.KeyboardEvent<HTMLInputElement>) => {};

    const inputOnBlureEvent = (e:React.FormEvent) => {}

    return(
        <div>
            <h2>Lesson3</h2>
            <h3>e.targe/currenttarget/preventdefault</h3>
            <div className='big' onClick={clickBig}>
                <div className='middle' onClick={clickMiddle}>
                    <div className='small' onClick={clickSmall}/>
                </div>
            </div>
            <h3>Form tag event</h3>
            <form>
                <p>
                    <input type="text"/>
                </p>
                <p>
                    <textarea cols={30} rows={10}/>
                </p>
                <button type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default Lesson3;