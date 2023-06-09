import data from '../../countries/data.json'
import Main from './main'

export default function Info(props){
    let pais = data[props.pais]

    // renderizas as bordas dos paises, se existirem
    function bordas(){
        if(pais.borders != null){
            return(
                pais.borders.map(
                    (c)=>
                        <p
                        className='
                        bg-slate-700
                        py-1
                        px-4
                        dark:text-white
                        shadow
                        mx-1
                        rounded
                        '>{c}</p>
                )
            )
        }else{
            return(
                <p className='ml-2'>No Borders</p>
            )
        }
    }

    return(
        <div className='
        absolute
        left-0
        bg-slate-800
        h-full
        w-full
        px-10
        '>
            <button
            className='
            dark:text-white
            shadow
            shadow-black
            py-1
            px-5
            rounded-md
            font-bold
            '>
                Back
            </button>

            <div
            className='
            my-10
            flex
            gap-40
            '>
                <img 
                className="bandeiraInfo"
                src={pais.flag} alt="bandeira" />
            
                <div
                className='
                dark:text-white
                
                '>
                    <div>

                        <h1 className='font-bold text-3xl mb-5'>{pais.name}</h1>

                        <p>Native Name: <span className="dark:text-white/60">{pais.nativeName}</span></p>
                        <p>Polution: <span className="dark:text-white/60">{pais.population}</span></p>
                        <p>Region: <span className="dark:text-white/60">{pais.region}</span></p>
                        <p>Sub Region: <span className="dark:text-white/60">{pais.subregion}</span></p>
                        <p>Capital: <span className="dark:text-white/60">{pais.capital}</span></p>
                    </div>
                        
                    <div>
                        <p>Top Level Domain: <span className="dark:text-white/60">{pais.topLevelDomain}</span></p>
                        <p>Currencies: <span className="dark:text-white/60">{pais.currencies[0].name}</span></p>
                        <p>Language: <span className="dark:text-white/60">{pais.languages[0].name}</span></p>
                    </div>

                    <div
                    className='flex'>
                        <p>Border Countries:</p>

                        {bordas()}
                        {/* {pais.borders} */}
                    </div>
                </div>
            </div>
            {/* {data[props.pais].region} */}
        </div>
    )
}