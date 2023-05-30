import data from '../countries/data.json'
import Header from './comp/header.jsx'
import Main from './comp/main.jsx'
import { useState } from 'react'

// importaçao dos paises
// array possuim 249 arrays
let bandeira = data[0].flag
let nomePais = data[0].name
let populacao = data[0].population
let capital =  data[0].capital
let regiao = data[0].region


function App() {
  const [mode, setMode]= useState(true)

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App

