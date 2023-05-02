import React from 'react'
import './Card_XL.css'

export default function Card_XL({url_img,url_img2,url_img3,title,subtitle,description,prix}) {
    return (
        <div className='card_xl' >
            <div className='card_xl_1' >
                <img src={url_img} alt={title}/>
                <p className='title' >{title}</p>
            </div>
            <div className='card_xl_flex' >
                <div className='card_xl_2'>
                    <img src={url_img2} alt={title}/>
                </div>
                <div className='card_xl_3'>   
                    <p>{subtitle}</p>
                    <p>{description}</p>
                    <p className='prix' >{prix}</p>
                </div> 
            </div>    
        </div>
    )
}
