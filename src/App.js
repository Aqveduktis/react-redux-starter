import React from 'react'
import { Provider } from 'react-redux'
import {createStore} from 'redux'

import rootReducer from './redurcers/rootReducer'
import {Counter} from './components/Counter'


const store = createStore(rootReducer)
export const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
