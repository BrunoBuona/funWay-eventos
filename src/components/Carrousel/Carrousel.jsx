import React, { useState, useEffect } from 'react'
import './Carrousel.css'

export default function Carrousel() {
    const [position, setPosition] = useState(0)

    let img = [
     'url(https://cdn.firstcry.com/education/2022/12/29111202/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg)',
     'url(https://tinybeans.com/wp-content/uploads/2015/05/boy-hitting-a-pinata-a-fun-birthday-party-game.jpg)',
     'url(https://www.weddingphotographybyliam.com/wp-content/uploads/2018/05/Quince-sweet-16-party-celebration-11.jpg)',
     'url(https://playinginpuddles.com.au/wp-content/uploads/2020/07/Australian-Warrior-Fitness-Kids_OPT-Party.jpg)',
     'url(https://media-api.xogrp.com/images/68d29634-3993-451b-b70c-4cbb50c08b9b)',
    ]

    useEffect(() => {
        let idInterval = setInterval(() => {
            next();
        }, 5000);
        return () => clearInterval(idInterval);
        // eslint-disable-next-line
    }, [position]);

    const next = () => {
        if (position === img.length - 1) {
            setPosition(0)
        } else {
            setPosition(position + 1)
        }
    }

    return (
        <div className='background' style={{ backgroundImage: `${img[position]}` }}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                {
                    img.map((item, index) => {
                    })
                }
            </div>
        </div>
    )
}
