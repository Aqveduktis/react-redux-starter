import React from 'react'
import { useSelector, useDispatch } from 'react-redux'



export const Counter = () => {
    const dispatch = useDispatch()
  const count = useSelector(state => state.count)
  return (<div>
      <h1>{count}</h1>
  <button onClick={(()=>dispatch({type:"INCREMENT"}))}>Press Me!</button>
  </div>)
}