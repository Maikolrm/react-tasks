import React, { useState, useEffect, useContext } from 'react'
import { BtnLoader } from './BtnLoader'
import { useImmerReducer } from 'use-immer'
import StateContext from '../StateContext'
import DispatchContext from '../DispatchContext'
import { handleTasks } from '../api'

export const CreateTask = () => {
  const { tasks, toUpdate } = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const initialState = {
    task: { value: '', hasErrors: false },
    disabled: false,
    sendCount: 0
  }
  const reducer = (draft, action) => {
    switch (action.type) {
      case 'set-task':
        const { task } = draft
        task.hasErrors = false
        task.value = action.value
        if (!task.value) task.hasErrors = true
        if (task.value && /[^a-z0-9\s?]/gi.test(task.value)) task.hasErrors = true
        break
      case 'submit':
        if (!draft.task.hasErrors) {
          draft.disabled = true
          draft.sendCount++
        }
    }
  }
  const [state, dispatch] = useImmerReducer(reducer, initialState)
  const handleSubmit = async (e) =>{
    try {
      e.preventDefault()
      dispatch({ type: 'set-task', value: state.task.value.trim() })
      dispatch({ type: 'submit' })
    } catch (e) { console.log(e) }
  }
  // WATCH FOR CHANGES ON TASK TO BE UPDATED
  useEffect(() => {
    if (toUpdate) dispatch({ type: 'set-task', value: toUpdate.description.trim() })
  }, [toUpdate])
  // EVENT TO HIDE FORM
  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) appDispatch({ type: 'show-form', value: false })
    })
  }, [])
  // WATCH FOR CHANGES ON SENDCOUNT
  useEffect(() => {
    if (state.sendCount) {
      const sendRequest = async () => {
        const response = await handleTasks(toUpdate ? 'update' : 'create', tasks, { id: toUpdate ? toUpdate.id : '', description: state.task.value })
        appDispatch({ type: 'set-tasks', tasks: response })
        appDispatch({ type: 'show-form', value: false })
      }
      sendRequest()
    }
  }, [state.sendCount])
  return(
    <div className="modal visible">
      <span className="close-btn fas fa-times" onClick={() => appDispatch({ type: 'show-form' , value: false })}></span>
      <form id="create-task" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="form__heading">{toUpdate ? 'Update' : 'New Task' }</h2>
        <div className="form__content">
          <div className="form__row">
            <span className="field__icon fas fa-tasks"></span>
            <input value={state.task.value} className={"form__field " + (state.task.hasErrors ? 'invalid' : '' )} name="task-description" onChange={e => dispatch({ type: 'set-task', value: e.target.value})} autoFocus />
            <span className="field__icon field__icon--alert fas fa-info-circle"></span>
          </div>
          <button disabled={state.disabled} className="form__btn">{state.disabled ? <BtnLoader /> : toUpdate ? 'Save Changes' : 'Create'}</button>
        </div>
      </form>
    </div>
  )

}
