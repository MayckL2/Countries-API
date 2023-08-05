import data from '../../countries/data.json'

export default function Info(props){
    let pais = data[props.pais]

    // renderizas as bordas dos paises, se existirem
    function bordas(){

        if(pais.borders != null){
            return(
                <div className='
                flex
                flex-wrap
                gap-2
                justify-center
                '>

                {pais.borders.map(
                    (c)=>
                        <p
                        className='
                        bg-slate-200
                        dark:bg-slate-700
                        py-1
                        px-4
                        dark:text-white
                        shadow
                        mx-1
                        rounded
                        '>{c}</p>
                        )}
                </div>
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
        top-10
        left-0
        pt-20
        bg-slate-100
        dark:bg-slate-800
        w-full
        px-10
        z-10
        '>
            <button
            // fecha o componente info e abre o main
            onClick={props.fecha}
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
            flex-col
            lg:flex-row
            gap-10
            '>
                <img 
                className="bandeiraInfo object-contain lg:object-cover"
                src={pais.flag} alt="bandeira" />
            
                <div
                className='
                dark:text-white
                grid
                grid-cols-1
                grid-rows-4
                md:grid-cols-2
                md:grid-rows-3

                '>
                    <div className='
                    flex
                    flex-col
                    gap-2'>

                        <h1 className='font-bold text-3xl mb-5'>{pais.name}</h1>

                        <p>Native Name: <span className="dark:text-white/60">{pais.nativeName}</span></p>
                        <p>Population: <span className="dark:text-white/60">{pais.population}</span></p>
                        <p>Region: <span className="dark:text-white/60">{pais.region}</span></p>
                        <p>Sub Region: <span className="dark:text-white/60">{pais.subregion}</span></p>
                        <p>Capital: <span className="dark:text-white/60">{pais.capital}</span></p>
                    </div>
                        
                    <div className='
                    flex
                    flex-col
                    gap-2
                    mt-16'>
                        <p>Top Level Domain: <span className="dark:text-white/60">{pais.topLevelDomain}</span></p>
                        <p>Currencies: <span className="dark:text-white/60">{pais.currencies[0].name}</span></p>
                        <p>Language: <span className="dark:text-white/60">{pais.languages[0].name}</span></p>
                    </div>

                    <div
                    className='flex
                    items-start
                    justify-start
                    lg:col-span-2
                    mt-10
                    '>
                        <p className='w-36 text-lg'>Border Countries:</p>

                        {bordas()}

                    </div>
                </div>
            </div>
        </div>
    )
}
