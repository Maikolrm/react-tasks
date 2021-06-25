import React, { useState, useContext } from 'react'
import { BtnLoader } from './'
import DispatchContext from '../DispatchContext'
import { login } from '../api'

export const Login = () => {
  const [visible, setVisible] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const dispatch = useContext(DispatchContext)
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setDisabled(true)
      const user = await login('maikol_hernandez_rm@hotmail.com')
      dispatch({ type: 'login', user: user })
    } catch (e) { console.log(e) }
  }
  return(
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h2 className="form__heading">Login</h2>
      {/* CONTENT */}
      <div className="form__content">
        <div className="form__row">
          <span className="field__icon fas fa-envelope"></span>
          <input value="user@demo.com" className="form__field" name="email" readOnly />
        </div>
        <div className="form__row">
        <span className="field__icon fas fa-lock"></span>
          <input value="demo12345678" type={visible ? 'text' : 'password'} className="form__field" name="password" readOnly />
          <span className={"field__icon field__icon--action fas " + (visible ? 'fa-eye-slash' : 'fa-eye')} onClick={() => setVisible(prev => !prev)}></span>
        </div>
        <button disabled={disabled} className="form__btn">{disabled ? <BtnLoader /> : 'Login'}</button>
      </div>
      {/* /CONTENT */}
    </form>
  )
}
