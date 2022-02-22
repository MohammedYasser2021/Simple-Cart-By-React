import React, { useState, useContext } from 'react'
import { Context } from '../context'
export default function Products() {
  const context = useContext(Context)
  const favProd = context.FavProd
  let filteredFavProd = favProd.filter((item, index) => {
    return favProd.indexOf(item) === index
  })
  return (
    <div className="container">
      <h1 className="text-center my-4">Favourite Products</h1>
      <div className="row">
        {context.auth.email &&
        context.auth.username &&
        context.auth.username ? (
          filteredFavProd.length ? (
            filteredFavProd.map((prod) => {
              return (
                <div className="col-lg-4 col-md-6 mb-3" key={prod.id}>
                  <div className="card">
                    <img src={prod.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Name: {prod.name}</h5>
                      <h5 className="card-title">Price: {prod.price}</h5>
                      <p className="card-text">{prod.desc}</p>
                      <a
                        href="#"
                        className="btn btn-primary me-2 d-inline-block"
                      >
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <h2 className="text-center text-danger">
              No Favourite Products Choosen
            </h2>
          )
        ) : (
          <h2 className="text-center text-danger">You Need To Login</h2>
        )}
      </div>
    </div>
  )
}
