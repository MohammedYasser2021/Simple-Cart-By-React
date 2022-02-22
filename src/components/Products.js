import React, { useState, useContext } from 'react'
import { Context } from '../context'
export default function Products() {
  const context = useContext(Context)

  const AddToFav = (e) => {
    const id = +e.currentTarget.dataset.id
    let theFavouriteProd = context.allProd.find((item) => {
      return item.id === id
    })
    const favProd = [...context.FavProd, theFavouriteProd]
    context.setFavProd(favProd)
  }
  return (
    <div className="container">
      <h1 className="text-center my-4">All Products</h1>
      <div className="row">
        {context.allProd.map((prod) => {
          return (
            <div className="col-lg-4 col-md-6 mb-3" key={prod.id}>
              <div className="card">
                <img src={prod.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Name: {prod.name}</h5>
                  <h5 className="card-title">Price: {prod.price}</h5>
                  <p className="card-text">{prod.desc}</p>
                  <a href="#" className="btn btn-primary me-2 d-inline-block">
                    Details
                  </a>
                  <button
                    className="btn btn-danger"
                    data-id={prod.id}
                    onClick={AddToFav}
                  >
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
