import React, { useContext } from 'react'
import { Context } from '../context'
import { NavLink, Outlet } from 'react-router-dom'
export default function Navbar() {
  const context = useContext(Context)
  const logOut = () => {
    context.setAuth({})
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
  }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Cart Gallery
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-2">
              <li className="nav-item">
                {context.auth.email &&
                context.auth.username &&
                context.auth.username ? (
                  <p className="bg-success rounded-2 text-white m-0 p-2 text-capitalize personal-name">
                    {context.auth.username}
                  </p>
                ) : null}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link p-2" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link p-2" to="favourites">
                  Favourites
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link p-2" to="addproduct">
                  Add Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link p-2" to="addedproducts">
                  My Products
                </NavLink>
              </li>
              {context.auth.email &&
              context.auth.username &&
              context.auth.username ? (
                <li className="nav-item">
                  <button
                    className="btn btn-danger p-2 logout"
                    onClick={logOut}
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <p className="text-danger m-0">You Have To Need to Login</p>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
