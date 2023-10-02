import React from 'react'
import { useRouter } from 'next/router';

const Elemento = () => {
  const router = useRouter();
  const { id } = router.query

  return (
      <div>
          <h1>Ruta {id}</h1>
      </div>
  );
}


export default Elemento;