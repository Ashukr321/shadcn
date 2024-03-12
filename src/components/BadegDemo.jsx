import React from 'react'
import { Badege } from './Client'

const BadegDemo = () => {
  return (
    <>
      <div className="flex w-full space-x-2 justify-center">
      <Badege title={"Badge variant secondary"} variant={"secondary"}/>
      <Badege title={"Badge variant default"} varient ={"default"}/>
      <Badege title={"Badge variant distructive"} varient ={"destructive"}/>
      </div>
     
    </>
  )
}

export default BadegDemo