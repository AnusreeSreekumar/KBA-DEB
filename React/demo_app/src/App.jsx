import React from 'react'
import Card from './card'
import Demo from './Demo'

const App = () =>{

  return(

    <>
      <Demo />
      <Card customClasses="bg-yellow-300" />
      <Card customClasses='bg-cyan-400' />
      <Card customClasses='bg-purple-500' />
    </>
  )
}


export default App