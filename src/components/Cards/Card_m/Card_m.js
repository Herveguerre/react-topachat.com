import React from 'react'

export default function Card_m(url_img, title,subtitle_1,subtitle_2,subtitle_3,subtitle_4,subtitle_5,id) {
  return (
    <div className='card_m' >
        <img src={url_img} alt={title}/>
        <p>{title}</p>
        <p>{subtitle_1}</p>
        <p>{subtitle_2}</p>
        <p>{subtitle_3}</p>
        <p>{subtitle_4}</p>
        <p>{subtitle_5}</p>
    </div>
  )
}
