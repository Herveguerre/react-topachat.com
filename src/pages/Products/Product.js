import React from 'react'
import './Product.css'
export default function Product({id,url_img,title,subtitle_1,subtitle_2,subtitle_3,subtitle_4,subtitle_5}) {
  return (
    <div className='Product'>
      <div className='img_content' >
        <img src={url_img} alt={title}/>
      </div>     
      <div className='content' >
        <p className='title' >{title}</p>
        <p>{subtitle_1}</p>
        <p>{subtitle_2}</p>
        <p>{subtitle_3}</p>
        <p>{subtitle_4}</p>
        <p>{subtitle_5}</p>        
      </div>         
    </div>
  )
}
