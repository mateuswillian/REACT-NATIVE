import React from 'react'

const ExecuteFunction = ({handleMessage}) => {
    const message = ['Boa noite', 'Boa Tarde', 'bom dia']
  return (
    <div>
        <button type='button' onClick={()=>handleMessage(message[0])}>1</button>
        <button type='button' onClick={()=>handleMessage(message[1])}>2</button>
        <button type='button' onClick={()=>handleMessage(message[2])}>3</button>
    </div>
  )
}

export default ExecuteFunction
