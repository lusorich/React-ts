import React, { useState } from 'react';
import Star from './star';


const Raiting = () => {

    let [value, setValue] = useState(4);

    return (
        <div>
            <Star selected={value > 0} value={1} setValue={() => {setValue(1)}} />
            <Star selected={value > 1} value={2} setValue={() => {setValue(2)}} />
            <Star selected={value > 2} value={3} setValue={() => {setValue(3)}} />
            <Star selected={value > 3} value={4} setValue={() => {setValue(4)}} />
            <Star selected={value > 4} value={5} setValue={() => {setValue(5)}} />
        </div>
    )
}

export default Raiting;