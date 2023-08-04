import { number } from 'prop-types';
import React from 'react';
import {AiOutlineStar, AiFillStar } from 'react-icons/ai'


export function Stars({quantity=1}) {
    const arr = [1,2,3,4,5]

    return (<>
        {arr.map((a, index) => {
            return index < quantity ?  <AiFillStar color='#fff'/> :  <AiOutlineStar color='#fff'/>
        })}
    </>
    );
}

