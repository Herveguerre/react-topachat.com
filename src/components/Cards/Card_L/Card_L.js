import React from 'react'
import './Card_L.css'
export default function Card_L({url_img,title,title_img, prix,id,subtitle_1}) {
    return (
        <div className='card_parent' >
            <div>
                <p className='title_img' >{title_img}</p>
                <img src={url_img} alt={title} />
            </div>
            <div className='card_L' >
                <p>{title}</p>
                <p>{subtitle_1}</p>
                <h3 className='prix'>{prix}</h3>
            </div>
        </div>
    )
}

