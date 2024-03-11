"use client"
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import AspectRat from "./AspectRat";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
const ImgCard = ({ image }) => {

  useEffect(()=>{
    Aos.init({duration:1200})
  },[])
  return (
    <div className='w-[400px]  rounded-sm' data-aos="zoom-in" >
    <AspectRatio ratio={16/9}>
    <img src={image} className='h-full w-full rounded-3xl' alt="" />

    </AspectRatio>
    </div>
  );
};

export default ImgCard;
