import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppContext } from '../store/Store'

export const View = () => {
  const [item, setItem] = useState({})
  const params = useParams() ///useParams retorna los parametros que llegan por URL, como el id del libro
  const store = useAppContext()

  useEffect(()=> {
    const book = store.getItem(params.bookId)
    setItem(book)
  }, [])


  return (
    <div>
      <Link to="/">Home</Link>
      <h2>{item.review}</h2>
    </div>
    
  )
}
