import React, { useState, useContext } from 'react'
import { Context } from '../context'
import Login from './Login'
import Products from './Products'

export default function Home() {
  const context = useContext(Context)
  return (
    <div>
      {context.auth.email && context.auth.username && context.auth.username ? (
        <Products />
      ) : (
        <Login />
      )}
    </div>
  )
}
