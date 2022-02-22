import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
export default function AddProduct() {
  const context = useContext(Context)
  const addedProduct = context.addedProduct
  const setAddedProduct = context.setAddedProduct
  const allProd = context.allProd
  const setAllProd = context.setAllProd
  const myProducts = context.myProducts
  const setMyProducts = context.setMyProducts
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const [desc, setDesc] = useState('')
  const [id, setId] = useState()
  const [checked, setChecked] = useState(false)

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0]
      setImage(URL.createObjectURL(img))
    }
  }
  useEffect(() => {
    setId(allProd[allProd.length - 1].id + 1)
    setAddedProduct({ id, name, image, price, desc })
  }, [allProd, setAddedProduct, id, name, image, price, desc])

  const addSubmit = (e) => {
    e.preventDefault()
    console.log(id)
    console.log(addedProduct)
    allProd.push(addedProduct)
    setAllProd(allProd)
    console.log(allProd)
    myProducts.push(addedProduct)
    setMyProducts(myProducts)
    setChecked(true)
    alert(`${addedProduct.name} Added Successfully!!`)
  }

  return (
    <form onSubmit={addSubmit}>
      <h1 className="text-center my-4">Add Product</h1>
      <input
        type="text"
        placeholder="Type Your Name"
        className="form-control w-75 m-auto d-block mb-2"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type Your Price"
        className="form-control w-75 m-auto d-block mb-2"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="file"
        className="form-control w-75 m-auto d-block mb-2"
        onChange={onImageChange}
      />
      <textarea
        placeholder="Type Your Message"
        className="form-control w-75 m-auto d-block mb-3"
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button type="submit" className="btn btn-success w-50 d-block m-auto">
        Add Product
      </button>
    </form>
  )
}
