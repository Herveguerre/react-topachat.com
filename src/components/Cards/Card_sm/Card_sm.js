import React from 'react'
import './Card_sm.css'
export default function Card_sm({url_img,title,id}) {
  return (
    <div>
        <div className='card' >
          <img src={url_img} alt={title}/>
          <p>{title}</p> 
        </div>  
    </div>
  )
}
