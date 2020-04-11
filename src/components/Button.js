import React from 'react'
import { useDispatch } from "react-redux"



export const Button = () => {
    const dispatch = useDispatch()
    return (<Button onClick={(()=>dispatch({type:"INCREMENT"}))}>Press Me!</Button>)
} 