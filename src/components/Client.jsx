 "use client"
 import { useState ,useEffect} from "react"
 import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"

export   const Badege  = ({title,variant}) => {
  return (
    <div>
      <Badge variant={variant} onClick={() => alert("Badge clicked me")}>{title}</Badge>
    </div>
  )
}


export const ProgressBar = ()=>{
  const [progress,setProgress]= useState(40);
   useEffect(()=>{
      const timer = setTimeout(()=>{setProgress(80),500});
      return ()=> clearTimeout(timer);
   },[])
   
  return(
    <>
      <Progress value={progress} />
    </>
  )
}
