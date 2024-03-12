 "use client"
 import { Badge } from "./ui/badge"

export   const Badege  = ({title,variant}) => {
  return (
    <div>
      <Badge variant={variant} onClick={() => alert("Badge clicked me")}>{title}</Badge>
    </div>
  )
}

