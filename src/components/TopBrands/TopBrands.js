import React from 'react'
import './TopBrands.css'
import Card_sm from '../Cards/Card_sm/Card_sm'
import { DataBrands, DataCAr_XL, DataCard_L, DataCard_L_1, DataCard_L_2, DataCard_L_3} from'../../data/Data'
import { DataProduct} from'../../data/Data'
import Product from '../../pages/Products/Product'
import Card_L from '../Cards/Card_L/Card_L'
import Card_XL from '../Cards/Card_XL/Card_XL'


function TopBrands() {

  return (
    <div className='bg' >
      <div className='section1'>
        <div className='section2'  > 
          <div className='flex' >
            <div className='Card_L_2' >
              {DataCard_L_2.map((item)=>
              <Card_L
              url_img={item.url_img}
              title_img={item.title_img}
              subtitle_1={item.subtitle_1}
              prix={item.prix}
              />)}
            </div>
          
            <div className='Card_L_1' >
              {DataCard_L_1.map((item)=>
              <Card_L
              url_img={item.url_img}
              title={item.title}
              subtitle_1={item.subtitle_1}
              prix={item.prix}
              />)}
            </div>
          </div>
          <div className='flex' >
            <div className='Card_L_3' >
              {DataCard_L_3.map((item)=>
              <Card_L
              title_img={item.title_img}
              url_img={item.url_img}
              subtitle_1={item.subtitle_1}
              prix={item.prix}
              />)}
            </div>
            <div className='Card_L' >
              {DataCard_L.map((item)=>
              <Card_L
              url_img={item.url_img}
              title={item.title}
              subtitle_1={item.subtitle_1}
              prix={item.prix}
              />)}
            </div>
          </div>
        </div>
        <div className='flexR' >
            {DataCAr_XL.map((item)=>
            <Card_XL
            url_img={item.url_img}
            title={item.title}          
            url_img2={item.url_img2}            
            subttle={item.subtitle}
            description={item.description}
            prix={item.prix}
            url_img3={item.url_img3}
            />)}
        </div>

      </div>
      <div className='Product_parent' >
        {DataProduct.map((item)=>
        <Product
        url_img={item.url_img}
        title={item.title}
        subtitle_1={item.subtitle_1}
        subtitle_2={item.subtitle_2}
        subtitle_3={item.subtitle_3}
        subtitle_4={item.subtitle_4}
        subtitle_5={item.subtitle_5}
        />)}
      </div>
      <h2>Top des marques</h2>
      <div className='containert' >
        <div className='card_sm' >
            {DataBrands.map((item)=>
            <Card_sm
              url_img={item.url_img}
              title={item.title}   
              key={item.id}                  
            />)}           
        </div>       
      </div>
    </div>
  )
}
export default TopBrands;