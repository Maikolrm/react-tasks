import React from 'react'

export const Homepage = () => {
  return(
    <div className="content content--homepage">
      <div className="homepage__top-section">
        <span className="top-section__icon fas fa-tasks"></span>
      </div>
      <form autoComplete="off">
        <h2 className="form__heading">Login</h2>
        {/* CONTENT */}
        <div className="form__content">
          <div className="form__row">
            <span className="field__icon fas fa-envelope"></span>
            <input value="user@demo.com" className="form__field" name="email" readOnly />
          </div>
          <div className="form__row">
          <span className="field__icon fas fa-lock"></span>
            <input value="demo12345678" type='text' className="form__field" name="password" readOnly />
            <span className="field__icon field__icon--action fas fa-eye"></span>
          </div>
          <button className="form__btn">Login</button>
        </div>
        {/* /CONTENT */}
      </form>
    </div>
  )
}

export default Homepage
