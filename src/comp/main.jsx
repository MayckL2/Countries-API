import { useState } from "react"
import Pais from './pais.jsx'
import lupaClara from '../img/lupaClara.png'
import seta from '../img/seta.png'
import data from '../../countries/data.json'
import mode from './header.jsx'

function Main() {
    const [filter, setFilter] = useState(false)
    const [escRegiao, setEscRegiao] = useState()
    const [pesquisa, setPesquisa] = useState('')

    // mostra e esconde o filtro de regioes
    function mostraFilter() {
        if (filter) {
            document.querySelector("#filter").style.display = "none"
            setFilter(!filter)
        } else {
            document.querySelector("#filter").style.display = "flex"
            setFilter(!filter)
        }
    }

    // importaçao dos paises
    // array possuim 249 arrays
    // let bandeira = data[0].flag
    // let nomePais = data[0].name
    // let populacao = data[0].population
    // let capital = data[0].capital
    // let regiao = data[0].region

    let cont = 0
    // renderiza todos os paises da api dentro de elementos
      const lista=data.map(
        (c)=>

        // filtra por continent
        {if(c.region == escRegiao || escRegiao == null){

            // muda oo nomes pesquisados para lowercase
            let nomePesq = c.name
            nomePesq = nomePesq.toLowerCase()
            let pesq = pesquisa
            pesq = pesq.toLowerCase()

            // filtra por nome pesquisado
            if(nomePesq.match(pesq) == pesq){
            return <div className="
            text-white
            bg-slate-700
            pb-5
            rounded-md
            overflow-hidden
            cursor-pointer
            tamanhoDiv">
            <img
            className="imagemBandeira"
            src={c.flag} alt="" />
            
            <div className="mx-5">
            <h1 className="text-2xl font-bold my-3">{c.name}</h1>
            <h1>Population: <span className="text-white/60">{c.population}</span></h1>
            <h1>Region: <span className="text-white/60">{c.region}</span></h1>
            <h1>Capital: <span className="text-white/60">{c.capital}</span></h1>
            </div>
        </div>
        }else{
            cont ++
            if(cont == 250){
            return <div className="
                                w-full
                                font-bold
                                text-4xl
                                text-center
                                text-white
                                ">
                Pais não encotrado...
            </div>
            }
        }
    }
}
        )

        function mostraLista(){
            if(lista.length == 0){
                return <div className="
                w-full 
                font-bold
                text-4xl
                text-center
                text-white
                ">
                    Pais não encotrado...
                </div>
            }else{
                return lista
            }
        }
        
        return (
            <main className='
            bg-slate-800
            p-10
            '>
            <section className='flex justify-between'>

                {/* input de pesquisa */}
                <div className='
                                bg-slate-700
                                px-5
                                rounded-md
                                flex
                                justify-around
                                w-fit
                                h-10
                                gap-5
                                my-10
                                '>

                    <img
                        className='
                                w-5
                                object-contain
                                '
                        src={lupaClara} alt="" />
                    <input
                        onChange={(e)=> setPesquisa(e.target.value)}
                        className='
                                h-full
                                bg-transparent
                                focus:outline-none
                                text-white
                                text-center
                                '
                        placeholder='Search for a country...'
                        type="text" />
                </div>

                {/* filtro de continentes */}
                <div className='
                            bg-slate-700
                            px-5
                            rounded-md
                            flex
                            justify-around
                            items-center
                            w-fit
                            h-10
                            gap-5
                            my-10
                            relative
                            cursor-pointer
                            '
                    onClick={() => mostraFilter()}
                >

                    <p className='
                                text-white
                                cursor-pointer'>Filter by Region</p>

                    <img
                        className='
                                w-4
                                rotate-90
                                invert'
                        src={seta} alt="seta baixo" />

                    <ul
                        id="filter"

                        className="
                                absolute
                                top-12
                                bg-slate-700
                                rounded-md
                                hidden
                                flex-col
                                overflow-hidden
                                "
                    >
                        <li className='text-start hover:bg-gray-500 px-14 py-2 text-white cursor-pointer' onClick={()=> setEscRegiao(null)}>All</li>
                        <li className='text-start hover:bg-gray-500 px-14 py-2 text-white cursor-pointer' onClick={()=> setEscRegiao('Africa')}>Africa</li>
                        <li className='text-start hover:bg-gray-500 px-14 py-2 text-white cursor-pointer' onClick={()=> setEscRegiao('Americas')}>America</li>
                        <li className='text-start hover:bg-gray-500 px-14 py-2 text-white cursor-pointer' onClick={()=> setEscRegiao('Asia')}>Asia</li>
                        <li className='text-start hover:bg-gray-500 px-14 py-2 text-white cursor-pointer' onClick={()=> setEscRegiao('Oceania')}>Oceania</li>
                        <li className='text-start hover:bg-gray-500 px-14 py-2 text-white cursor-pointer' onClick={()=> setEscRegiao('Europe')}>Europa</li>
                    </ul>
                </div>
            </section>

            {/* lista de paises */}
            <section className="
            flex
            items-center
            justify-around
            flex-wrap
            gap-5
            ">

            {mostraLista()}

{/* <div className="
                w-full 
                font-bold
                text-4xl
                text-center
                text-white
                ">
                    Pais não encotrado...
                </div> */}

            </section>

            {/* mostrar paises por outro componente (falhou) */}
            {/* <Pais
                img={bandeira}
                name={nomePais}
                populacao={populacao}
                regiao={regiao}
                capital={capital}
            /> */}
        </main>
    )
}

export default Main