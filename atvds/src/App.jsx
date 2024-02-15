import { useState } from 'react'

import './App.css'
import UserDatails from './assets/components/UserDatails'

function App() {
  const [count, setCount] = useState(0)

  const usuarios =[
    {id:1, nome:"Paulo", idade: 29, Profissão: "Professor"},
    {id:2, nome:"mateus", idade: 23, Profissão: "Aluno"},
    {id:3, nome:"wesly", idade: 22, Profissão: "Aluno"},
    {id:4, nome:"gerfim", idade: 23, Profissão: "Aluno"},
  ];

  return (
    <>
      {usuarios.map(usuario)=> }
      
    </>
  )
}

export default App
