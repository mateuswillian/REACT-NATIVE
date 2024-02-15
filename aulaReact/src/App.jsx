import { useState } from 'react'

import './App.css'

import MessageState from './assets/components/MessageState'
import ExecuteFunction from './assets/components/ExecuteFunction'

function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState(' ')
  const handleMessage = (msg) => {
     setMessage(msg)
  }
  return (
    <>
      <div>
        
        <MessageState msg= {message} />
        <ExecuteFunction handleMessage={handleMessage}/>
      </div>
      
    </>
  )
}

export default App
