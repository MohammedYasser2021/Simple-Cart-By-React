import React, { createContext, useState, useEffect } from 'react'
import ProductsJson from './json/products.json'
export const Context = createContext()
export default function ContextProvider(props) {
  const [auth, setAuth] = useState({})
  const [allProd, setAllProd] = useState([...ProductsJson])
  const [FavProd, setFavProd] = useState([])
  const [addedProduct, setAddedProduct] = useState({})
  const [myProducts, setMyProducts] = useState([])
  useEffect(() => {
    const username = localStorage.getItem('username')
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')

    if (username && email && password) {
      setAuth({ username, email, password })
    }
  }, [])

  return (
    <Context.Provider
      value={{
        auth,
        setAuth,
        allProd,
        setAllProd,
        FavProd,
        setFavProd,
        addedProduct,
        setAddedProduct,
        myProducts,
        setMyProducts,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
