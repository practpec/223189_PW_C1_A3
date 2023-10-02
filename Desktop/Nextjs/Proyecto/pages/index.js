import React from 'react'
import {useRouter} from "next/router"
import Main from '../components/Main'

const Home = () => {
    const router = useRouter()
  return (
   
    <div className="contenedor"> 
      <Main></Main>
    
        {router.query.id}
    </div>
  )
}


export default Home;