import React from 'react'
import { Badege } from './Client'

const BadegDemo = () => {
  return (
    <>
      <div className="flex w-full flex-wrap gap-3 justify-start space-x-2 ">
      <Badege title={"Badge variant secondary"} variant={"secondary"}/>
      <Badege title={"Badge variant default"} varient ={"default"}/>
      <Badege title={"Badge variant distructive"} varient ={"destructive"}/>
      </div>
     
    </>
  )
}

export default BadegDemo