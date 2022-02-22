import React, { useState, useContext } from 'react'
import { Context } from '../context'
export default function AddedProducts() {
  const context = useContext(Context)
  const myProducts = context.myProducts
  console.log(myProducts)
  return (
    <div className="container">
      <h1 className="text-center my-4">My Products</h1>
      <div className="row">
        {context.auth.email &&
        context.auth.username &&
        context.auth.username ? (
          myProducts.length ? (
            myProducts.map((prod) => {
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
                      <button className="btn btn-danger" data-id={prod.id}>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <h2 className="text-center text-danger">No Products For You</h2>
          )
        ) : (
          <h2 className="text-center text-danger">You Need To Login</h2>
        )}
      </div>
    </div>
  )
}
