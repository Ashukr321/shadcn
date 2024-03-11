"use client"
import React from 'react'
import ImgCard from './ImgCard'
const AspectRat = () => {
  const imgData = [
    {
      id:1,
      image:"https://cdn.pixabay.com/photo/2024/03/04/16/07/winter-8612635_1280.jpg"
    },
    {
      id:2,
      image:"https://cdn.pixabay.com/photo/2023/04/19/19/45/gosling-7938445_1280.jpg"
    },
    {
      id:3,
      image:"https://cdn.pixabay.com/photo/2023/04/19/19/45/gosling-7938445_1280.jpg"
    }
  ]
  return (
    <div> 
        <div className='flex flex-wrap gap-4 justify-center'>
            {
              imgData.map((item)=>(
                <ImgCard image={item.image}/>
              ))
            }
        </div>
    </div>
  )
}

export default AspectRat