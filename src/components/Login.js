import React, { useState, useContext, useRef, useEffect } from 'react'
import { Context } from '../context'

export default function Login() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const submitRef = useRef()
  const context = useContext(Context)
  useEffect(() => {
    usernameRef.current.focus()
  }, [])
  const onFirstInput = (e) => {
    if (e.key === 'Enter') {
      emailRef.current.focus()
    }
  }
  const onSecondInput = (e) => {
    if (e.key === 'Enter') {
      passwordRef.current.focus()
    }
  }
  const onLastInput = (e) => {
    if (e.key === 'Enter') {
      submitRef.current.focus()
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    context.setAuth({ username, email, password })
    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="my-4 text-center">Login Form</h1>
      <input
        type="text"
        placeholder="Type Your Username"
        className="form-control d-block w-75 m-auto mb-2"
        onChange={(e) => setUsername(e.target.value)}
        ref={usernameRef}
        onKeyDown={onFirstInput}
      />
      <input
        type="email"
        placeholder="Type Your Email"
        className="form-control d-block w-75 m-auto mb-2"
        onChange={(e) => setEmail(e.target.value)}
        ref={emailRef}
        onKeyDown={onSecondInput}
      />
      <input
        type="password"
        placeholder="Type Your Password"
        className="form-control d-block w-75 m-auto mb-2"
        onChange={(e) => setPassword(e.target.value)}
        ref={passwordRef}
        onKeyDown={onLastInput}
      />
      <button
        type="submit"
        className="btn btn-primary w-50 d-block m-auto"
        ref={submitRef}
      >
        Login
      </button>
    </form>
  )
}
