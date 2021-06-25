import React from 'react'

export const CreateTask = () => {
  return(
    <div className="modal visible">
      <span className="close-btn fas fa-times"></span>
      <form id="create-task" autoComplete="off">
        <h2 className="form__heading">New Task</h2>
        <div className="form__content">
          <div className="form__row">
            <span className="field__icon fas fa-tasks"></span>
            <input className="form__field" name="task-description" autoFocus />
            <span className="field__icon field__icon--alert fas fa-info-circle"></span>
          </div>
          <button className="form__btn">Create</button>
        </div>
      </form>
    </div>
  )

}

export default CreateTask
