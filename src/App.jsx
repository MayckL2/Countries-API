import data from '../countries/data.json'
import Header from './comp/header.jsx'
import Main from './comp/main.jsx'

// importaçao dos paises
// array possuim 249 arrays
let bandeira = data[0].flag
let nomePais = data[0].name
let populacao = data[0].population
let capital =  data[0].capital
let regiao = data[0].region


function App() {

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App

